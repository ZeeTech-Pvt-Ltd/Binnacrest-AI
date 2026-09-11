import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const routes = ['/', '/about-us', '/faq', '/contact-us', '/sign-up', '/thank-you', '/privacy-policy', '/terms-of-use', '/risk-disclosure'];
for (const r of routes) {
  await page.goto('http://localhost:5187' + r, { waitUntil: 'networkidle' });
  const audit = await page.evaluate(() => {
    const $ = (s) => document.querySelectorAll(s);
    const jsonLd = [...$('script[type="application/ld+json"]')].map((s) => {
      try { return JSON.parse(s.textContent)['@type']; } catch { return 'INVALID'; }
    });
    const h1 = $('h1').length, h2 = $('h2').length;
    const firstHeadingIsH1 = document.querySelector('h1') === document.querySelector('main h1, main h2, main h3');
    const imgs = $('img').length;
    const imgsNoAlt = [...$('img')].filter((i) => !i.hasAttribute('alt')).length;
    const robots = document.querySelector('meta[name="robots"]')?.content || 'none';
    const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
    const keywordInText = (document.body.innerText.match(/binnacrest ai/gi) || []).length;
    const internalLinks = $('a[href^="/"]').length;
    const externalLinks = [...$('a[href^="http"]')].filter((a) => !a.href.includes('binnacrest-ai.com')).length;
    return { h1, h2, jsonLd, imgs, imgsNoAlt, robots, canonical: canonical.replace('https://binnacrest-ai.com', ''), keywordInText, internalLinks, externalLinks };
  });
  console.log(r.padEnd(18), JSON.stringify(audit));
}
await browser.close();
