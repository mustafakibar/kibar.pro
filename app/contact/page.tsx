import { ContactList } from '@/components/contact/ContactList';
import { EmailRow } from '@/components/contact/EmailRow';
import { StatusPill } from '@/components/contact/StatusPill';
import { ChapterBand } from '@/components/layout/ChapterBand';
import { ChapterHead } from '@/components/layout/ChapterHead';
import { Container } from '@/components/layout/Container';
import { Body, Subhead } from '@/components/typography';
import { EMAIL_ADDRESS } from '@/lib/data/socials.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out for senior roles, consulting, and considered correspondence.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact · Mustafa Kibar',
    description:
      'Reach out for senior roles, consulting, and considered correspondence.',
    url: '/contact',
  },
};

const ContactPage: NextPage = () => (
  <>
    <ChapterBand>
      <Container>
        <ChapterHead
          title={
            <>
              Direct, considered{' '}
              <em className="font-normal italic">correspondence</em>.
            </>
          }
          description="Best caught by email or in writing. Replies within 48 hours."
          headingLevel="h1"
        />
      </Container>
    </ChapterBand>

    <Container size="narrow" className="flex flex-col gap-12 py-16">
      <StatusPill>Istanbul · UTC+3 · Remote-friendly</StatusPill>
      <div className="flex flex-col gap-3">
        <Subhead className="text-ink-muted not-italic">Write directly</Subhead>
        <EmailRow email={EMAIL_ADDRESS} />
      </div>
      <div className="flex flex-col gap-3">
        <Subhead className="text-ink-muted not-italic">Or find me at</Subhead>
        <ContactList />
      </div>
      <Body muted className="border-rule border-t pt-6 italic">
        Replies within 48 hours.
      </Body>
    </Container>
  </>
);

export default ContactPage;
