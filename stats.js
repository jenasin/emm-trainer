// Skryté statistiky – načte čítače a vykreslí

const NS = 'emm-trainer-jenasin';
const BASE = 'https://abacus.jasoncameron.dev';
const SITE_URL = 'https://jenasin.github.io/emm-trainer/';

async function readCounter(key) {
  try {
    const r = await fetch(`${BASE}/get/${NS}/${key}`);
    const d = await r.json();
    return d.value ?? '–';
  } catch (e) { return '?'; }
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

  document.getElementById('visits').textContent = await readCounter('visits');
  document.getElementById('sessions').textContent = await readCounter('sessions');

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
})();
