// ────────────────────────────────────────────────────────────
//  EMM trenér – jednoduchý spaced-repetition flashcard quiz
// ────────────────────────────────────────────────────────────

const STORE_KEY = 'emm-trainer-v1';
const CARDS_PER_LEVEL = 5;      // kolik otázek se vyzkouší v jednom kole
const HEARTS_PER_LEVEL = 3;

const state = load();

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  // čerstvý profil
  return {
    xp: 0,
    streak: 0,
    lastPlayDay: null,
    topics: Object.fromEntries(TOPICS.map(t => [t.id, {
      level: 1,                                  // číslo levelu (1..5)
      bestScore: 0,                              // nejlepší výsledek (správné/celkem v %)
      attempts: 0,
      completed: false,
      mastery: Object.fromEntries(t.questions.map((_, i) => [i, 0]))
      //         skóre 0 = nikdy zodpovězeno, 1 = částečně, 2 = uměl
    }])),
  };
}

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function tickStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastPlayDay === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastPlayDay === yesterday) ? state.streak + 1 : 1;
  state.lastPlayDay = today;
  save();
}

// ─── UI render ────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

function renderTopBar() {
  $('xpVal').textContent = state.xp;
  $('streakVal').textContent = state.streak;
}

function renderHome() {
  renderTopBar();
  const grid = $('tilesGrid');
  grid.innerHTML = '';
  const done = TOPICS.filter(t => state.topics[t.id].completed).length;
  $('doneOf').textContent = `${done} z ${TOPICS.length}`;

  TOPICS.forEach(topic => {
    const s = state.topics[topic.id];
    const total = topic.questions.length;
    const mastered = Object.values(s.mastery).filter(v => v === 2).length;
    const progressPct = Math.round((mastered / total) * 100);

    const card = document.createElement('div');
    card.className = 'tile';
    card.innerHTML = `
      <div class="banner" style="background:linear-gradient(135deg, ${topic.color}, ${shade(topic.color, -20)})">
        ${s.completed ? '<span class="done">✓ hotovo</span>' : ''}
        <span>${topic.short}</span>
        <span class="level-pill">L${s.level} • ${total} otázek</span>
      </div>
      <div class="body">
        <h3>${topic.title}</h3>
        <div class="meta">
          <span>${total} otázek</span>
          <span>nejlepší: ${s.bestScore}%</span>
          <span>uměl jsem: ${mastered}/${total}</span>
        </div>
        <div class="bar-mini"><div style="width:${progressPct}%"></div></div>
        <div class="start">${s.attempts === 0 ? 'Začít trénink' : 'Pokračovat v tréninku'}</div>
      </div>
    `;
    card.addEventListener('click', () => startSession(topic));
    grid.appendChild(card);
  });
}

function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0xff) + percent;
  let b = (num & 0xff) + percent;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// ─── Session logic ───────────────────────────────────────────
let session = null;

function startSession(topic) {
  // vybereme otázky – přednost neumělým & částečně umělým
  const s = state.topics[topic.id];
  const indices = topic.questions.map((_, i) => i);
  indices.sort((a, b) => (s.mastery[a] - s.mastery[b]) || (Math.random() - 0.5));
  const queue = indices.slice(0, Math.min(CARDS_PER_LEVEL, topic.questions.length));

  session = {
    topic,
    queue,            // index otázek čekajících v tomto kole
    pos: 0,
    total: queue.length,
    right: 0,
    partial: 0,
    wrong: 0,
    hearts: HEARTS_PER_LEVEL,
    earned: 0,
    repeat: [],       // otázky k zopakování v rámci tohoto kola
  };

  switchView('quiz');
  renderCard();
}

function renderCard() {
  const { topic, queue, pos, total } = session;
  const idx = queue[pos];
  const item = topic.questions[idx];

  $('cardTopic').textContent = `${topic.short} · ${topic.title}`;
  $('cardQ').textContent = item.q;
  $('cardA').textContent = item.a;
  $('cardA').classList.add('hidden');
  $('actionsRate').classList.add('hidden');
  $('actionsReveal').classList.remove('hidden');

  $('cardCounter').textContent = `${pos + 1} / ${total}`;
  $('bar').style.width = `${(pos / total) * 100}%`;
  $('hearts').textContent = '♥ '.repeat(session.hearts).trim() || '✗';
}

