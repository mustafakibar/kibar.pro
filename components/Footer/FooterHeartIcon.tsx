'use client';

import { useAnimInMouseEvent } from '@/hooks/useAnimInMouseEvent';
import { useAnimInView } from '@/hooks/useAnimInView';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  AnimationPlaybackControls,
  motion,
  useAnimate,
} from 'motion/react';
import React, { useEffect, useRef } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
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
        opacity: [0, 0.05, 0.1, 0.2, 0],
        scale: [1, 0.3, 1.1, 2],
      },
      {
        repeat: Infinity,
        repeatDelay: 7,
        duration: 10,
        ease: 'easeInOut',
      },
    );

    return () => controlsRef?.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  return (
    <div
      className={cn(
        'flex shrink items-center justify-center overflow-hidden align-middle',
        color,
        className,
      )}>
      <AnimatePresence>
        <FaRegHeart key="h1" size={Math.max(8, size - 16)} />
        <motion.div
          ref={scope}
          initial={{ opacity: 0, scale: 1 }}
          className="absolute">
          <FaRegHeart key="h2" size={size} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { FooterHeartIcon };
