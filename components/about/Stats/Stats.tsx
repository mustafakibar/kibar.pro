import { Counter } from '@/components/feedback/Counter';
import { Mono } from '@/components/typography';
import { cn } from '@/lib/utils';

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
};

type StatsProps = {
  items: readonly StatItem[];
  className?: string;
};

const Stats = ({ items, className }: StatsProps) => (
  <dl
    className={cn(
      'border-rule grid grid-cols-2 gap-px overflow-hidden rounded-lg border md:grid-cols-3',
      className,
    )}>
    {items.map((s) => (
      <div
        key={s.label}
        className="bg-elevated flex flex-col items-center gap-2 px-5 py-6 text-center outline outline-[var(--color-rule)]">
        <dd className="font-display text-gold text-4xl leading-none tracking-tight md:text-5xl">
          <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
        </dd>
        <dt>
          <Mono className="text-ink-faint text-xs tracking-widest uppercase">
            {s.label}
          </Mono>
        </dt>
      </div>
    ))}
  </dl>
);

export { Stats };
export type { StatsProps };
