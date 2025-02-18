import { cn } from '@/lib/utils';
import React from 'react';
import { MyLoadingProps } from '.';
import { Skeleton } from '../ui/skeleton';

const MyLoading: React.FC<MyLoadingProps> = ({
  className,
  children,
  loadingText,
}) => {
  return (
    <div className={cn('flex flex-col gap-4 space-y-3 p-8', className)}>
      {children || <h1 className="text-xl font-bold">{loadingText}</h1>}

      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export { MyLoading };
