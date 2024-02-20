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
  ShowcaseStamp,
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
        <ShowcaseStamp>
          Year: <span className="font-semibold">{project.year}</span>
        </ShowcaseStamp>

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
