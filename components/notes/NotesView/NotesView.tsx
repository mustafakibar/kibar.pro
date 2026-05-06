'use client';

import { CollectionView } from '@/components/layout/CollectionView';
import { GistCard } from '@/components/notes/GistCard';
import { NoteCard } from '@/components/notes/NoteCard';
import { type ViewMode } from '@/hooks/useViewPreference';
import type { GistSummary } from '@/lib/data/getGists';
import type { NoteSummary } from '@/lib/notes';
import { VIEW_COOKIE } from '@/lib/viewCookie';

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

const NotesView = ({
  items,
  title,
  description,
  initialView = 'list',
}: NotesViewProps) => (
  <CollectionView
    items={items}
    title={title}
    description={description}
    storageKey={VIEW_COOKIE.notes}
    initialView={initialView}
    getKey={itemKey}
    renderCard={(item) =>
      item.kind === 'note' ? (
        <NoteCard note={item.data} layout="card" />
      ) : (
        <GistCard gist={item.data} layout="card" />
      )
    }
    renderRow={(item) =>
      item.kind === 'note' ? (
        <NoteCard note={item.data} layout="row" />
      ) : (
        <GistCard gist={item.data} layout="row" />
      )
    }
  />
);

export { NotesView };
export type { NotesViewProps };
