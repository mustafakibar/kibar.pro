import { cn } from '@/lib/utils';
import { HeroProps } from '.';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <h3>
        My name is <span className="text-blue-500">Mustafa Kibar</span> and
        I&apos;m a <span className="text-blue-500">software engineer</span>.
      </h3>
    </div>
  );
};

export { Hero };
