'use client';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

const Marquee = ({
  children,
  speed = 40,
  className,
  pauseOnHover = true,
}: MarqueeProps) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={cn('overflow-hidden', className)}>
        <div className="flex gap-12 whitespace-nowrap">{children}</div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        '[--marquee-mask:linear-gradient(to_right,transparent_0%,#000_8%,#000_92%,transparent_100%)]',
        '[-webkit-mask-image:var(--marquee-mask)] [mask-image:var(--marquee-mask)]',
        className,
      )}>
      <div
        className={cn(
          'flex gap-12 whitespace-nowrap',
          'animate-[marquee_var(--marquee-duration)_linear_infinite]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
        style={{ ['--marquee-duration' as string]: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export { Marquee };
export type { MarqueeProps };
