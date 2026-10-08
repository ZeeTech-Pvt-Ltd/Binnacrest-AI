import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { WHY_AUSTRALIA } from '../data/content.js';

export default function WhyAustralia() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={WHY_AUSTRALIA.title} lead={WHY_AUSTRALIA.lead} />

        <div className="why-au__grid">
          {WHY_AUSTRALIA.items.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="why-au__item">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="features__band" delay={120}>
          <p>{WHY_AUSTRALIA.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
