import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
} from '@/lib/constants/paths';

type NavItem = {
  text: string;
  href: string;
  _blank?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { text: 'About', href: ABOUT_PATH },
  { text: 'Projects', href: PROJECTS_PATH },
  { text: 'Certificates', href: CERTIFICATES_PATH },
  { text: 'Resume', href: RESUME_PATH, _blank: true },
];

export { NAV_ITEMS };
