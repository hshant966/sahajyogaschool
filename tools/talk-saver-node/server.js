const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8899;
const RAW_DIR = path.join(os.homedir(), 'sahajyoga/source-data/shri-mataji-talks/raw');
fs.mkdirSync(RAW_DIR, { recursive: true });

const MONTHS = {
  january:'01', february:'02', march:'03', april:'04', may:'05', june:'06',
  july:'07', august:'08', september:'09', october:'10', november:'11', december:'12'
};

function detectDate(text) {
  // YYYY-MM-DD
  let m = text.match(/(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/);
  if (m) return m[0];

  // "2 August 2001"
  m = text.match(/(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(19|20)(\d{2})/i);
  if (m) {
    const mon = MONTHS[m[2].toLowerCase()];
    return `${m[3]}${m[4]}-${mon}-${m[1].padStart(2,'0')}`;
  }

  // "August 2, 2001"
  m = text.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(19|20)(\d{2})/i);
  if (m) {
    const mon = MONTHS[m[1].toLowerCase()];
    return `${m[3]}${m[4]}-${mon}-${m[2].padStart(2,'0')}`;
  }

  // From URL pattern YYYY/MM/DD
  m = text.match(/amruta\.org\/(\d{4})\/(\d{2})\/(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;

  return '';
}

function detectTalkName(text) {
  // amruta.org format: talk title is on the first prominent line before location
  // e.g. "NIH Medical Conference\nWashington D.C. (United States)"
  // Try: line before "View Map" or before a location line
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 2);

  // Find line containing "View Map" — title is 1-2 lines above it
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('View Map')) {
      // line above View Map is location, line above that is title
      if (i >= 2) return lines[i - 2].trim();
      if (i >= 1) return lines[i - 1].trim();
    }
  }

  // Fallback: first line that looks like a title (not a URL, not nav text)
  const skip = /^(search|home|menu|copyright|login|english|previous|next|leave|logged|share|pdf|audio|video|favorite|transcript|show|this page|important)/i;
  for (const line of lines) {
    if (line.length > 5 && line.length < 80 && !skip.test(line) && !line.startsWith('http')) {
      return line;
    }
  }
  return '';
}

