'use client';

import { Github, Gitlab } from '@/lib/icons';
import { openInNewTab } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import React from 'react';
import { RepoIconPros } from '.';

const RepoIcon: React.FC<RepoIconPros> = ({
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openInNewTab(url);
            }}>
            {repoIcon}
          </TooltipTrigger>
          <TooltipContent>{tooltipText}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return repoIcon;
};

export { RepoIcon };
