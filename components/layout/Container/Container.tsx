import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'wide';
};

const Container = ({
  as: Tag = 'div',
  children,
  className,
  size = 'wide',
}: ContainerProps) => (
  <Tag
    className={cn(
      size === 'narrow' ? 'container-narrow' : 'container',
      className,
    )}>
    {children}
  </Tag>
);

export { Container };
export type { ContainerProps };
