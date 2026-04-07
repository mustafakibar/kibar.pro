import { Github, Gitlab } from '@/lib/icons';
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
  let label = customTooltipText;
  let icon = customIcon;

  if (icon == null && url != null) {
    if (url.includes('github')) {
      label = 'View on GitHub';
      icon = <Github className={className} />;
    } else if (url.includes('gitlab')) {
      label = 'View on GitLab';
      icon = <Gitlab className={className} />;
    }
  }

  if (label == null || icon == null) return icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={(e) => e.stopPropagation()}
      className="focus-visible:ring-primary inline-flex rounded-sm focus-visible:ring-2 focus-visible:outline-none">
      {icon}
    </a>
  );
};

export { RepoIcon };
