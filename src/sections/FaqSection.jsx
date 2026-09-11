import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { FAQS } from '../data/content.js';

export default function FaqSection() {
  return (
    <section className="section">
      <FaqSchema items={FAQS} />
      <div className="container">
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
          05 // Questions Answered
        </span>
        <SectionHead title="Frequently Asked Questions" />
        <Reveal>
          <FaqList />
        </Reveal>
        <Reveal delay={100}>
          <p className="section-lead" style={{ textAlign: 'center', margin: '36px auto 0' }}>
            More questions?{' '}
            <Link to="/faq" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
              See the full FAQs page
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
