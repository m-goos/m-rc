/**
 * Serves the static export in `out/` the way CloudFront serves it in
 * production, so local runs and the smoke tests hit the same URLs as the real
 * site (`/blog`, not `/blog.html`).
 *
 * The rewrite below mirrors infrastructure/cloudfront-functions/rewrite-spa-uri.js
 * — keep the two in step.
 *
 * Usage: node scripts/serve-static.mjs [port]
 */
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../out', import.meta.url)));
const PORT = Number(process.argv[2] ?? 4173);

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
};

/** The CloudFront function, restated: extensionless paths get `.html`. */
function rewrite(uri) {
  if (uri.endsWith('/')) return `${uri}index.html`;
  if (!uri.includes('.')) return `${uri}.html`;
  return uri;
}

async function resolveFile(uri) {
  const candidate = resolve(join(ROOT, normalize(rewrite(uri))));
  // normalize() collapses `..`, but re-check so a crafted path cannot escape
  if (!candidate.startsWith(ROOT)) return null;

  try {
    const stats = await stat(candidate);
    return stats.isFile() ? candidate : null;
  } catch {
    return null;
  }
}

const server = createServer(async (request, response) => {
  const { pathname } = new URL(request.url, `http://localhost:${PORT}`);
  const file = (await resolveFile(pathname)) ?? (await resolveFile('/404'));

  if (!file) {
    response.writeHead(404, { 'content-type': 'text/plain' });
    response.end('Not found');
    return;
  }

  response.writeHead(file.endsWith('404.html') ? 404 : 200, {
    'content-type': MIME_TYPES[extname(file)] ?? 'application/octet-stream',
  });
  createReadStream(file).pipe(response);
});

server.listen(PORT, () => {
  console.log(`Serving ${ROOT} on http://127.0.0.1:${PORT}`);
});
