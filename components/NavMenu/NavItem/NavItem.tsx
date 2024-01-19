import { cn } from '@/lib/utils';
import { NavItemProps } from '.';
import { Button } from '@/components/ui/button';

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
      variant='ghost'
      onClick={onClick}
      {...props}>
      {text}
    </Button>
  );
};

export default NavItem;
