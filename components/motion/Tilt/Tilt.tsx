'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { useCallback, type PointerEvent, type ReactNode } from 'react';

type TiltProps = {
  children: ReactNode;
  /** Maximum rotation in degrees per axis (default 8) */
  max?: number;
  /** Perspective in pixels (default 1000) */
  perspective?: number;
  /** Glare highlight overlay (default false) */
  glare?: boolean;
  className?: string;
};

const Tilt = ({
  children,
  max = 8,
  perspective = 1000,
  glare = false,
  className,
}: TiltProps) => {
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const sx = useSpring(rx, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(ry, { stiffness: 200, damping: 18, mass: 0.4 });

  const transform = useMotionTemplate`perspective(${perspective}px) rotateX(${sx}deg) rotateY(${sy}deg)`;
  const glareBg = useMotionTemplate`radial-gradient(circle 200px at ${px}% ${py}%, oklch(0.86 0.085 82 / 0.18) 0%, transparent 60%)`;

  const onMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (reduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const fx = (e.clientX - rect.left) / rect.width;
      const fy = (e.clientY - rect.top) / rect.height;
      ry.set((fx - 0.5) * max * 2);
      rx.set(-(fy - 0.5) * max * 2);
      px.set(fx * 100);
      py.set(fy * 100);
    },
    [max, rx, ry, px, py, reduced],
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
  }, [rx, ry]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      style={{
        transform,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}>
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBg, mixBlendMode: 'plus-lighter' }}
        />
      )}
    </motion.div>
  );
};

export { Tilt };
export type { TiltProps };
