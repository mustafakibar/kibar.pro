'use client';

import { Mono } from '@/components/typography';
import type { ViewMode } from '@/hooks/useViewPreference';
import { LayoutGrid, ListIcon } from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type ViewToggleProps = {
  view: ViewMode;
  onChange: (next: ViewMode) => void;
  className?: string;
  /** Shared layoutId for the sliding pill — one per toggle instance on the page */
  layoutId?: string;
};

const OPTIONS: Array<{
  value: ViewMode;
  label: string;
  Icon: typeof LayoutGrid;
}> = [
  { value: 'grid', label: 'Grid view', Icon: LayoutGrid },
  { value: 'list', label: 'List view', Icon: ListIcon },
];

const ViewToggle = ({
  view,
  onChange,
  className,
  layoutId = 'view-toggle-pill',
}: ViewToggleProps) => (
  <div className={cn('flex items-center gap-2', className)}>
    <Mono className="text-ink-faint text-xs tracking-widest uppercase">
      View
    </Mono>
    <div
      role="group"
      aria-label="Toggle view mode"
      className="border-rule relative flex overflow-hidden rounded-md border">
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = view === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            aria-label={label}
            onClick={() => onChange(value)}
            className={cn(
              'duration-fast relative flex size-8 items-center justify-center transition-colors',
              active ? 'text-gold' : 'text-ink-muted hover:text-ink',
            )}>
            {active && (
              <motion.span
                layoutId={layoutId}
                aria-hidden
                className="bg-gold/15 ring-gold/30 absolute inset-0 ring-1 ring-inset"
                transition={{
                  duration: duration.normal,
                  ease: easing.emphasis,
                }}
              />
            )}
            <Icon className="relative size-4" />
          </button>
        );
      })}
    </div>
  </div>
);

export { ViewToggle };
export type { ViewToggleProps };
