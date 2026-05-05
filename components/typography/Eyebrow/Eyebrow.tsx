import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

const Eyebrow = ({ children, className }: EyebrowProps) => (
  <p
    className={cn(
      'font-body text-gold text-sm font-medium tracking-[0.4em] uppercase',
      className,
    )}>
    {children}
  </p>
);

export { Eyebrow };
export type { EyebrowProps };
