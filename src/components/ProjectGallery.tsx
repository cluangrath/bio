import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Project } from '../types';
import { DeviceFrame } from './DeviceFrame';

type ProjectGalleryProps = {
  project: Project;
};

/**
 * Every screenshot in a horizontally scrolling, snap-aligned strip that fits any count. Selecting
 * one opens it in a modal lightbox with previous/next, arrow keys, swipe, and Escape to close.
 */
export function ProjectGallery({ project }: ProjectGalleryProps) {
  const media = project.media;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = media?.screenshots.length ?? 0;

  const step = useCallback(
    (delta: number) => setOpenIndex((index) => (index === null ? index : (index + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (openIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (openIndex === null && dialog.open) {
      dialog.close();
    }
  }, [openIndex]);

  if (!media || count === 0) {
    return null;
  }

  const current = openIndex === null ? null : media.screenshots[openIndex];
  const deviceOf = (index: number) => media.screenshots[index].device ?? media.device;

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <p className="eyebrow">Screenshots</p>
        <h2 id="gallery-title">A look at {project.title}</h2>
      </div>
      <ul className="gallery-strip" aria-label={`${project.title} screenshots`}>
        {media.screenshots.map((screenshot, index) => (
          <li key={screenshot.src} className={`gallery-item gallery-item-${deviceOf(index)}`}>
            <figure>
              <button
                type="button"
                className="gallery-open"
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger: ${screenshot.caption ?? screenshot.alt}`}
              >
                <DeviceFrame device={deviceOf(index)} screenshot={screenshot} />
                <span className="gallery-zoom" aria-hidden="true">
                  <Maximize2 size={16} strokeWidth={2} />
                </span>
              </button>
              {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${project.title} screenshot viewer`}
        onClose={() => setOpenIndex(null)}
        onClick={(event) => {
          // A click on the backdrop (the dialog itself, not its content) closes it.
          if (event.target === event.currentTarget) {
            setOpenIndex(null);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            step(1);
          } else if (event.key === 'ArrowLeft') {
            step(-1);
          }
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          touchStartX.current = null;

          if (start === null) {
            return;
          }

          const distance = event.changedTouches[0].clientX - start;

          if (Math.abs(distance) > 48) {
            step(distance < 0 ? 1 : -1);
          }
        }}
      >
        {current && openIndex !== null && (
          <div className="lightbox-body">
            <button type="button" className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Close">
              <X size={20} strokeWidth={2} />
            </button>
            <figure className={`lightbox-figure lightbox-figure-${deviceOf(openIndex)}`}>
              <DeviceFrame device={deviceOf(openIndex)} screenshot={current} priority />
              <figcaption>
                <span>{current.caption ?? current.alt}</span>
                <span className="lightbox-count">
                  {openIndex + 1} / {count}
                </span>
              </figcaption>
            </figure>
            {count > 1 && (
              <>
                <button type="button" className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="Previous screenshot">
                  <ChevronLeft size={24} strokeWidth={2} />
                </button>
                <button type="button" className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="Next screenshot">
                  <ChevronRight size={24} strokeWidth={2} />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
