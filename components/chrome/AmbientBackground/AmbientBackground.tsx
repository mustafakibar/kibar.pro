'use client';

import { usePathname } from 'next/navigation';

/**
 * Two-layer background for inner pages:
 *   1. Diagonal moiré grid (two near-frequency repeating gradients) — subtle.
 *   2. Cursor-following gold halo via --cursor-x / --cursor-y CSS vars.
 *
 * Hidden on home ("/") so the hero remains uncluttered, and on touch devices
 * the halo is replaced with a static centered glow.
 */
const AmbientBackground = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <div
      aria-hidden
      className="ambient-background pointer-events-none fixed inset-0 -z-10">
      <div className="ambient-moire absolute inset-0" />
      <div className="ambient-halo absolute inset-0" />
    </div>
  );
};

export { AmbientBackground };
