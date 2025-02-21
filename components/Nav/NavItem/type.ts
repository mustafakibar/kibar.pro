type NavItemProps = {
  text: string;
  href: string;
  blank?: boolean;
  active?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export type { NavItemProps };
