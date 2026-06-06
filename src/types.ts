import type { LucideIcon } from 'lucide-react';

export type ProfileLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectVisualVariant = 'memo' | 'systems' | 'portfolio';

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
  visualVariant: ProjectVisualVariant;
  problem: string;
  approach: string;
  highlights: string[];
  outcomes: string[];
  nextSteps: string[];
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
