import env from '@/env';

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  topics: string[];
};

const getGithubRepos = async () => {
  const repos: GithubRepo[] = [];
  const username = env.GITHUB_USERNAME;

  if (username != null) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          UserAgent: env.GITHUB_USERNAME,
          Authorization: `Bearer ${env.GITHUB_API_KEY}`,
          Accept: 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': env.GITHUB_API_VER,
        } as unknown as HeadersInit,
      },
    );

    return (await response.json()) as GithubRepo[];
  }

  return repos;
};

export { getGithubRepos };
