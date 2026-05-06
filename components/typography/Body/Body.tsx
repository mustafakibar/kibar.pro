import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type BodyProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
} & Omit<ComponentPropsWithoutRef<'p'>, 'children' | 'className'>;

const sizes = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
} as const;

const Body = ({
  as: Tag = 'p',
  children,
  className,
  size = 'base',
  muted = false,
  ...rest
}: BodyProps) => (
  <Tag
    {...rest}
    className={cn(
      'font-body leading-[1.55]',
      sizes[size],
      muted ? 'text-ink-muted' : 'text-ink',
      className,
    )}>
    {children}
  </Tag>
);

export { Body };
export type { BodyProps };
