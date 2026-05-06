'use client';

import { useEffect } from 'react';

/**
 * Blur a clicked link after navigation so its :focus state doesn't linger when
 * the user comes back from a new tab (target=_blank). Without this, the row in
 * the list looks "still selected" on return.
 *
 * NOTE: A previous version also disabled body pointer-events on visibility
 * change to clear stuck :hover state, but that locked the page until the user
 * moved the mouse — broke clicks. Just keeping blur now; hover quirks on tab
 * refocus are accepted browser behavior.
 */
const InteractionGuards = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (link instanceof HTMLAnchorElement) {
        // Defer blur so the navigation completes first
        requestAnimationFrame(() => link.blur());
      }
    };

    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  return null;
};

export { InteractionGuards };
