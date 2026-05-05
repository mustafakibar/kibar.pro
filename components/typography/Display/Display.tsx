import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type DisplayProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  italic?: boolean;
  sweep?: boolean;
};

const Display = ({
  as: Tag = 'h1',
  children,
  className,
  italic = false,
  sweep = false,
}: DisplayProps) => (
  <Tag
    className={cn(
      'font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-[clamp(3.5rem,10vw,10rem)]',
      italic && 'italic',
      sweep && 'gold-sweep',
      className,
    )}
    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}>
    {children}
  </Tag>
);

export { Display };
export type { DisplayProps };
