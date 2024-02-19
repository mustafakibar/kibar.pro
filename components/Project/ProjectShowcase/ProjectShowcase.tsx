import { PROJECTS_PATH } from '@/app/constants';
import { RepoIcon } from '@/components/RepoIcon';
import {
  ShowcaseActionContainer,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDivider,
  ShowcaseFooter,
  ShowcaseHeader,
  ShowcaseMain,
  ShowcaseTitle,
  ShowcaseViewURLButton,
} from '@/components/Showcase';
import { TagItems } from '@/components/Tag';
import { cn } from '@/lib/utils';
import { ProjectShowcaseProps } from '.';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  className,
  ...props
}) => {
  return (
    <ShowcaseContainer className={cn(className)} {...props}>
      <ShowcaseMain>
        <span className="pointer-events-none absolute bottom-0 right-0 touch-none rounded-tl-lg bg-background/30 px-2 text-xs text-foreground/30">
          Year: <span className="font-semibold">{project.year}</span>
        </span>

        <ShowcaseHeader>
          <ShowcaseTitle>{project.title}</ShowcaseTitle>

          <ShowcaseActionContainer>
            {project.repoUrl && (
              <span className="hover:text-accent-foreground">
                <RepoIcon url={project.repoUrl} />
              </span>
            )}

            {project.slug && (
              <ShowcaseViewURLButton
                url={`${PROJECTS_PATH}\\${project.slug}`}
              />
            )}
          </ShowcaseActionContainer>
        </ShowcaseHeader>

        <ShowcaseDivider />

        <ShowcaseContent>{project.description}</ShowcaseContent>
      </ShowcaseMain>

      <ShowcaseFooter>
        <TagItems tags={project.tags} />
      </ShowcaseFooter>
    </ShowcaseContainer>
  );
};

export { ProjectShowcase };
