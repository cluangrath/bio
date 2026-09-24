import { MoveUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { projectPath } from '../utils/routing';
import { AppIcon } from './AppIcon';
import { AppLink } from './AppLink';
import { ProjectCover } from './ProjectCover';

/** The first project is featured; so is a second one that would otherwise sit alone in the grid. */
function isFeatured(index: number) {
  return index === 0 || projects.length === 2;
}

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
          Some personal projects I've been working on
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className={`portfolio-card${isFeatured(index) ? ' portfolio-card-featured' : ''}`}
            key={project.slug}
          >
            <ProjectCover project={project} priority={index === 0} />
            <div className="portfolio-card-copy">
              <div className="card-title">
                {project.icon && <AppIcon src={project.icon} size="md" />}
                <div>
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>
                    <AppLink className="card-link" to={projectPath(project.slug)}>
                      {project.title}
                    </AppLink>
                  </h3>
                </div>
              </div>
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
