export type SkillCategory = {
  label: string;
  items: readonly string[];
};

export const SKILLS: readonly SkillCategory[] = [
  { label: 'Languages', items: ['TypeScript', 'Rust', 'Kotlin', 'Dart', 'Go'] },
  { label: 'Web', items: ['React', 'Next.js', 'Tailwind', 'Motion'] },
  { label: 'Backend', items: ['Node.js', 'gRPC', 'PostgreSQL', 'Redis'] },
  { label: 'Mobile', items: ['React Native', 'Flutter', 'Swift'] },
  { label: 'Platform', items: ['AWS', 'Docker', 'Kubernetes', 'GitHub'] },
] as const;
