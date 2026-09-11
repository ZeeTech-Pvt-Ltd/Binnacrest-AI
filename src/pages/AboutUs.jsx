import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ABOUT, STATS } from '../data/content.js';

export default function AboutUs() {
  useMeta({
    title: ABOUT.seoTitle,
    description: ABOUT.seoDescription,
    path: '/about-us',
  });

  return (
    <>
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
        <div className="container about__story">
          <SectionHead title={ABOUT.storyTitle} />
          {ABOUT.story.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="stats-band">
        <div className="container stats-band__grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="stat">
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
            <ul className="about__diff">
              {ABOUT.diff.map((d) => (
                <li key={d.slice(0, 24)}>
                  <Icon name="check" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <Reveal>
            <h2 className="final-cta__title">{ABOUT.ctaTitle}</h2>
            <p className="final-cta__lead">{ABOUT.ctaLead}</p>
            <Link className="btn btn--gold" to="/sign-up">
              Create Your Account
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
