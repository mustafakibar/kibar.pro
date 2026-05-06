'use client';

import { useEffect } from 'react';

/**
 * Single mousemove listener that publishes the cursor position to the document
 * root as CSS custom properties: --cursor-x, --cursor-y.
 *
 * Any component (cursor halo, custom cursor, etc.) can read those vars from
 * its own style without React re-renders. Touch devices set a sentinel attr.
 */
const CursorTracker = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;

    const apply = () => {
      root.style.setProperty('--cursor-x', `${x}px`);
      root.style.setProperty('--cursor-y', `${y}px`);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      root.dataset.cursorActive = 'false';
    };
    const onEnter = () => {
      root.dataset.cursorActive = 'true';
    };

    apply();
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return null;
};

export { CursorTracker };
