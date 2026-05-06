import { EmptyState } from '@/components/feedback/EmptyState';
import { CredentialsList } from '@/components/home/CredentialsList';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeMetrics } from '@/components/home/HomeMetrics';
import { SelectedWorkList } from '@/components/home/SelectedWorkList';
import { Container } from '@/components/layout/Container';
import { SectionViewer } from '@/components/layout/SectionViewer';
import {
  CERTIFICATES_PATH,
  CONTACT_PATH,
  PROJECTS_PATH,
} from '@/lib/constants/paths';
import { CERTIFICATES, type Certificate } from '@/lib/data/certificates.data';
import { getProjects } from '@/lib/data/getProjects';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const HomePage: NextPage = async () => {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 7);
  const featuredCerts: readonly Certificate[] = CERTIFICATES.slice(0, 3);

  return (
    <>
      <HomeHero />

      <Container className="pt-16 pb-12 md:pt-24">
        <HomeMetrics />
      </Container>

      <Container className="flex flex-col gap-24 pb-24">
        <SectionViewer
          title={
            <>
              Selected <em className="font-normal italic">Work</em>
            </>
          }
          description="A small body of considered work, shipped end-to-end across the stack."
          viewAllHref={PROJECTS_PATH}>
          {featuredProjects.length > 0 ? (
            <SelectedWorkList projects={featuredProjects} />
          ) : (
            <EmptyState message="No projects to show yet." />
          )}
        </SectionViewer>

        <SectionViewer
          title={<>Certificates</>}
          description="Certificates earned across engineering, cloud, and product disciplines."
          viewAllHref={CERTIFICATES_PATH}>
          <CredentialsList certificates={featuredCerts} />
        </SectionViewer>

        <section className="flex flex-col items-center py-4 text-center">
          <Link
            href={CONTACT_PATH}
            className="border-gold/50 bg-gold/10 text-gold duration-fast hover:bg-gold/20 inline-flex rounded-full border px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors">
            → Reach out
          </Link>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
