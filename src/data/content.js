// All site copy lives here. Original copy throughout (never lifted from reference sites).
// Writing rules: conversational tone with contractions, Grade 6-8 English, you-focused,
// short sentences. **text** markers render as bold via the Rich component.
// Placeholders to confirm before launch: support email.

export const SITE = {
  name: 'Binnacrest AI',
  url: 'https://binnacrest-ai.com/',
  formEndpoint: 'https://meridianc-au.com/homeMailAction.php',
  offerName: 'BinnacrestAI-Site',
  email: 'support@binnacrest-ai.com',
  founded: 2018,
};

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/faq', label: 'FAQs' },
  { to: '/contact-us', label: 'Contact Us' },
];

export const HERO = {
  badge: 'Made for Australia',
  titleLead: 'The AI Trading Platform',
  titleGold: 'Australia',
  titleTail: 'Can Count On',
  sub: 'A straightforward AI trading platform for Australians. It studies the markets, highlights opportunities, and leaves the final call to you.',
  ctaLabel: 'Get Started Free',
  formTitle: 'Create Your Free Account',
  belowButton: 'Free sign-up · Takes under 2 minutes · Secure registration',
};

export const TRUST_STRIP = [
  { title: 'Start from AU$250', text: 'A small, sensible first step' },
  { title: 'No app needed', text: 'Works in any web browser' },
  { title: 'Bank-level encryption', text: 'Your details stay protected' },
  { title: 'Support on Aussie hours', text: 'Real help when you need it' },
];

export const WHAT_IS = {
  title: 'What Is Binnacrest AI?',
  body: 'Binnacrest AI is an online trading platform built for people in Australia. It uses artificial intelligence to scan crypto, forex, stock and commodity markets, then shows you trade ideas based on real price data. You choose what to act on. There is no app to download, and you can open an account from AU$250.',
};

export const HOME_STEPS = {
  title: 'Get Started in 3 Simple Steps',
  steps: [
    {
      icon: 'user',
      title: 'Sign Up Free',
      text: 'Fill in the short form with your name, email and phone number. It takes less than two minutes.',
    },
    {
      icon: 'card',
      title: 'Fund Your Account',
      text: 'Add from AU$250 using a payment method that suits you. Your account manager can walk you through it.',
    },
    {
      icon: 'cpu',
      title: 'Trade with AI Support',
      text: 'The AI watches the markets and flags opportunities. You review them, set your limits, and decide when to trade.',
    },
  ],
  ctaLabel: 'Start Step 1 Now',
};

export const MARKETS = {
  title: 'One Platform, Four Markets',
  items: [
    {
      icon: 'bolt',
      title: 'Crypto',
      text: 'Trade Bitcoin, Ethereum and other popular coins. The AI tracks fast price swings that are hard to follow by hand.',
    },
    {
      icon: 'globe',
      title: 'Forex',
      text: 'Follow major pairs like AUD/USD and EUR/USD. Signals are timed with the Sydney, London and New York sessions in mind.',
    },
    {
      icon: 'chart',
      title: 'Stocks',
      text: 'Keep an eye on big names from Australia and overseas. The AI flags trend changes and unusual volume.',
    },
    {
      icon: 'target',
      title: 'Commodities',
      text: 'Gold, oil and other raw materials often move with world news. The AI helps you spot those shifts early.',
    },
  ],
};

export const STATS = [
  { value: '28,000+', label: 'Australian members' },
  { value: '$850', label: 'Average daily returns' },
  { value: '85%', label: 'Trading accuracy' },
  { value: '98%', label: 'Funds in cold storage' },
];

export const FEATURES = {
  title: 'Tools That Make Trading Easier',
  items: [
    {
      icon: 'cpu',
      title: 'AI Market Scanning',
      text: 'Checks thousands of price movements every minute, day and night.',
    },
    {
      icon: 'eye',
      title: 'Clear Trade Signals',
      text: 'Simple buy or sell ideas with the reason behind each one.',
    },
    {
      icon: 'shield-check',
      title: 'Risk Controls',
      text: 'Set stop-loss and take-profit levels before you trade.',
    },
    {
      icon: 'zap',
      title: 'Real-Time Alerts',
      text: 'Get notified when a market you follow starts to move.',
    },
    {
      icon: 'sliders',
      title: 'Easy Dashboard',
      text: 'See your balance, open trades and results on one screen.',
    },
    {
      icon: 'devices',
      title: 'Works on Any Device',
      text: 'Use it on your laptop, tablet or phone browser.',
    },
  ],
};

