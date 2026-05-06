import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CaptionProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'p'>, 'children' | 'className'>;

const Caption = ({ children, className, ...rest }: CaptionProps) => (
  <p
    {...rest}
    className={cn(
      'font-body text-ink-subtle text-sm leading-[1.45]',
      className,
    )}>
    {children}
  </p>
);

export { Caption };
export type { CaptionProps };
