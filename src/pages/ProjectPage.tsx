import { ArrowRight, MoveUpRight } from 'lucide-react';
import { getNextProject, getProject } from '../data/projects';
import { projectPath } from '../utils/routing';
import { AppLink } from '../components/AppLink';
import { ProjectVisual } from '../components/ProjectVisual';
import { SiteHeader } from '../components/SiteHeader';
import { NotFoundPage } from './NotFoundPage';

type ProjectPageProps = {
  slug: string;
};

export function ProjectPage({ slug }: ProjectPageProps) {
  const project = getProject(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const nextProject = getNextProject(project.slug);

  return (
    <main className="site-shell project-shell" aria-labelledby="project-title">
      <SiteHeader variant="project" />
      <article className="project-page">
        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="eyebrow">{project.kicker}</p>
            <h1 id="project-title">{project.title}</h1>
            <p className="project-lead">{project.lead}</p>
            <div className="project-actions">
              <AppLink className="text-link" to="/">
                Back home
              </AppLink>
              <a className="text-link" href="https://github.com/cluangrath" target="_blank" rel="noreferrer">
                GitHub profile
                <MoveUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
              </a>
            </div>
          </div>
          <ProjectVisual label={`${project.title} visual`} variant={project.visualVariant} />
        </section>

        <dl className="project-meta" aria-label={`${project.title} project details`}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.timeline}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(', ')}</dd>
          </div>
        </dl>

        <section className="project-story" aria-label="Project story">
          <div className="story-block">
            <p className="eyebrow">Problem</p>
            <h2>Why this exists</h2>
            <p>{project.problem}</p>
          </div>
          <div className="story-block">
            <p className="eyebrow">Approach</p>
            <h2>How it is shaped</h2>
            <p>{project.approach}</p>
          </div>
        </section>

        <section className="project-detail-grid" aria-label="Project details">
          <div className="detail-panel">
            <h2>Technical Highlights</h2>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="detail-panel">
            <h2>Outcomes</h2>
            <ul>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div className="detail-panel">
            <h2>Next Steps</h2>
            <ul>
              {project.nextSteps.map((nextStep) => (
                <li key={nextStep}>{nextStep}</li>
              ))}
            </ul>
          </div>
        </section>

        <AppLink className="next-project" to={projectPath(nextProject.slug)}>
          <span>
            <span className="project-kicker">Next project</span>
            {nextProject.title}
          </span>
          <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
        </AppLink>
      </article>
    </main>
  );
}
