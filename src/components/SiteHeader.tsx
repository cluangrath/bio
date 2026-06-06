import { ArrowLeft, Home } from 'lucide-react';
import { profile } from '../data/profile';
import { AppLink } from './AppLink';

type SiteHeaderProps = {
  variant?: 'home' | 'project';
};

export function SiteHeader({ variant = 'home' }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <AppLink className="brand-link" to="/" aria-label="Go to homepage">
        {variant === 'project' ? (
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.9} />
        ) : (
          <Home aria-hidden="true" size={18} strokeWidth={1.9} />
        )}
        <span>{profile.name}</span>
      </AppLink>

      <nav className="site-nav" aria-label="Primary navigation">
        <AppLink to="/#projects">Projects</AppLink>
        <a href="https://github.com/cluangrath" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
