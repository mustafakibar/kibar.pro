import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type BodyProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
};

const sizes = {
  sm: 'text-base',
  base: 'text-lg',
  lg: 'text-xl',
} as const;

const Body = ({
  as: Tag = 'p',
  children,
  className,
  size = 'base',
  muted = false,
}: BodyProps) => (
  <Tag
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
