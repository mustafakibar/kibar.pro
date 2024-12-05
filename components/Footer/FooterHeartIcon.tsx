'use client';

import { HeartPulse } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FooterHeartIconProps } from '.';

const FooterHeartIcon: React.FC<FooterHeartIconProps> = ({
  className,
  size,
  color,
}) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-shrink items-center justify-center align-middle',
        inView ? 'running' : 'paused',
        color,
        className,
      )}>
      <HeartPulse size={Math.max(8, size - 16)} />
      <HeartPulse
        className={cn('absolute animate-ping opacity-40')}
        size={size}
      />
    </div>
  );
};

export { FooterHeartIcon };
