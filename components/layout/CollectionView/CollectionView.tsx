'use client';

import { Grid } from '@/components/layout/Grid';
import { PageShell } from '@/components/layout/PageShell';
import { RevealOnView } from '@/components/motion/RevealOnView';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useViewPreference, type ViewMode } from '@/hooks/useViewPreference';
import { duration, easing } from '@/lib/tokens';
import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';

type CollectionViewProps<T> = {
  items: readonly T[];
  title: ReactNode;
  description?: ReactNode;
  /** Cookie key from VIEW_COOKIE.* — persists view across reloads. */
  storageKey: string;
  /** Default view when no cookie is set. */
  initialView?: ViewMode;
  getKey: (item: T, index: number) => string;
  renderCard: (item: T, index: number) => ReactNode;
  renderRow: (item: T, index: number) => ReactNode;
  /** Stagger reveal grid items on scroll-into-view (max 9 items). */
  reveal?: boolean;
};

const CollectionView = <T,>({
  items,
  title,
  description,
  storageKey,
  initialView = 'grid',
  getKey,
  renderCard,
  renderRow,
  reveal = false,
}: CollectionViewProps<T>) => {
  const [view, setView] = useViewPreference(storageKey, initialView);

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
              {items.map((item, i) => {
                const card = renderCard(item, i);
                const key = getKey(item, i);
                return reveal ? (
                  <RevealOnView
                    key={key}
                    delay={Math.min(i, 9) * 0.04}
                    amount={0.1}>
                    {card}
                  </RevealOnView>
                ) : (
                  <div key={key}>{card}</div>
                );
              })}
            </Grid>
          ) : (
            <ol className="flex flex-col" role="list">
              {items.map((item, i) => (
                <li key={getKey(item, i)}>{renderRow(item, i)}</li>
              ))}
            </ol>
          )}
        </motion.div>
      </AnimatePresence>
    </PageShell>
  );
};

export { CollectionView };
export type { CollectionViewProps };
