import env from '@/env';

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  topics: string[];
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

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers,
    },
  );
  if (!response.ok) {
    throw new Error(`GitHub API responded ${response.status}`);
  }
  return (await response.json()) as GithubRepo[];
};

export { getGithubRepos };
