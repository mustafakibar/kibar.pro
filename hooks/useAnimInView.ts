import { AnimationPlaybackControls, useInView } from 'motion/react';
import { useEffect } from 'react';

const useAnimInView = (
  scope: React.RefObject<Element | null>,
  control: React.RefObject<AnimationPlaybackControls | null>,
) => {
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      control.current?.play();
    } else {
      control.current?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
};

export { useAnimInView };