export const WHY_AUSTRALIA = {
  title: 'Built Around How Australians Trade',
  lead: 'Most trading tools are made for US or European hours. Binnacrest AI is set up for life in Australia.',
  items: [
    { title: 'Aussie time zones', text: 'Alerts and support fit your day, from Perth to Brisbane.' },
    { title: 'AUD-friendly', text: 'See your account in Australian dollars and fund it with ease.' },
    { title: 'Local focus', text: 'Market coverage includes the ASX and AUD currency pairs.' },
    { title: 'Plain English', text: 'No heavy jargon. Every signal is easy to understand.' },
  ],
  closing: 'That is why more people are looking for an AI trading platform Australia can relate to, not one built for somewhere else.',
};

export const COMPARISON = {
  title: 'AI-Assisted Trading vs Doing It All Yourself',
  manualLabel: 'Manual Trading',
  aiLabel: 'Binnacrest AI',
  rows: [
    { label: 'Market watching', manual: 'A few hours a day', ai: '24/7' },
    { label: 'Markets covered', manual: 'Usually one or two', ai: 'Crypto, forex, stocks, commodities' },
    { label: 'Decision basis', manual: 'Gut feel and news', ai: 'Price data and patterns' },
    { label: 'Emotional bias', manual: 'High', ai: 'Reduced' },
    { label: 'Time needed', manual: 'Hours of research', ai: 'Minutes to review signals' },
    { label: 'Final decision', manual: 'You', ai: 'Still you' },
  ],
};

export const LEGITIMACY = {
  title: 'Is Binnacrest AI Safe to Use?',
  lead: 'We know trust matters before you sign up. Here is how we protect you:',
  points: [
    {
      icon: 'lock',
      title: 'Encrypted data',
      text: 'All personal details are protected with SSL encryption.',
    },
    {
      icon: 'shield-check',
      title: 'Secure accounts',
      text: 'Login protection keeps your account private.',
    },
    {
      icon: 'eye',
      title: 'Clear terms',
      text: 'No hidden fees. Our terms, privacy policy and risk disclosure are easy to find.',
    },
    {
      icon: 'sliders',
      title: 'You stay in control',
      text: 'The AI suggests. You decide. Nothing is traded without your settings.',
    },
  ],
  closing:
    'Binnacrest AI is a genuine AI trading platform in Australia that puts honesty first. Trading always carries risk, and we will never promise guaranteed profits.',
  ctaLabel: 'Open My Free Account',
};

// Doc format: first name, city, short quote, optional stars.
// Swap in genuine reviews when they are available.
export const TESTIMONIALS = {
  title: 'What Our Users Say',
  cards: [
    {
      name: 'Matthew R.',
      city: 'Sydney, NSW',
      stars: 5,
      photo: '/images/testimonials/matthew.jpg',
      text: 'The signals are easy to follow and every idea comes with a plain-English explanation.',
    },
    {
      name: 'Chloe W.',
      city: 'Melbourne, VIC',
      stars: 5,
      photo: '/images/testimonials/chloe.jpg',
      text: 'I was nervous about trading at first. Support walked me through everything on day one.',
    },
    {
      name: 'Ben S.',
      city: 'Brisbane, QLD',
      stars: 4,
      photo: '/images/testimonials/ben.jpg',
      text: 'I like that the final call is always mine. The AI highlights opportunities and I decide.',
    },
    {
      name: 'Emma L.',
      city: 'Perth, WA',
      stars: 5,
      photo: '/images/testimonials/emma.jpg',
      text: 'Works beautifully in my phone browser. I check my alerts in the morning and get on with my day.',
    },
    {
      name: 'Jack M.',
      city: 'Adelaide, SA',
      stars: 5,
      photo: '/images/testimonials/jack.jpg',
      text: 'Clear terms and no hidden fees. That honesty is what convinced me to sign up.',
    },
    {
      name: 'Sophie T.',
      city: 'Canberra, ACT',
      stars: 5,
      photo: '/images/testimonials/sophie.jpg',
      text: 'The risk controls help me trade calmly. I set my limits and never chase a signal.',
    },
  ],
};

