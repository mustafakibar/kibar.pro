'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type GoldSweepProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Renders children with a gold-sweep gradient text fill that animates
 * left-to-right once on mount. Falls back to a static gold-sweep if
 * the user prefers reduced motion.
 */
const GoldSweep = ({ children, className, delay = 0 }: GoldSweepProps) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return <span className={cn('gold-sweep', className)}>{children}</span>;
  }
  return (
    <motion.span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(95deg, var(--color-ink) 0%, var(--color-gold) 60%, var(--color-ink) 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '100% 0%',
      }}
      initial={{ backgroundPosition: '100% 0%' }}
      animate={{ backgroundPosition: '0% 0%' }}
      transition={{ duration: duration.cinematic, delay, ease: easing.out }}>
      {children}
    </motion.span>
  );
};

export { GoldSweep };
export type { GoldSweepProps };
