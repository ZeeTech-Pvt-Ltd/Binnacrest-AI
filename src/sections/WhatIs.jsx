import Reveal from '../components/Reveal.jsx';
import { WHAT_IS } from '../data/content.js';

export default function WhatIs() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="what-is__card">
            <h2 className="section-title">{WHAT_IS.title}</h2>
            <p>{WHAT_IS.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
