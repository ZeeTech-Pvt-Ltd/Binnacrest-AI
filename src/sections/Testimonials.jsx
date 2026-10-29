'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { TESTIMONIALS } from '../data/content.js';

const Stars = ({ count }) => (
  <span className="testimonial-card__stars" role="img" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Icon key={i} name="star" size={13} />
    ))}
  </span>
);

export default function Testimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  // One "page" = one viewport-width step of the track. Recalculated on scroll
  // and resize, since cards-per-view changes with the breakpoint.
  const update = () => {
    const track = trackRef.current;
    if (!track) return;
    const step = track.clientWidth || 1;
    const max = track.scrollWidth - track.clientWidth;
    setPage(Math.min(Math.round(track.scrollLeft / step), Math.round(max / step)));
    setPages(Math.round(max / step) + 1);
  };

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
  };

  const jumpTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={TESTIMONIALS.title} />

        <Reveal>
          <div className="testimonials__viewport">
            <div className="testimonials__track" ref={trackRef} onScroll={update}>
              {TESTIMONIALS.cards.map((t) => (
                <div key={t.name} className="testimonial-card">
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
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="testimonials__controls" delay={100}>
          <button
            type="button"
            className="testimonials__arrow"
            onClick={() => scrollBy(-1)}
            disabled={page === 0}
            aria-label="Previous reviews"
          >
            <span style={{ display: 'grid', transform: 'rotate(180deg)' }}>
              <Icon name="chevron" size={18} />
            </span>
          </button>

          <div className="testimonials__dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials__dot${i === page ? ' is-active' : ''}`}
                onClick={() => jumpTo(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials__arrow"
            onClick={() => scrollBy(1)}
            disabled={page >= pages - 1}
            aria-label="Next reviews"
          >
            <Icon name="chevron" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
