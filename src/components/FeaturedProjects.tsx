import { MoveUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { projectPath } from '../utils/routing';
import { AppLink } from './AppLink';
import { ProjectVisual } from './ProjectVisual';

export function FeaturedProjects() {
  return (
    <section className="featured-projects" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected projects</p>
        <h2 id="projects-title">Closed-source work, explained like portfolio stories.</h2>
        <p>
          These are sample entries for now. Each one has a dedicated page structure for the
          problem, approach, technical highlights, outcomes, and next steps.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.slug}>
            <ProjectVisual label={`${project.title} visual preview`} variant={project.visualVariant} />
            <div className="portfolio-card-copy">
              <p className="project-kicker">{project.kicker}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-list" aria-label={`${project.title} technology stack`}>
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <AppLink className="text-link" to={projectPath(project.slug)}>
                Read project page
                <MoveUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
              </AppLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
