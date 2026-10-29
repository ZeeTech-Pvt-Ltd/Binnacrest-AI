'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Next preserves scroll position across navigations; reset it on route change.
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
