export function projectPath(slug: string) {
  return `/projects/${slug}`;
}

export function navigateTo(path: string) {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));

  const hash = path.split('#')[1];

  if (hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
