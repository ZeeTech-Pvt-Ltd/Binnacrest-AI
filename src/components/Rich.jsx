// Renders **bold** markers in copy strings as <strong> for key emphasis.
export default function Rich({ text }) {
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p));
}
