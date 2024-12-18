import { GridWrapper } from '@/components/GridWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { ViewAllButton } from '@/components/ViewAllButton';
import { SquareStack } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { ShowcaseViewerProps } from '..';

const ShowcaseViewer: React.FC<ShowcaseViewerProps> = ({
  title,
  description,
  className,
  hideIcon,
  customIcon,
  viewAllHref,
  children,
  footer,
  ...props
}) => {
  let sectionIcon = null;
  if (!hideIcon) {
    sectionIcon = customIcon ?? <SquareStack size={32} />;
  }

  return (
    <div className={cn(className)} {...props}>
      <div className="flex">
        <SectionHeading
          title={title}
          description={description}
          icon={sectionIcon}
        />

        {viewAllHref && <ViewAllButton href={viewAllHref} />}
      </div>

      <GridWrapper className="mt-4">{children}</GridWrapper>

      {footer && <div className="flex items-center p-6">{footer}</div>}
    </div>
  );
};

export { ShowcaseViewer };
