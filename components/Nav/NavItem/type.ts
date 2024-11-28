type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export type { NavItemProps };
