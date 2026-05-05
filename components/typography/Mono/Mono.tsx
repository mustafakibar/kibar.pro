import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type MonoProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const Mono = ({ as: Tag = 'span', children, className }: MonoProps) => (
  <Tag className={cn('font-mono text-sm', className)}>{children}</Tag>
);

export { Mono };
export type { MonoProps };
