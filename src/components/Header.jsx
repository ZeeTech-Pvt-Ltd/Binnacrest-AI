'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { NAV_LINKS } from '../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Logo />
          <span className="logo__text">Binnacrest AI</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`nav__link${isActive(l.to) ? ' is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="btn btn--gold btn--sm" href="/sign-up">
            Sign Up
          </Link>
        </div>
        <button
          className="header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.to}
            href={l.to}
            onClick={() => setOpen(false)}
            className={isActive(l.to) ? 'is-active' : ''}
          >
            {l.label}
          </Link>
        ))}
        <Link className="btn btn--gold" href="/sign-up" onClick={() => setOpen(false)}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
