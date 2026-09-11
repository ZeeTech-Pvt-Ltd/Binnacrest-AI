// Post-build step: inlines the built CSS into dist/index.html so the page has
// zero render-blocking stylesheet requests. Vite emits absolute /assets/ URLs,
// so inlining is safe. Usage: node scripts/inline-css.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const htmlPath = join(dist, 'index.html');

let html = readFileSync(htmlPath, 'utf8');
const linkMatch = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!linkMatch) {
  console.log('inline-css: no stylesheet link found, skipping');
  process.exit(0);
}
const cssFile = join(dist, linkMatch[1].replace(/^\//, ''));
const css = readFileSync(cssFile, 'utf8');
html = html.replace(linkMatch[0], `<style>${css}</style>`);
writeFileSync(htmlPath, html);
console.log(`inline-css: inlined ${linkMatch[1]} (${(css.length / 1024).toFixed(1)} KB) into index.html`);
