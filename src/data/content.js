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
  { to: '/features', label: 'Features' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQs' },
  { to: '/contact-us', label: 'Contact Us' },
];

export const HERO = {
  badge: 'Made for Australia',
  titleLead: 'The AI Trading Platform',
  titleGold: 'Australia',
  titleTail: 'Can Count On',
  sub: 'A simple AI trading platform built for Australians. It watches the markets, picks out opportunities, and leaves the final call to you.',
  bullets: [
    { icon: 'cpu', text: 'AI scans the markets 24/7' },
    { icon: 'card', text: 'Begin with just AU$250' },
    { icon: 'devices', text: 'Nothing to download' },
    { icon: 'clock', text: 'Register free in under 2 minutes' },
  ],
  ctaLabel: 'Get Started Free',
  formTitle: 'Create Your Free Account',
  belowButton: 'Free sign-up · Takes under 2 minutes · Secure registration',
};

export const TRUST_STRIP = [
  { title: 'Start from AU$250', text: 'A sensible first step' },
  { title: 'No app needed', text: 'Runs in any web browser' },
  { title: 'Bank-level encryption', text: 'Your details stay safe' },
  { title: 'Support on Aussie hours', text: 'Help when you need it' },
];

export const WHAT_IS = {
  title: 'What Is Binnacrest AI?',
  body: 'Binnacrest AI is an online trading platform designed for people in Australia. It uses artificial intelligence to watch crypto, forex, stock and commodity markets and flag trade ideas that are based on real price data. You decide what to act on. Nothing needs to be downloaded, and you can open an account from AU$250.',
};

export const HOME_STEPS = {
  title: 'Get Started in 3 Simple Steps',
  steps: [
    {
      icon: 'user',
      title: 'Sign Up Free',
      text: 'Enter your name, email and phone number in the short form. The whole thing takes under two minutes.',
    },
    {
      icon: 'card',
      title: 'Fund Your Account',
      text: 'Add from AU$250 with a payment method that works for you. Your account manager can guide you through it.',
    },
    {
      icon: 'cpu',
      title: 'Trade with AI Support',
      text: 'The AI keeps an eye on the markets and flags opportunities. You review them, set your limits, and choose when to trade.',
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
      text: 'Trade Bitcoin, Ethereum and other well-known coins. The AI tracks the fast price swings that are hard to follow on your own.',
    },
    {
      icon: 'globe',
      title: 'Forex',
      text: 'Follow major pairs like AUD/USD and EUR/USD. Signals are timed around the Sydney, London and New York sessions.',
    },
    {
      icon: 'chart',
      title: 'Stocks',
      text: 'Watch big names from Australia and abroad. The AI flags trend changes and unusual trading volume.',
    },
    {
      icon: 'target',
      title: 'Commodities',
      text: 'Gold, oil and other raw materials tend to move with world news. The AI helps you catch those shifts early.',
    },
  ],
};

