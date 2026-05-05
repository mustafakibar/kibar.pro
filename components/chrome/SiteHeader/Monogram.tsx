'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type MonogramProps = {
  className?: string;
};

const Monogram = ({ className }: MonogramProps) => {
  const reduced = useReducedMotion();

  return (
    <span
      className={cn('font-display inline-flex items-baseline', className)}
      style={{ viewTransitionName: 'site-monogram' }}>
      <span
        className="gold-sweep italic"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
        k
      </span>
      {reduced ? (
        <span className="text-crimson">.</span>
      ) : (
        <motion.span
          className="inline-block"
          animate={{
            color: [
              'oklch(0.55 0.180 22)',
              'oklch(0.74 0.105 72)',
              'oklch(0.86 0.085 82)',
              'oklch(0.55 0.180 22)',
            ],
            scale: [1, 1.18, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: easing.inOut,
            times: [0, 0.4, 0.7, 1],
          }}
          whileHover={{
            scale: 1.5,
            color: 'oklch(0.86 0.085 82)',
            transition: { duration: duration.fast, ease: easing.out },
          }}>
          .
        </motion.span>
      )}
    </span>
  );
};

export { Monogram };
export type { MonogramProps };
