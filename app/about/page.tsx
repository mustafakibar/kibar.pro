import { Biography } from '@/components/about/Biography';
import { PortraitBand } from '@/components/about/PortraitBand';
import { SkillsIndex } from '@/components/home/SkillsIndex';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Timeline } from '@/components/timeline/Timeline';
import { Body, Eyebrow, Subhead } from '@/components/typography';
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
    <ChapterBand>
      <Container>
        <ChapterHead
          chapter="§ I — THE MAKER"
          title={
            <>
              The <em className="font-normal italic">Maker</em>
            </>
          }
          description="A short biography, a portrait, and the threads that brought me here."
          headingLevel="h1"
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-16 py-16">
      <PortraitBand />
      <Biography />
      <SkillsIndex eyebrow="§ I.a — Stack" />
      <section className="flex flex-col gap-6">
        <Eyebrow>§ I.b — Education</Eyebrow>
        <Subhead className="text-ink">A path, briefly</Subhead>
        <Timeline entries={EDUCATION_TIMELINE} />
      </section>

      <Body muted className="border-rule border-t pt-8 text-center italic">
        → Workshop &amp; gear at{' '}
        <a className="text-gold hover:underline" href="/uses">
          /uses
        </a>{' '}
        · → Recent thinking at{' '}
        <a className="text-gold hover:underline" href="/notes">
          /notes
        </a>
        .
      </Body>
    </Container>
  </>
);

export default AboutPage;