function reveal() {
  $('cardA').classList.remove('hidden');
  $('actionsReveal').classList.add('hidden');
  $('actionsRate').classList.remove('hidden');
}

function rate(score) {
  const { topic, queue, pos } = session;
  const idx = queue[pos];
  const s = state.topics[topic.id];

  // mastery: max( předchozí, nynější ) – ale špatná odpověď nesmaže předchozí "uměl"
  if (score > s.mastery[idx]) s.mastery[idx] = score;

  if (score === 2) { session.right++;   session.earned += 10; }
  else if (score === 1) { session.partial++; session.earned += 5; }
  else { session.wrong++; session.hearts = Math.max(0, session.hearts - 1); session.repeat.push(idx); }

  state.xp += score === 2 ? 10 : (score === 1 ? 5 : 0);
  save();
  renderTopBar();

  // další karta
  session.pos++;
  if (session.pos >= session.queue.length) {
    // pokud zbyly špatné a ještě máme srdce, přidáme je na konec a pokračujeme
    if (session.repeat.length && session.hearts > 0) {
      session.queue = session.queue.concat(session.repeat);
      session.repeat = [];
      session.total = session.queue.length;
      renderCard();
      return;
    }
    finishSession();
  } else {
    renderCard();
  }
}

function finishSession() {
  tickStreak();
  const { topic, total, right, partial } = session;
  const s = state.topics[topic.id];
  s.attempts += 1;

  const correctRate = Math.round(((right + partial * 0.5) / total) * 100);
  if (correctRate > s.bestScore) s.bestScore = correctRate;

  // postup levelu – pokud více než 80 % "uměl" a žádné srdce neztratil → +1 level
  if (right / total >= 0.8 && session.hearts === HEARTS_PER_LEVEL && s.level < 5) {
    s.level += 1;
  }

  // dokončené téma: všechny otázky alespoň 2
  const masteredAll = Object.values(s.mastery).every(v => v === 2);
  if (masteredAll) s.completed = true;

  save();
  renderTopBar();

  $('rXp').textContent = `+${session.earned}`;
  $('rRight').textContent = `${right}/${total}`;
  $('rLevel').textContent = `L${s.level}`;
  $('resultTitle').textContent = masteredAll
    ? 'Téma kompletně zvládnuto!'
    : (right / total >= 0.8 ? 'Skvěle, postupuješ!' : 'Hotovo, zkus to znovu');
  $('resultSub').textContent = correctRate >= 80
    ? `Úspěšnost ${correctRate}%`
    : `Úspěšnost ${correctRate}% – zopakuj, ať si to lépe usadíš.`;

  switchView('result');
}

// ─── View switch ─────────────────────────────────────────────
function switchView(name) {
  ['home', 'quiz', 'result'].forEach(v => {
    document.getElementById(v).classList.toggle('hidden', v !== name);
  });
  if (name === 'home') renderHome();
}

// ─── Buttons ─────────────────────────────────────────────────
$('revealBtn').addEventListener('click', reveal);
$('yesBtn').addEventListener('click', () => rate(2));
$('kindaBtn').addEventListener('click', () => rate(1));
$('noBtn').addEventListener('click', () => rate(0));
$('backBtn').addEventListener('click', () => { session = null; switchView('home'); });
$('repeatBtn').addEventListener('click', () => startSession(session.topic));
$('homeBtn').addEventListener('click', () => switchView('home'));
$('resetBtn').addEventListener('click', () => {
  if (confirm('Smazat veškerý pokrok?')) {
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }
});

// klávesové zkratky: mezerník = odhalit, 1/2/3 = ohodnotit
document.addEventListener('keydown', (e) => {
  if (document.getElementById('quiz').classList.contains('hidden')) return;
  if (e.key === ' ' || e.key === 'Enter') {
    if (!$('cardA').classList.contains('hidden')) return;
    e.preventDefault();
    reveal();
    return;
  }
  if ($('cardA').classList.contains('hidden')) return;
  if (e.key === '1') rate(0);
  if (e.key === '2') rate(1);
  if (e.key === '3') rate(2);
});

// init
renderHome();
