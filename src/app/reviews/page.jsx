import Link from 'next/link';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import { REVIEWS_PAGE, TESTIMONIALS } from '../../data/content.js';

export const metadata = {
  title: REVIEWS_PAGE.seoTitle,
  description: REVIEWS_PAGE.seoDescription,
};

const Stars = ({ count }) => (
  <span className="testimonial-card__stars" role="img" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Icon key={i} name="star" size={13} />
    ))}
  </span>
);

export default function Reviews() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">Reviews</span>
            <h1>{REVIEWS_PAGE.title}</h1>
            <p>{REVIEWS_PAGE.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reviews__grid">
            {TESTIMONIALS.cards.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100} className="testimonial-card">
                <div className="testimonial-card__head">
                  <span className="testimonial-card__avatar">
                    <img src={t.photo} alt={t.name} loading="lazy" />
                  </span>
                  <span>
                    <span className="testimonial-card__name">{t.name}</span>
                    <br />
                    <span className="testimonial-card__city">{t.city}</span>
                  </span>
                </div>
                <Stars count={t.stars} />
                <p>“{t.text}”</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <Reveal>
            <h2 className="final-cta__title">Ready to Join Them?</h2>
            <p className="final-cta__lead">
              Sign up free, start from AU$250, and see what the AI flags for you.
            </p>
            <Link className="btn btn--gold" href="/sign-up">
              Create Your Account
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
