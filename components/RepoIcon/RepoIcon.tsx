'use client';

import { Github, Gitlab } from '@/lib/icons';
import { openInNewTab } from '@/lib/utils';
import React, { ReactNode } from 'react';

export type RepoIconProps = {
  className?: string;
  url: string;
  customIcon?: ReactNode;
  customTooltipText?: string;
};

const RepoIcon: React.FC<RepoIconProps> = ({
  url,
  className,
  customIcon,
  customTooltipText,
}) => {
  let tooltipText = customTooltipText;
  let repoIcon = customIcon;

  if (repoIcon == null && url != null) {
    if (url.includes('github')) {
      tooltipText = 'View on GitHub';
      repoIcon = <Github className={className} />;
    } else if (url.includes('gitlab')) {
      tooltipText = 'View on GitLab';
      repoIcon = <Gitlab className={className} />;
    }
  }

  if (tooltipText != null && repoIcon != null) {
    return (
      <div
        className="inline-flex"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openInNewTab(url);
        }}>
        {repoIcon}
      </div>
    );
  }

  return repoIcon;
};

export { RepoIcon };
