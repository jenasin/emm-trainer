// ────────────────────────────────────────────────────────────
//  EMM trenér – multiple-choice quiz se 3 možnostmi na otázku
// ────────────────────────────────────────────────────────────

const STORE_KEY = 'emm-trainer-v2';
const CARDS_PER_LEVEL = 8;
const HEARTS_PER_LEVEL = 3;

// ─── Anonymní čítače (visits, sessions, topic-*) ─────────────
const COUNTER_NS = 'emm-trainer-jenasin';
const COUNTER_BASE = 'https://abacus.jasoncameron.dev';

function bump(key, cb) {
  try {
    fetch(`${COUNTER_BASE}/hit/${COUNTER_NS}/${key}`, { mode: 'cors' })
      .then(r => r.json())
      .then(d => cb && cb(d.value))
      .catch(() => {});
  } catch (e) {}
}

function readCounter(key, cb) {
  try {
    fetch(`${COUNTER_BASE}/get/${COUNTER_NS}/${key}`, { mode: 'cors' })
      .then(r => r.json())
      .then(d => cb(d.value))
      .catch(() => cb('?'));
  } catch (e) { cb('?'); }
}

function setVisits(n) {
  const el = document.getElementById('visitsVal');
  if (el && n != null) el.textContent = n;
}

// 1 hit za session prohlížeče (refresh nenafukuje); reload načte aktuální stav
if (!sessionStorage.getItem('emm-visit-counted')) {
  bump('visits', v => { setVisits(v); sessionStorage.setItem('emm-visit-count', String(v)); });
  sessionStorage.setItem('emm-visit-counted', '1');
} else {
  // session už počítaná – načti čerstvou hodnotu jen pro zobrazení
  readCounter('visits', setVisits);
}

const state = load();

function freshTopicState() {
  return { level: 1, bestScore: 0, attempts: 0, completed: false, mastery: {} };
}

function migrate(s) {
  if (!s.topics) s.topics = {};
  TOPICS.forEach(t => {
    if (!s.topics[t.id]) s.topics[t.id] = freshTopicState();
    const ts = s.topics[t.id];
    if (!ts.mastery) ts.mastery = {};
    // doplň záznam pro každou aktuální otázku tématu (0 = nezvládnuto)
    t.questions.forEach((_, i) => {
      if (ts.mastery[i] === undefined) ts.mastery[i] = 0;
    });
    // přepočet completed podle aktuálního počtu otázek
    ts.completed = t.questions.every((_, i) => ts.mastery[i] === 2);
  });
  return s;
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return migrate(JSON.parse(raw));
  } catch (e) {}
  return migrate({ xp: 0, streak: 0, lastPlayDay: null, topics: {} });
}

function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

function tickStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastPlayDay === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastPlayDay === yesterday) ? state.streak + 1 : 1;
  state.lastPlayDay = today;
  save();
}

const $ = (id) => document.getElementById(id);

