import { PROJECTS_PATH } from '@/app/(main)/constants';
import { RepoIcon } from '@/components/RepoIcon';
import {
  ShowcaseActionContainer,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseMain,
  ShowcaseStamp,
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
  const href = project.slug ? `${PROJECTS_PATH}//${project.slug}` : '';

  return (
    <Link href={href} className={cn({ 'pointer-events-none': href == '' })}>
      <ShowcaseContainer className={cn(className)} {...props}>
        <ShowcaseMain>
          <ShowcaseStamp>{project.year}</ShowcaseStamp>

          <ShowcaseHeader>
            <ShowcaseTitle>{project.title}</ShowcaseTitle>

            <ShowcaseActionContainer>
              {project.repoUrl && (
                <div className="inline-block hover:text-accent-foreground">
                  <RepoIcon url={project.repoUrl} />
                </div>
              )}
            </ShowcaseActionContainer>
          </ShowcaseHeader>

          <ShowcaseDivider />

          <ShowcaseContent>{project.description}</ShowcaseContent>
        </ShowcaseMain>

        <ShowcaseFooter>
          {!hideTags && project.tags && <TagItems tags={project.tags} />}
        </ShowcaseFooter>
      </ShowcaseContainer>
    </Link>
  );
};

export { ProjectShowcase };
