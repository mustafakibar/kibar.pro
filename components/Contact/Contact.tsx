import { cn } from '@/lib/utils';
import { ContactProps } from '.';

const Contact: React.FC<ContactProps> = ({ className }) => {
  return <div className={cn(className)}>- contact -</div>;
};

export { Contact };
