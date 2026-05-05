'use client';

import { CertificateCard } from '@/components/certificates/CertificateCard';
import { CertificateRow } from '@/components/certificates/CertificateRow';
import { Grid } from '@/components/layout/Grid';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { Mono } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { LayoutGrid, ListIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type ViewMode = 'grid' | 'list';
const STORAGE_KEY = 'kibar:certificates-view';

type CertificatesViewProps = {
  certificates: readonly Certificate[];
};

const CertificatesView = ({ certificates }: CertificatesViewProps) => {
  const [view, setView] = useState<ViewMode>('grid');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'list' || saved === 'grid') setView(saved);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const setViewPersisted = (next: ViewMode) => {
    setView(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-end gap-2">
        <Mono className="text-ink-faint text-xs tracking-widest uppercase">
          View
        </Mono>
        <div
          role="group"
          aria-label="Toggle view mode"
          className="border-rule flex overflow-hidden rounded-md border">
          <button
            type="button"
            aria-pressed={view === 'grid'}
            aria-label="Grid view"
            onClick={() => setViewPersisted('grid')}
            className={cn(
              'duration-fast flex size-8 items-center justify-center transition-colors',
              view === 'grid'
                ? 'bg-gold/15 text-gold'
                : 'text-ink-muted hover:bg-rule/40 hover:text-ink',
            )}>
            <LayoutGrid className="size-4" />
          </button>
          <button
            type="button"
            aria-pressed={view === 'list'}
            aria-label="List view"
            onClick={() => setViewPersisted('list')}
            className={cn(
              'border-rule duration-fast flex size-8 items-center justify-center border-l transition-colors',
              view === 'list'
                ? 'bg-gold/15 text-gold'
                : 'text-ink-muted hover:bg-rule/40 hover:text-ink',
            )}>
            <ListIcon className="size-4" />
          </button>
        </div>
      </div>

      {view === 'grid' ? (
        <Grid cols={{ md: 2, xl: 3 }}>
          {certificates.map((c, i) => (
            <RevealOnView key={c.title} delay={Math.min(i, 9) * 0.04}>
              <CertificateCard certificate={c} />
            </RevealOnView>
          ))}
        </Grid>
      ) : (
        <ol className="flex flex-col" role="list">
          {certificates.map((c, i) => (
            <li key={c.title}>
              <RevealOnView delay={Math.min(i, 9) * 0.04}>
                <CertificateRow certificate={c} />
              </RevealOnView>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export { CertificatesView };
export type { CertificatesViewProps };
