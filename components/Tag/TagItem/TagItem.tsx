'use client';

import { HOME_PATH } from '@/lib/constants/paths';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';

export type TagItemProps = {
  name: string;
  className?: string;
  clickable?: boolean;
};

const TagItem: React.FC<TagItemProps> = ({
  name,
  className,
  clickable = true,
  ...props
}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={!clickable}
      aria-label={`Filter by tag ${name}`}
      className={cn(
        'group bg-foreground/10 outline-foreground/30 hover:bg-foreground/20 focus-visible:ring-primary relative inline-flex items-center rounded-sm px-1 transition-all duration-500 ease-in-out hover:cursor-pointer hover:opacity-95 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-default md:px-2 md:py-1',
        className,
      )}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (clickable) {
          router.push(`${HOME_PATH}tags/${name}`);
        }
      }}>
      <span className="inline-block text-xs transition-transform duration-100 ease-linear">
        #{name}
      </span>
    </button>
  );
};

export { TagItem };