function shade(hex, p) {
  const n = parseInt(hex.replace('#',''),16);
  const r = Math.max(0, Math.min(255, (n>>16) + p));
  const g = Math.max(0, Math.min(255, ((n>>8)&0xff) + p));
  const b = Math.max(0, Math.min(255, (n&0xff) + p));
  return '#'+((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
}

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
  const qTotal = TOPICS.reduce((sum, t) => sum + t.questions.length, 0);
  $('qTotal').textContent = qTotal;

  TOPICS.forEach(topic => {
    const s = state.topics[topic.id];
    const total = topic.questions.length;
    const mastered = Object.values(s.mastery).filter(v => v === 2).length;
    const progressPct = Math.round((mastered / total) * 100);

    const card = document.createElement('div');
    card.className = 'tile';
    card.innerHTML = `
      <div class="banner" style="background:linear-gradient(135deg, ${topic.color}, ${shade(topic.color,-25)})">
        ${s.completed ? '<span class="done">✓ hotovo</span>' : ''}
        <span>${topic.short}</span>
        <span class="level-pill">L${s.level} • ${total} otázek</span>
      </div>
      <div class="body">
        <h3>${topic.title}</h3>
        <div class="meta">
          <span>${total} otázek</span>
          <span>nejlepší: ${s.bestScore}%</span>
          <span>správně: ${mastered}/${total}</span>
        </div>
        <div class="bar-mini"><div style="width:${progressPct}%"></div></div>
        <div class="start">${s.attempts === 0 ? 'Začít trénink' : 'Pokračovat v tréninku'}</div>
      </div>
    `;
    card.addEventListener('click', () => startSession(topic));
    grid.appendChild(card);
  });
}

// ─── Session ─────────────────────────────────────────────────
let session = null;

function startSession(topic) {
  bump('sessions');
  bump('topic-' + topic.id);
  const s = state.topics[topic.id];
  const indices = topic.questions.map((_, i) => i);
  // přednost mají málo zvládnuté otázky
  indices.sort((a, b) => (s.mastery[a] - s.mastery[b]) || (Math.random() - 0.5));
  const queue = indices.slice(0, Math.min(CARDS_PER_LEVEL, topic.questions.length));

  session = {
    topic,
    queue,
    pos: 0,
    total: queue.length,
    right: 0,
    wrong: 0,
    hearts: HEARTS_PER_LEVEL,
    earned: 0,
    repeat: [],
    answered: false,
    firstTry: new Set(queue),  // otázky, které student vidí poprvé
    order: null,               // promíchané pořadí možností pro aktuální kartu
  };

  switchView('quiz');
  renderCard();
}

function renderCard() {
  const { topic, queue, pos, total } = session;
  const idx = queue[pos];
  const item = topic.questions[idx];

  // promíchat pořadí 3 možností
  const order = [0,1,2].sort(() => Math.random() - 0.5);
  session.order = order;
  session.answered = false;

  $('cardTopic').textContent = `${topic.short} · ${topic.title}`;
  $('cardQ').textContent = item.q;
  $('cardA').innerHTML = '';
  $('cardA').classList.add('hidden');
  $('continueBtn').classList.add('hidden');

  $('cardCounter').textContent = `${pos + 1} / ${total}`;
  $('bar').style.width = `${(pos / total) * 100}%`;
  $('hearts').textContent = '♥'.repeat(session.hearts) || '·';

  const choicesEl = $('choices');
  choicesEl.innerHTML = '';
  order.forEach((origIdx, displayPos) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = item.choices[origIdx];
    btn.dataset.idx = origIdx;
    btn.addEventListener('click', () => pickChoice(origIdx, btn));
    choicesEl.appendChild(btn);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function pickChoice(chosenIdx, btn) {
  if (session.answered) return;
  session.answered = true;

  const { topic, queue, pos } = session;
  const idx = queue[pos];
  const item = topic.questions[idx];
  const isRight = chosenIdx === item.correct;

  // označit tlačítka
  const buttons = document.querySelectorAll('.choice');
  buttons.forEach(b => {
    const i = +b.dataset.idx;
    b.disabled = true;
    if (i === item.correct) b.classList.add('right');
    else if (b === btn) b.classList.add('wrong');
    else b.classList.add('dim');
  });

  // sestav vysvětlení do spodní bubliny
  const correctText = item.choices[item.correct];
  const chosenText = item.choices[chosenIdx];
  const simple = (typeof SIMPLE !== 'undefined' && SIMPLE[topic.id]) ? SIMPLE[topic.id][idx] : null;
  const parts = [];
  if (isRight) {
    parts.push(`<div class="ans-head ans-good">✓ Správně!</div>`);
    parts.push(`<div class="ans-section"><span class="lbl">Správná odpověď</span><div class="ans-pill ans-pill-right">${escapeHtml(correctText)}</div></div>`);
  } else {
    parts.push(`<div class="ans-head ans-bad">✗ Špatně</div>`);
    parts.push(`<div class="ans-section"><span class="lbl">Tvoje odpověď</span><div class="ans-pill ans-pill-wrong">${escapeHtml(chosenText)}</div></div>`);
    parts.push(`<div class="ans-section"><span class="lbl">Správně mělo být</span><div class="ans-pill ans-pill-right">${escapeHtml(correctText)}</div></div>`);
  }
  if (simple) {
    parts.push(`<div class="ans-section"><span class="lbl">Jednoduše (pro začátečníky)</span><div class="ans-simple">${escapeHtml(simple)}</div></div>`);
  }
  const detailText = (typeof STUDY_GUIDE !== 'undefined' && STUDY_GUIDE[topic.id] && STUDY_GUIDE[topic.id][idx]) || item.a;
  parts.push(`<div class="ans-section"><span class="lbl">Detailní vysvětlení</span><div class="ans-detail">${escapeHtml(detailText)}</div></div>`);
  $('cardA').innerHTML = parts.join('');

  const s = state.topics[topic.id];
  if (isRight) {
    session.right++;
    // mastery na 2 jen pokud správně na první pokus v tomto kole;
    // při opakování v rámci kola se posune jen na 1, aby se příště zobrazila znovu
    const newScore = session.firstTry.has(idx) ? 2 : Math.max(s.mastery[idx], 1);
    if (newScore > s.mastery[idx]) s.mastery[idx] = newScore;
    if (session.firstTry.has(idx)) { session.earned += 10; state.xp += 10; }
    else { session.earned += 3; state.xp += 3; }
  } else {
    session.wrong++;
    session.hearts = Math.max(0, session.hearts - 1);
    session.repeat.push(idx);
    s.mastery[idx] = Math.max(0, Math.min(s.mastery[idx], 1));
  }
  save();
  renderTopBar();

  $('cardA').classList.remove('hidden');
  $('continueBtn').classList.remove('hidden');
  $('continueBtn').focus();
}

function next() {
  session.pos++;
  if (session.pos >= session.queue.length) {
    if (session.repeat.length && session.hearts > 0) {
      // doplň špatně zodpovězené na konec fronty
      const repeats = session.repeat.slice();
      session.queue = session.queue.concat(repeats);
      session.total = session.queue.length;
      session.repeat = [];
      // tyto opakované již nejsou "first try"
      repeats.forEach(i => session.firstTry.delete(i));
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
  const { topic, total, right } = session;
  const s = state.topics[topic.id];
  s.attempts += 1;

  const correctRate = Math.round((right / total) * 100);
  if (correctRate > s.bestScore) s.bestScore = correctRate;

  if (right / total >= 0.8 && session.hearts === HEARTS_PER_LEVEL && s.level < 5) {
    s.level += 1;
  }

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
    : `Úspěšnost ${correctRate}% – zopakuj, ať to lépe usadíš.`;

  switchView('result');
}

function switchView(name) {
  ['home','quiz','result'].forEach(v => {
    document.getElementById(v).classList.toggle('hidden', v !== name);
  });
  if (name === 'home') renderHome();
}

// ─── Bindings ────────────────────────────────────────────────
$('continueBtn').addEventListener('click', next);
$('backBtn').addEventListener('click', () => { session = null; switchView('home'); });
$('repeatBtn').addEventListener('click', () => startSession(session.topic));
$('homeBtn').addEventListener('click', () => switchView('home'));
$('resetBtn').addEventListener('click', () => {
  if (confirm('Smazat veškerý pokrok?')) { localStorage.removeItem(STORE_KEY); location.reload(); }
});

// klávesy: 1/2/3 vyberou možnost, mezerník/Enter = pokračovat
document.addEventListener('keydown', (e) => {
  if (document.getElementById('quiz').classList.contains('hidden')) return;
  if (!session) return;
  if (!session.answered) {
    if (['1','2','3'].includes(e.key)) {
      const btns = document.querySelectorAll('.choice');
      const i = +e.key - 1;
      if (btns[i]) btns[i].click();
    }
  } else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    next();
  }
});

renderHome();
