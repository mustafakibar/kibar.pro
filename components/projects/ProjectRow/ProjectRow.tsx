import type { Project } from '@/components/projects/ProjectCard';
import { Body, Mono, Subhead } from '@/components/typography';
import { ChevronUpRight, Star } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProjectRowProps = {
  project: Project;
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
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return 'today';
  if (days < 7) return `${days}d`;
  if (days < 30) return `${Math.floor(days / 7)}w`;
  if (days < 365) return `${Math.floor(days / 30)}mo`;
  return `${Math.floor(days / 365)}y`;
};

const ProjectRow = ({ project, className }: ProjectRowProps) => {
  const isLinked = Boolean(project.repoUrl);
  const langColor = project.language
    ? (LANG_COLORS[project.language] ?? '#9f8a6a')
    : null;

  return (
    <Link
      href={project.repoUrl ?? '#'}
      target={isLinked ? '_blank' : undefined}
      rel={isLinked ? 'noopener noreferrer' : undefined}
      className={cn(
        'group border-rule duration-fast hover:bg-rule/40 flex items-center gap-4 border-b px-3 py-4 transition-colors',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      <div className="duration-normal flex min-w-0 flex-1 items-center gap-3 transition-transform ease-out group-hover:translate-x-1">
        <Subhead
          as="h3"
          className="text-ink duration-fast group-hover:text-gold truncate not-italic transition-colors">
          {project.title}
        </Subhead>
        {project.description && (
          <Body size="sm" muted className="hidden truncate sm:inline">
            — {project.description}
          </Body>
        )}
      </div>

      {project.language && (
        <span className="hidden items-center gap-1.5 md:inline-flex">
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{ background: langColor ?? '#9f8a6a' }}
          />
          <Mono className="text-ink-muted text-xs">{project.language}</Mono>
        </span>
      )}

      {typeof project.stars === 'number' && project.stars > 0 && (
        <span className="hidden items-center gap-1 sm:inline-flex">
          <Star className="text-gold size-3" strokeWidth={2} />
          <Mono className="text-ink-muted text-xs">{project.stars}</Mono>
        </span>
      )}

      {project.pushedAt && (
        <Mono className="text-ink-faint hidden text-xs md:inline">
          {formatRelative(project.pushedAt)}
        </Mono>
      )}

      <ChevronUpRight
        data-hover-only-arrow
        className="text-ink-faint duration-normal group-hover:text-gold size-4 self-center opacity-0 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12 group-hover:opacity-100"
      />
    </Link>
  );
};

export { ProjectRow };
export type { ProjectRowProps };
