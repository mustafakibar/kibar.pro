import {
  VIEW_COOKIE,
  isViewMode,
  type ViewMode,
  type ViewSection,
} from '@/lib/viewCookie';
import { cookies } from 'next/headers';
import 'server-only';

const readViewCookie = async (
  section: ViewSection,
  fallback: ViewMode,
): Promise<ViewMode> => {
  const store = await cookies();
  const value = store.get(VIEW_COOKIE[section])?.value;
  return isViewMode(value) ? value : fallback;
};

export { readViewCookie };
