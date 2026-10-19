import useMeta from '../hooks/useMeta.js';
import Hero from '../sections/Hero.jsx';
import TrustStrip from '../sections/TrustStrip.jsx';
import WhatIs from '../sections/WhatIs.jsx';
import HomeSteps from '../sections/HomeSteps.jsx';
import Markets from '../sections/Markets.jsx';
import Features from '../sections/Features.jsx';
import WhyAustralia from '../sections/WhyAustralia.jsx';
import Comparison from '../sections/Comparison.jsx';
import Legitimacy from '../sections/Legitimacy.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  useMeta({
    title: 'Binnacrest AI: AI Trading Platform in Australia from AU$250',
    description:
      'Binnacrest AI is a browser-based trading platform for Australians. AI insights across crypto, forex, stocks and commodities. Start from AU$250.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatIs />
      <HomeSteps />
      <Markets />
      <Features />
      <WhyAustralia />
      <Comparison />
      <Legitimacy />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
