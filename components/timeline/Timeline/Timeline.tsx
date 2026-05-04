import { Caption, Mono, Subhead } from '@/components/typography';
import { Milestone } from '@/lib/icons';
import { cn } from '@/lib/utils';

export type TimelineEntry = {
  period: string;
  title: string;
  detail?: string;
};

type TimelineProps = {
  entries: readonly TimelineEntry[];
  className?: string;
};

const Timeline = ({ entries, className }: TimelineProps) => (
  <ol className={cn('flex flex-col', className)} role="list">
    {entries.map((entry, i) => (
      <li
        key={`${entry.period}-${entry.title}`}
        className="relative flex gap-4 pb-8 last:pb-0">
        <div className="relative flex shrink-0 flex-col items-center">
          <span className="text-gold z-10 flex size-6 items-center justify-center">
            <Milestone className="size-5" strokeWidth={1.75} />
          </span>
          {i < entries.length - 1 && (
            <span
              aria-hidden
              className="bg-rule-strong absolute top-6 left-1/2 h-full w-px -translate-x-1/2"
            />
          )}
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <Mono className="text-ink-faint">{entry.period}</Mono>
          <Subhead as="h3" className="text-ink not-italic">
            {entry.title}
          </Subhead>
          {entry.detail && <Caption>{entry.detail}</Caption>}
        </div>
      </li>
    ))}
  </ol>
);

export { Timeline };
export type { TimelineProps };
