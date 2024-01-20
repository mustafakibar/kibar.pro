type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type { NavItemProps };