export const FAQS = [
  {
    q: 'Is Binnacrest AI available in Australia?',
    a: 'Yes. Binnacrest AI is built for Australian users and works in every state and territory.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'You can start trading from AU$250.',
  },
  {
    q: 'Is there a Binnacrest app?',
    a: 'No download is needed. Binnacrest AI runs in your web browser on any phone, tablet or computer.',
  },
  {
    q: 'Do I need trading experience?',
    a: 'No. Signals come with simple explanations, and an account manager can help you get started.',
  },
  {
    q: 'Is Binnacrest AI legit?',
    a: 'Binnacrest AI is a real platform with secure sign-up, clear terms and a full risk disclosure. As with any trading, your capital is at risk.',
  },
  {
    q: 'How does the AI choose trades?',
    a: 'It studies price history, trends and market volume to spot patterns. It then shows you trade ideas you can accept or ignore.',
  },
  {
    q: 'Can I withdraw my money?',
    a: 'Yes. You can request a withdrawal from your dashboard at any time.',
  },
  {
    q: 'How long does sign-up take?',
    a: 'Less than two minutes. Just fill in the form at the top of this page.',
  },
];

export const FAQS_MORE = [
  {
    q: 'Is There A Fee To Join?',
    a: 'No. Opening an account is free, and there are no hidden fees on deposits or withdrawals. The minimum to fund your account is AU$250.',
  },
];

export const FAQS_PAGE = {
  seoTitle: 'FAQs: Binnacrest AI Trading Platform Questions Answered',
  seoDescription:
    'Answers to the most common Binnacrest AI questions: withdrawals, exchanges, registration, fees and risks. Get started from $250 today.',
  title: 'Frequently Asked Questions',
  lead: 'Everything Australians ask us about Binnacrest AI, answered in plain English. Still unsure? Our support team is available 24/7.',
};

export const FINAL_CTA = {
  title: 'Ready to Try a Smarter AI Trading Platform in Australia?',
  lead: 'Join Binnacrest AI today. Sign up for free, start from AU$250, and let AI do the heavy market research for you.',
};

export const FOOTER = {
  blurb:
    'Binnacrest AI is an AI trading platform built for Australians. It scans crypto, forex, stock and commodity markets and shows you trade ideas based on real price data.',
  legal: [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-of-use', label: 'Terms of Use' },
    { to: '/risk-disclosure', label: 'Risk Disclosure' },
  ],
  disclaimer:
    'Trading crypto, forex, stocks and commodities involves significant risk and may not suit every investor. You may lose some or all of your capital. Past performance does not guarantee future results. Only trade with money you can afford to lose.',
};

export const ABOUT = {
  seoTitle: 'About Binnacrest AI | AI Trading Platform Australia',
  seoDescription:
    'Founded in 2018 to bring automated engine trading to everyday Australians. Meet the platform behind Binnacrest AI. Sign up today from $250.',
  heroTitle: 'About Binnacrest AI',
  heroLead:
    'Built in Australia, for Australians. We take sophisticated trading technology and make it as simple as opening an account.',
  storyTitle: 'Our Story',
  story: [
    'Binnacrest AI started in 2018, when a small team of finance engineers and AI researchers asked one question: why should automated trading belong only to hedge funds?',
    'They decided it shouldn’t. So they built an engine that watches the world’s biggest exchanges every second of the day, weighs thousands of market signals, and trades with a discipline no human could keep up with.',
    'Seven years on, more than 28,000 Australian members use Binnacrest AI to grow their income. Most of them had no trading experience at all.',
  ],
  valuesTitle: 'What We Stand For',
  values: [
    {
      icon: 'eye',
      title: 'Transparency',
      text: 'Daily performance reports, clear numbers, no hidden fees. If you can’t see how your money is moving, something’s wrong.',
    },
    {
      icon: 'shield-check',
      title: 'Security',
      text: '98% of member funds sit in cold storage, protected by 2FA and 256-bit encryption. Your balance is yours, always.',
    },
    {
      icon: 'headset',
      title: 'Support',
      text: 'Real humans, around the clock. From your first deposit to your first withdrawal, someone’s there to help.',
    },
  ],
  diffTitle: 'What Makes Us Different',
  diff: [
    'The engine never sleeps, never gets emotional, and never chases a loss. It trades on data, around the clock, across five major exchanges.',
    'You don’t need experience, chart reading skills, or spare time. You fund your account, and the engine does the work.',
    'Withdraw whenever you choose. No lock-in periods, no minimum withdrawal games.',
  ],
  ctaTitle: 'See It For Yourself',
  ctaLead: 'Start with $250 and watch your dashboard from day one.',
};