export const FEATURES = {
  title: 'Tools That Make Trading Easier',
  items: [
    {
      icon: 'cpu',
      title: 'AI Market Scanning',
      text: 'Reviews thousands of price movements every minute, day and night.',
    },
    {
      icon: 'eye',
      title: 'Clear Trade Signals',
      text: 'Straightforward buy or sell ideas, each with the reasoning behind it.',
    },
    {
      icon: 'shield-check',
      title: 'Risk Controls',
      text: 'Set stop-loss and take-profit levels before you place a trade.',
    },
    {
      icon: 'zap',
      title: 'Real-Time Alerts',
      text: 'Get notified the moment a market you follow starts moving.',
    },
    {
      icon: 'sliders',
      title: 'Easy Dashboard',
      text: 'Your balance, open trades and results in one clean screen.',
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
  lead: 'Most trading tools are built for US or European hours. Binnacrest AI is designed for the way life works in Australia.',
  items: [
    { title: 'Aussie time zones', text: 'Alerts and support fit your day, from Perth to Brisbane.' },
    { title: 'AUD-friendly', text: 'See your account in Australian dollars and fund it without friction.' },
    { title: 'Local focus', text: 'Market coverage includes the ASX and AUD currency pairs.' },
    { title: 'Plain English', text: 'No dense jargon. Every signal is easy to understand.' },
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
  lead: 'Trust matters, and we understand that. Here is how we look after you:',
  points: [
    {
      icon: 'lock',
      title: 'Encrypted data',
      text: 'Your personal details are protected with SSL encryption.',
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
      text: 'Every signal comes with a plain-English explanation, so I always understand what I am looking at.',
    },
    {
      name: 'Chloe W.',
      city: 'Melbourne, VIC',
      stars: 5,
      photo: '/images/testimonials/chloe.jpg',
      text: 'I had never traded before. Support walked me through the whole setup on my first day.',
    },
    {
      name: 'Ben S.',
      city: 'Brisbane, QLD',
      stars: 4,
      photo: '/images/testimonials/ben.jpg',
      text: 'I like that the final call is always mine. The AI points things out and I decide what to do.',
    },
    {
      name: 'Emma L.',
      city: 'Perth, WA',
      stars: 5,
      photo: '/images/testimonials/emma.jpg',
      text: 'It runs smoothly in my phone browser. I check my alerts in the morning and get on with my day.',
    },
    {
      name: 'Jack M.',
      city: 'Adelaide, SA',
      stars: 5,
      photo: '/images/testimonials/jack.jpg',
      text: 'Clear terms and no hidden fees. That honesty is what made me sign up.',
    },
    {
      name: 'Sophie T.',
      city: 'Canberra, ACT',
      stars: 5,
      photo: '/images/testimonials/sophie.jpg',
      text: 'The risk controls keep me calm. I set my limits once and never chase a signal.',
    },
  ],
};

export const FAQS = [
  {
    q: 'Is Binnacrest AI available in Australia?',
    a: 'Yes. Binnacrest AI is made for Australian users and works in every state and territory.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'You can begin trading from AU$250.',
  },
  {
    q: 'Is there a Binnacrest app?',
    a: 'No download is required. Binnacrest AI runs in your web browser on any phone, tablet or computer.',
  },
  {
    q: 'Do I need trading experience?',
    a: 'No. Every signal comes with a simple explanation, and your account manager can help you get started.',
  },
  {
    q: 'Is Binnacrest AI legit?',
    a: 'Binnacrest AI is a real platform with secure sign-up, clear terms and full risk disclosure. As with any trading, your capital is at risk.',
  },
  {
    q: 'How does the AI choose trades?',
    a: 'It studies price history, trends and market volume to find patterns, then shows you trade ideas you can accept or ignore.',
  },
  {
    q: 'Can I withdraw my money?',
    a: 'Yes. You can request a withdrawal from your dashboard at any time.',
  },
  {
    q: 'How long does sign-up take?',
    a: 'Under two minutes. Just fill in the form at the top of this page.',
  },
];

export const FAQS_MORE = [
  {
    q: 'Is There A Fee To Join?',
    a: 'No. Opening an account is free, and there are no hidden fees on deposits or withdrawals. The minimum to fund your account is AU$250.',
  },
];

export const FAQS_PAGE = {
  seoTitle: 'Binnacrest AI FAQs: AI Trading Platform in Australia',
  seoDescription:
    'Answers to common Binnacrest AI questions: deposits, withdrawals, AI signals, markets and sign-up. Start from AU$250 with no app needed.',
  title: 'Frequently Asked Questions',
  lead: 'The questions Australians ask us most about Binnacrest AI, answered in plain English. Still unsure? Our team is here on Aussie hours.',
};

export const FEATURES_PAGE = {
  seoTitle: 'Binnacrest AI Features: Tools That Make Trading Easy',
  seoDescription:
    'Explore Binnacrest AI features: 24/7 market scanning, clear trade signals, risk controls, real-time alerts and a dashboard that works on any device.',
  title: 'Binnacrest AI Features',
  lead: 'Everything you need to trade with confidence: AI scanning, clear signals, risk controls and a dashboard that works anywhere.',
};

export const REVIEWS_PAGE = {
  seoTitle: 'Binnacrest AI Reviews: Feedback From Australian Users',
  seoDescription:
    'Read Binnacrest AI reviews from Australian users. See what members say about AI signals, Aussie-hours support and getting started from AU$250.',
  title: 'Binnacrest AI Reviews',
  lead: 'What Australian users say about Binnacrest AI: the signals, the support and getting started from AU$250.',
};

export const FINAL_CTA = {
  title: 'Ready to Make Smarter Trading Decisions in Australia?',
  lead: 'Join Binnacrest AI today. Sign up free, start from AU$250, and let AI handle the heavy market research while you make the calls.',
};

export const FOOTER = {
  blurb:
    'Binnacrest AI is an AI trading platform built for Australians. It scans crypto, forex, stock and commodity markets and surfaces trade ideas based on real price data.',
  legal: [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-of-use', label: 'Terms of Use' },
    { to: '/risk-disclosure', label: 'Risk Disclosure' },
  ],
  disclaimer:
    'Trading crypto, forex, stocks and commodities involves significant risk and may not suit every investor. You may lose some or all of your capital. Past performance does not guarantee future results. Only trade with money you can afford to lose.',
};

export const STATS = [
  { value: 'AU$250', label: 'Minimum to start' },
  { value: '4', label: 'Markets on one platform' },
  { value: '2 min', label: 'Free sign-up' },
  { value: '24/7', label: 'AI market scanning' },
];

export const ABOUT = {
  seoTitle: 'About Binnacrest AI: AI Trading Platform Australia',
  seoDescription:
    'Learn about Binnacrest AI: an AI trading platform built in Australia, for Australians. Simple sign-up, four markets and support on Aussie hours.',
  heroTitle: 'About Binnacrest AI',
  heroLead:
    'Built in Australia, for Australians. We take advanced trading technology and make it as easy as opening an account.',
  storyTitle: 'Our Story',
  story: [
    'Binnacrest AI started in 2018, when a small team of finance engineers and AI researchers asked one question: why should powerful trading tools belong only to professionals?',
    'They decided it should not. So they built a platform that watches the world’s biggest markets around the clock, weighs thousands of signals, and turns them into trade ideas anyone can understand.',
    'Seven years on, Australians in every state and territory use Binnacrest AI to follow the markets. Most of them started with no trading experience at all.',
  ],
  valuesTitle: 'What We Stand For',
  values: [
    {
      icon: 'eye',
      title: 'Transparency',
      text: 'Clear numbers and daily updates. If you cannot see how your account is moving, something is wrong.',
    },
    {
      icon: 'shield-check',
      title: 'Security',
      text: 'SSL encryption and login protection keep your details and your account safe.',
    },
    {
      icon: 'headset',
      title: 'Support',
      text: 'Real people on Aussie hours. From your first deposit to your first withdrawal, help is there.',
    },
  ],
  diffTitle: 'What Makes Us Different',
  diff: [
    'The AI watches four markets at once — crypto, forex, stocks and commodities — and never gets tired or emotional.',
    'You do not need experience, chart skills or spare time. You fund your account and review the ideas the AI surfaces.',
    'Withdraw whenever you choose. No lock-in periods and no withdrawal games.',
  ],
  ctaTitle: 'See It For Yourself',
  ctaLead: 'Start from AU$250 and review your first AI signals today.',
};

export const CONTACTS = {
  seoTitle: 'Contact Binnacrest AI: Support for Australian Members',
  seoDescription:
    'Questions about Binnacrest AI? Our Australian support team helps with accounts, deposits and withdrawals on Aussie hours, seven days a week.',
  title: 'Contact Us',
  lead: 'Questions about your account, deposits or withdrawals? Our support team is here on Aussie hours, seven days a week.',
  emailLabel: 'Email Us Anytime',
  hoursLabel: 'Support Hours',
  hours: 'Aussie hours, 7 days a week',
};

export const HOW_IT_WORKS = {
  seoTitle: 'How Binnacrest AI Works: Simple AI-Assisted Trading',
  seoDescription:
    'See how Binnacrest AI works: sign up free, fund from AU$250, then review AI trade ideas across four markets while you stay in control.',
  title: 'How Binnacrest AI Works',
  lead: 'Four simple steps between you and AI-assisted trading. No experience needed and no charts to study.',
  steps: [
    {
      icon: 'user',
      title: 'Create Your Account',
      text: 'Sign up in under three minutes. Tell us who you are, verify your details, and you are in.',
    },
    {
      icon: 'card',
      title: 'Fund Your Account',
      text: 'Start with as little as AU$250. No hidden fees on deposits or withdrawals, ever.',
    },
    {
      icon: 'cpu',
      title: 'Review AI Trade Ideas',
      text: 'The AI scans four markets around the clock and flags opportunities. You decide which ones to act on.',
    },
    {
      icon: 'chart',
      title: 'Track And Withdraw',
      text: 'Keep an eye on alerts and results from your dashboard. Withdraw your money whenever you choose.',
    },
  ],
  perksTitle: 'What You Get',
  perks: [
    'You set your own pace: deposit more when you like and withdraw when you like.',
    'Daily updates in plain English. No jargon, no surprises.',
    'Support on Aussie hours whenever you have a question.',
    'SSL encryption and login protection on your account.',
  ],
  ctaTitle: 'Ready To Let AI Do The Market Research For You?',
  ctaLead: 'Join Australians in every state and territory. Create your account today and start from AU$250.',
};

export const SIGNUP = {
  seoTitle: 'Sign Up to Binnacrest AI: Start Trading from AU$250',
  seoDescription:
    'Create your Binnacrest AI account in under two minutes. Start from AU$250 and get AI trade ideas across crypto, forex, stocks and commodities.',
  title: 'Open Your Binnacrest AI Account',
  lead: 'Registration takes under three minutes. Fund your account from AU$250 and start reviewing AI trade ideas.',
  points: [
    'AI signals across four markets',
    'Start from just AU$250',
    'Withdraw whenever you choose',
    'Support on Aussie hours',
  ],
};

export const THANKYOU = {
  seoTitle: 'Thank You for Signing Up | Binnacrest AI Australia',
  seoDescription:
    'Your Binnacrest AI registration is received. Our onboarding team will contact you soon to verify your details and get your account started.',
  title: 'You’re On The List',
  lead: 'Your request is in. Our onboarding team will reach out at the email address you gave us.',
  next: 'What Happens Next?',
  steps: [
    'A member of our team contacts you to verify your details.',
    'You fund your account with as little as AU$250.',
    'The AI starts scanning the markets, and your dashboard lights up.',
  ],
};

export const PRIVACY = {
  seoTitle: 'Privacy Policy | Binnacrest AI Trading Platform Australia',
  description:
    'Read the Binnacrest AI Privacy Policy: what we collect, how we use it and how we protect your information. Contact us anytime with questions.',
  title: 'Privacy Policy',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. Who We Are',
      p: 'Binnacrest AI ("we", "us") operates the website binnacrest-ai.com and the AI trading platform described on it. This policy explains how we collect, use and protect your personal information.',
    },
    {
      h: '2. Information We Collect',
      p: 'We collect the information you share with us when you register or get in touch, including:',
      items: [
        'Your name, email address and phone number',
        'Account and transaction details created as you use the platform',
        'Technical data such as IP address, browser type and device information',
      ],
    },
    {
      h: '3. How We Use Your Information',
      p: 'We use your information to run your account, process your requests, improve the platform and keep you informed about your account and our services. We never sell your personal information to third parties.',
    },
    {
      h: '4. Cookies',
      p: 'We use cookies and similar technologies to keep you signed in, remember your preferences and understand how visitors use the site. You can manage cookies through your browser settings.',
    },
    {
      h: '5. Data Security',
      p: 'Your information is protected with 256-bit encryption in transit and access controls at rest. Account access is protected by two-factor authentication.',
    },
    {
      h: '6. Your Rights',
      p: 'You can ask to access, correct or delete your personal information at any time by contacting us at the email address on our Contact page.',
    },
    {
      h: '7. Contact',
      p: 'Questions about this policy can be sent to support@binnacrest-ai.com.',
    },
  ],
};

export const TERMS = {
  seoTitle: 'Terms of Use | Binnacrest AI Trading Platform Australia',
  description:
    'Read the Binnacrest AI Terms of Use: eligibility, your account, deposits, withdrawals and risk. Contact us with questions before you sign up.',
  title: 'Terms of Use',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. Acceptance Of Terms',
      p: 'By visiting binnacrest-ai.com or using the Binnacrest AI platform, you agree to these Terms of Use. If you do not agree, please do not use the platform.',
    },
    {
      h: '2. Eligibility',
      p: 'Registration is open to Australian residents aged 18 or over. You must provide accurate details when you register and keep them up to date.',
    },
    {
      h: '3. Your Account',
      p: 'You are responsible for protecting your account credentials and for everything that happens under your account. Tell us straight away if you think your account has been compromised.',
    },
    {
      h: '4. The Service',
      p: 'Binnacrest AI provides software that scans markets and surfaces AI trade ideas. Performance figures shown on the site are illustrative and are not a promise of future results.',
    },
    {
      h: '5. Deposits And Withdrawals',
      p: 'The minimum account opening amount is AU$250. Withdrawals are processed on request and may require identity verification under applicable law.',
    },
    {
      h: '6. Risk Acknowledgement',
      p: 'You accept that trading carries substantial risk, including the possible loss of your entire deposit. Only trade with funds you can afford to lose.',
    },
    {
      h: '7. Prohibited Conduct',
      p: 'You agree not to misuse the platform, including trying to gain unauthorised access, interfering with how it works, or using it for any unlawful purpose.',
    },
    {
      h: '8. Limitation Of Liability',
      p: 'To the maximum extent permitted by law, Binnacrest AI is not liable for trading losses, market movements or interruptions in service. The platform is provided "as is" and "as available".',
    },
    {
      h: '9. Changes To These Terms',
      p: 'We may update these Terms of Use from time to time. If you keep using the platform after changes take effect, that counts as acceptance of the updated terms.',
    },
    {
      h: '10. Contact',
      p: 'Questions about these terms can be sent to support@binnacrest-ai.com.',
    },
  ],
};

