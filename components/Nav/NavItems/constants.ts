import {
  ABOUT_PATH,
  BLOG_PATH,
  CERTIFICATES_PATH,
  HOME_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  SNIPPETS_PATH,
} from '@/common/paths';

const NAV_ITEMS = [
  { text: 'Home', href: HOME_PATH },
  { text: 'About', href: ABOUT_PATH },
  { text: 'Blog', href: BLOG_PATH },
  { text: 'Projects', href: PROJECTS_PATH },
  { text: 'Snippets', href: SNIPPETS_PATH },
  { text: 'Certificates', href: CERTIFICATES_PATH },
  { text: 'Resume', href: RESUME_PATH },
];

export { NAV_ITEMS };
