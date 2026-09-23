import { Github, Linkedin, Mail } from 'lucide-react';
import type { ProfileLink } from '../types';

export const profile = {
  name: 'Chad Luangrath',
  role: 'Engineering Manager at apiphani',
  location: 'NYC',
  headline:
    'I build thoughtful software systems, lead engineering teams, and turn practical ideas into polished tools.',
  bio:
    'This site is evolving into a portfolio for the closed-source and personal projects that are more representative of how I work today.',
};

export const profileLinks: ProfileLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chad-luangrath-29640789/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cluangrath',
    icon: Github,
  },
  {
    label: 'Email',
    href: 'mailto:hello@chad.luangrath.dev',
    icon: Mail,
  },
];
