'use client';

import { motion } from 'motion/react';
import React from 'react';
import { AnimatedItemWrapperProps } from '.';

const AnimatedItemWrapper: React.FC<AnimatedItemWrapperProps> = ({
  className,
  itemIndex,
  children,
}) => {
  return (
    <motion.div
      className={className}
      key={itemIndex}
      initial="hidden"
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        delay: itemIndex * 0.2,
        duration: 0.3,
        ease: ['easeIn', 'easeOut'],
      }}>
      {children}
    </motion.div>
  );
};

export { AnimatedItemWrapper };
