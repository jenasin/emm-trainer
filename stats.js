// Skryté statistiky – načte čítače a vykreslí

const NS = 'emm-trainer-jenasin-v2';
const BASE = 'https://abacus.jasoncameron.dev';
const SITE_URL = 'https://jenasin.github.io/emm-trainer/';

function getCookie(name) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.$?*|{}()[\]\\/+^]/g,'\\$&') + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

async function readCounter(key) {
  try {
    const r = await fetch(`${BASE}/get/${NS}/${key}`);
    const d = await r.json();
    return d.value ?? '–';
  } catch (e) { return '?'; }
}

async function resetCounter(key) {
  // abacus: /set/<ns>/<key>/<value> umí nastavit konkrétní hodnotu
  try {
    const r = await fetch(`${BASE}/set/${NS}/${key}/0`);
    const d = await r.json();
    return d.value;
  } catch (e) { return null; }
}

(async function init() {
  document.getElementById('shareLink').value = SITE_URL;
  document.getElementById('qr').src =
    'https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=' + encodeURIComponent(SITE_URL);

  document.getElementById('copyBtn').addEventListener('click', () => {
    const inp = document.getElementById('shareLink');
    inp.select();
    navigator.clipboard?.writeText(inp.value);
    const b = document.getElementById('copyBtn');
    const t = b.textContent;
    b.textContent = 'Zkopírováno';
    setTimeout(() => (b.textContent = t), 1500);
  });

  // moje cookie ID
  const myUid = getCookie('emm-visitor') || '(zatím žádná návštěva hlavní stránky)';
  const myUidEl = document.getElementById('myUid');
  if (myUidEl) myUidEl.textContent = myUid;
  const demo = document.getElementById('cookieDemo');
  if (demo) demo.textContent = myUid;

  // čítače
  document.getElementById('visits').textContent    = await readCounter('visits');
  document.getElementById('pageviews').textContent = await readCounter('pageviews');
  document.getElementById('sessions').textContent  = await readCounter('sessions');

  // Aktuálně online – sečte heartbeaty z poslední ukončené minuty a aktuální
  async function readOnline() {
    const minute = Math.floor(Date.now() / 60000);
    const [prev, curr] = await Promise.all([
      readCounter('online-m' + (minute - 1)),
      readCounter('online-m' + minute)
    ]);
    const num = v => (typeof v === 'number' && v > 0) ? v : 0;
    // poslední ukončená minuta dává nejlepší odhad; aktuální může být ještě nepokrytá
    return Math.max(num(prev), num(curr));
  }
  const onlineEl = document.getElementById('online');
  async function refreshOnline() { onlineEl.textContent = await readOnline(); }
  await refreshOnline();
  setInterval(refreshOnline, 30000);

  // per-topic counters
  const list = document.getElementById('topicList');
  for (const t of TOPICS) {
    const row = document.createElement('div');
    row.className = 'topic-row';
    row.innerHTML = `<span>${t.short} · ${t.title}</span><span class="num" data-t="${t.id}">–</span>`;
    list.appendChild(row);
  }
  const results = await Promise.all(TOPICS.map(t => readCounter('topic-' + t.id)));
  TOPICS.forEach((t, i) => {
    const el = list.querySelector(`[data-t="${t.id}"]`);
    if (el) el.textContent = results[i];
  });

  // ─── Admin sekce ────────────────────────────────────────
  const isAdmin = !!getCookie('emm-admin');
  document.getElementById('adminBox').style.display   = isAdmin ? 'block' : 'none';
  document.getElementById('noAdminBox').style.display = isAdmin ? 'none' : 'block';

  if (!isAdmin) {
    const adminUrl = SITE_URL + '?admin';
    const inp = document.getElementById('adminLink');
    inp.value = adminUrl;
    document.getElementById('copyAdminBtn').addEventListener('click', () => {
      inp.select(); navigator.clipboard?.writeText(adminUrl);
      const b = document.getElementById('copyAdminBtn');
      const t = b.textContent; b.textContent = 'Zkopírováno';
      setTimeout(() => (b.textContent = t), 1500);
    });
  } else {
    const cur = document.getElementById('curNs');
    if (cur) cur.textContent = NS;
    document.getElementById('unadminBtn').addEventListener('click', () => {
      document.cookie = 'emm-admin=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      alert('Admin režim zrušen. Tvoje další návštěva už se započítá.');
      location.reload();
    });
  }
})();