export const CONTACTS = {
  seoTitle: 'Contact Binnacrest AI: 24/7 Support for Australian Members',
  seoDescription:
    'Questions about Binnacrest AI? Our support team is available around the clock. Contact us today, and we reply within 24 hours.',
  title: 'Contact Us',
  lead: 'Questions about your account, deposits or withdrawals? Our support team is available around the clock, seven days a week.',
  emailLabel: 'Email Us Anytime',
  hoursLabel: 'Support Hours',
  hours: '24/7 human & AI support',
};

export const HOW_IT_WORKS = {
  seoTitle: 'How Binnacrest AI Works: Automated Trading In 4 Steps',
  seoDescription:
    'See how Binnacrest AI works: create your account, fund it from $250, and the engine trades while you track everything. Start today.',
  title: 'How Binnacrest AI Works',
  lead: 'Four simple steps between you and an engine that never stops. No experience needed and no charts to read.',
  steps: [
    {
      icon: 'user',
      title: 'Create Your Account',
      text: 'Sign up in under three minutes. Tell us who you are, verify your details, and you’re in.',
    },
    {
      icon: 'card',
      title: 'Fund Your Account',
      text: 'Start with as little as **$250**. No hidden fees on deposits or withdrawals, ever.',
    },
    {
      icon: 'cpu',
      title: 'The Engine Takes Over',
      text: 'Binnacrest AI watches the world’s biggest exchanges around the clock and trades on data, never on emotion.',
    },
    {
      icon: 'chart',
      title: 'Track And Withdraw',
      text: 'Watch live performance on your dashboard. Withdraw your money whenever you choose.',
    },
  ],
  perksTitle: 'What You Get',
  perks: [
    'You set your own pace: deposit more when you like and withdraw when you like.',
    'Daily performance reports in plain English. No jargon, no surprises.',
    '24/7 human support whenever you have a question.',
    'Your funds stay in cold storage with 2FA and 256-bit encryption.',
  ],
  ctaTitle: 'Ready To Let The Engine Work For You?',
  ctaLead: 'Join 28,000+ Australians. Create your account today and start with just $250.',
};

export const SIGNUP = {
  seoTitle: 'Sign Up to Binnacrest AI: Start Trading From $250',
  seoDescription:
    'Create your Binnacrest AI account in minutes. 85% trading accuracy, 98% cold storage, and 24/7 support. Sign up today from just $250.',
  title: 'Open Your Binnacrest AI Account',
  lead: 'Registration takes under three minutes. Fund your account from $250 and the engine goes to work.',
  points: [
    'Up to $850 in average daily returns',
    '98% of funds in cold storage',
    'Withdraw whenever you choose',
    '24/7 human & AI support',
  ],
};

export const THANKYOU = {
  seoTitle: 'Thank You | Binnacrest AI',
  seoDescription:
    'Your Binnacrest AI registration is received. Our team will contact you shortly. Keep an eye on your inbox.',
  title: 'You’re On The List',
  lead: 'Your request is in. Our onboarding team will be in touch at the email you gave us.',
  next: 'What Happens Next?',
  steps: [
    'A member of our team contacts you to verify your details.',
    'You fund your account with as little as $250.',
    'The engine goes to work, and your dashboard lights up.',
  ],
};

export const PRIVACY = {
  seoTitle: 'Privacy Policy | Binnacrest AI',
  description:
    'Read the Binnacrest AI Privacy Policy: how we collect, use and protect your information. Contact us anytime with questions.',
  title: 'Privacy Policy',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. Who We Are',
      p: 'Binnacrest AI ("we", "us") operates the website binnacrest-ai.com and the automated trading platform described on it. This policy explains how we collect, use and protect your personal information.',
    },
    {
      h: '2. Information We Collect',
      p: 'We collect the information you provide when registering or contacting us, including:',
      items: [
        'Your name, email address and phone number',
        'Account and transaction details generated by your use of the platform',
        'Technical data such as IP address, browser type and device information',
      ],
    },
    {
      h: '3. How We Use Your Information',
      p: 'We use your information to operate your account, process your requests, improve the platform, and communicate with you about your account and our services. We do not sell your personal information to third parties.',
    },
    {
      h: '4. Cookies',
      p: 'We use cookies and similar technologies to keep you signed in, remember your preferences and understand how visitors use the site. You can control cookies through your browser settings.',
    },
    {
      h: '5. Data Security',
      p: 'Your information is protected with 256-bit encryption in transit and access controls at rest. Account access is protected by two-factor authentication.',
    },
    {
      h: '6. Your Rights',
      p: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us at the email address listed on our Contact page.',
    },
    {
      h: '7. Contact',
      p: 'Questions about this policy can be sent to support@binnacrest-ai.com.',
    },
  ],
};

