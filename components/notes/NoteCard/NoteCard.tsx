import { Body, Mono, Subhead } from '@/components/typography';
import { NOTES_PATH } from '@/lib/constants/paths';
import type { NoteSummary } from '@/lib/notes';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NoteCardProps = {
  note: NoteSummary;
  /** 'row' = horizontal list row (default); 'card' = vertical card for grid view */
  layout?: 'row' | 'card';
  className?: string;
};

const NoteCard = ({ note, layout = 'row', className }: NoteCardProps) => {
  if (layout === 'card') {
    return (
      <Link
        href={`${NOTES_PATH}/${note.slug}`}
        className={cn(
          'group border-rule bg-elevated duration-normal hover:border-gold/40 flex h-full flex-col gap-3 rounded-lg border p-5 transition-all ease-out hover:shadow-[0_12px_36px_-12px_oklch(0.05_0_0/0.7)]',
          className,
        )}>
        <Subhead
          as="h3"
          title={note.frontmatter.title}
          className="text-ink duration-fast group-hover:text-gold line-clamp-2 not-italic transition-colors">
          {note.frontmatter.title}
        </Subhead>
        {note.frontmatter.description && (
          <Body
            size="sm"
            muted
            title={note.frontmatter.description}
            className="line-clamp-3">
            {note.frontmatter.description}
          </Body>
        )}
        <footer className="border-rule mt-auto flex items-center justify-between gap-3 border-t pt-3">
          <Mono className="text-ink-faint text-xs">
            {note.frontmatter.date}
          </Mono>
          <Mono className="text-ink-faint text-xs">
            {note.readingTimeMinutes} min
          </Mono>
        </footer>
      </Link>
    );
  }

  return (
    <Link
      href={`${NOTES_PATH}/${note.slug}`}
      className={cn(
        'group border-rule duration-fast hover:bg-rule/40 flex items-baseline gap-4 border-b px-3 py-4 transition-colors',
        className,
      )}>
      <div className="min-w-0 flex-1">
        <Subhead
          as="h3"
          title={note.frontmatter.title}
          data-tooltip={note.frontmatter.title}
          className="text-ink duration-fast group-hover:text-gold truncate not-italic transition-colors">
          {note.frontmatter.title}
        </Subhead>
        {note.frontmatter.description && (
          <Body
            size="sm"
            muted
            title={note.frontmatter.description}
            data-tooltip={note.frontmatter.description}
            className="mt-1 truncate">
            {note.frontmatter.description}
          </Body>
        )}
      </div>
      <Mono className="text-ink-faint">{note.frontmatter.date}</Mono>
      <Mono className="text-ink-faint">{note.readingTimeMinutes} min</Mono>
    </Link>
  );
};

export { NoteCard };
export type { NoteCardProps };
