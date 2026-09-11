import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
import { execSync } from 'node:child_process';
const url = process.argv[2] || 'http://localhost:4173';
const chrome = chromium.executablePath();
try {
  execSync(
    `npx --yes lighthouse "${url}" --quiet --chrome-path="${chrome}" --only-categories=performance,seo,accessibility,best-practices --output=json --output-path=shots/lighthouse.json --chrome-flags="--headless --no-sandbox"`,
    { stdio: 'inherit', timeout: 300000, cwd: 'C:/Users/samee/Desktop/Binnacrest AI' }
  );
} catch (e) {
  console.log('lighthouse failed:', e.message?.slice(0, 150));
}
