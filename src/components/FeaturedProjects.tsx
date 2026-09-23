import { MoveUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { projectPath } from '../utils/routing';
import { AppLink } from './AppLink';
import { ProjectCover } from './ProjectCover';

export function FeaturedProjects() {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="featured-projects" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected projects</p>
        <h2 id="projects-title">Things I’ve been building.</h2>
        <p>
          Personal and closed-source work, each with a short write-up of the problem, the approach,
          and what came out of it.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className={`portfolio-card${index === 0 ? ' portfolio-card-featured' : ''}`}
            key={project.slug}
          >
            <ProjectCover project={project} priority={index === 0} />
            <div className="portfolio-card-copy">
              <p className="project-kicker">{project.kicker}</p>
              <h3>
                <AppLink className="card-link" to={projectPath(project.slug)}>
                  {project.title}
                </AppLink>
              </h3>
              <p>{project.summary}</p>
              <div className="tag-list" aria-label={`${project.title} technology stack`}>
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <span className="text-link" aria-hidden="true">
                Read project page
                <MoveUpRight size={17} strokeWidth={1.8} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
