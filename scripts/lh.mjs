import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
const { execSync } = await import('node:child_process');
const chrome = chromium.executablePath();
console.log('chrome:', chrome);
try {
  execSync(
    `npx --yes lighthouse http://localhost:4173 --quiet --chrome-path="${chrome}" --only-categories=performance,seo,accessibility,best-practices --output=json --output-path=shots/lighthouse.json --chrome-flags="--headless --no-sandbox"`,
    { stdio: 'inherit', timeout: 240000, cwd: 'C:/Users/samee/Desktop/Binnacrest AI' }
  );
  console.log('lighthouse done');
} catch (e) {
  console.log('lighthouse failed:', e.message?.slice(0, 200));
}
