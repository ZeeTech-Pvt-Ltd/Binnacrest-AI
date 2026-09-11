// Rasterizes public/og-image.svg to public/og-image.png via playwright + system Chrome.
// Usage: node scripts/rasterize-og.mjs
import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public', 'og-image.svg'), 'utf8');
const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(dataUrl);
const buf = await page.screenshot({ type: 'png' });
writeFileSync(join(root, 'public', 'og-image.png'), buf);
await browser.close();
console.log('public/og-image.png written');
