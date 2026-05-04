import { Tag } from '@/components/tag/Tag';
import { cn } from '@/lib/utils';

type TagListProps = {
  tags: readonly string[] | null | undefined;
  className?: string;
  max?: number;
};

const TagList = ({ tags, className, max }: TagListProps) => {
  if (!tags || tags.length === 0) return null;
  const visible = max ? tags.slice(0, max) : tags;
  const remainder = max && tags.length > max ? tags.length - max : 0;
  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {visible.map((tag) => (
        <Tag key={tag} name={tag} />
      ))}
      {remainder > 0 && <Tag name={`+${remainder}`} />}
    </div>
  );
};

export { TagList };
export type { TagListProps };
