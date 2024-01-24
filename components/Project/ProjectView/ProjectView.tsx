import { ProjectViewProps } from '.';

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
  return (
    <div>
      - Project view
      {project.title}
      {project.description}
    </div>
  );
};

export default ProjectView;
