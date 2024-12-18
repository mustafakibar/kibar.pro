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

  return (
    <main className="flex flex-col gap-8">
      <Hero />

      <ShowcaseViewer
        title="Projects"
        viewAllHref={PROJECTS_PATH}
        className="my-4">
        {projects
          ?.slice(0, 3)
          .map((item) => (
            <ProjectShowcase key={item.id} project={item} hideTags />
          )) ?? <p>Not ready..</p>}
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Certificates"
        viewAllHref={CERTIFICATES_PATH}
        className="my-4">
        {CERTIFICATE_ITEMS.slice(0, 3).map((item) => (
          <CertificateShowcase key={item.title} certificate={item} />
        ))}
      </ShowcaseViewer>

      <ShowcaseViewer title="Blog" viewAllHref={BLOG_PATH} className="my-4">
        <p>Not ready..</p>
      </ShowcaseViewer>

      <ShowcaseViewer
        title="Snippets"
        viewAllHref={SNIPPETS_PATH}
        className="my-4">
        <p>Not ready..</p>
      </ShowcaseViewer>
    </main>
  );
};

export default HomePage;
