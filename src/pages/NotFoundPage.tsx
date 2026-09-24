import { AppLink } from '../components/AppLink';
import { SiteHeader } from '../components/SiteHeader';

export function NotFoundPage() {
  return (
    <main className="site-shell" aria-labelledby="not-found-title">
      <SiteHeader variant="project" />
      <section className="not-found">
        <p className="eyebrow">Project not found</p>
        <h1 id="not-found-title">That page is not in the portfolio yet.</h1>
        <p>
          The portfolio scaffold is ready for curated projects, but this URL does not match one of
          the current sample entries.
        </p>
        <AppLink className="text-link" to="/">
          Return home
        </AppLink>
      </section>
    </main>
  );
}
