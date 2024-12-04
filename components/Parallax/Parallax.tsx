import { cn } from '@/lib/utils';
import React from 'react';
import { ParallaxProps } from '.';

// thanks to https://codepen.io/ykadosh/pen/KKezJzz

const Parallax: React.FC<ParallaxProps> = ({
  className,
  children,
  durationInMillis = 40000,
  reverse = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'max-w[50vw] relative flex overflow-hidden sm:max-w-[90vw]',
        className,
      )}
      style={
        {
          '--duration': `${durationInMillis}ms`,
          '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties
      }
      {...props}>
      <div
        className={cn(
          'animate-parallax flex max-w-fit items-center gap-8 p-6',
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
