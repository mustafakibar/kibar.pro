import { cn } from '@/lib/utils';

type TagProps = {
  name: string;
  className?: string;
};

const Tag = ({ name, className }: TagProps) => (
  <span
    className={cn(
      'bg-rule text-ink-subtle inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-xs',
      className,
    )}>
    #{name}
  </span>
);

export { Tag };
export type { TagProps };
