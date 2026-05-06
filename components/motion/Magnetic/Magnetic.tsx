'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring } from 'motion/react';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type MagneticProps = {
  children: ReactNode;
  /** Maximum pull distance in pixels (default 8) */
  strength?: number;
  /** Activation radius from element center in pixels (default 100) */
  radius?: number;
  /** Wrapper element (default 'span'). Use 'div' for block-level. */
  as?: 'span' | 'div';
  className?: string;
};

const Magnetic = ({
  children,
  strength = 8,
  radius = 100,
  as = 'span',
  className,
}: MagneticProps) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let rect = el.getBoundingClientRect();
    const updateRect = () => {
      rect = el.getBoundingClientRect();
    };

    const onMove = (e: PointerEvent) => {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        if (mx.get() !== 0) mx.set(0);
        if (my.get() !== 0) my.set(0);
        return;
      }
      const ratio = 1 - dist / radius;
      mx.set((dx / radius) * strength * ratio);
      my.set((dy / radius) * strength * ratio);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, [mx, my, strength, radius, reduced]);

  if (as === 'div') {
    return (
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={reduced ? undefined : { x: sx, y: sy }}
        className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      style={reduced ? undefined : { x: sx, y: sy }}
      className={cn('inline-block', className)}>
      {children}
    </motion.span>
  );
};

export { Magnetic };
export type { MagneticProps };
