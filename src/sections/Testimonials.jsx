import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { TESTIMONIALS } from '../data/content.js';

const Stars = () => (
  <span className="testimonial-card__stars" role="img" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="star" size={13} />
    ))}
  </span>
);

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
          {TESTIMONIALS.label}
        </span>
        <SectionHead title={TESTIMONIALS.title} lead={TESTIMONIALS.lead} />

        <div className="testimonials__grid">
          {TESTIMONIALS.cards.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100} className="testimonial-card">
              <div className="testimonial-card__head">
                <span className="testimonial-card__avatar">
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span>
                  <span className="testimonial-card__name">{t.name}</span>
                  <br />
                  <span className="testimonial-card__city">{t.city}</span>
                </span>
                <span className="testimonial-card__amount">
                  {t.amount}
                  <small>earned</small>
                </span>
              </div>
              <Stars />
              <p>“{t.text}”</p>
            </Reveal>
          ))}
        </div>

        <div className="testimonials__comments">
          {TESTIMONIALS.comments.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 100} className="comment">
              <div className="comment__head">
                <span className="comment__avatar">
                  {c.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span className="comment__name">{c.name}</span>
              </div>
              <p>{c.text}</p>
              <div className="comment__actions">
                <button type="button">
                  <Icon name="check" size={13} /> Like · {c.likes}
                </button>
                <button type="button">Reply</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
