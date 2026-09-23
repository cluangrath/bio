import type { LucideIcon } from 'lucide-react';

export type ProfileLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectVisualVariant = 'memo' | 'systems' | 'portfolio';

/** How screenshots are framed: a phone bezel, a browser window, or unframed. */
export type ProjectDevice = 'phone' | 'browser' | 'none';

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
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
    /** Optional note shown under the gallery, e.g. how the captures were made. */
    note?: string;
  };
  visualVariant?: ProjectVisualVariant;
  links?: ProjectLink[];
  problem: string;
  approach: string;
  highlights: string[];
  outcomes: string[];
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
