'use client';

import { Grid } from '@/components/layout/Grid';
import { PageShell } from '@/components/layout/PageShell';
import { GistCard } from '@/components/notes/GistCard';
import { NoteCard } from '@/components/notes/NoteCard';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useViewPreference, type ViewMode } from '@/hooks/useViewPreference';
import type { GistSummary } from '@/lib/data/getGists';
import type { NoteSummary } from '@/lib/notes';
import { duration, easing } from '@/lib/tokens';
import { VIEW_COOKIE } from '@/lib/viewCookie';
import { AnimatePresence, motion } from 'motion/react';

export type FeedItem =
  | { kind: 'note'; date: string; data: NoteSummary }
  | { kind: 'gist'; date: string; data: GistSummary };

type NotesViewProps = {
  items: readonly FeedItem[];
  title: string;
  description: string;
  initialView?: ViewMode;
};

const itemKey = (item: FeedItem): string =>
  item.kind === 'note' ? `n-${item.data.slug}` : `g-${item.data.id}`;

const renderItem = (item: FeedItem) =>
  item.kind === 'note' ? (
    <NoteCard note={item.data} />
  ) : (
    <GistCard gist={item.data} />
  );

const NotesView = ({
  items,
  title,
  description,
  initialView = 'list',
}: NotesViewProps) => {
  const [view, setView] = useViewPreference(VIEW_COOKIE.notes, initialView);

  return (
    <PageShell
      title={title}
      description={description}
      toolbar={<ViewToggle view={view} onChange={setView} />}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.normal, ease: easing.out }}>
          {view === 'grid' ? (
            <Grid cols={{ md: 2 }}>
              {items.map((item) => (
                <div key={itemKey(item)}>{renderItem(item)}</div>
              ))}
            </Grid>
          ) : (
            <ol className="flex flex-col" role="list">
              {items.map((item) => (
                <li key={itemKey(item)}>{renderItem(item)}</li>
              ))}
            </ol>
          )}
        </motion.div>
      </AnimatePresence>
    </PageShell>
  );
};

export { NotesView };
export type { NotesViewProps };
