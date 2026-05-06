'use client';

import { CertificateCard } from '@/components/certificates/CertificateCard';
import { CertificateRow } from '@/components/certificates/CertificateRow';
import { CollectionView } from '@/components/layout/CollectionView';
import { type ViewMode } from '@/hooks/useViewPreference';
import type { Certificate } from '@/lib/data/certificates.data';
import { VIEW_COOKIE } from '@/lib/viewCookie';

type CertificatesViewProps = {
  certificates: readonly Certificate[];
  title: string;
  description: string;
  initialView?: ViewMode;
};

const CertificatesView = ({
  certificates,
  title,
  description,
  initialView = 'grid',
}: CertificatesViewProps) => (
  <CollectionView
    items={certificates}
    title={title}
    description={description}
    storageKey={VIEW_COOKIE.certificates}
    initialView={initialView}
    reveal
    getKey={(c) => c.title}
    renderCard={(c) => <CertificateCard certificate={c} />}
    renderRow={(c) => <CertificateRow certificate={c} />}
  />
);

export { CertificatesView };
export type { CertificatesViewProps };
