// Complete homepage user journey test.
// Usage: node scripts/journey.mjs [url]  (default http://localhost:5187)
// The registration POST is intercepted and mocked, so no real lead is submitted.
import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs';

const BASE = process.argv[2] || 'http://localhost:5187';
const results = [];
const check = (name, ok, detail = '') =>
  results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) =>
  errors.push(`pageerror @${page.url()}: ${e.message} :: ${(e.stack || '').split('\n')[1] || ''}`)
);
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console @${page.url()}: ${m.text()}`);
});

// Mock the endpoint so the journey test never submits a real lead.
let postedPayload = null;
await page.route('**/homeMailAction.php', (route) => {
  postedPayload = route.request().postDataJSON();
  route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
});
// Stub the country lookups too: a late real-network response triggers a
// country-change re-render mid-interaction, which breaks click stability.
await page.route('**/ipwho.is/**', (r) =>
  r.fulfill({ status: 200, contentType: 'application/json', body: '{"country_code":"au"}' })
);
await page.route('**/ipapi.co/**', (r) =>
  r.fulfill({ status: 200, contentType: 'application/json', body: '{"country_code":"au"}' })
);

// Smooth scrolling keeps the button's bounding box moving, which fails Playwright's
// stability check. Disable it for the duration of the test. The DOM isn't ready when
// init scripts run, so defer to DOMContentLoaded.
await page.addInitScript(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const s = document.createElement('style');
    s.textContent = 'html { scroll-behavior: auto !important; }';
    document.head.appendChild(s);
  });
});

// ---------- 1. Landing ----------
await page.goto(BASE, { waitUntil: 'networkidle' });
check('homepage loads with title', (await page.title()).includes('Binnacrest AI'));
check('hero H1 visible', await page.locator('.hero h1').isVisible());
check('hero form visible', await page.locator('.hero .form-wrap').isVisible());
check('scarcity chip visible', await page.locator('.hero__scarcity').isVisible());

// ---------- 2. Scroll through every section ----------
const sections = [
  ['.ticker', 'live ticker'],
  ['.stats-band', 'stats band'],
  ['.rates__grid', 'live rates + phone mockup'],
  ['.featured-quote', 'featured member quote'],
  ['.testimonials__grid', 'testimonial cards'],
  ['.testimonials__comments', 'member comments'],
  ['.features__grid', 'advantages'],
  ['.network__exchanges', 'exchange network'],
  ['.legitimacy__card', 'legitimacy block'],
  ['.faq__list', 'FAQ accordion'],
  ['.final-cta .form-wrap', 'final CTA form'],
];
for (const [sel, label] of sections) {
  await page.locator(sel).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(350); // let the reveal animation fire
  const vis = await page.locator(sel).first().isVisible();
  const revealed = await page
    .locator(`${sel} .reveal, ${sel}`)
    .first()
    .evaluate((el) => {
      const r = el.closest('.reveal') || el;
      return !r.classList.contains('reveal') || r.classList.contains('is-visible');
    });
  check(`section ${label} visible + revealed`, vis && revealed);
}

// ---------- 3. FAQ accordion ----------
const q = page.locator('.faq__q').nth(2);
await q.scrollIntoViewIfNeeded();
await q.click();
check('FAQ opens', (await page.locator('.faq__item').nth(2).getAttribute('class')).includes('is-open'));
check('FAQ answer readable', await page.locator('.faq__a-inner').nth(2).isVisible());
await q.click();
check('FAQ closes', !(await page.locator('.faq__item').nth(2).getAttribute('class')).includes('is-open'));

// ---------- 4. Phone dropdown journey ----------
await page.locator('.form-wrap .iti__selected-country').first().scrollIntoViewIfNeeded();
await page.locator('.form-wrap .iti__selected-country').first().click();
await page.waitForTimeout(400);
check('country dropdown opens', await page.locator('.iti__country-list').first().isVisible());
await page.locator('.iti__country').filter({ hasText: 'Australia' }).first().click();
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
const phoneLabel = await page.locator('.form-wrap .field label').filter({ hasText: 'Phone' }).first().innerText();
check('Australia selected in phone label', phoneLabel.includes('+61'), phoneLabel.trim());
check('dial code shows +61', (await page.locator('.form-wrap .iti__selected-dial-code').first().innerText()).includes('+61'));

// ---------- 5. Form validation journey ----------
const form = page.locator('.hero form');
const submitForm = async () => {
  const btn = form.locator('.btn--gold');
  try {
    await btn.scrollIntoViewIfNeeded({ timeout: 5000 });
    await page.waitForTimeout(250);
    await btn.click({ timeout: 5000 });
  } catch {
    await btn.click({ force: true, timeout: 5000 });
  }
  await page.waitForTimeout(300);
};

await submitForm();
check('empty submit shows name errors', (await form.locator('.error-text').count()) >= 4);

await form.locator('input[name="firstName"]').fill('Sarah');
await form.locator('input[name="lastName"]').fill('Mitchell');
await form.locator('input[name="email"]').fill('not-an-email');
await submitForm();
check('invalid email flagged', await form.locator('.error-text').filter({ hasText: 'valid email' }).isVisible());

// phone left empty -> phone error (and consent still checked)
await form.locator('input[name="email"]').fill('sarah.mitchell@example.com');
await submitForm();
check('empty phone flagged', await form.locator('.error-text').filter({ hasText: 'phone' }).isVisible());

// valid phone + unchecked consent -> consent error, but NO phone error
await form.locator('input[type="tel"]').fill('0412345678');
await form.locator('.form__consent input').uncheck();
await submitForm();
check(
  'valid phone accepted (no phone error)',
  (await form.locator('.error-text').filter({ hasText: 'phone' }).count()) === 0
);
check('consent required', await form.locator('.error-text').filter({ hasText: 'accept' }).isVisible());
await form.locator('.form__consent input').check();

// honeypot guard: fill hidden field, submit must silently drop
await form.locator('.form__honey').fill('spam-bot');
await submitForm();
await page.waitForTimeout(500);
check('honeypot submission silently dropped', postedPayload === null);
await form.locator('.form__honey').fill('');

// ---------- 6. Successful submit -> thank-you ----------
await submitForm();
await page.waitForTimeout(150); // check before the 600ms redirect fires
check('success message shown', await form.locator('.form__success').isVisible());
check('payload posted with correct offer', postedPayload?.offerName === 'BinnacrestAI-Site', postedPayload && JSON.stringify(postedPayload).slice(0, 140));
check('payload phone is E.164', /^\+61/.test(postedPayload?.phone || ''), postedPayload?.phone);
await page.waitForTimeout(1400);
check('redirected to /thank-you', page.url().includes('/thank-you'));
check('thank-you shows steps', (await page.locator('.thankyou__steps li').count()) === 3);
await page.locator('a.btn:has-text("Back to home")').click();
await page.waitForTimeout(500);
check('back to home works', page.url() === BASE + '/');

// ---------- 7. Navigation journey ----------
await page.locator('header a:has-text("About Us")').first().click();
await page.waitForTimeout(500);
check('nav to /about-us', page.url().includes('/about-us'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('header a:has-text("How It Works")').first().click();
await page.waitForTimeout(500);
check('nav to /how-it-works', page.url().includes('/how-it-works'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('header a:has-text("FAQs")').first().click();
await page.waitForTimeout(500);
check('nav to /faq', page.url().includes('/faq'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('header a:has-text("Contact Us")').first().click();
await page.waitForTimeout(500);
check('nav to /contact-us', page.url().includes('/contact-us'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('header a:has-text("Sign Up")').first().click();
await page.waitForTimeout(500);
check('nav to /sign-up', page.url().includes('/sign-up'));
await page.goto(BASE, { waitUntil: 'networkidle' });

// mid-page CTAs
await page.locator('.legitimacy__card a.btn').scrollIntoViewIfNeeded();
await page.locator('.legitimacy__card a.btn').click();
await page.waitForTimeout(500);
check('legitimacy CTA -> /sign-up', page.url().includes('/sign-up'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('main a[href="/faq"]').first().click();
await page.waitForTimeout(500);
check('FAQ page link -> /faq', page.url().includes('/faq'));
await page.goto(BASE, { waitUntil: 'networkidle' });

// footer links + logo
await page.locator('footer a:has-text("Privacy Policy")').scrollIntoViewIfNeeded();
await page.locator('footer a:has-text("Privacy Policy")').click();
await page.waitForTimeout(500);
check('footer -> /privacy-policy', page.url().includes('/privacy-policy'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('footer a:has-text("Terms of Use")').click();
await page.waitForTimeout(500);
check('footer -> /terms-of-use', page.url().includes('/terms-of-use'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('footer a:has-text("Risk Disclosure")').click();
await page.waitForTimeout(500);
check('footer -> /risk-disclosure', page.url().includes('/risk-disclosure'));
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('.logo').first().click();
await page.waitForTimeout(500);
check('logo -> home', page.url() === BASE + '/');

// ---------- 8. Mobile journey ----------
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('.header__burger').click();
await page.waitForTimeout(250);
await page.locator('.mobile-menu a:has-text("Sign Up")').click();
await page.waitForTimeout(500);
check('mobile menu sign up -> /sign-up', page.url().includes('/sign-up'));
await page.setViewportSize({ width: 1440, height: 900 });

check('zero page errors during journey', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
console.log(results.join('\n'));
const fails = results.filter((r) => r.startsWith('FAIL')).length;
console.log(`\n${results.length - fails}/${results.length} journey steps passed`);
process.exit(fails ? 1 : 0);
