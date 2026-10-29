import Link from 'next/link';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import Rich from '../../components/Rich.jsx';
import SectionHead from '../../components/SectionHead.jsx';
import { HOW_IT_WORKS } from '../../data/content.js';

export const metadata = {
  title: HOW_IT_WORKS.seoTitle,
  description: HOW_IT_WORKS.seoDescription,
};

export default function HowItWorks() {
  return (
    <div className="how-page">
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
          <div className="how-timeline">
            {HOW_IT_WORKS.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="how-timeline__row">
                <div className="how-timeline__node">
                  <div className="how-timeline__icon">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span className="how-timeline__num">0{i + 1}</span>
                </div>
                <div className="how-timeline__card">
                  <span className="how-timeline__step">Step {i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>
                    <Rich text={s.text} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title={HOW_IT_WORKS.perksTitle} />
          <Reveal>
            <div className="how-perks__panel">
              <ul className="how-perks__grid">
                {HOW_IT_WORKS.perks.map((p) => (
                  <li key={p.slice(0, 24)}>
                    <span className="how-perks__check">
                      <Icon name="check" size={15} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <Reveal>
            <h2 className="final-cta__title">{HOW_IT_WORKS.ctaTitle}</h2>
            <p className="final-cta__lead">{HOW_IT_WORKS.ctaLead}</p>
            <Link className="btn btn--gold" href="/sign-up">
              Create Your Account
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