export const RISK = {
  seoTitle: 'Risk Disclosure | Binnacrest AI Trading Platform Australia',
  description:
    'Trading crypto, forex, stocks and commodities carries real risk. Read the Binnacrest AI Risk Disclosure and only invest what you can afford to lose.',
  title: 'Risk Disclosure',
  updated: 'Last updated: 10 September 2026',
  sections: [
    {
      h: '1. General Risk Warning',
      p: 'Trading involves a high level of risk and may not suit every investor. The value of assets can fall as well as rise, and you may lose some or all of your invested capital.',
    },
    {
      h: '2. No Guaranteed Returns',
      p: 'Nothing on this website or in our communications is a promise or guarantee of returns. Past performance, backtested results and illustrative figures do not guarantee future results.',
    },
    {
      h: '3. Market Volatility',
      p: 'Markets can move sharply in short periods. AI signals do not remove volatility risk; stop losses and risk controls reduce exposure but cannot eliminate it.',
    },
    {
      h: '4. Regulatory Status',
      p: 'Many crypto assets are unregulated and are not supervised by government authorities. Investors do not receive the same protections available to users of regulated financial services.',
    },
    {
      h: '5. Not Financial Advice',
      p: 'Binnacrest AI is a software platform and does not offer financial, investment or tax advice. You are solely responsible for your trading decisions and for understanding the risks before funding an account.',
    },
    {
      h: '6. Invest Responsibly',
      p: 'Never invest more than you can afford to lose, and consider independent professional advice if you are unsure whether trading is right for you.',
    },
  ],
};
