import { AudioLines, Boxes, LayoutTemplate } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { ProjectVisualVariant } from '../types';

type ProjectVisualProps = {
  label: string;
  variant: ProjectVisualVariant;
};

const visualConfig = {
  memo: {
    icon: AudioLines,
    rows: ['Import', 'Match', 'Review', 'Resolve'],
  },
  systems: {
    icon: Boxes,
    rows: ['Capture', 'Normalize', 'Automate', 'Verify'],
  },
  portfolio: {
    icon: LayoutTemplate,
    rows: ['Profile', 'Projects', 'Case Study', 'Contact'],
  },
} satisfies Record<ProjectVisualVariant, { icon: typeof AudioLines; rows: string[] }>;

export function ProjectVisual({ label, variant }: ProjectVisualProps) {
  const config = visualConfig[variant];
  const Icon = config.icon;

  return (
    <div className={`project-visual project-visual-${variant}`} aria-label={label}>
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-body">
        <div className="visual-mark">
          <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
        </div>
        <div className="visual-list">
          {config.rows.map((row, index) => (
            <span key={row} style={{ '--row-index': index } as CSSProperties}>
              {row}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
