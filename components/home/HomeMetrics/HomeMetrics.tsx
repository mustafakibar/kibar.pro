import { Counter } from '@/components/feedback/Counter';
import { Mono } from '@/components/typography';
import { CERTIFICATES } from '@/lib/data/certificates.data';
import { SKILLS } from '@/lib/data/skills.data';
import { cn } from '@/lib/utils';

const CAREER_START_YEAR = 2011;

type HomeMetricsProps = {
  className?: string;
};

const HomeMetrics = ({ className }: HomeMetricsProps) => {
  const years = new Date().getFullYear() - CAREER_START_YEAR;
  const tools = SKILLS.reduce((n, s) => n + s.items.length, 0);
  return (
    <div
      className={cn(
        'border-rule mx-auto flex w-full max-w-3xl flex-wrap items-baseline justify-center gap-x-10 gap-y-6 border-y py-8',
        className,
      )}>
      <MetricBlock value={years} label="Years building" suffix="+" />
      <Divider />
      <MetricBlock value={CERTIFICATES.length} label="Certifications" />
      <Divider />
      <MetricBlock value={tools} label="Tools in toolbox" />
      <Divider />
      <div className="flex min-w-[7rem] flex-col items-center gap-1 text-center">
        <span className="font-display text-ink text-3xl leading-none tracking-tight md:text-4xl">
          {CAREER_START_YEAR}
        </span>
        <Mono className="text-ink-faint text-[10px] tracking-widest uppercase">
          Shipping since
        </Mono>
      </div>
    </div>
  );
};

const MetricBlock = ({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix?: string;
}) => (
  <div className="flex min-w-[7rem] flex-col items-center gap-1 text-center">
    <span className="font-display text-ink text-3xl leading-none tracking-tight md:text-4xl">
      <Counter value={value} suffix={suffix} />
    </span>
    <Mono className="text-ink-faint text-[10px] tracking-widest uppercase">
      {label}
    </Mono>
  </div>
);

const Divider = () => (
  <span aria-hidden className="bg-rule hidden h-8 w-px md:block" />
);

export { HomeMetrics };
export type { HomeMetricsProps };
