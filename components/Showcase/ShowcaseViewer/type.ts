type ShowcaseViewerProps = {
  title: string;
  description?: string;
  className?: string;
  hideIcon?: boolean;
  customIcon?: React.ReactNode;
  viewAllHref?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export type { ShowcaseViewerProps };
