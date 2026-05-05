import env from '@/env';

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  archived: boolean;
};

const getGithubRepos = async (): Promise<GithubRepo[]> => {
  const username = env.GITHUB_USERNAME;
  if (!username) return [];

  const headers: Record<string, string> = {
    'User-Agent': username,
    Accept: 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': env.GITHUB_API_VER,
  };
  if (env.GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${env.GITHUB_API_KEY}`;
  }

  const fetchPage = async (page: number): Promise<GithubRepo[]> => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc&page=${page}`,
      { headers, next: { revalidate: 60 * 60 * 6 } },
    );
    if (!response.ok) {
      throw new Error(`GitHub API responded ${response.status}`);
    }
    return (await response.json()) as GithubRepo[];
  };

  const first = await fetchPage(1);
  if (first.length < 100) return first;
  const second = await fetchPage(2);
  return [...first, ...second];
};

export { getGithubRepos };
