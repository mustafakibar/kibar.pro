import type { Project } from '@/components/projects/ProjectCard';
import { Body, Mono, Subhead } from '@/components/typography';
import { getLanguageColor } from '@/lib/data/languageColors';
import { formatRelativeShort } from '@/lib/format/relative';
import { ChevronUpRight, Star } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProjectRowProps = {
  project: Project;
  className?: string;
};

const ProjectRow = ({ project, className }: ProjectRowProps) => {
  const isLinked = Boolean(project.repoUrl);
  const langColor = project.language
    ? getLanguageColor(project.language)
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
          title={project.title}
          data-tooltip={project.title}
          className="text-ink duration-fast group-hover:text-gold truncate not-italic transition-colors">
          {project.title}
        </Subhead>
        {project.description && (
          <Body
            size="sm"
            muted
            title={project.description}
            data-tooltip={project.description}
            className="hidden truncate sm:inline">
            — {project.description}
          </Body>
        )}
      </div>

      {project.language && (
        <span className="hidden items-center gap-1.5 md:inline-flex">
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{ background: langColor ?? undefined }}
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
          {formatRelativeShort(project.pushedAt)}
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
