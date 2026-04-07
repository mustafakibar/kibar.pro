import { Project } from '..';

export type ProjectViewProps = {
  project: Project;
};

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
  return (
    <div>
      - Project view
      {project.title}
      {project.description}
    </div>
  );
};

export { ProjectView };
