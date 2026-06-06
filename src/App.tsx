import { useEffect, useMemo, useState } from 'react';
import { getProject } from './data/projects';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';

function getPathname() {
  return window.location.pathname;
}

export function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    function handleLocationChange() {
      setPathname(getPathname());
    }

    window.addEventListener('popstate', handleLocationChange);

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const route = useMemo(() => {
    if (pathname === '/') {
      return { type: 'home' as const };
    }

    const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);

    if (projectMatch) {
      return { type: 'project' as const, slug: decodeURIComponent(projectMatch[1]) };
    }

    return { type: 'not-found' as const };
  }, [pathname]);

  useEffect(() => {
    if (route.type === 'project') {
      const project = getProject(route.slug);
      document.title = project ? `${project.title} | Chad Luangrath` : 'Project Not Found | Chad Luangrath';
      return;
    }

    document.title = route.type === 'home' ? 'Chad Luangrath' : 'Not Found | Chad Luangrath';
  }, [route]);

  if (route.type === 'home') {
    return <HomePage />;
  }

  if (route.type === 'project') {
    return <ProjectPage slug={route.slug} />;
  }

  return <NotFoundPage />;
}
