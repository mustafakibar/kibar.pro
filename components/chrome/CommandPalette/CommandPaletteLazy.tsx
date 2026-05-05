'use client';

import dynamic from 'next/dynamic';

const CommandPalette = dynamic(
  () => import('./CommandPalette').then((m) => ({ default: m.CommandPalette })),
  { ssr: false, loading: () => null },
);

export function CommandPaletteLazy() {
  return <CommandPalette />;
}
