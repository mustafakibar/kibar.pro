import { Tilt } from '@/components/motion/Tilt';
import { SourceLink } from '@/components/projects/SourceLink';
import { TagList } from '@/components/tag/TagList';
import { Body, Mono, Subhead } from '@/components/typography';
import { getLanguageColor } from '@/lib/data/languageColors';
import { formatRelativeLong } from '@/lib/format/relative';
import { Star } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Project } from './types';

type ProjectCardProps = {
  project: Project;
  hideTags?: boolean;
  className?: string;
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
    ? getLanguageColor(project.language)
    : null;

  return (
    <Tilt
      max={6}
      glare={isLinked}
      className={cn(
        'relative h-full',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      <Link
        href={href}
        target={isLinked ? '_blank' : undefined}
        rel={isLinked ? 'noopener noreferrer' : undefined}
        data-touch-elevated={isLinked ? '' : undefined}
        className={cn(
          'group border-rule bg-elevated duration-normal flex h-full flex-col gap-3 rounded-lg border p-5 transition-all ease-out',
          isLinked &&
            'hover:border-gold/40 hover:shadow-[0_12px_36px_-12px_oklch(0.05_0_0/0.7)]',
          project.isArchived && 'opacity-70',
        )}>
        <header className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <Subhead
              as="h3"
              title={project.title}
              data-tooltip={project.title}
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
          <Body
            size="sm"
            muted
            title={project.description}
            data-tooltip={project.description}
            className="line-clamp-3">
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
                style={{ background: langColor ?? undefined }}
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
              {formatRelativeLong(project.pushedAt)}
            </Mono>
          )}
        </footer>
      </Link>
    </Tilt>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
