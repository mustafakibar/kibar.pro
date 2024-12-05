'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParallaxProps } from '.';

// thanks to https://codepen.io/ykadosh/pen/KKezJzz

const Parallax: React.FC<ParallaxProps> = ({
  className,
  children,
  durationInMillis = 40000,
  reverse = true,
  ...props
}) => {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        'max-w[50vw] relative flex overflow-hidden sm:max-w-[90vw]',
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        {
          '--duration': `${durationInMillis}ms`,
          '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties
      }
      {...props}>
      <div
        className={cn(
          'flex max-w-fit animate-parallax items-center gap-8 px-6 py-4 delay-500',
          inView ? 'running' : 'paused',
          hovered ? 'paused' : 'running',
        )}>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>

      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-50 dark:from-white/5 dark:to-white/5" />
    </div>
  );
};

export { Parallax };
