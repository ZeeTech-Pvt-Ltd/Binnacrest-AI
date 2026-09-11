// All site copy lives here. Original copy throughout (never lifted from reference sites).
// Writing rules: conversational tone with contractions, Grade 6-8 English, you-focused,
// short sentences. **text** markers render as bold via the Rich component.
// Placeholders to confirm before launch: stats, testimonial names, support email.

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
  scarcity: 'Only 38 registrations left this week',
  titleLead: 'Earn Up To',
  titleAmount: '$850',
  titleTail: 'Daily With',
  titleBrand: 'Binnacrest AI',
  sub: 'You don’t lift a finger. Our AI engine trades the world’s biggest exchanges around the clock, so your money works while you live your life. Join 28,000+ Australians and start with just **$250**.',
  ctaLabel: 'Create Your Account',
  coins: [
    { symbol: 'BTC', name: 'Bitcoin', price: '$116,540.20', change: '+1.9%' },
    { symbol: 'ETH', name: 'Ethereum', price: '$4,415.90', change: '+2.6%' },
    { symbol: 'LTC', name: 'Litecoin', price: '$119.14', change: '+1.2%' },
  ],
  rating: { score: '4.8', count: '3,100+', note: 'verified Australian reviews' },
  avatars: ['MR', 'CW', 'BS', 'EL', 'JM'],
  trust: ['No hidden fees', 'Withdraw anytime', '2FA secured'],
};

export const TICKER = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$116,540.20', change: '+1.9%' },
  { symbol: 'ETH', name: 'Ethereum', price: '$4,415.90', change: '+2.6%' },
  { symbol: 'LTC', name: 'Litecoin', price: '$119.14', change: '+1.2%' },
  { symbol: 'BTC', name: 'Bitcoin', price: '$116,540.20', change: '+1.9%' },
  { symbol: 'ETH', name: 'Ethereum', price: '$4,415.90', change: '+2.6%' },
  { symbol: 'LTC', name: 'Litecoin', price: '$119.14', change: '+1.2%' },
];

export const RATES = {
  label: '01 // Live Market Rates',
  title: 'The Markets Never Sleep. Neither Does Our Engine.',
  lead: 'You don’t need to watch charts all day. Binnacrest AI tracks Bitcoin, Ethereum and Litecoin every second, opening and closing trades the moment prices look right. The rates below update live, and so does your dashboard.',
  phone: {
    balance: 'AU$12,480.60',
    today: '+AU$384.20 today',
    rows: [
      { pair: 'BTC/AUD', move: 'Long', pnl: '+$212.40' },
      { pair: 'ETH/AUD', move: 'Closed', pnl: '+$96.10' },
      { pair: 'LTC/AUD', move: 'Long', pnl: '+$75.70' },
    ],
  },
};

export const STATS = [
  { value: '28,000+', label: 'Australian members' },
  { value: '$850', label: 'Average daily returns' },
  { value: '85%', label: 'Trading accuracy' },
  { value: '98%', label: 'Funds in cold storage' },
];

export const ADVANTAGES = {
  label: '03 // Why Binnacrest AI',
  title: 'Three Reasons You’ll Stay',
  lead: 'Everything we build has one goal: your money works hard while your life stays simple.',
  items: [
    {
      icon: 'zap',
      title: 'Effortless From Day One',
      text: 'No charts to study and no strategies to learn. You create your account in minutes, add as little as $250, and the engine takes it from there.',
    },
    {
      icon: 'devices',
      title: 'Trade From Any Device',
      text: 'Use your desktop, tablet or phone. You can check your account and withdraw your earnings wherever you are, whenever you like. The dashboard takes less than a minute to understand.',
    },
    {
      icon: 'shield-check',
      title: 'Security You Can Rely On',
      text: 'Your funds stay safe at every step. We protect your account with 2FA, 256-bit encryption, and cold storage on every exchange.',
    },
  ],
  band: 'Australian members are earning **$38,750+** every hour, around the clock. You can join them today.',
};

export const FEATURED = {
  quote:
    'I started with the $250 minimum just to test the waters. By the end of my first week I’d already withdrawn more than I put in. Binnacrest AI does exactly what it promises.',
  name: 'Mia W.',
  city: 'Gold Coast',
  tag: 'Member since 2025',
  stars: 5,
};

