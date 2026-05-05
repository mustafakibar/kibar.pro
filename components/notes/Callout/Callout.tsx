import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type CalloutProps = {
  type?: 'note' | 'warning';
  children: ReactNode;
  className?: string;
};

const Callout = ({ type = 'note', children, className }: CalloutProps) => (
  <aside
    role="note"
    className={cn(
      'bg-elevated font-body text-ink-muted my-6 rounded-md border-l-2 px-4 py-3 text-sm',
      type === 'note' ? 'border-gold' : 'border-crimson',
      className,
    )}>
    {children}
  </aside>
);

export { Callout };
export type { CalloutProps };
