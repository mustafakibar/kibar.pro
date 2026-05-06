import { ListPageSkeleton } from '@/components/feedback/ListPageSkeleton';
import { readViewCookie } from '@/lib/viewPreference';

const ProjectsLoading = async () => {
  const view = await readViewCookie('projects', 'grid');
  return (
    <ListPageSkeleton
      title="Projects"
      description="A selection of open-source and production work across the stack."
      view={view}
    />
  );
};

export default ProjectsLoading;
