type ShowcaseViewerProps = {
  title: string;
  description?: string;
  className?: string;
  hideHeadingIcon?: boolean;
  customHeadingIcon?: React.ReactNode;
  viewAllHref?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export type { ShowcaseViewerProps };
