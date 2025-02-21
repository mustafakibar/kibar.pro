import { cn } from '@/lib/utils';
import { TagItem, TagItemsProps } from '..';

const TagItems: React.FC<TagItemsProps> = ({
  className,
  tags,
  tagItemClassName,
}) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {tags!.map((tag) => (
        <TagItem key={tag} name={tag} className={cn(tagItemClassName)} />
      ))}
    </div>
  );
};

export { TagItems };
