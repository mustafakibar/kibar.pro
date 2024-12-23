'use client';

import { useAnimInMouseEvent } from '@/hooks/useAnimInMouseEvent';
import { useAnimInView } from '@/hooks/useAnimInView';
import { cn } from '@/lib/utils';
import { AnimationPlaybackControls, motion, useAnimate } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import { ParallaxProps } from '.';

// thanks to https://codepen.io/ykadosh/pen/KKezJzz

const Parallax: React.FC<ParallaxProps> = ({
  className,
  children,
  durationInMillis = 40000,
  reverse = false,
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls>(null);
  useAnimInView(scope, controlsRef);
  useAnimInMouseEvent(scope, controlsRef);

  useEffect(() => {
    controlsRef.current = animate(
      scope.current,
      {
        x: !reverse ? ['-50%', '0'] : ['0%', '-50%'],
      },
      {
        repeat: Infinity,
        duration: durationInMillis / 1000,
        ease: 'linear',
      },
    );

    return () => controlsRef?.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  return (
    <div
      className={cn(
        'relative flex w-full overflow-x-hidden rounded-xl px-6 py-4 sm:max-w-[90vw]',
        className,
      )}
      {...props}>
      <motion.div
        ref={scope}
        className="flex max-w-fit gap-8"
        style={{
          willChange: 'transform',
        }}>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </motion.div>

      <div className="before:blur-3 after:blur-3 pointer-events-none absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-black/5 before:to-transparent before:filter after:absolute after:right-0 after:top-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-black/5 after:to-transparent after:filter dark:before:from-white/5 dark:after:from-white/5"></div>
    </div>
  );
};

export { Parallax };
