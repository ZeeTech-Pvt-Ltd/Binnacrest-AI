import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Rich from '../components/Rich.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { HOW_IT_WORKS } from '../data/content.js';

export default function HowItWorks() {
  useMeta({
    title: HOW_IT_WORKS.seoTitle,
    description: HOW_IT_WORKS.seoDescription,
    path: '/how-it-works',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">How It Works</span>
            <h1>{HOW_IT_WORKS.title}</h1>
            <p>{HOW_IT_WORKS.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="steps__grid">
            {HOW_IT_WORKS.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="feature-card">
                <span className="step-num">Step {i + 1}</span>
                <div className="feature-card__icon">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3>{s.title}</h3>
                <p>
                  <Rich text={s.text} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title={HOW_IT_WORKS.perksTitle} />
          <Reveal>
            <ul className="signup__points" style={{ maxWidth: 680, margin: '0 auto' }}>
              {HOW_IT_WORKS.perks.map((p) => (
                <li key={p.slice(0, 24)}>
                  <Icon name="check" size={18} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <Reveal>
            <h2 className="final-cta__title">{HOW_IT_WORKS.ctaTitle}</h2>
            <p className="final-cta__lead">{HOW_IT_WORKS.ctaLead}</p>
            <Link className="btn btn--gold" to="/sign-up">
              Create Your Account
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