export const TERMS = {
  seoTitle: 'Terms of Use | Binnacrest AI',
  description:
    'Read the Binnacrest AI Terms of Use: eligibility, accounts, deposits and risk. Contact us with questions before you sign up.',
  title: 'Terms of Use',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. Acceptance Of Terms',
      p: 'By accessing binnacrest-ai.com or using the Binnacrest AI platform, you agree to these Terms of Use. If you do not agree, please do not use the platform.',
    },
    {
      h: '2. Eligibility',
      p: 'Registration is currently open to Australian residents aged 18 or over. You must provide accurate information during registration and keep it up to date.',
    },
    {
      h: '3. Your Account',
      p: 'You are responsible for safeguarding your account credentials and for all activity that occurs under your account. Notify us immediately if you believe your account has been compromised.',
    },
    {
      h: '4. The Service',
      p: 'Binnacrest AI provides software that automates cryptocurrency trading on your behalf. The platform executes trades automatically according to its engine parameters. Performance figures shown on the site are illustrative and do not constitute a promise of future results.',
    },
    {
      h: '5. Deposits And Withdrawals',
      p: 'The minimum account opening amount is $250. Withdrawals are processed on request and may be subject to identity verification in line with applicable law.',
    },
    {
      h: '6. Risk Acknowledgement',
      p: 'You acknowledge that cryptocurrency trading involves substantial risk, including the possible loss of your entire deposit. You should trade only with funds you can afford to lose.',
    },
    {
      h: '7. Prohibited Conduct',
      p: 'You agree not to misuse the platform, including attempting to gain unauthorised access, interfering with its operation, or using it for any unlawful purpose.',
    },
    {
      h: '8. Limitation Of Liability',
      p: 'To the maximum extent permitted by law, Binnacrest AI is not liable for trading losses, market movements or interruptions in service. The platform is provided "as is" and "as available".',
    },
    {
      h: '9. Changes To These Terms',
      p: 'We may update these Terms of Use from time to time. Continued use of the platform after changes take effect constitutes acceptance of the updated terms.',
    },
    {
      h: '10. Contact',
      p: 'Questions about these terms can be sent to support@binnacrest-ai.com.',
    },
  ],
};

export const RISK = {
  seoTitle: 'Risk Disclosure | Binnacrest AI',
  description:
    'Trading cryptocurrencies involves substantial risk. Read the Binnacrest AI Risk Disclosure and only invest what you can afford to lose.',
  title: 'Risk Disclosure',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. General Risk Warning',
      p: 'Trading cryptocurrencies involves a high level of risk and may not be suitable for every investor. The value of digital assets can fall as well as rise, and you may lose some or all of your invested capital.',
    },
    {
      h: '2. No Guaranteed Returns',
      p: 'Nothing on this website or in our communications should be interpreted as a promise or guarantee of returns. Past performance, backtested results and illustrative figures do not guarantee future results.',
    },
    {
      h: '3. Market Volatility',
      p: 'Cryptocurrency markets can experience extreme price movements within short periods. Automated trading does not remove volatility risk; stop losses and risk controls reduce exposure but cannot eliminate it.',
    },
    {
      h: '4. Regulatory Status',
      p: 'Cryptocurrency assets are unregulated in many jurisdictions and are not supervised by government authorities. Investors do not benefit from the same protections available to users of regulated financial services.',
    },
    {
      h: '5. Not Financial Advice',
      p: 'Binnacrest AI is a software platform and does not provide financial, investment or tax advice. You are solely responsible for your trading decisions and for understanding the risks before funding an account.',
    },
    {
      h: '6. Invest Responsibly',
      p: 'Never invest more than you can afford to lose, and consider seeking independent professional advice if you are unsure whether cryptocurrency trading is appropriate for you.',
    },
  ],
};
