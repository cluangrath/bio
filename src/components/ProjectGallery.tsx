import type { Project } from '../types';
import { DeviceFrame } from './DeviceFrame';

type ProjectGalleryProps = {
  project: Project;
};

/** Every screenshot in a horizontally scrolling, snap-aligned strip that fits any count. */
export function ProjectGallery({ project }: ProjectGalleryProps) {
  const media = project.media;

  if (!media || media.screenshots.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <p className="eyebrow">Screenshots</p>
        <h2 id="gallery-title">A look at {project.title}</h2>
      </div>
      <ul className={`gallery-strip gallery-strip-${media.device}`} tabIndex={0} aria-label={`${project.title} screenshots`}>
        {media.screenshots.map((screenshot) => (
          <li key={screenshot.src}>
            <figure>
              <DeviceFrame device={media.device} screenshot={screenshot} />
              {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>
      {media.note && <p className="gallery-note">{media.note}</p>}
    </section>
  );
}
