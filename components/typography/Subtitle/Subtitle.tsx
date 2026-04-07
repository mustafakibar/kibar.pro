import { cn } from '@/lib/utils';
import React from 'react';

export type SubtitleProps = {
  className?: string;
  children: React.ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h5
      className={cn('text-md text-muted-foreground tracking-tight', className)}
      {...props}>
      {children}
    </h5>
  );
};

export { Subtitle };
