export type Project = {
  id: string;
  title: string;
  slug?: string;
  tags?: readonly string[] | null;
  year: number | string;
  description: string;
  images?: readonly { src: string; alt: string }[];
  repoUrl?: string;
};
