import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ColCount = 1 | 2 | 3;

type GridProps = {
  children: ReactNode;
  className?: string;
  cols?: ColCount | { sm?: 1 | 2; md?: ColCount; xl?: ColCount };
  gap?: 'sm' | 'md' | 'lg';
};

const gapClass = { sm: 'gap-4', md: 'gap-8', lg: 'gap-10' } as const;

const SM_CLASS: Record<1 | 2, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
};

const MD_CLASS: Record<ColCount, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
};

const XL_CLASS: Record<ColCount, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
};

const Grid = ({ children, className, cols = 3, gap = 'md' }: GridProps) => {
  const classes =
    typeof cols === 'number'
      ? cn('grid grid-cols-1', MD_CLASS[cols])
      : cn(
          'grid grid-cols-1',
          cols.sm ? SM_CLASS[cols.sm] : '',
          cols.md ? MD_CLASS[cols.md] : '',
          cols.xl ? XL_CLASS[cols.xl] : '',
        );
  return (
    <div className={cn(classes, gapClass[gap], className)}>{children}</div>
  );
};

export { Grid };
export type { GridProps };
