import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type SubheadProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'h3'>, 'children' | 'className'>;

const Subhead = ({
  as: Tag = 'h3',
  children,
  className,
  ...rest
}: SubheadProps) => (
  <Tag
    {...rest}
    className={cn(
      'font-display text-ink-muted text-lg leading-tight font-normal italic',
      className,
    )}>
    {children}
  </Tag>
);

export { Subhead };
export type { SubheadProps };
