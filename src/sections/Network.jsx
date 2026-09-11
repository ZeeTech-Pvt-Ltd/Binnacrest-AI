import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { NETWORK } from '../data/content.js';

export default function Network() {
  return (
    <section className="section section--deep network">
      <div className="container">
        <span className="section-label">{NETWORK.label}</span>
        <SectionHead title={NETWORK.title} lead={NETWORK.lead} />

        <Reveal className="network__exchanges">
          {NETWORK.exchanges.map((x) => (
            <span className="network__exchange" key={x}>
              {x}
            </span>
          ))}
        </Reveal>

        <Reveal delay={90}>
          <div className="network__facts">
            <span className="network__fact">
              <Icon name="clock" size={16} />
              {NETWORK.live}
            </span>
            <span className="network__fact">
              <Icon name="zap" size={16} />
              {NETWORK.scarcity}
            </span>
          </div>
        </Reveal>

        <Reveal delay={160} className="network__years">
          <span className="num gold-text">{NETWORK.years}</span>
          <span className="label">{NETWORK.yearsLabel}</span>
        </Reveal>
      </div>
    </section>
  );
}
