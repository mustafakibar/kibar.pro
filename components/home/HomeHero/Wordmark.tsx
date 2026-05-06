'use client';

import { AnimatedDot } from '@/components/brand/AnimatedDot';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

// 'ı' (U+0131, dotless i) — the natural dot is replaced by our animated dot overlay.
const LETTERS = ['K', 'ı', 'B', 'A', 'R'] as const;

type WordmarkProps = {
  className?: string;
};

const Wordmark = ({ className }: WordmarkProps) => {
  const reduced = useReducedMotion();
  return (
    <h1
      className={cn(
        'gold-sweep font-display leading-[0.92] tracking-[-0.025em]',
        'text-[clamp(3rem,11vw,8.5rem)]',
        className,
      )}
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
      aria-label="KiBAR Mustafa">
      {LETTERS.map((letter, i) => {
        const isItalic = letter === 'ı';
        const span = (
          <span
            className={cn(
              'inline-block',
              isItalic &&
                'mx-[0.04em] align-baseline text-[0.85em] font-normal italic',
            )}
            style={
              isItalic
                ? { fontVariationSettings: "'opsz' 144, 'SOFT' 60" }
                : undefined
            }>
            {letter}
          </span>
        );
        // Animated overlay dot rendered after the i, using inline-block + negative
        // margin + vertical-align so we don't need position:relative on any text
        // ancestor (which breaks the h1's background-clip:text mask in Chromium).
        const dot = isItalic && (
          <AnimatedDot
            variant="shape"
            className="inline-block"
            style={{
              width: '0.18em',
              height: '0.18em',
              marginLeft: '-0.18em',
              verticalAlign: '0.48em',
            }}
          />
        );
        if (reduced)
          return (
            <span key={i} aria-hidden>
              {span}
              {dot}
            </span>
          );
        return (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: i * 0.12,
              ease: easing.emphasis,
            }}
            className="inline-block">
            {span}
            {dot}
          </motion.span>
        );
      })}
      {reduced ? (
        <span aria-hidden>
          <SubMustafa />
        </span>
      ) : (
        <motion.span
          aria-hidden
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: LETTERS.length * 0.12 + 0.15,
            ease: easing.emphasis,
          }}
          className="inline-block">
          <SubMustafa />
        </motion.span>
      )}
    </h1>
  );
};

/** "Mustafa" rendered after KıBAR at three-quarters of the wordmark size. */
const SubMustafa = () => (
  <span
    className="ml-[0.22em] inline-block align-baseline text-[0.75em] font-normal italic"
    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}>
    Mustafa
  </span>
);

export { Wordmark };
