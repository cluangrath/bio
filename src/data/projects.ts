import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'voice-memo-manager',
    title: 'Voice Memo Manager',
    kicker: 'Private Android productivity app',
    summary:
      'A focused tool for organizing, searching, and reconciling exported voice notes from messaging workflows.',
    lead:
      'This sample page is set up for a closed-source project writeup: what problem it solves, the technical shape, the decisions worth discussing, and the impact without exposing private code.',
    role: 'Solo product engineering',
    timeline: '2025 to present',
    status: 'Private build',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Android', 'SQLite'],
    visualVariant: 'memo',
    problem:
      'Voice notes are easy to create and surprisingly hard to manage once they leave the chat timeline. The project explores how to turn those scattered artifacts into a searchable, reviewable personal archive.',
    approach:
      'The app treats imported media, metadata, and reconciliation state as first-class domain objects. The UI stays task-oriented: scan, filter, verify, and resolve instead of burying users in generic file-browser behavior.',
    highlights: [
      'Built a local-first data model for imported media, message metadata, and review state.',
      'Designed dense Compose screens for repeated review tasks on a phone-sized display.',
      'Added debug surfaces that make reconciliation issues inspectable without attaching a debugger.',
    ],
    outcomes: [
      'Created a reliable private workflow for reviewing exported voice notes.',
      'Kept sensitive personal data local to the device.',
      'Produced a strong case study for mobile UX, data modeling, and pragmatic debugging.',
    ],
    nextSteps: [
      'Replace this sample copy with screenshots and a short architecture diagram.',
      'Add a privacy note explaining what stays local and why.',
      'Write a compact case study around the hardest reconciliation bug.',
    ],
  },
  {
    slug: 'workflow-automation-lab',
    title: 'Workflow Automation Lab',
    kicker: 'Private systems and tooling project',
    summary:
      'A collection of small automations that reduce repetitive coordination work across local files, apps, and development workflows.',
    lead:
      'Use this page for a behind-the-scenes tooling project where the interesting part is not a public repository, but the judgment behind what to automate and how to keep it maintainable.',
    role: 'Designer and implementer',
    timeline: '2024 to present',
    status: 'Active internal toolkit',
    stack: ['TypeScript', 'Node.js', 'Shell', 'APIs', 'Local automation'],
    visualVariant: 'systems',
    problem:
      'Personal and engineering workflows accumulate tiny sources of friction. Each one is small enough to tolerate, but together they interrupt focus and make routine work feel heavier than it needs to be.',
    approach:
      'The project favors narrow tools with obvious inputs, observable outputs, and minimal ceremony. The goal is not to automate everything; it is to make the right repeated actions dependable.',
    highlights: [
      'Codified repeatable project setup and verification tasks.',
      'Created local scripts around file organization, review loops, and publishing steps.',
      'Kept tools inspectable so future changes are easier than starting over.',
    ],
    outcomes: [
      'Reduced repeated manual steps in personal development workflows.',
      'Made project maintenance easier to resume after context switches.',
      'Created a portfolio story around engineering taste and leverage.',
    ],
    nextSteps: [
      'Swap in real examples of before-and-after workflow time saved.',
      'Add one sanitized automation walkthrough.',
      'Separate reusable scripts from project-specific glue.',
    ],
  },
  {
    slug: 'portfolio-site',
    title: 'Portfolio Site',
    kicker: 'Public personal website',
    summary:
      'The site you are reading: a small static React app designed to tell a better story than a GitHub repo list can.',
    lead:
      'This project page can become a meta case study about turning a simple bio page into a portfolio system with curated project narratives.',
    role: 'Product, design, and engineering',
    timeline: '2026',
    status: 'In progress',
    stack: ['React', 'TypeScript', 'Vite', 'CSS', 'Cloudflare Pages'],
    visualVariant: 'portfolio',
    problem:
      'A public GitHub feed is a weak proxy for current engineering ability, especially when the most meaningful projects are private, professional, or still in progress.',
    approach:
      'The site now separates personal profile content, curated project data, reusable visual components, and route-level pages so each project can have its own narrative.',
    highlights: [
      'Introduced typed project data that can be edited without touching layout code.',
      'Added static-friendly project detail routes for direct sharing.',
      'Kept the live GitHub section as secondary context instead of the main portfolio.',
    ],
    outcomes: [
      'Created a scaffold for closed-source project storytelling.',
      'Preserved the simplicity of a static Cloudflare Pages deployment.',
      'Made future portfolio additions mostly a data-entry and asset task.',
    ],
    nextSteps: [
      'Replace placeholder project copy with real case-study material.',
      'Add screenshots or short visual captures for each project.',
      'Tune the homepage once the final project set is known.',
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
}
