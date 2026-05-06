'use client';

import { AnimatedDot } from '@/components/brand/AnimatedDot';
import { cn } from '@/lib/utils';

type MonogramProps = {
  className?: string;
};

const Monogram = ({ className }: MonogramProps) => (
  <span
    className={cn('font-display inline-flex items-baseline', className)}
    style={{ viewTransitionName: 'site-monogram' }}>
    <span
      className="gold-sweep italic"
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
      k
    </span>
    <AnimatedDot variant="glyph" />
  </span>
);

export { Monogram };
export type { MonogramProps };
