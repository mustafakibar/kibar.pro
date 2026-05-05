'use client';

import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { GistCard } from '@/components/notes/GistCard';
import { NoteCard } from '@/components/notes/NoteCard';
import { Mono } from '@/components/typography';
import type { GistSummary } from '@/lib/data/getGists';
import { LayoutGrid, ListIcon } from '@/lib/icons';
import type { NoteSummary } from '@/lib/notes';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type ViewMode = 'grid' | 'list';
const STORAGE_KEY = 'kibar:notes-view';

export type FeedItem =
  | { kind: 'note'; date: string; data: NoteSummary }
  | { kind: 'gist'; date: string; data: GistSummary };

type NotesViewProps = {
  items: readonly FeedItem[];
  title: string;
  description: string;
};

const NotesView = ({ items, title, description }: NotesViewProps) => {
  const [view, setView] = useState<ViewMode>('list');

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
    <>
      <Container size="narrow" className="pt-12 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <ChapterHead
            title={title}
            description={description}
            headingLevel="h1"
          />
          <ViewToolbar view={view} onChange={setViewPersisted} />
        </div>
      </Container>

      <Container size="narrow" className="py-8">
        {view === 'grid' ? (
          <Grid cols={{ md: 2 }}>
            {items.map((item) => (
              <div
                key={
                  item.kind === 'note'
                    ? `n-${item.data.slug}`
                    : `g-${item.data.id}`
                }>
                {item.kind === 'note' ? (
                  <NoteCard note={item.data} />
                ) : (
                  <GistCard gist={item.data} />
                )}
              </div>
            ))}
          </Grid>
        ) : (
          <ol className="flex flex-col" role="list">
            {items.map((item) => (
              <li
                key={
                  item.kind === 'note'
                    ? `n-${item.data.slug}`
                    : `g-${item.data.id}`
                }>
                {item.kind === 'note' ? (
                  <NoteCard note={item.data} />
                ) : (
                  <GistCard gist={item.data} />
                )}
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
};

type ViewToolbarProps = {
  view: ViewMode;
  onChange: (next: ViewMode) => void;
};

const ViewToolbar = ({ view, onChange }: ViewToolbarProps) => (
  <div className="flex items-center gap-2">
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
        onClick={() => onChange('grid')}
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
        onClick={() => onChange('list')}
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
);

export { NotesView };
export type { NotesViewProps };
