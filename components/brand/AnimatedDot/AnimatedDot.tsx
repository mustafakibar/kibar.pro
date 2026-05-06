'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import type { CSSProperties } from 'react';

const COLOR_CYCLE = [
  'oklch(0.55 0.180 22)',
  'oklch(0.74 0.105 72)',
  'oklch(0.86 0.085 82)',
  'oklch(0.55 0.180 22)',
] as const;

const SCALE_CYCLE = [1, 1.14, 0.94, 1] as const;
const TIMES = [0, 0.4, 0.7, 1] as const;
const CYCLE_DURATION = 6;

type AnimatedDotProps = {
  /** 'glyph' renders the literal "." in font flow; 'shape' renders a positioned circle. */
  variant?: 'glyph' | 'shape';
  className?: string;
  style?: CSSProperties;
};

const AnimatedDot = ({
  variant = 'glyph',
  className,
  style,
}: AnimatedDotProps) => {
  const reduced = useReducedMotion();

  if (variant === 'glyph') {
    if (reduced) {
      return (
        <span className={cn('text-crimson', className)} style={style}>
          .
        </span>
      );
    }
    return (
      <motion.span
        className={cn('inline-block', className)}
        style={style}
        animate={{
          color: [...COLOR_CYCLE],
          scale: [...SCALE_CYCLE],
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: easing.inOut,
          times: [...TIMES],
        }}
        whileHover={{
          scale: 1.5,
          color: 'oklch(0.86 0.085 82)',
          transition: { duration: duration.fast, ease: easing.out },
        }}>
        .
      </motion.span>
    );
  }

  if (reduced) {
    return (
      <span
        aria-hidden
        className={cn('bg-crimson block rounded-full', className)}
        style={style}
      />
    );
  }
  return (
    <motion.span
      aria-hidden
      className={cn('block rounded-full', className)}
      style={style}
      animate={{
        backgroundColor: [...COLOR_CYCLE],
        scale: [...SCALE_CYCLE],
      }}
      transition={{
        duration: CYCLE_DURATION,
        repeat: Infinity,
        ease: easing.inOut,
        times: [...TIMES],
      }}
      whileHover={{
        scale: 1.5,
        backgroundColor: 'oklch(0.86 0.085 82)',
        transition: { duration: duration.fast, ease: easing.out },
      }}
    />
  );
};

export { AnimatedDot };
export type { AnimatedDotProps };
