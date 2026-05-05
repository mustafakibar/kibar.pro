import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type CaptionProps = {
  children: ReactNode;
  className?: string;
};

const Caption = ({ children, className }: CaptionProps) => (
  <p
    className={cn(
      'font-body text-ink-subtle text-sm leading-[1.45]',
      className,
    )}>
    {children}
  </p>
);

export { Caption };
export type { CaptionProps };
