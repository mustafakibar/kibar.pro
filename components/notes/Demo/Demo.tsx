import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type DemoProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

const Demo = ({ title, children, className }: DemoProps) => (
  <figure
    className={cn(
      'border-rule-strong bg-stage my-6 overflow-hidden rounded-md border',
      className,
    )}>
    {title && (
      <figcaption className="border-rule text-ink-faint border-b px-4 py-2 font-mono text-xs tracking-widest uppercase">
        {title}
      </figcaption>
    )}
    <div className="p-6">{children}</div>
  </figure>
);

export { Demo };
export type { DemoProps };
