import { profile } from '../data/profile';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ProfileIntro } from '../components/ProfileIntro';
import { RecentGitHubRepos } from '../components/RecentGitHubRepos';
import { SiteHeader } from '../components/SiteHeader';

export function HomePage() {
  return (
    <main className="site-shell" aria-labelledby="page-title">
      <SiteHeader />
      <div className="page-content">
        <ProfileIntro />
        <FeaturedProjects />
        <RecentGitHubRepos />
        <p className="footer-note">
          © 2026 {profile.name} · {profile.location}
        </p>
      </div>
    </main>
  );
}