export const TESTIMONIALS = {
  label: '02 // Member Stories',
  title: 'What Australian Members Say',
  lead: 'Every story below comes from a **verified member account**. Results vary, but the pattern doesn’t.',
  cards: [
    {
      name: 'Matthew R.',
      city: 'Sydney',
      amount: '$6,240',
      text: 'Deposited Monday, saw my first returns by Wednesday. The dashboard makes everything easy to follow.',
    },
    {
      name: 'Chloe W.',
      city: 'Melbourne',
      amount: '$11,480',
      text: 'I was skeptical at first, but the daily reports are transparent and withdrawals arrive fast.',
    },
    {
      name: 'Ben S.',
      city: 'Brisbane',
      amount: '$23,905',
      text: 'Three months in and my account has grown steadily every week. Nothing else I’ve tried comes close.',
    },
    {
      name: 'Emma L.',
      city: 'Perth',
      amount: '$7,310',
      text: 'Perfect for a busy mum like me. I check my phone in the morning and the work is already done.',
    },
    {
      name: 'Jack M.',
      city: 'Adelaide',
      amount: '$14,660',
      text: 'Support walked me through everything on my first day. Genuinely helpful people.',
    },
    {
      name: 'Sophie T.',
      city: 'Canberra',
      amount: '$48,720',
      text: 'Started with $250 out of curiosity. Eight months later it’s changed our family’s finances.',
    },
  ],
  comments: [
    {
      name: 'Rachel M.',
      text: 'Five months in and payouts have never been late. Highly recommend giving it a go.',
      likes: 24,
    },
    {
      name: 'Tom B.',
      text: 'Took out my first withdrawal after nine days. No fuss, no hidden charges.',
      likes: 18,
    },
    {
      name: 'Jessica L.',
      text: 'The AI does the heavy lifting. I just keep an eye on the weekly summary.',
      likes: 31,
    },
  ],
};

export const NETWORK = {
  label: '04 // Our Exchange Network',
  title: 'Connected To The World’s Leading Exchanges',
  lead: 'Your trades run through the world’s biggest exchanges: Binance, Coinbase, Kraken, Poloniex and Bittrex. That means deep order books, tight spreads, and fast settlements, so you always get the best possible prices.',
  exchanges: ['Binance', 'Coinbase', 'Kraken', 'Poloniex', 'Bittrex'],
  live: '18 Australian accounts opened in the last hour',
  scarcity: 'This week’s allocation is nearly full. Only 38 spots remain.',
  years: '7+',
  yearsLabel: 'years of tuning our engine',
};

export const LEGITIMACY = {
  title: 'Is Binnacrest AI Legitimate?',
  lead: 'It’s a fair question. The internet is full of promises that don’t deliver. Here’s ours.',
  points: [
    'Start with **$250** and watch your dashboard in real time from day one.',
    'See your performance reports every day. Nothing is hidden behind jargon.',
    'Reach support around the clock, seven days a week.',
    'Join 28,000+ Australians already on the platform. Withdraw your money whenever you ask.',
  ],
  closing: 'The best way to find out is to try it yourself.',
  ctaLabel: 'Create Your Account',
};

export const FAQS = [
  {
    q: 'Is Binnacrest AI A Reputable Platform?',
    a: 'Yes. We’ve served more than 28,000 Australians since 2018, and we show you everything: daily reports, live performance, and support around the clock. Your money stays in cold storage, and you can check your dashboard from the minute you register.',
  },
  {
    q: 'What Do Real Members Say About Their Results?',
    a: 'You’ll see real stories on this page, from first-week withdrawals to long-term growth. Results differ for everyone, which is why we publish earnings openly and never promise fixed returns.',
  },
  {
    q: 'What Are The Risks Of Automated Trading?',
    a: 'Crypto prices can swing fast, and no strategy wins every trade. We use risk controls and automatic stop losses, but you should never trade money you can’t afford to lose. Read our Risk Disclosure for the full picture.',
  },
  {
    q: 'How Much Do I Need To Get Started?',
    a: 'You can open an account with **$250**. There are no hidden fees on deposits or withdrawals, and most people start small to test the waters before adding more.',
  },
  {
    q: 'Do I Need Trading Experience?',
    a: 'Not at all. The engine reads the markets and makes the trades for you. Your job is simple: create your account, fund it, and choose when to withdraw.',
  },
];

export const FAQS_MORE = [
  {
    q: 'How Do Withdrawals Work?',
    a: 'You request a withdrawal from your dashboard whenever you like. We process it quickly, after a simple identity check, and your money arrives through your original deposit method.',
  },
  {
    q: 'Which Exchanges Does The Engine Trade On?',
    a: 'Binance, Coinbase, Kraken, Poloniex and Bittrex. These are big, established exchanges with deep liquidity, so spreads stay tight and settlements are fast.',
  },
  {
    q: 'Who Can Register?',
    a: 'Any Australian resident aged 18 or over. We open a limited number of accounts each week so every member gets the support they deserve.',
  },
  {
    q: 'Is There A Fee To Join?',
    a: 'No. Opening an account is free, and there are no hidden fees on deposits or withdrawals. The minimum to fund your account is $250.',
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
  label: 'Your Seat Is Waiting',
  title: 'Join 28,000+ Australians Growing Their Income With Binnacrest AI',
  lead: 'We only open a small number of accounts each week, so you get real support. Claim your spot before this week’s allocation closes.',
};

export const FOOTER = {
  blurb:
    'Binnacrest AI is Australia’s automated AI trading platform. It’s trading tech built for everyday Australians, running on the world’s biggest exchanges.',
  legal: [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-of-use', label: 'Terms of Use' },
    { to: '/risk-disclosure', label: 'Risk Disclosure' },
  ],
  disclaimer:
    'Trading cryptocurrencies carries substantial risk and may not be suitable for every investor. Figures shown on this site are illustrative and do not guarantee future results. Binnacrest AI is a software platform, not a licensed financial adviser, and nothing on this site constitutes financial advice. Crypto assets are unregulated in many jurisdictions; you are solely responsible for complying with the laws that apply to you. Never invest more than you can afford to lose.',
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
