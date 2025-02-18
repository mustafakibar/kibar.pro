import * as motion from 'motion/react-client';
import React from 'react';
import { AnimatedItemWrapperProps } from '.';

const AnimatedItemWrapper: React.FC<AnimatedItemWrapperProps> = ({
  className,
  delay = 0,
  children,
}) => {
  return (
    <motion.div
      className={className}
      layout
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        type: 'spring',
        stiffness: 900,
        damping: 40,
        duration: 0.3,
        delay: delay > 0 ? delay * 0.1 : 0,
      }}>
      {children}
    </motion.div>
  );
};

export { AnimatedItemWrapper };
