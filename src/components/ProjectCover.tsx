import type { Project } from '../types';
import { DeviceFrame } from './DeviceFrame';
import { ProjectVisual } from './ProjectVisual';

type ProjectCoverProps = {
  project: Project;
  priority?: boolean;
};

/**
 * A project's visual: its first two screenshots in device frames when it has them, otherwise the
 * illustrated placeholder for its `visualVariant`.
 */
export function ProjectCover({ project, priority = false }: ProjectCoverProps) {
  const screenshots = project.media?.screenshots ?? [];

  if (!project.media || screenshots.length === 0) {
    return <ProjectVisual label={`${project.title} visual`} variant={project.visualVariant ?? 'portfolio'} />;
  }

  const { device } = project.media;
  // Covers keep one frame shape: screenshots that override the project's device stay in the gallery.
  const coverable = screenshots.filter((screenshot) => (screenshot.device ?? device) === device);
  const shown = coverable.slice(0, device === 'phone' ? 2 : 1);

  return (
    <div className={`project-cover project-cover-${device}`} data-count={shown.length}>
      {shown.map((screenshot, index) => (
        <DeviceFrame
          key={screenshot.src}
          device={device}
          screenshot={screenshot}
          priority={priority}
          className={`project-cover-frame project-cover-frame-${index}`}
        />
      ))}
    </div>
  );
}
