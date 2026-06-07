// Serveur générique pour les copies de sites (SPA incluses).
// Usage : node serve.js <nom-capture> [port]
//   - sert captures/<nom>/mirror/<domain> au bon chemin
//   - gère les fichiers nommés "xxx.js?v=..." (artefacts wget)
// Sans argument : liste les captures disponibles.
const http = require('http');
const fs = require('fs');
const path = require('path');

const CAPTURES_DIR = path.join(__dirname, 'captures');

function listCaptures() {
  if (!fs.existsSync(CAPTURES_DIR)) return [];
  return fs.readdirSync(CAPTURES_DIR).filter(n => {
    try { return fs.statSync(path.join(CAPTURES_DIR, n)).isDirectory(); } catch { return false; }
  });
}

const name = process.argv[2];
const PORT = parseInt(process.argv[3] || '8787', 10);

if (!name) {
  const caps = listCaptures();
  console.log('Captures disponibles :');
  caps.forEach(c => {
    let title = c;
    try { title = JSON.parse(fs.readFileSync(path.join(CAPTURES_DIR, c, 'meta.json'), 'utf8')).title || c; } catch {}
    console.log('  - ' + c + '  (' + title + ')');
  });
  console.log('\nUsage : node serve.js <nom-capture> [port]');
  process.exit(0);
}

const capDir = path.join(CAPTURES_DIR, name);
if (!fs.existsSync(capDir)) { console.error('Capture introuvable : ' + name); process.exit(1); }

const meta = JSON.parse(fs.readFileSync(path.join(capDir, 'meta.json'), 'utf8'));
const ROOT = path.join(capDir, 'mirror', meta.domain);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject', '.mp4': 'video/mp4',
};

function send(res, file) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}

function findByPrefix(dir, base) {
  try {
    const hit = fs.readdirSync(dir).find(f => f === base || f.startsWith(base + '?') || f.startsWith(base + '%3F'));
    return hit ? path.join(dir, hit) : null;
  } catch { return null; }
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  const rel = urlPath.replace(/^\/+/, '');
  let abs = path.join(ROOT, rel);

  try { if (fs.statSync(abs).isDirectory()) abs = path.join(abs, 'index.html'); } catch {}

  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return send(res, abs);
  if (query) {
    const withQ = path.join(ROOT, rel + query);
    if (fs.existsSync(withQ)) return send(res, withQ);
  }
  const byPrefix = findByPrefix(path.dirname(abs), path.basename(abs));
  if (byPrefix) return send(res, byPrefix);
  if (fs.existsSync(abs + '.html')) return send(res, abs + '.html');

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404: ' + urlPath);
}).listen(PORT, () => {
  console.log('"' + (meta.title || name) + '" servi sur http://localhost:' + PORT + meta.entryPath);
});
