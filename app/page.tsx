import { CertificateShowcase } from '@/components/Certificates/CertificatesShowcase';
import { CERTIFICATE_ITEMS } from '@/components/Certificates/constant';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { ShowcaseViewer } from '@/components/Showcase';
import { CERTIFICATES_PATH, PROJECTS_PATH } from '@/lib/constants/paths';
import { getProjects } from '@/lib/data/getProjects';
import { NextPage } from 'next';
import { Suspense } from 'react';
import CertificatesLoading from './certificates/loading';
import ProjectsLoading from './projects/loading';

const HomePage: NextPage = async () => {
  return (
    <main className="flex flex-col gap-16">
      <Hero />

      <ShowcaseViewer title="Selected Work" viewAllHref={PROJECTS_PATH}>
        <Suspense fallback={<ProjectsLoading />}>
          {(await getProjects())
            ?.slice(0, 9)
            .map((item) => (
              <ProjectShowcase key={item.id} project={item} hideTags />
            )) ?? 'No projects yet.'}
        </Suspense>
      </ShowcaseViewer>

      <ShowcaseViewer title="Credentials" viewAllHref={CERTIFICATES_PATH}>
        <Suspense fallback={<CertificatesLoading />}>
          {CERTIFICATE_ITEMS.slice(0, 3).map((item) => (
            <CertificateShowcase key={item.title} certificate={item} />
          ))}
        </Suspense>
      </ShowcaseViewer>
    </main>
  );
};

export default HomePage;
