#!/usr/bin/env python3
"""
Sahaja Yoga Talk Saver — v2
Paste talk text via web UI → auto-saves to raw folder with date-based filename.
"""

from flask import Flask, request, jsonify, render_template_string
import os, re
from datetime import datetime

app = Flask(__name__)

RAW_DIR = os.path.expanduser("~/sahajyoga/source-data/shri-mataji-talks/raw")
os.makedirs(RAW_DIR, exist_ok=True)

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sahaja Yoga Talk Saver</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #f0f4f8; min-height: 100vh; padding: 24px; }
.container { max-width: 960px; margin: 0 auto; }
h1 { color: #2d3748; margin-bottom: 4px; font-size: 1.4rem; }
.subtitle { color: #718096; margin-bottom: 20px; font-size: 0.85rem; }
.card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 20px; }
label { display: block; font-weight: 600; color: #4a5568; margin-bottom: 5px; font-size: 0.85rem; }
input, textarea { width: 100%; padding: 9px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; color: #2d3748; transition: border-color 0.2s; background: #fff; }
input:focus, textarea:focus { outline: none; border-color: #7c5cbf; }
input.filled { border-color: #48bb78; background: #f0fff4; }
input.missing { border-color: #fc8181; background: #fff5f5; }
textarea { min-height: 320px; resize: vertical; font-family: monospace; font-size: 0.82rem; line-height: 1.5; }
.row3 { display: grid; grid-template-columns: 160px 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.field { margin-bottom: 14px; }
.hint { font-size: 0.75rem; color: #a0aec0; margin-top: 3px; }
.detected { font-size: 0.75rem; color: #38a169; margin-top: 3px; font-weight: 600; }
.btn-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
button { padding: 11px 28px; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; border: none; transition: background 0.2s; }
#saveBtn { background: #7c5cbf; color: white; }
#saveBtn:hover { background: #6b46c1; }
#saveBtn:disabled { background: #b794f4; cursor: not-allowed; }
#clearBtn { background: #e2e8f0; color: #4a5568; }
#clearBtn:hover { background: #cbd5e0; }
#charcount { font-size: 0.78rem; color: #a0aec0; }
.status { margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-size: 0.88rem; display: none; }
.success { background: #c6f6d5; color: #276749; display: block; }
.error { background: #fed7d7; color: #9b2c2c; display: block; }
.saved-list { max-height: 280px; overflow-y: auto; }
.saved-item { padding: 8px 12px; border-left: 3px solid #7c5cbf; margin-bottom: 7px; background: #faf5ff; border-radius: 0 6px 6px 0; font-size: 0.82rem; color: #4a5568; }
.saved-item strong { color: #2d3748; }
.tag { display: inline-block; font-size: 0.7rem; padding: 1px 6px; border-radius: 4px; background: #e9d8fd; color: #553c9a; margin-left: 6px; }
h2 { font-size: 1rem; color: #4a5568; margin-bottom: 12px; }
.step { display: inline-block; width: 20px; height: 20px; background: #7c5cbf; color: white; border-radius: 50%; font-size: 0.7rem; font-weight: bold; text-align: center; line-height: 20px; margin-right: 6px; }
</style>
</head>
<body>
<div class="container">
  <h1>Sahaja Yoga Talk Saver</h1>
  <p class="subtitle">Open talk on amruta.org → select all → copy → paste below → Save</p>

  <div class="card">
    <h2><span class="step">1</span>Paste the full talk text first — fields auto-fill from content</h2>
    <div class="field">
      <label>Talk Text <span style="color:#e53e3e">*</span></label>
      <textarea id="content" placeholder="Paste the complete talk text copied from amruta.org here (Ctrl+A on the page, then Ctrl+C, then paste here)..."></textarea>
      <div style="display:flex;justify-content:space-between;margin-top:4px;">
        <span class="hint">Paste everything including title, date, location from the page</span>
        <span id="charcount">0 characters</span>
      </div>
    </div>

    <h2><span class="step">2</span>Verify / correct auto-detected fields</h2>
    <div class="row3">
      <div class="field">
        <label>Date (YYYY-MM-DD) <span style="color:#e53e3e">*</span></label>
        <input type="text" id="date" placeholder="e.g. 1990-11-22" />
        <div class="hint" id="date-hint">Auto-detected from text or URL</div>
      </div>
      <div class="field">
        <label>Location / Event slug</label>
        <input type="text" id="location" placeholder="e.g. pune-doctors-conference" />
        <div class="hint">Lowercase, hyphens only</div>
      </div>
      <div class="field">
        <label>Source URL</label>
        <input type="text" id="url" placeholder="https://www.amruta.org/..." />
        <div class="hint">Paste the amruta.org URL</div>
      </div>
    </div>

    <div class="btn-row">
      <button id="saveBtn" onclick="saveTalk()">Save Talk</button>
      <button id="detectBtn" onclick="extractFromText(textarea.value)" style="background:#e9d8fd;color:#553c9a;">Re-detect Date</button>
      <button id="clearBtn" onclick="clearForm()">Clear Form</button>
      <span id="charcount2"></span>
    </div>
    <div class="status" id="status"></div>
  </div>

  <div class="card">
    <h2>Saved Talks (<span id="count">0</span>)</h2>
    <div class="saved-list" id="savedList"><span style="color:#a0aec0;font-size:0.85rem;">Loading...</span></div>
  </div>
</div>

<script>
const textarea = document.getElementById('content');
const dateInput = document.getElementById('date');
const locationInput = document.getElementById('location');
const urlInput = document.getElementById('url');

function extractFromText(val) {
  const len = val.length;
  document.getElementById('charcount').textContent = len.toLocaleString() + ' chars';
  if (len < 20) return;

  const months = {January:'01',February:'02',March:'03',April:'04',May:'05',June:'06',
                  July:'07',August:'08',September:'09',October:'10',November:'11',December:'12'};
  let dateFound = '';

  // YYYY-MM-DD
  let m = val.match(/(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/);
  if (m) dateFound = m[0];

  // "2 August 2001"
  if (!dateFound) {
    m = val.match(/(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(19|20)(\d{2})/);
    if (m) dateFound = m[3]+m[4]+'-'+months[m[2]]+'-'+(m[1].padStart(2,'0'));
  }

  // "August 2, 2001"
  if (!dateFound) {
    m = val.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(19|20)(\d{2})/);
    if (m) dateFound = m[3]+m[4]+'-'+months[m[1]]+'-'+(m[2].padStart(2,'0'));
  }

  // Always overwrite date with detected value
  if (dateFound) {
    dateInput.value = dateFound;
    dateInput.className = 'filled';
    document.getElementById('date-hint').textContent = 'Auto-detected: ' + dateFound;
    document.getElementById('date-hint').className = 'detected';
  }

  // Location slug — only if empty
  if (!locationInput.value) {
    const locPatterns = [
      /Medical Conference[,\s]+([^\n,(]+)/,
      /Public Program\s*\n([^\n]+)/,
      /Puja[,\s]+([^\n,(]+)/,
      /Press Conference[,\s]+([^\n,(]+)/,
    ];
    for (const pat of locPatterns) {
      const lm = val.match(pat);
      if (lm && lm[1] && lm[1].trim().length < 80) {
        locationInput.value = lm[1].trim().toLowerCase()
          .replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'-').substring(0,40);
        break;
      }
    }
  }
}

// Handle all ways text can enter the textarea
['input', 'keyup', 'change'].forEach(evt => {
  textarea.addEventListener(evt, () => extractFromText(textarea.value));
});

// Paste: browser fills textarea AFTER the paste event, so delay
textarea.addEventListener('paste', () => {
  setTimeout(() => extractFromText(textarea.value), 100);
  setTimeout(() => extractFromText(textarea.value), 500);
});

// Also handle drag-drop
textarea.addEventListener('drop', () => {
  setTimeout(() => extractFromText(textarea.value), 200);
});

// Auto-extract date from URL
urlInput.addEventListener('input', function() {
  const m = this.value.match(/(\\d{4})\\/(\\d{2})\\/(\\d{2})/);
  if (m) {
    dateInput.value = m[1]+'-'+m[2]+'-'+m[3];
    dateInput.className = 'filled';
    document.getElementById('date-hint').textContent = 'Auto-detected from URL';
    document.getElementById('date-hint').className = 'detected';
  }
});

async function saveTalk() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('status');
  const date = dateInput.value.trim();
  const location = locationInput.value.trim().replace(/\\s+/g,'-').toLowerCase();
  const url = urlInput.value.trim();
  const content = textarea.value.trim();

  // Validate
  let errors = [];
  if (!date) { errors.push('Date is required'); dateInput.className = 'missing'; }
  else dateInput.className = 'filled';
  if (!content || content.length < 50) { errors.push('Talk text is required (min 50 chars)'); }

  if (errors.length) {
    status.className = 'status error';
    status.textContent = 'Fix: ' + errors.join(' | ');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Saving...';
  status.className = 'status';
  status.style.display = 'none';

  try {
    const res = await fetch('/save', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({date, location: location || 'unknown-location', url, content})
    });

    if (!res.ok) throw new Error('Server returned ' + res.status);
    const data = await res.json();

    if (data.success) {
      status.className = 'status success';
      status.textContent = '✓ Saved: ' + data.filename + ' (' + data.chars.toLocaleString() + ' chars)';
      clearForm();
      loadSaved();
    } else {
      status.className = 'status error';
      status.textContent = 'Server error: ' + (data.error || 'unknown');
    }
  } catch(e) {
    status.className = 'status error';
    status.textContent = 'Error: ' + e.message;
  }

  btn.disabled = false;
  btn.textContent = 'Save Talk';
}

function clearForm() {
  textarea.value = '';
  dateInput.value = '';
  dateInput.className = '';
  locationInput.value = '';
  urlInput.value = '';
  document.getElementById('charcount').textContent = '0 chars';
  document.getElementById('date-hint').textContent = 'Auto-detected from text or URL';
  document.getElementById('date-hint').className = 'hint';
}

async function loadSaved() {
  try {
    const res = await fetch('/list');
    const data = await res.json();
    document.getElementById('count').textContent = data.files.length;
    const list = document.getElementById('savedList');
    if (!data.files.length) {
      list.innerHTML = '<span style="color:#a0aec0;font-size:0.85rem;">No talks saved yet.</span>';
      return;
    }
    list.innerHTML = data.files.map(f =>
      `<div class="saved-item"><strong>${f.name}</strong><span class="tag">${f.size}</span> — ${f.saved}</div>`
    ).join('');
  } catch(e) {}
}

loadSaved();
</script>
</body>
</html>"""

@app.route('/')
def index():
    return render_template_string(HTML)

@app.route('/save', methods=['POST'])
def save():
    try:
        data = request.json
        if not data:
            return jsonify({'success': False, 'error': 'No JSON received'})

        date = re.sub(r'[^0-9\-]', '', (data.get('date') or '').strip())
        location = re.sub(r'[^a-z0-9\-]', '', (data.get('location') or 'unknown').lower().replace(' ', '-'))
        url = (data.get('url') or '').strip()
        content = (data.get('content') or '').strip()

        if not date:
            return jsonify({'success': False, 'error': 'Date is required'})
        if not content or len(content) < 50:
            return jsonify({'success': False, 'error': 'Talk text too short'})

        filename = f"{date}-{location}.txt"
        filepath = os.path.join(RAW_DIR, filename)

        header = (
            f"SOURCE: {url or 'unknown'}\n"
            f"DATE: {date}\n"
            f"LOCATION/EVENT: {location}\n"
            f"SAVED: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
            f"CHARS: {len(content)}\n"
            f"---\n\n"
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(header + content)

        return jsonify({'success': True, 'filename': filename, 'chars': len(content)})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/list')
def list_files():
    try:
        files = []
        for fname in sorted(os.listdir(RAW_DIR), reverse=True):
            if fname.endswith('.txt'):
                fpath = os.path.join(RAW_DIR, fname)
                size = os.path.getsize(fpath)
                mtime = datetime.fromtimestamp(os.path.getmtime(fpath)).strftime('%Y-%m-%d %H:%M')
                files.append({
                    'name': fname,
                    'size': f'{size:,} bytes',
                    'saved': mtime
                })
        return jsonify({'files': files})
    except Exception as e:
        return jsonify({'files': [], 'error': str(e)})

if __name__ == '__main__':
    print(f"\n  Sahaja Yoga Talk Saver v2")
    print(f"  URL: http://localhost:7799")
    print(f"  Saves to: {RAW_DIR}\n")
    app.run(host='0.0.0.0', port=7799, debug=False)
