import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { FEATURED } from '../data/content.js';

export default function FeaturedQuote() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <Reveal>
          <figure className="featured-quote">
            <span className="featured-quote__tag">Featured Member Story</span>
            <blockquote>“{FEATURED.quote}”</blockquote>
            <figcaption className="featured-quote__person">
              <span className="featured-quote__avatar">
                {FEATURED.name.split(' ').map((w) => w[0]).join('')}
              </span>
              <span className="featured-quote__meta">
                <span className="featured-quote__name">{FEATURED.name}</span>
                <span className="featured-quote__city">
                  {FEATURED.city} · {FEATURED.tag}
                </span>
                <span className="featured-quote__stars" aria-hidden="true">
                  {Array.from({ length: FEATURED.stars }).map((_, i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
