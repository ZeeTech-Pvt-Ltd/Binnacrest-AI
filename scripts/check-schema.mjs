import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
import { writeFileSync, mkdirSync } from 'node:fs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });
const blocks = await page.evaluate(() =>
  [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent)
);
await page.goto('http://localhost:5187/faq', { waitUntil: 'networkidle' });
const faqBlocks = await page.evaluate(() =>
  [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent)
);
await browser.close();
mkdirSync('shots/tmp', { recursive: true });
blocks.concat(faqBlocks).forEach((b, i) => writeFileSync(`shots/tmp/schema-${i}.jsonld`, b));
console.log('extracted', blocks.length, 'home +', faqBlocks.length - blocks.length, 'faq-page blocks');
