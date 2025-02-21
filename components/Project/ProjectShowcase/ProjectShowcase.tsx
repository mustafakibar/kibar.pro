import { PROJECTS_PATH } from '@/common/paths';
import { RepoIcon } from '@/components/RepoIcon';
import {
  ShowcaseActionContainer,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseTitle,
} from '@/components/Showcase';
import { TagItems } from '@/components/Tag';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ProjectShowcaseProps } from '.';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  className,
  hideTags = false,
  ...props
}) => {
  const hasTagsAndCanBeShown = !hideTags && project.tags;
  const href = project.repoUrl ?? PROJECTS_PATH;

  return (
    <Link
      href={href}
      target="_blank"
      className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer className={cn(className)} {...props}>
        <ShowcaseHeader>
          <ShowcaseTitle>{project.title}</ShowcaseTitle>

          <ShowcaseActionContainer>
            {project.year}
            {project.repoUrl && <RepoIcon url={project.repoUrl} />}
          </ShowcaseActionContainer>
        </ShowcaseHeader>

        {(project.description || hasTagsAndCanBeShown) && <ShowcaseDivider />}

        {project.description && (
          <ShowcaseContent>{project.description}</ShowcaseContent>
        )}

        <ShowcaseFooter>
          {hasTagsAndCanBeShown && <TagItems tags={project.tags} />}
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { ProjectShowcase };
