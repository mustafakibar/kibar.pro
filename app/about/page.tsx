import { AboutNav } from '@/components/about/AboutNav';
import { Biography } from '@/components/about/Biography';
import { PortraitBand } from '@/components/about/PortraitBand';
import { SkillsIndex } from '@/components/home/SkillsIndex';
import { Container } from '@/components/layout/Container';
import { Timeline } from '@/components/timeline/Timeline';
import { Subhead } from '@/components/typography';
import { EDUCATION_TIMELINE } from '@/lib/data/timeline.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior full-stack engineer based in Istanbul. Background, experience, and the workshop I build from.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About · Mustafa Kibar',
    description:
      'Senior full-stack engineer based in Istanbul. Background, experience, and the workshop I build from.',
    url: '/about',
  },
};

const AboutPage: NextPage = () => (
  <>
    <Container size="narrow" className="flex flex-col gap-16 py-16">
      <PortraitBand />
      <Biography />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <section className="flex flex-col gap-6">
          <Subhead as="h2" className="text-ink">
            Stack
          </Subhead>
          <SkillsIndex />
        </section>
        <section className="flex flex-col gap-6">
          <Subhead as="h2" className="text-ink">
            Education
          </Subhead>
          <Timeline entries={EDUCATION_TIMELINE} />
        </section>
      </div>

      <AboutNav className="-mx-4 mt-8 sm:-mx-0" />
    </Container>
  </>
);

export default AboutPage;
