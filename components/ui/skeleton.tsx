import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('bg-rule-strong animate-pulse rounded-md', className)}
    {...props}
  />
);

export { Skeleton };
