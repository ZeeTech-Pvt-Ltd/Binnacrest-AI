import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import { FAQS, FAQS_MORE, FAQS_PAGE } from '../data/content.js';

export default function Faqs() {
  useMeta({
    title: FAQS_PAGE.seoTitle,
    description: FAQS_PAGE.seoDescription,
    path: '/faq',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">FAQs</span>
            <h1>{FAQS_PAGE.title}</h1>
            <p>{FAQS_PAGE.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FaqSchema items={[...FAQS, ...FAQS_MORE]} />
          <Reveal>
            <FaqList items={[...FAQS, ...FAQS_MORE]} />
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead" style={{ textAlign: 'center', margin: '44px auto 0' }}>
              Can’t find your answer?{' '}
              <Link to="/contact-us" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                Contact our support team
              </Link>{' '}
              and we reply within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
