import type { Project } from '../types';

/**
 * Portfolio entries, in display order. The first project is featured full-width on the homepage;
 * the rest flow into a responsive grid, so adding a project is a data-only change here plus its
 * screenshots under `public/projects/<slug>/`.
 */
export const projects: Project[] = [
  {
    slug: 'navi',
    title: 'Navi',
    kicker: 'Android iMessage client',
    summary:
      'A native Android client for BlueBubbles that brings iMessage group chats, tapbacks, threads, and media to an Android phone, built from scratch in Kotlin and Jetpack Compose.',
    lead:
      'iMessage only runs on Apple hardware. BlueBubbles relays it through a Mac server; Navi is my from-scratch Android client for that server, built to feel as fast and native as the phone’s own messaging app.',
    role: 'Solo design and engineering',
    timeline: 'April 2026 to present',
    status: 'Private build, in active development',
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Coroutines & Flow',
      'Socket.IO',
      'Media3',
      'SQLite',
      'Firebase Cloud Messaging',
    ],
    media: {
      device: 'phone',
      screenshots: [
        {
          src: '/projects/navi/list-light.jpg',
          alt: 'Navi chat list with three pinned conversations, unread indicators, and recent chats.',
          caption: 'Chat list with pinned conversations and unread indicators',
        },
        {
          src: '/projects/navi/convo-light.jpg',
          alt: 'A Navi group conversation showing a shared photo with heart and emphasis tapbacks, a laugh reaction, and read receipts.',
          caption: 'Group conversation with tapbacks, an inline photo, and read receipts',
        },
        {
          src: '/projects/navi/list-dark.jpg',
          alt: 'Navi chat list in the dark theme.',
          caption: 'Dark theme chat list',
        },
        {
          src: '/projects/navi/convo-dark.jpg',
          alt: 'A Navi group conversation in the dark theme.',
          caption: 'Dark theme conversation',
        },
      ],
      note: 'Captured from the real app on an Android emulator, running a demo build with fictional contacts and messages.',
    },
    problem:
      'Moving to Android usually means dropping out of iMessage group chats with friends and family. BlueBubbles solves the transport by relaying through a Mac, but the client decides whether it holds up every day: messages have to arrive instantly, never duplicate or go missing, and the UI has to keep up with busy group chats.',
    approach:
      'Navi is a single-activity Compose app over an MVVM and repository core. A Socket.IO connection delivers real-time events, delta sync reconciles anything missed, and a local SQLite cache lets the chat list and conversations open instantly before the network answers. Larger efforts, such as outbound reliability, feature parity, and jank reduction, each ran as a staged plan with a PRD, a technical design, and explicit test gates.',
    highlights: [
      'Real-time messaging over Socket.IO with delta sync, plus Firebase Cloud Messaging when the app is in the background.',
      'An outbound queue with recipient binding, duplicate prevention, and ordered recovery that survives process death.',
      'The everyday iMessage surface: tapbacks and emoji reactions, threaded replies, mentions, edits and unsends, link previews, stickers, voice memos, and inline video.',
      'Performance work driven by measured frame metrics: recomposition scoped to what changed, event merging off the main thread, and a fixture harness for repeatable jank profiling.',
    ],
    outcomes: [
      'About 46,000 lines of Kotlin backed by roughly 1,500 unit tests.',
      'The official client’s everyday features, without its settings sprawl.',
      'Demo and profiling builds that render the real UI over synthetic data, including the screenshots on this page.',
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** The project after `slug`, wrapping around; undefined when there is nothing else to show. */
export function getNextProject(slug: string) {
  if (projects.length < 2) {
    return undefined;
  }

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
}
