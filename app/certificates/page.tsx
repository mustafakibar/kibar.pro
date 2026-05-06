import { CertificatesView } from '@/components/certificates/CertificatesView';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import { readViewCookie } from '@/lib/viewPreference';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Certificates',
  description:
    'Certificates earned across engineering, cloud, and product disciplines.',
  alternates: { canonical: '/certificates' },
  openGraph: {
    title: 'Certificates · Mustafa KiBAR',
    description:
      'Certificates earned across engineering, cloud, and product disciplines.',
    url: '/certificates',
  },
};

const CertificatesPage: NextPage = async () => {
  const initialView = await readViewCookie('certificates', 'grid');
  return (
    <CertificatesView
      certificates={CERTIFICATES}
      initialView={initialView}
      title="Certificates"
      description="Certificates earned across engineering, cloud, and product disciplines."
    />
  );
};

export default CertificatesPage;
