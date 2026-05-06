// Shared cookie keys + view-mode helpers (safe to import from both server and
// client modules — no React or 'use client' boundary in this file).
const VIEW_COOKIE = {
  projects: 'kibar-view-projects',
  certificates: 'kibar-view-certificates',
  notes: 'kibar-view-notes',
} as const;

type ViewMode = 'grid' | 'list';
type ViewSection = keyof typeof VIEW_COOKIE;

const isViewMode = (v: unknown): v is ViewMode => v === 'grid' || v === 'list';

export { VIEW_COOKIE, isViewMode };
export type { ViewMode, ViewSection };
