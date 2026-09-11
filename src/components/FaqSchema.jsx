// FAQPage JSON-LD for Google rich results. Bold markers are stripped so the
// schema text stays clean.
export default function FaqSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: i.a.replace(/\*\*/g, ''),
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
