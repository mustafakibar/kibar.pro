import { cn } from '@/lib/utils';
import React from 'react';

export type TextProps = {
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ className, children }) => {
  return <span className={cn(className)}>{children}</span>;
};

export { Text };
