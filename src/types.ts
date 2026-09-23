import type { LucideIcon } from 'lucide-react';

export type ProfileLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectVisualVariant = 'memo' | 'systems' | 'portfolio';

/** How screenshots are framed: a phone bezel, an unfolded foldable, a browser window, or unframed. */
export type ProjectDevice = 'phone' | 'foldable' | 'browser' | 'none';

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
  /** Overrides the project's `media.device` for one screenshot, e.g. a foldable among phones. */
  device?: ProjectDevice;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  lead: string;
  role: string;
  timeline: string;
  status: string;
  stack: string[];
  /** Screenshots, first one used as the cover. Projects without them fall back to `visualVariant`. */
  media?: {
    device: ProjectDevice;
    screenshots: ProjectScreenshot[];
  };
  visualVariant?: ProjectVisualVariant;
  links?: ProjectLink[];
  /** Thanks to the people and projects the work builds on. */
  credits?: {
    title: string;
    body: string;
    links: ProjectLink[];
  };
  problem: string;
  approach?: string;
  highlights: string[];
  outcomes?: string[];
  nextSteps?: string[];
};

export type GitHubRepoResponse = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export type GitHubProject = {
  name: string;
  description: string;
  language: string;
  lastPushed: string;
  href: string;
};
