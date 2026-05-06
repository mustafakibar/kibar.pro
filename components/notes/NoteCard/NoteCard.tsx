import { Body, Mono, Subhead } from '@/components/typography';
import { NOTES_PATH } from '@/lib/constants/paths';
import type { NoteSummary } from '@/lib/notes';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NoteCardProps = {
  note: NoteSummary;
  className?: string;
};

const NoteCard = ({ note, className }: NoteCardProps) => (
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

export { NoteCard };
export type { NoteCardProps };
