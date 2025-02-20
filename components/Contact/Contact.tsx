import { Envelope, Github, SocialX } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ContactProps } from '.';
import { ContactItemProps } from './type';

const contactItemList: ContactItemProps[] = [
  { icon: Github, href: 'https://github.com/mustafakibar' },
  { icon: SocialX, href: 'https://x.com/kibarpro' },
  {
    icon: Envelope,
    href: 'mailto:mustafa@kibar.pro',
    className: 'inline-flex md:hidden',
  },
];

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'group/container flex shrink-0 transform-gpu flex-row items-center gap-8 text-xl transition-all max-md:justify-center lg:gap-12',
        className,
      )}>
      {contactItemList.map(({ icon: Icon, className, href }, idx) => (
        <Link href={href} target="_blank" key={idx}>
          <Icon
            className={cn(
              'transition-transform duration-150 group-hover/container:opacity-35 hover:scale-125 hover:text-gray-800 hover:opacity-100! dark:hover:text-gray-200',
              className,
            )}
          />
        </Link>
      ))}

      <p className="group/mail -ml-8 hidden cursor-pointer items-center space-x-2 text-xl group-hover/container:opacity-50 hover:opacity-100! md:inline-flex">
        <Envelope className="duration-150 ease-in-out group-hover/mail:scale-125" />
        <span className="duration-300 group-hover/mail:translate-x-2 group-hover/mail:text-gray-400 dark:group-hover/mail:text-gray-600">
          mustafa@kibar.pro
        </span>
      </p>
    </div>
  );
};

export { Contact };
