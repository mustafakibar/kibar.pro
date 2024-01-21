type Project = {
  title: string;
  description: string;
  tags?: string[];
  images?: { src: string; alt: string }[];
  github?: string;
};

export type { Project };
