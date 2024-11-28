import { dummyProjects } from '@/app/(main)/dummyData';
import { NextPage } from 'next';

const ProjectPage: NextPage = async ({ params }) => {
  const { slug } = await params;
  const project = dummyProjects.find((p) => p.slug === slug);

  return (
    <>
      <h1 className="text-3xl">{project?.title}</h1>

      <p>{project?.description}</p>
    </>
  );
};

export default ProjectPage;
