'use client';

import { useAnimInMouseEvent } from '@/hooks/useAnimInMouseEvent';
import { useAnimInView } from '@/hooks/useAnimInView';
import { HeartPulse } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { AnimationPlaybackControls, motion, useAnimate } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import { FooterHeartIconProps } from '.';

const FooterHeartIcon: React.FC<FooterHeartIconProps> = ({
  className,
  size,
  color,
}) => {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls>(null);
  useAnimInView(scope, controlsRef);
  useAnimInMouseEvent(scope, controlsRef);

  useEffect(() => {
    controlsRef.current = animate(
      scope.current,
      {
        opacity: [0, 0.3, 0.1, 0.1, 0],
        scale: [1, 2],
      },
      {
        repeat: Infinity,
        repeatDelay: 7,
        duration: 7,
        ease: 'easeOut',
      },
    );

    return () => controlsRef?.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  return (
    <div
      className={cn(
        'flex flex-shrink items-center justify-center align-middle',
        color,
        className,
      )}>
      <HeartPulse size={Math.max(8, size - 16)} />
      <motion.div ref={scope} initial="hidden" className="absolute">
        <HeartPulse size={size} />
      </motion.div>
    </div>
  );
};

export { FooterHeartIcon };
