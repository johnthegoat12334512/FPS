// Builds a self-contained Cloudflare Worker (build/worker.js) that serves the game.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(root, 'build');
fs.mkdirSync(out, { recursive: true });
const files = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/style.css': ['style.css', 'text/css; charset=utf-8'],
  '/dist/game.js': ['dist/game.js', 'application/javascript; charset=utf-8'],
};
const entries = Object.entries(files).map(([url, [f, type]]) => `${JSON.stringify(url)}: [${JSON.stringify(fs.readFileSync(path.join(root, f), 'utf8'))}, ${JSON.stringify(type)}]`);
const src = `const FILES = {${entries.join(',\n')}};
export default {
  async fetch(req) {
    const url = new URL(req.url);
    const f = FILES[url.pathname];
    if (!f) return new Response('Not found', { status: 404 });
    return new Response(f[0], { headers: { 'content-type': f[1], 'cache-control': url.pathname.endsWith('.js') || url.pathname.endsWith('.css') ? 'public, max-age=300' : 'no-cache' } });
  },
};
`;
fs.writeFileSync(path.join(out, 'worker.js'), src);
console.log('built build/worker.js', (src.length / 1024).toFixed(0) + 'KB');
