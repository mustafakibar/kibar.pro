import { titleFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

export type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ className, children, ...props }) => {
  return (
    <h4
      className={cn(
        titleFont.className,
        'text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}>
      {children}
    </h4>
  );
};

export { Title };
