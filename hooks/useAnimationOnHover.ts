import { AnimationPlaybackControls } from 'motion/react';
import { useEffect } from 'react';

/**
 * Pauses an animation while the pointer is hovering `scope` and resumes on leave.
 */
const useAnimationOnHover = (
  scope: React.RefObject<Element | null>,
  control: React.RefObject<AnimationPlaybackControls | null>,
) => {
  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const onEnter = () => control.current?.pause();
    const onLeave = () => control.current?.play();
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useAnimationOnHover };
