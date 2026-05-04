import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type HeadingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  italic?: boolean;
};

const Heading = ({
  as: Tag = 'h2',
  children,
  className,
  italic = false,
}: HeadingProps) => (
  <Tag
    className={cn(
      'font-display text-2xl leading-[1.05] tracking-[-0.015em] md:text-3xl',
      italic && 'italic',
      className,
    )}
    style={{ fontVariationSettings: "'opsz' 100, 'SOFT' 30" }}>
    {children}
  </Tag>
);

export { Heading };
export type { HeadingProps };
