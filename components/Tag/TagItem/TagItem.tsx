'use client';

import { HOME_PATH } from '@/common/paths';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { TagItemProps } from '..';

const TagItem: React.FC<TagItemProps> = ({
  name,
  className,
  clickable = true,
  ...props
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        'group bg-foreground/10 outline-foreground/30 hover:bg-foreground/20 relative inline-flex items-center rounded-sm px-1 transition-all duration-500 ease-in-out hover:cursor-pointer hover:opacity-95 md:px-2 md:py-1',
        className,
      )}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (clickable) {
          router.push(`${window.location.href}${HOME_PATH}/tags/${name}`);
        }
      }}>
      <span className="inline-block text-xs transition-transform duration-100 ease-linear">
        #{name}
      </span>
    </div>
  );
};

export { TagItem };
