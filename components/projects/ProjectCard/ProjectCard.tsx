import { SourceLink } from '@/components/projects/SourceLink';
import { TagList } from '@/components/tag/TagList';
import { Body, Mono, Subhead } from '@/components/typography';
import { Star } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Project } from './types';

type ProjectCardProps = {
  project: Project;
  hideTags?: boolean;
  className?: string;
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Rust: '#dea584',
  Go: '#00add8',
  Python: '#3572a5',
  Kotlin: '#a97bff',
  Dart: '#00b4ab',
  Swift: '#f05138',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  C: '#555555',
  'C++': '#f34b7d',
  Java: '#b07219',
  Ruby: '#701516',
  PHP: '#4f5d95',
  MDX: '#fcb32c',
};

const formatRelative = (iso?: string): string => {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = now - then;
  const day = 86400000;
  const days = Math.floor(diff / day);
  if (days < 1) return 'today';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

const ProjectCard = ({
  project,
  hideTags = false,
  className,
}: ProjectCardProps) => {
  const href = project.repoUrl ?? '#';
  const showTags = !hideTags && project.tags && project.tags.length > 0;
  const isLinked = Boolean(project.repoUrl);
  const langColor = project.language
    ? (LANG_COLORS[project.language] ?? '#9f8a6a')
    : null;

  return (
    <Link
      href={href}
      target={isLinked ? '_blank' : undefined}
      rel={isLinked ? 'noopener noreferrer' : undefined}
      data-touch-elevated={isLinked ? '' : undefined}
      className={cn(
        'group border-rule bg-elevated duration-normal flex flex-col gap-3 rounded-lg border p-5 transition-all ease-out',
        isLinked &&
          'hover:border-gold/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_oklch(0.05_0_0/0.6)]',
        !isLinked && 'pointer-events-none',
        project.isArchived && 'opacity-70',
        className,
      )}>
      <header className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <Subhead
            as="h3"
            className="text-ink duration-fast group-hover:text-gold truncate not-italic transition-colors">
            {project.title}
          </Subhead>
          {(project.isFork || project.isArchived) && (
            <div className="flex items-center gap-2">
              {project.isFork && (
                <Mono className="bg-rule text-ink-faint rounded-sm px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
                  fork
                </Mono>
              )}
              {project.isArchived && (
                <Mono className="bg-rule text-ink-faint rounded-sm px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
                  archived
                </Mono>
              )}
            </div>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.repoUrl && <SourceLink url={project.repoUrl} />}
        </div>
      </header>

      {project.description && (
        <Body size="sm" muted className="line-clamp-3">
          {project.description}
        </Body>
      )}

      {showTags && (
        <div className="pt-1">
          <TagList tags={project.tags ?? null} max={5} />
        </div>
      )}

      <footer className="border-rule mt-auto flex items-center gap-4 border-t pt-3 text-xs">
        {project.language && (
          <span className="text-ink-muted inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="size-2 rounded-full"
              style={{ background: langColor ?? '#9f8a6a' }}
            />
            <Mono className="text-xs">{project.language}</Mono>
          </span>
        )}
        {typeof project.stars === 'number' && project.stars > 0 && (
          <span className="text-ink-muted inline-flex items-center gap-1">
            <Star className="text-gold size-3" strokeWidth={2} />
            <Mono className="text-xs">{project.stars}</Mono>
          </span>
        )}
        {project.pushedAt && (
          <Mono className="text-ink-faint ml-auto text-xs">
            {formatRelative(project.pushedAt)}
          </Mono>
        )}
      </footer>
    </Link>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
