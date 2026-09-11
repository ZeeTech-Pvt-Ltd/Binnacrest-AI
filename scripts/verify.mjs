// Headless verification via global playwright + system Chrome.
// Usage: node scripts/verify.mjs [url]  (default http://localhost:5187)
import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';

const BASE = process.argv[2] || 'http://localhost:5187';
const results = [];
const check = (name, ok, detail = '') =>
  results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console: ${m.text()}`);
});

// ---------- Home ----------
await page.goto(BASE, { waitUntil: 'networkidle' });

check('title contains Binnacrest AI', (await page.title()).includes('Binnacrest AI'), await page.title());
check(
  'meta description present',
  await page.locator('meta[name="description"]').count() > 0
);
const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
check('meta description <= 155 chars', metaDesc.length <= 155, `${metaDesc.length} chars`);
check('home title <= 60 chars with keyword', (await page.title()).length <= 60 && /binnacrest ai/i.test(await page.title()), `${(await page.title()).length} chars`);
{
  const t = await page.locator('body').innerText();
  check('home no em/en dash or spaced hyphen', !/[—–]/.test(t) && !/ - /.test(t), '');
check('home has no robots meta (indexable)', (await page.locator('meta[name="robots"]').count()) === 0);
const svc = await page.evaluate(() => {
  const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
  for (const s of scripts) {
    try {
      const j = JSON.parse(s.textContent);
      if (j['@type'] === 'Service') return j;
    } catch {}
  }
  return null;
});
check('home Service JSON-LD with AggregateRating', svc?.aggregateRating?.ratingValue === '4.8' && svc?.aggregateRating?.reviewCount === '3100');
  const BW = /delve|unleash|elevate|transformative|cutting-edge|game-changer|seamless|in the realm of|mastering/i;
  check('home no AI buzzwords', !BW.test(t), '');
  const you = (t.match(/\byou\b|\byour\b|\byourself\b/gi) || []).length;
  const we = (t.match(/\bwe\b|\bour\b|\bus\b/gi) || []).length;
  check('home you-focus ratio >= 0.65', you + we > 0 && you / (you + we) >= 0.65, `${you} you-words / ${we} we-words`);
}
check('canonical is home', (await page.locator('link[rel="canonical"]').getAttribute('href')) === 'https://binnacrest-ai.com/');

// Hero
check('hero H1 contains Binnacrest AI', (await page.locator('.hero h1').innerText()).includes('Binnacrest AI'));
const gold = await page.locator('.hero h1 .gold-text').first().evaluate((el) => {
  const s = getComputedStyle(el);
  return { color: s.color, bg: s.backgroundImage, clip: s.webkitBackgroundClip || s.backgroundClip };
});
check('gold-text is gradient-clipped', gold.color === 'rgba(0, 0, 0, 0)' && gold.bg.includes('gradient') && gold.clip.includes('text'), JSON.stringify(gold));
check('scarcity chip present', await page.locator('.hero__scarcity').isVisible());
check('coin chips = 3', (await page.locator('.coin-chip').count()) === 3);
check('avatar cluster visible', await page.locator('.avatar-cluster').isVisible());
check('rating stars = 5', (await page.locator('.hero__rating-stars svg').count()) === 5);

// Form
check('hero form present', await page.locator('.form-wrap').count() >= 1);
check(
  'form fields = 4',
  (await page
    .locator('.form-wrap')
    .first()
    .locator('input[type="text"]:not(.form__honey), input[type="email"], input[type="tel"]')
    .count()) === 4
);
check('honeypot present', (await page.locator('.form__honey').count()) >= 1);
check('consent checkbox present', (await page.locator('.form__consent input').count()) >= 1);
check('submit is gold button', await page.locator('.form-wrap .btn--gold').first().isVisible());
// ITI initializes on idle time, so wait for it before checking.
await page.locator('.form-wrap .iti').first().waitFor({ timeout: 4000 });
check('intl-tel-input mounted', await page.locator('.form-wrap .iti').count() >= 1);

// Country dropdown must be readable on the dark theme (dark dialog, light text)
await page.locator('.form-wrap .iti__selected-country').first().waitFor({ timeout: 4000 });
await page.locator('.form-wrap .iti__selected-country').first().click();
await page.waitForTimeout(400);
const dd = await page.evaluate(() => {
  const s = getComputedStyle(document.querySelector('.iti__country-selector'));
  const n = getComputedStyle(document.querySelector('.iti__country-name'));
  return { bg: s.backgroundColor, color: n.color };
});
check('phone dropdown has dark background', !dd.bg.includes('255'), dd.bg);
check('phone dropdown has light text', dd.color === 'rgb(245, 242, 232)', dd.color);
await page.keyboard.press('Escape');

// Submit validation errors
await page.locator('.form-wrap .btn--gold').first().click();
await page.waitForTimeout(300);
check('empty submit shows first-name error', (await page.locator('.error-text').count()) >= 2);

// Ticker + stats
check('ticker track animating', await page.locator('.ticker__track').evaluate((el) => getComputedStyle(el).animationName.includes('ticker-scroll')));
check('stats = 4', (await page.locator('.stat').count()) === 4);

// Sections
for (const sel of ['.rates__grid', '.phone__screen', '.featured-quote', '.testimonials__grid', '.testimonials__comments', '.network__exchanges', '.legitimacy__card', '.faq__list', '.final-cta']) {
  check(`section ${sel}`, await page.locator(sel).count() > 0);
}
check('testimonial cards = 6', (await page.locator('.testimonial-card').count()) === 6);
check(
  'testimonial cards use gold hairline border',
  (await page
    .locator('.testimonial-card')
    .first()
    .evaluate((el) => getComputedStyle(el).borderColor)) === 'rgba(212, 175, 55, 0.22)'
);
check('comments = 3', (await page.locator('.comment').count()) === 3);
check('feature cards = 3', (await page.locator('.feature-card').count()) === 3);
check('exchange names = 5', (await page.locator('.network__exchange').count()) === 5);
check('FAQ items = 5', (await page.locator('.faq__item').count()) === 5);

// FAQ accordion interaction
await page.locator('.faq__q').nth(1).click();
await page.waitForTimeout(300);
check('FAQ second item opens', (await page.locator('.faq__item').nth(1).getAttribute('class')).includes('is-open'));

// FAQ page shows extended list (5 home + 4 extra)
await page.goto(BASE + '/faq', { waitUntil: 'networkidle' });
check('FAQ page shows 9 items', (await page.locator('.faq__item').count()) === 9);
const faqLd = await page.evaluate(() => {
  const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
  for (const s of scripts) {
    try {
      const j = JSON.parse(s.textContent);
      if (j['@type'] === 'FAQPage') return j;
    } catch {}
  }
  return null;
});
check('FAQPage JSON-LD with 9 questions', faqLd?.mainEntity?.length === 9);

// Thank-you must be noindexed
await page.goto(BASE + '/thank-you', { waitUntil: 'networkidle' });
check('thank-you is noindex', (await page.locator('meta[name="robots"]').getAttribute('content')) === 'noindex, follow');

// Contact page uses the same registration form as the homepage
await page.goto(BASE + '/contact-us', { waitUntil: 'networkidle' });
check(
  'contact page uses registration form',
  (await page.locator('.form-wrap .form__honey').count()) === 1 &&
    (await page.locator('.form-wrap input[type="tel"]').count()) === 1
);

await page.goto(BASE, { waitUntil: 'networkidle' });

// ---------- Subpages ----------
const routes = ['/about-us', '/how-it-works', '/faq', '/contact-us', '/sign-up', '/thank-you', '/privacy-policy', '/terms-of-use', '/risk-disclosure', '/nope-404'];
for (const r of routes) {
  await page.goto(BASE + r, { waitUntil: 'networkidle' });
  const status = r === '/nope-404' ? '404 page' : 'page renders';
  const h1 = (await page.locator('h1').first().innerText().catch(() => '')).slice(0, 40);
  check(`${r} -> ${status}`, (await page.locator('h1').count()) > 0, h1);
  // SEO audit: title <= 60 chars with keyword, description <= 155 chars
  const t = await page.title();
  const d = (await page.locator('meta[name="description"]').getAttribute('content')) || '';
  check(`${r} title <=60 + keyword`, t.length <= 60 && /binnacrest ai/i.test(t), `${t.length} chars`);
  check(`${r} description <=155`, d.length > 0 && d.length <= 155, `${d.length} chars`);
  const bodyText = await page.locator('body').innerText();
  check(`${r} no em/en dash or spaced hyphen`, !/[—–]/.test(bodyText) && !/ - /.test(bodyText), '');
  const BW = /delve|unleash|elevate|transformative|cutting-edge|game-changer|seamless|in the realm of|mastering/i;
  check(`${r} no AI buzzwords`, !BW.test(bodyText), '');
}

// ---------- Mobile ----------
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE, { waitUntil: 'networkidle' });
check('burger visible on mobile', await page.locator('.header__burger').isVisible());
check('header Sign Up hidden below 450px', !(await page.locator('.header__actions .btn').isVisible()));
const sym = await page.evaluate(() => {
  const r = (s) => document.querySelector(s).getBoundingClientRect();
  const logo = r('.logo'), burger = r('.header__burger');
  return { l: Math.round(logo.left), r: Math.round(document.documentElement.clientWidth - burger.right) };
});
check('symmetric header edges below 450px', Math.abs(sym.l - sym.r) <= 4, `${sym.l}px vs ${sym.r}px`);
await page.locator('.header__burger').click();
await page.waitForTimeout(200);
check('mobile menu opens', await page.locator('.mobile-menu').getAttribute('class').then((c) => c.includes('is-open')));
check(
  'mobile menu Sign Up text readable',
  (await page.locator('.mobile-menu .btn--gold').evaluate((el) => getComputedStyle(el).color)) === 'rgb(26, 20, 2)'
);
await page.locator('.header__burger').click();
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
check('no horizontal overflow on mobile', overflow <= 1, `${overflow}px`);
await page.setViewportSize({ width: 320, height: 568 });
await page.waitForTimeout(300);
const overflow320 = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
check('no horizontal overflow at 320px', overflow320 <= 1, `${overflow320}px`);
// Equal header gaps in the 450-860 tablet range
await page.setViewportSize({ width: 700, height: 844 });
await page.waitForTimeout(300);
const gaps = await page.evaluate(() => {
  const r = (s) => document.querySelector(s).getBoundingClientRect();
  const logo = r('.logo'), signup = r('.header__actions .btn'), burger = r('.header__burger');
  return { a: Math.round(signup.left - logo.right), b: Math.round(burger.left - signup.right) };
});
check('equal header gaps at 700px', Math.abs(gaps.a - gaps.b) <= 2, `${gaps.a}px vs ${gaps.b}px`);

// ---------- SEO files ----------
for (const f of ['robots.txt', 'sitemap.xml', 'favicon.svg', 'og-image.svg']) {
  const res = await page.request.get(BASE + '/' + f);
  check(`public file ${f}`, res.status() === 200);
}

check('zero page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
console.log(results.join('\n'));
const fails = results.filter((r) => r.startsWith('FAIL')).length;
console.log(`\n${results.length - fails}/${results.length} passed`);
process.exit(fails ? 1 : 0);
