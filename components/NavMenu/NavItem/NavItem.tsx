import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = ({
  text,
  path,
  className,
  onClick,
  ...props
}) => {
  return (
    <Button
      className={cn(className)}
      variant="ghost"
      onClick={onClick}
      {...props}>
      {text}
    </Button>
  );
};

export default NavItem;
