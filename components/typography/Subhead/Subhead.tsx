import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type SubheadProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const Subhead = ({ as: Tag = 'h3', children, className }: SubheadProps) => (
  <Tag
    className={cn(
      'font-display text-ink-muted text-xl leading-tight font-normal italic',
      className,
    )}>
    {children}
  </Tag>
);

export { Subhead };
export type { SubheadProps };
