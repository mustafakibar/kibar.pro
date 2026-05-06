'use client';

import { CertificateCard } from '@/components/certificates/CertificateCard';
import { CertificateRow } from '@/components/certificates/CertificateRow';
import { Grid } from '@/components/layout/Grid';
import { PageShell } from '@/components/layout/PageShell';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useViewPreference, type ViewMode } from '@/hooks/useViewPreference';
import type { Certificate } from '@/lib/data/certificates.data';
import { duration, easing } from '@/lib/tokens';
import { VIEW_COOKIE } from '@/lib/viewCookie';
import { AnimatePresence, motion } from 'motion/react';

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
}: CertificatesViewProps) => {
  const [view, setView] = useViewPreference(
    VIEW_COOKIE.certificates,
    initialView,
  );

  return (
    <PageShell
      title={title}
      description={description}
      toolbar={<ViewToggle view={view} onChange={setView} />}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.normal, ease: easing.out }}>
          {view === 'grid' ? (
            <Grid cols={{ md: 2, xl: 3 }}>
              {certificates.map((c, i) => (
                <RevealOnView
                  key={c.title}
                  delay={Math.min(i, 9) * 0.04}
                  amount={0.1}>
                  <CertificateCard certificate={c} />
                </RevealOnView>
              ))}
            </Grid>
          ) : (
            <ol className="flex flex-col" role="list">
              {certificates.map((c) => (
                <li key={c.title}>
                  <CertificateRow certificate={c} />
                </li>
              ))}
            </ol>
          )}
        </motion.div>
      </AnimatePresence>
    </PageShell>
  );
};

export { CertificatesView };
export type { CertificatesViewProps };
