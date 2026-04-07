import { headingFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

export type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        headingFont.className,
        'text-2xl tracking-tight',
        className,
      )}>
      {children}
    </h2>
  );
};

export { Heading };
