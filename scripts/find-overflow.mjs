import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 320, height: 844 } });
await page.goto('http://localhost:5187/', { waitUntil: 'networkidle' });
const out = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const ticker = document.querySelector('.ticker');
  const offenders = [];
  document.querySelectorAll('body *').forEach((el) => {
    if (el.classList.contains('form__honey') || (ticker && ticker.contains(el))) return;
    const r = el.getBoundingClientRect();
    if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className.baseVal ?? el.className ?? '').toString().slice(0, 50),
        text: (el.innerText || '').trim().slice(0, 35),
        left: Math.round(r.left),
        right: Math.round(r.right),
      });
    }
  });
  // also check each direct section scrollWidth vs clientWidth
  const sections = [];
  document.querySelectorAll('header, section, div, footer').forEach((el) => {
    if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
      const r = el.getBoundingClientRect();
      sections.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className.baseVal ?? el.className ?? '').toString().slice(0, 40),
        clientW: el.clientWidth,
        scrollW: el.scrollWidth,
        top: Math.round(r.top),
      });
    }
  });
  return { offenders: offenders.slice(0, 8), scrollableContainers: sections.slice(0, 8) };
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