function detectLocation(text) {
  // amruta.org format: "NIH Medical Conference\nWashington D.C. (United States)  View Map"
  // Location is the line containing "View Map"
  const lines = text.split('\n').map(l => l.trim());
  for (const line of lines) {
    if (line.includes('View Map')) {
      const loc = line.replace(/View Map.*/i, '').trim();
      if (loc.length > 2) {
        return loc.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 50);
      }
    }
  }

  // Fallback patterns
  const patterns = [
    /Medical Conference[,\s]+([^\n,(]{3,50})/i,
    /Press Conference[,\s]+([^\n,(]{3,50})/i,
    /Public Program\s*\n([^\n]{3,60})/i,
    /Puja[,\s]+([^\n,(]{3,50})/i,
  ];
  for (const pat of patterns) {
    const m = text.match(pat);
    if (m && m[1]) {
      return m[1].trim().toLowerCase()
        .replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 50);
    }
  }
  return 'unknown-location';
}

function listFiles() {
  return fs.readdirSync(RAW_DIR)
    .filter(f => f.endsWith('.txt'))
    .sort().reverse()
    .map(f => {
      const stat = fs.statSync(path.join(RAW_DIR, f));
      return { name: f, size: (stat.size / 1024).toFixed(1) + ' KB', date: stat.mtime.toISOString().slice(0,16).replace('T',' ') };
    });
}

const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Talk Saver — Sahaja Yoga</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,sans-serif;background:#f5f0ff;padding:20px;min-height:100vh}
.wrap{max-width:900px;margin:0 auto}
h1{color:#4a1c96;font-size:1.4rem;margin-bottom:4px}
p.sub{color:#7c5cbf;font-size:.85rem;margin-bottom:18px}
.card{background:#fff;border-radius:10px;padding:20px;box-shadow:0 2px 10px rgba(100,60,200,.1);margin-bottom:16px}
label{font-weight:600;font-size:.85rem;color:#4a5568;display:block;margin-bottom:5px}
input,textarea{width:100%;padding:9px 12px;border:2px solid #e2e8f0;border-radius:7px;font-size:.9rem;color:#2d3748}
input:focus,textarea:focus{outline:none;border-color:#7c5cbf}
textarea{min-height:300px;resize:vertical;font-family:monospace;font-size:.8rem;line-height:1.5}
.grid{display:grid;grid-template-columns:160px 1fr 1fr;gap:12px;margin-bottom:14px}
.field{margin-bottom:14px}
.hint{font-size:.75rem;color:#a0aec0;margin-top:3px}
.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px}
button{padding:10px 24px;border:none;border-radius:7px;font-weight:700;font-size:.9rem;cursor:pointer}
#saveBtn{background:#7c5cbf;color:#fff}
#saveBtn:hover{background:#5a36a0}
.msg{margin-top:12px;padding:12px;border-radius:7px;font-size:.88rem;display:none}
.ok{background:#c6f6d5;color:#276749;display:block}
.err{background:#fed7d7;color:#9b2c2c;display:block}
.saved-list{max-height:240px;overflow-y:auto}
.item{padding:8px 12px;margin-bottom:6px;border-left:3px solid #7c5cbf;background:#faf5ff;border-radius:0 6px 6px 0;font-size:.82rem;color:#4a5568}
.item strong{color:#2d3748;display:block}
.count{font-size:.8rem;color:#7c5cbf;font-weight:600;margin-bottom:10px}
</style>
</head>
<body>
<div class="wrap">
  <h1>Sahaja Yoga Talk Saver</h1>
  <p class="sub">Paste full talk from amruta.org → date auto-detected server-side → saved to raw folder</p>

  <div class="card">
    <form id="form" method="POST" action="/save">
      <div class="field">
        <label>Talk Text (paste full content from amruta.org) *</label>
        <textarea name="content" id="content" placeholder="Paste the complete page content here — title, date, location, full talk text..."></textarea>
        <div class="hint" id="info">Characters: 0</div>
      </div>
      <div class="grid">
        <div class="field">
          <label>Date (auto-detected)</label>
          <input type="text" name="date" id="date" placeholder="YYYY-MM-DD" />
          <div class="hint">Leave blank — auto-fills from text</div>
        </div>
        <div class="field">
          <label>Location slug (auto-detected)</label>
          <input type="text" name="location" id="location" placeholder="e.g. pune-doctors-conf" />
        </div>
        <div class="field">
          <label>Source URL</label>
          <input type="text" name="url" id="url" placeholder="https://www.amruta.org/..." />
        </div>
      </div>
      <div class="row">
        <button type="submit" id="saveBtn">Save Talk</button>
        <span style="font-size:.8rem;color:#a0aec0" id="charcount">0 chars</span>
      </div>
    </form>
    <div class="msg" id="msg"></div>
  </div>

  <div class="card">
    <div class="count" id="countLine">Saved talks: loading...</div>
    <div class="saved-list" id="savedList">Loading...</div>
  </div>
</div>

<script>
const content = document.getElementById('content');
const dateEl = document.getElementById('date');
const locEl = document.getElementById('location');
const charcount = document.getElementById('charcount');
const info = document.getElementById('info');

content.addEventListener('input', updateCount);
content.addEventListener('paste', () => setTimeout(updateCount, 50));

function updateCount() {
  const len = content.value.length;
  charcount.textContent = len.toLocaleString() + ' chars';
  info.textContent = 'Characters: ' + len.toLocaleString();
}

document.getElementById('form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const msg = document.getElementById('msg');
  msg.className = 'msg';
  document.getElementById('saveBtn').textContent = 'Saving...';
  document.getElementById('saveBtn').disabled = true;

  const body = new URLSearchParams({
    content: content.value,
    date: dateEl.value,
    location: locEl.value,
    url: document.getElementById('url').value
  });

  try {
    const res = await fetch('/save', { method: 'POST', body });
    const data = await res.json();
    if (data.ok) {
      msg.className = 'msg ok';
      msg.textContent = '✓ Saved: ' + data.file + ' | Talk: ' + (data.talk || '?') + ' | Location: ' + (data.loc || '?') + ' | Date: ' + data.date + ' | ' + data.chars + ' chars';
      content.value = ''; dateEl.value = ''; locEl.value = '';
      document.getElementById('url').value = '';
      charcount.textContent = '0 chars';
      loadList();
    } else {
      msg.className = 'msg err';
      msg.textContent = 'Error: ' + data.error;
    }
  } catch(e) {
    msg.className = 'msg err';
    msg.textContent = 'Network error: ' + e.message;
  }

  document.getElementById('saveBtn').textContent = 'Save Talk';
  document.getElementById('saveBtn').disabled = false;
});

async function loadList() {
  try {
    const res = await fetch('/list');
    const data = await res.json();
    document.getElementById('countLine').textContent = 'Saved talks: ' + data.files.length;
    document.getElementById('savedList').innerHTML = data.files.length
      ? data.files.map(f => '<div class="item"><strong>' + f.name + '</strong>' + f.size + ' — ' + f.date + '</div>').join('')
      : '<div style="color:#a0aec0;font-size:.85rem">No talks saved yet.</div>';
  } catch(e) {}
}
loadList();
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(HTML);
  }

  if (req.method === 'GET' && req.url === '/list') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ files: listFiles() }));
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      try {
        const params = new URLSearchParams(body);
        const content = (params.get('content') || '').trim();
        const url = (params.get('url') || '').trim();

        if (!content || content.length < 50) {
          return res.end(JSON.stringify({ ok: false, error: 'Talk text too short or empty' }));
        }

        // Server-side detection — reliable, no browser JS needed
        const fullText = url + '\n' + content;
        let date = (params.get('date') || '').trim() || detectDate(fullText);
        if (!date) date = new Date().toISOString().slice(0, 10) + '-unknown-date';

        let loc = (params.get('location') || '').trim();
        if (!loc) loc = detectLocation(content);
        loc = loc.replace(/[^a-z0-9-]/g, '').substring(0, 50) || 'unknown-location';

        const talkName = detectTalkName(content);

        const filename = `${date}-${loc}.txt`;
        const filepath = path.join(RAW_DIR, filename);

        const header = [
          `SOURCE: ${url || 'unknown'}`,
          `DATE: ${date}`,
          `TALK: ${talkName || 'unknown'}`,
          `LOCATION/EVENT: ${loc}`,
          `SAVED: ${new Date().toISOString().slice(0,19).replace('T',' ')}`,
          `CHARS: ${content.length}`,
          '---', ''
        ].join('\n');

        fs.writeFileSync(filepath, header + content, 'utf8');
        res.end(JSON.stringify({ ok: true, file: filename, date, loc, talk: talkName, chars: content.length }));
      } catch (e) {
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  Talk Saver running → http://localhost:${PORT}`);
  console.log(`  Saves to: ${RAW_DIR}\n`);
});
