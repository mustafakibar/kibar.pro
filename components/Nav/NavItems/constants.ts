import {
  ABOUT_PATH,
  BLOG_PATH,
  CERTIFICATES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  SNIPPETS_PATH,
} from '@/common/paths';

const NAV_ITEMS: {
  text: string;
  href: string;
  enabled?: boolean;
  _blank?: boolean;
}[] = [
  { text: 'About', href: ABOUT_PATH },
  { text: 'Blog', href: BLOG_PATH, enabled: false },
  { text: 'Projects', href: PROJECTS_PATH },
  { text: 'Snippets', href: SNIPPETS_PATH, enabled: false },
  { text: 'Certificates', href: CERTIFICATES_PATH },
  { text: 'Resume', href: RESUME_PATH, _blank: true },
];

export { NAV_ITEMS };
