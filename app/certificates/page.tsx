import { CertificatesView } from '@/components/certificates/CertificatesView';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Certificates',
  description:
    'Certificates earned across engineering, cloud, and product disciplines.',
  alternates: { canonical: '/certificates' },
  openGraph: {
    title: 'Certificates · Mustafa Kibar',
    description:
      'Certificates earned across engineering, cloud, and product disciplines.',
    url: '/certificates',
  },
};

const CertificatesPage: NextPage = () => (
  <CertificatesView
    certificates={CERTIFICATES}
    title="Certificates"
    description="Certificates earned across engineering, cloud, and product disciplines."
  />
);

export default CertificatesPage;
