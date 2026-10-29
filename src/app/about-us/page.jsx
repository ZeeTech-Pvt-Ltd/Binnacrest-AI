import Link from 'next/link';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import SectionHead from '../../components/SectionHead.jsx';
import { ABOUT, STATS } from '../../data/content.js';

export const metadata = {
  title: ABOUT.seoTitle,
  description: ABOUT.seoDescription,
};

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">About Us</span>
            <h1>{ABOUT.heroTitle}</h1>
            <p>{ABOUT.heroLead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHead title={ABOUT.storyTitle} />
          <div className="about-story__timeline">
            {ABOUT.story.map((beat, i) => (
              <Reveal key={beat.year} delay={i * 100} className="about-story__beat">
                <div className="about-story__node">
                  <span className="about-story__dot" />
                </div>
                <div className="about-story__beat-card">
                  <span className="about-story__year">{beat.year}</span>
                  <p>{beat.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="container stats-band__grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="stat">
              <div className="stat__icon">
                <Icon name={s.icon} size={20} />
              </div>
              <div className="stat__value gold-text">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title={ABOUT.valuesTitle} />
          <div className="about__values">
            {ABOUT.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110} className="feature-card">
                <div className="feature-card__icon">
                  <Icon name={v.icon} size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title={ABOUT.diffTitle} />
          <Reveal>
            <div className="about-diff__panel">
              <ul className="about-diff__grid">
                {ABOUT.diff.map((d) => (
                  <li key={d.slice(0, 24)}>
                    <span className="about-diff__check">
                      <Icon name="check" size={15} />
                    </span>
                    {d}
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
            <h2 className="final-cta__title">{ABOUT.ctaTitle}</h2>
            <p className="final-cta__lead">{ABOUT.ctaLead}</p>
            <Link className="btn btn--gold" href="/sign-up">
              Create Your Account
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
