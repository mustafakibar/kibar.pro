import { Body, Mono, Subhead } from '@/components/typography';
import type { GistSummary } from '@/lib/data/getGists';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type GistCardProps = {
  gist: GistSummary;
  className?: string;
};

const GistCard = ({ gist, className }: GistCardProps) => (
  <Link
    href={gist.url}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'group border-rule duration-fast hover:bg-rule/40 flex items-baseline gap-4 border-b py-4 transition-colors',
      className,
    )}>
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline gap-2">
        <Subhead
          as="h3"
          className="text-ink duration-fast group-hover:text-gold not-italic transition-colors">
          {gist.title}
        </Subhead>
        <Mono className="bg-rule text-ink-faint rounded-sm px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
          Gist
        </Mono>
      </div>
      <Body size="sm" muted className="mt-1 truncate">
        {gist.primaryFile}
        {gist.fileCount > 1 && ` · ${gist.fileCount} files`}
        {gist.primaryLanguage && ` · ${gist.primaryLanguage}`}
      </Body>
    </div>
    <Mono className="text-ink-faint">{gist.updatedAt.slice(0, 10)}</Mono>
    <ChevronUpRight
      data-hover-only-arrow
      className="text-ink-faint duration-normal group-hover:text-gold size-4 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12"
    />
  </Link>
);

export { GistCard };
export type { GistCardProps };
