import { dummyProjects } from '@/app/(main)/dummyData';
import { NextPage } from 'next';
import { ProjectPageProps } from './type';

const ProjectPage: NextPage<ProjectPageProps> = ({ params }) => {
  const { slug } = params;
  const project = dummyProjects.find((p) => p.slug === slug);

  return (
    <>
      <h1 className="text-3xl">{project?.title}</h1>

      <p>{project?.description}</p>
    </>
  );
};

export default ProjectPage;
