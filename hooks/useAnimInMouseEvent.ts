import { AnimationPlaybackControls } from 'motion/react';
import { useEffect } from 'react';

const useAnimInMouseEvent = (
  scope: React.RefObject<Element | null>,
  control: React.RefObject<AnimationPlaybackControls | null>,
) => {
  useEffect(() => {
    if (scope.current != null) {
      scope.current.addEventListener('mouseenter', () => {
        control.current?.pause();
      });

      scope.current.addEventListener('mouseleave', () => {
        control.current?.play();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useAnimInMouseEvent };
