import { cn } from '@/lib/utils';

type MonogramProps = {
  className?: string;
};

const Monogram = ({ className }: MonogramProps) => (
  <span className={cn('font-display inline-flex items-baseline', className)}>
    <span
      className="gold-sweep italic"
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
      k
    </span>
    <span className="text-crimson">.</span>
  </span>
);

export { Monogram };
export type { MonogramProps };
