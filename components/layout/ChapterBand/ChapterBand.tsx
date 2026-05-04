import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ChapterBandProps = {
  children: ReactNode;
  className?: string;
};

const ChapterBand = ({ children, className }: ChapterBandProps) => (
  <section
    className={cn(
      'bg-stage relative isolate overflow-hidden py-16 md:py-24',
      'before:bg-glow-gold before:pointer-events-none before:absolute before:top-1/2 before:left-1/4 before:-z-10 before:h-[460px] before:w-[460px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-[130px]',
      'after:bg-glow-crimson after:pointer-events-none after:absolute after:top-2/3 after:right-0 after:-z-10 after:h-[420px] after:w-[420px] after:translate-x-1/3 after:rounded-full after:blur-[130px]',
      className,
    )}>
    {children}
  </section>
);

export { ChapterBand };
export type { ChapterBandProps };
