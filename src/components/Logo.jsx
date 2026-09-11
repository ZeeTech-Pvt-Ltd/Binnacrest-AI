// Gold "B" monogram on a deep navy tile - Midnight Gold identity.
export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5d67c" />
          <stop offset="0.55" stopColor="#d4af37" />
          <stop offset="1" stopColor="#b28a1f" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#10152a" stroke="#3a3320" />
      <path
        d="M12.5 8.5v15M12.5 8.5h5.6a4 4 0 010 8h-5.6M12.5 16.5h6.4a4 4 0 010 8h-6.7"
        fill="none"
        stroke="url(#logo-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
