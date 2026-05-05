import { Body, Eyebrow, Subhead } from '@/components/typography';
import { SKILLS } from '@/lib/data/skills.data';
import { cn } from '@/lib/utils';

type SkillsIndexProps = {
  className?: string;
  eyebrow?: string;
};

const SkillsIndex = ({
  className,
  eyebrow = '§ Stack · Index',
}: SkillsIndexProps) => (
  <section className={cn('flex flex-col gap-6', className)} aria-label="Skills">
    <Eyebrow>{eyebrow}</Eyebrow>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-[120px_1fr]">
      {SKILLS.map((cat) => (
        <div key={cat.label} className="contents">
          <dt>
            <Subhead className="text-gold">{cat.label}</Subhead>
          </dt>
          <dd>
            <Body>{cat.items.join(', ')}</Body>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export { SkillsIndex };
export type { SkillsIndexProps };
