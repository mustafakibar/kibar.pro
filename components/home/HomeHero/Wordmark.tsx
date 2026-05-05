'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { duration, easing, stagger } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const LETTERS = ['K', 'i', 'B', 'A', 'R'] as const;

type WordmarkProps = {
  className?: string;
};

const Wordmark = ({ className }: WordmarkProps) => {
  const reduced = useReducedMotion();
  return (
    <h1
      className={cn(
        'gold-sweep font-display leading-[0.92] tracking-[-0.025em]',
        'text-[clamp(4rem,15vw,12rem)]',
        className,
      )}
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
      aria-label="KiBAR">
      {LETTERS.map((letter, i) => {
        const isItalic = letter === 'i';
        const span = (
          <span
            className={cn(
              'inline-block',
              isItalic &&
                'mx-[0.05em] align-baseline text-[0.62em] font-normal italic',
            )}
            style={
              isItalic
                ? { fontVariationSettings: "'opsz' 144, 'SOFT' 60" }
                : undefined
            }>
            {letter}
          </span>
        );
        if (reduced)
          return (
            <span key={i} aria-hidden>
              {span}
            </span>
          );
        return (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.hero,
              delay: i * stagger.loose,
              ease: easing.out,
            }}>
            {span}
          </motion.span>
        );
      })}
    </h1>
  );
};

export { Wordmark };
