import useMeta from '../hooks/useMeta.js';
import Hero from '../sections/Hero.jsx';
import LiveRates, { LiveTicker } from '../sections/LiveRates.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Advantages from '../sections/Advantages.jsx';
import FeaturedQuote from '../sections/FeaturedQuote.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Network from '../sections/Network.jsx';
import Legitimacy from '../sections/Legitimacy.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  useMeta({
    title: 'Binnacrest AI: Automated AI Trading Platform for Australia',
    description:
      "Binnacrest AI is Australia's automated AI trading platform. 85% trading accuracy, 98% cold storage, and up to $850 daily. Sign up today from $250.",
    path: '/',
  });

  return (
    <>
      <Hero />
      <LiveTicker />
      <StatsBand />
      <LiveRates />
      <FeaturedQuote />
      <Testimonials />
      <Advantages />
      <Network />
      <Legitimacy />
      <FaqSection />
      <FinalCta />
    </>
  );
}
