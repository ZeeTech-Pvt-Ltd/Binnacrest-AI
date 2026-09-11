import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { CONTACTS, SITE } from '../data/content.js';

export default function Contacts() {
  useMeta({
    title: CONTACTS.seoTitle,
    description: CONTACTS.seoDescription,
    path: '/contact-us',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal>
            <span className="section-label">Contact Us</span>
            <h1>{CONTACTS.title}</h1>
            <p>{CONTACTS.lead}</p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container contact__grid">
          <Reveal>
            <div className="contact__info">
              <div className="contact__card">
                <Icon name="mail" size={22} />
                <div>
                  <h3>{CONTACTS.emailLabel}</h3>
                  <p>{SITE.email}</p>
                </div>
              </div>
              <div className="contact__card">
                <Icon name="headset" size={22} />
                <div>
                  <h3>{CONTACTS.hoursLabel}</h3>
                  <p>{CONTACTS.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <RegistrationForm
              idPrefix="contact"
              title="Create Your Account"
              subtitle="Registration Is Limited To Verified Residents Of Australia."
              buttonLabel="Register Now"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
