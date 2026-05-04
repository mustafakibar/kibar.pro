'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type FooterStampProps = {
  className?: string;
};

const FooterStamp = ({ className }: FooterStampProps) => {
  const reduced = useReducedMotion();
  return (
    <span
      aria-hidden
      className={cn(
        'border-gold/40 font-display text-gold relative inline-flex size-9 items-center justify-center rounded-full border text-xs italic',
        className,
      )}
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
      k
      {!reduced && (
        <motion.span
          aria-hidden
          className="border-gold/30 absolute inset-0 rounded-full border"
          animate={{ scale: [1, 1.6, 1.9], opacity: [0.6, 0.1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 6,
            ease: 'easeOut',
          }}
        />
      )}
    </span>
  );
};

export { FooterStamp };
export type { FooterStampProps };
