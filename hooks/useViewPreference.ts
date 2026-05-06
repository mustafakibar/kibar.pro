'use client';

import type { ViewMode } from '@/lib/viewCookie';
import { useState } from 'react';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const useViewPreference = (
  storageKey: string,
  initialView: ViewMode = 'grid',
): readonly [ViewMode, (next: ViewMode) => void] => {
  const [view, setView] = useState<ViewMode>(initialView);

  const setViewPersisted = (next: ViewMode) => {
    setView(next);
    if (typeof document === 'undefined') return;
    // Cookie is read server-side on the next request so the SSR'd HTML matches
    // the user's preference immediately — no grid↔list flash on load.
    document.cookie = `${storageKey}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
  };

  return [view, setViewPersisted] as const;
};

export { useViewPreference };
export type { ViewMode };
