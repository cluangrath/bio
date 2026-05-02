import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Code2, Github, Linkedin, MoveUpRight } from 'lucide-react';
import './styles.css';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chad-luangrath-29640789/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cluangrath',
    icon: Github,
  },
];

type GitHubRepoResponse = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

type Project = {
  name: string;
  description: string;
  language: string;
  lastPushed: string;
  href: string;
};

const fallbackProjects: Project[] = [
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

function repoToProject(repo: GitHubRepoResponse): Project {
  return {
    name: repo.name,
    description: repo.description ?? `A public ${repo.language ?? 'code'} repository on GitHub.`,
    language: repo.language ?? 'Code',
    lastPushed: formatDate(repo.pushed_at),
    href: repo.html_url,
  };
}

function RecentProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
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
    <section className="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Recent public repositories</p>
        <h2 id="projects-title">The latest public work on GitHub.</h2>
      </div>

      <p className="project-status" role="status" aria-live="polite">
        {status === 'loading'
          ? 'Fetching latest public repositories...'
          : status === 'fallback'
            ? 'Showing saved repository links while GitHub is unavailable.'
            : 'Live from GitHub, sorted by most recent push.'}
      </p>

      <div className="project-grid">
        {projects.map(({ name, description, language, lastPushed, href }) => (
          <a key={name} className="project-card" href={href} target="_blank" rel="noreferrer">
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

      <a className="all-projects" href="https://github.com/cluangrath?tab=repositories" target="_blank" rel="noreferrer">
        View all repositories
        <MoveUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
      </a>
    </section>
  );
}

function App() {
  return (
    <main className="site-shell" aria-labelledby="page-title">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="page-content">
        <section className="intro" aria-label="Personal bio">
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="/chad-luangrath.jpg"
              alt="Chad Luangrath smiling in a kitchen while feeding cats."
              width="280"
              height="340"
            />
          </div>

          <p className="eyebrow">Staff Engineer at Paylocity</p>
          <h1 id="page-title">Chad Luangrath</h1>
          <p className="bio">
            I build thoughtful software systems, lead engineering teams, and care
            about making work feel a little easier.
          </p>

          <nav className="links" aria-label="Profile links">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} className="profile-link" href={href} target="_blank" rel="noreferrer">
                <span className="link-label">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                  {label}
                </span>
                <MoveUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </a>
            ))}
          </nav>
        </section>

        <RecentProjects />

        <p className="footer-note">Thoughtful systems. Human-centered teams.</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
