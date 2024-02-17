import { PROJECTS_PATH } from '@/app/constants';
import { Tag } from '@/components/Tag';
import { cn } from '@/lib/utils';
import { ChevronRight, ExternalLink, Github, Gitlab } from 'lucide-react';
import Link from 'next/link';
import { ProjectShowcaseProps } from '.';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  className,
  ...props
}) => {
  const hasTags = project.tags?.length ?? 0 > 0;

  let repoIcon = null;
  if (project.repoUrl != null) {
    if (project.repoUrl.includes('github')) {
      repoIcon = <Github />;
    } else if (project.repoUrl.includes('gitlab')) {
      repoIcon = <Gitlab />;
    } else {
      repoIcon = <ExternalLink />;
    }
  }

  return (
    <div
      className={cn(
        'relative flex flex-col flex-nowrap gap-3 rounded-xl bg-primary/5 p-5',
        className,
      )}
      {...props}>
      <div className="flex flex-col gap-3">
        <span className="pointer-events-none absolute bottom-0 right-0 touch-none rounded-tl-lg bg-background/30 px-2 text-xs text-foreground/30">
          {project.year}
        </span>

        <div className="flex flex-row items-center justify-between">
          <h1 className="line-clamp-1 text-xl font-semibold">
            {project.title}
          </h1>
          <div className="flex flex-row items-center gap-5 text-primary/80">
            {project.repoUrl && (
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href={project.repoUrl}>
                <span className="hover:text-accent-foreground">{repoIcon}</span>
              </Link>
            )}

            {project.slug && (
              <div className="inline-flex flex-row underline-offset-4 hover:text-accent-foreground hover:underline">
                <Link passHref href={`${PROJECTS_PATH}\\${project.slug}`}>
                  View
                </Link>
                <ChevronRight />
              </div>
            )}
          </div>
        </div>

        <div className="relative h-1">
          <div className="absolute h-1/2 w-full rounded-md bg-foreground/15 outline outline-2 outline-offset-1 outline-primary/10"></div>
        </div>

        <p className="md:text-md line-clamp-3 text-justify text-sm opacity-85">
          {project.description}
        </p>
      </div>

      {hasTags && (
        <div className="flex flex-row flex-wrap gap-3">
          {project.tags!.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      )}
    </div>
  );
};

export { ProjectShowcase };
