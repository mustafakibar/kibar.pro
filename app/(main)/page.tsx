export const dynamic = 'force-static';

import {
  BLOG_PATH,
  CERTIFICATES_PATH,
  PROJECTS_PATH,
  SNIPPETS_PATH,
} from '@/common/paths';
import { CertificateShowcase } from '@/components/Certificates/CertificatesShowcase';
import { CERTIFICATE_ITEMS } from '@/components/Certificates/constant';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/Project/ProjectShowcase';
import { ShowcaseViewer } from '@/components/Showcase';
import { getProjects } from '@/data/getProjects';
import { NextPage } from 'next';

const HomePage: NextPage = async () => {
  const projects = await getProjects();

  const ComingSoon = (
    <p className="text-xl font-semibold opacity-80">Coming soon...</p>
  );

  return (
    <main className="flex flex-col gap-16">
      <Hero />

      <ShowcaseViewer title="Projects" viewAllHref={PROJECTS_PATH}>
        {projects
          ?.slice(0, 9)
          .map((item) => (
            <ProjectShowcase key={item.id} project={item} hideTags />
          )) ?? ComingSoon}
      </ShowcaseViewer>

      <ShowcaseViewer title="Certificates" viewAllHref={CERTIFICATES_PATH}>
        {CERTIFICATE_ITEMS.slice(0, 3).map((item) => (
          <CertificateShowcase key={item.title} certificate={item} />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer title="Blog" viewAllHref={BLOG_PATH}>
        {ComingSoon}
      </ShowcaseViewer>

      <ShowcaseViewer title="Snippets" viewAllHref={SNIPPETS_PATH}>
        {ComingSoon}
      </ShowcaseViewer>
    </main>
  );
};

export default HomePage;
