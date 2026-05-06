import { Body, Mono, Subhead } from '@/components/typography';
import type { GistSummary } from '@/lib/data/getGists';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type GistCardProps = {
  gist: GistSummary;
  /** 'row' = horizontal list row (default); 'card' = vertical card for grid view */
  layout?: 'row' | 'card';
  className?: string;
};

const buildMeta = (gist: GistSummary): string =>
  [
    gist.primaryFile,
    gist.fileCount > 1 ? `${gist.fileCount} files` : null,
    gist.primaryLanguage,
  ]
    .filter(Boolean)
    .join(' · ');

const GistCard = ({ gist, layout = 'row', className }: GistCardProps) => {
  const meta = buildMeta(gist);

  if (layout === 'card') {
    return (
      <Link
        href={gist.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group border-rule bg-elevated duration-normal hover:border-gold/40 flex h-full flex-col gap-3 rounded-lg border p-5 transition-all ease-out hover:shadow-[0_12px_36px_-12px_oklch(0.05_0_0/0.7)]',
          className,
        )}>
        <header className="flex items-start justify-between gap-2">
          <Subhead
            as="h3"
            title={gist.title}
            className="text-ink duration-fast group-hover:text-gold line-clamp-2 not-italic transition-colors">
            {gist.title}
          </Subhead>
          <Mono className="bg-rule text-ink-faint shrink-0 rounded-sm px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
            Gist
          </Mono>
        </header>
        <Body size="sm" muted title={meta} className="line-clamp-2">
          {meta}
        </Body>
        <footer className="border-rule mt-auto flex items-center justify-between gap-3 border-t pt-3">
          <Mono className="text-ink-faint text-xs">
            {gist.updatedAt.slice(0, 10)}
          </Mono>
          <ChevronUpRight
            data-hover-only-arrow
            className="text-ink-faint duration-normal group-hover:text-gold size-4 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12"
          />
        </footer>
      </Link>
    );
  }

  return (
    <Link
      href={gist.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group border-rule duration-fast hover:bg-rule/40 flex items-baseline gap-4 border-b px-3 py-4 transition-colors',
        className,
      )}>
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-baseline gap-2">
          <Subhead
            as="h3"
            title={gist.title}
            data-tooltip={gist.title}
            className="text-ink duration-fast group-hover:text-gold min-w-0 truncate not-italic transition-colors">
            {gist.title}
          </Subhead>
          <Mono className="bg-rule text-ink-faint shrink-0 rounded-sm px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
            Gist
          </Mono>
        </div>
        <Body
          size="sm"
          muted
          title={meta}
          data-tooltip={meta}
          className="mt-1 truncate">
          {meta}
        </Body>
      </div>
      <Mono className="text-ink-faint">{gist.updatedAt.slice(0, 10)}</Mono>
      <ChevronUpRight
        data-hover-only-arrow
        className="text-ink-faint duration-normal group-hover:text-gold size-4 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12"
      />
    </Link>
  );
};

export { GistCard };
export type { GistCardProps };
