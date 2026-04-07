import { cn } from '@/lib/utils';
import React from 'react';

export type SubheadProps = {
  className?: string;
  children: React.ReactNode;
};

const Subhead: React.FC<SubheadProps> = ({ className, children }) => {
  return <h3 className={cn('text-muted-foreground', className)}>{children}</h3>;
};

export { Subhead };
