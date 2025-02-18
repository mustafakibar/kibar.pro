import { IconType } from 'react-icons/lib';

type ContactProps = {
  className?: string;
};

type ContactItemProps = {
  icon: IconType;
  href: string;
  className?: string;
};

export type { ContactItemProps, ContactProps };
