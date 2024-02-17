type Project = {
  title: string;
  slug: string;
  year: number;
  description: string;
  tags?: string[];
  images?: { src: string; alt: string }[];
  repoUrl?: string;
};

export type { Project };
