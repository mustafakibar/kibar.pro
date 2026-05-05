import { Body, Mono, Subhead } from '@/components/typography';
import { NOTES_PATH } from '@/lib/constants/paths';
import type { NoteSummary } from '@/lib/notes';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NoteCardProps = {
  note: NoteSummary;
  index: number;
  className?: string;
};

const ROMANS = [
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'vi',
  'vii',
  'viii',
  'ix',
  'x',
  'xi',
  'xii',
] as const;

const NoteCard = ({ note, index, className }: NoteCardProps) => (
  <Link
    href={`${NOTES_PATH}/${note.slug}`}
    className={cn(
      'group border-rule duration-fast hover:bg-rule/40 flex items-baseline gap-4 border-b py-4 transition-colors',
      className,
    )}>
    <span className="font-display text-gold w-10 shrink-0 italic">
      {ROMANS[index] ?? `${index + 1}.`}
    </span>
    <div className="flex-1">
      <Subhead
        as="h3"
        className="text-ink duration-fast group-hover:text-gold not-italic transition-colors">
        {note.frontmatter.title}
      </Subhead>
      {note.frontmatter.description && (
        <Body size="sm" muted className="mt-1 line-clamp-1">
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
