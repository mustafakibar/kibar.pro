import { cn } from '@/lib/utils';
import { TagItem, TagItemsProps } from '..';

const TagItems: React.FC<TagItemsProps> = ({
  className,
  tags,
  tagItemClassName,
}) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={cn('flex flex-row flex-wrap gap-3', className)}>
      {tags!.map((tag) => (
        <TagItem key={tag} name={tag} className={cn(tagItemClassName)} />
      ))}
    </div>
  );
};

export { TagItems };
