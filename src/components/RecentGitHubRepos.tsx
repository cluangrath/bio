import { useEffect, useState } from 'react';
import { Code2, MoveUpRight } from 'lucide-react';
import type { GitHubProject, GitHubRepoResponse } from '../types';

const fallbackProjects: GitHubProject[] = [
  {
    name: 'web-audio-recorder',
    description: 'A small JavaScript utility for recording audio directly in the browser.',
    language: 'JavaScript',
    lastPushed: 'Jan 21, 2021',
    href: 'https://github.com/cluangrath/web-audio-recorder',
  },
  {
    name: 'ElevatorSimulator1',
    description: 'A Java elevator simulation project exploring scheduling and system behavior.',
    language: 'Java',
    lastPushed: 'Nov 3, 2014',
    href: 'https://github.com/cluangrath/ElevatorSimulator1',
  },
  {
    name: 'ProcessScheduling',
    description: 'A C++ implementation of process scheduling algorithms.',
    language: 'C++',
    lastPushed: 'Oct 2, 2014',
    href: 'https://github.com/cluangrath/ProcessScheduling',
  },
];

const githubReposUrl =
  'https://api.github.com/users/cluangrath/repos?sort=pushed&direction=desc&per_page=10';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function repoToProject(repo: GitHubRepoResponse): GitHubProject {
  return {
    name: repo.name,
    description: repo.description ?? `A public ${repo.language ?? 'code'} repository on GitHub.`,
    language: repo.language ?? 'Code',
    lastPushed: formatDate(repo.pushed_at),
    href: repo.html_url,
  };
}

export function RecentGitHubRepos() {
  const [projects, setProjects] = useState<GitHubProject[]>(fallbackProjects);
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch(githubReposUrl, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`GitHub request failed with ${response.status}`);
        }

        const repos = (await response.json()) as GitHubRepoResponse[];
        const recentProjects = repos
          .filter((repo) => !repo.fork && !repo.archived)
          .slice(0, 3)
          .map(repoToProject);

        if (recentProjects.length === 0) {
          throw new Error('GitHub returned no matching public repositories');
        }

        setProjects(recentProjects);
        setStatus('ready');
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setProjects(fallbackProjects);
          setStatus('fallback');
        }
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  return (
    <section className="github-projects" aria-labelledby="github-title">
      <div className="section-heading compact">
        <p className="eyebrow">Public GitHub</p>
        <h2 id="github-title">Recent repository activity stays here as supporting context.</h2>
      </div>

      <p className="project-status" role="status" aria-live="polite">
        {status === 'loading'
          ? 'Fetching latest public repositories...'
          : status === 'fallback'
            ? 'Showing saved repository links while GitHub is unavailable.'
            : 'Live from GitHub, sorted by most recent push.'}
      </p>

      <div className="github-grid">
        {projects.map(({ name, description, language, lastPushed, href }) => (
          <a key={name} className="github-card" href={href} target="_blank" rel="noreferrer">
            <span className="project-topline">
              <span className="project-language">
                <Code2 aria-hidden="true" size={16} strokeWidth={1.8} />
                {language}
              </span>
              <MoveUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </span>
            <span className="project-name">{name}</span>
            <span className="project-description">{description}</span>
            <span className="project-date">Last pushed {lastPushed}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
