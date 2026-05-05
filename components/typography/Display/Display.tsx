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
      'font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-[clamp(3rem,9vw,8.5rem)]',
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
