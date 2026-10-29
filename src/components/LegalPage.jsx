// Template legal copy - needs lawyer review before launch.
// Shared by Privacy Policy, Terms of Use and Risk Disclosure.
export default function LegalPage({ content }) {
  return (
    <div className="legal-page-wrap">
      <div className="page-hero">
        <div className="container">
          <span className="section-label">{content.title}</span>
          <h1>{content.title}</h1>
          <span className="legal-updated">{content.updated}</span>
        </div>
      </div>

      <div className="section section--surface">
        <div className="container">
          <div className="legal-content">
            {content.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
                {s.items && (
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
