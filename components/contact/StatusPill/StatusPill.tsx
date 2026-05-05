import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type StatusPillProps = {
  children: ReactNode;
  className?: string;
};

const StatusPill = ({ children, className }: StatusPillProps) => (
  <span
    className={cn(
      'border-gold/40 bg-gold/10 text-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-widest uppercase',
      className,
    )}>
    <span aria-hidden className="bg-success size-1.5 rounded-full" />
    {children}
  </span>
);

export { StatusPill };
export type { StatusPillProps };
