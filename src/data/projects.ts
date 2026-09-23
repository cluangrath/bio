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
    kicker: 'BlueBubbles client for Android',
    summary:
      'A native Android client for a self-hosted BlueBubbles server, built from scratch in Kotlin with Material 3 and designed to feel at home on the phone.',
    lead:
      'Navi connects to your pre-existing BlueBubbles server. Navi is an opinionated client with a focus on reliability, speed, smoothness, and a native Material 3 feel.',
    status: 'Private build, in active development',
    stack: ['Kotlin', 'Material 3', 'Socket.IO', 'Firebase Cloud Messaging'],
    media: {
      device: 'phone',
      screenshots: [
        {
          src: '/projects/navi/list-light.jpg',
          alt: 'Navi chat list with three pinned conversations, unread indicators, and recent chats.',
          caption: 'Chat list with pinned conversations',
        },
        {
          src: '/projects/navi/convo-light.jpg',
          alt: 'A Navi group conversation showing a shared photo with tapbacks, a laugh reaction, and read receipts.',
          caption: 'Group conversation with tapbacks and read receipts',
        },
        {
          src: '/projects/navi/thread.jpg',
          alt: 'Navi reply thread overlay showing a photo and the replies to it above the conversation, with a reply box at the bottom.',
          caption: 'Reply thread',
        },
        {
          src: '/projects/navi/details.jpg',
          alt: 'Navi conversation details page for a group chat, with group name and photo options, a pin toggle, and message sync actions.',
          caption: 'Conversation details',
        },
        {
          src: '/projects/navi/unfolded.jpg',
          alt: 'Navi on an unfolded foldable, showing the chat list and an open conversation side by side.',
          caption: 'Unfolded: chat list and conversation side by side',
          device: 'foldable',
        },
        {
          src: '/projects/navi/wizard-1.jpg',
          alt: 'The first step of the Navi setup wizard, inviting the user to connect to their BlueBubbles server.',
          caption: 'Setup wizard',
        },
        {
          src: '/projects/navi/wizard-2.jpg',
          alt: 'The Navi setup wizard server step, offering to scan a QR code or enter the server address manually.',
          caption: 'Connecting to a BlueBubbles server',
        },
        {
          src: '/projects/navi/list-dark.jpg',
          alt: 'Navi chat list in the dark theme.',
          caption: 'Dark theme',
        },
        {
          src: '/projects/navi/convo-dark.jpg',
          alt: 'A Navi group conversation in the dark theme.',
          caption: 'Dark theme conversation',
        },
      ],
    },
    credits: {
      title: 'Built on BlueBubbles',
      body: 'Navi only exists because of the BlueBubbles project. Its open-source server does the hard work of relaying messages from a Mac, and its official app set the bar for what a client should do. Huge thanks to the BlueBubbles team and contributors.',
      links: [
        { label: 'BlueBubbles on GitHub', href: 'https://github.com/BlueBubblesApp' },
        { label: 'BlueBubbles Server', href: 'https://github.com/BlueBubblesApp/bluebubbles-server' },
        { label: 'BlueBubbles App', href: 'https://github.com/BlueBubblesApp/bluebubbles-app' },
        { label: 'bluebubbles.app', href: 'https://bluebubbles.app' },
      ],
    },
    problem:
      'I use BlueBubbles every day, and I wanted a client that felt a little more modern: native Material 3 design, lightweight, responsive, proper scaling, and a short list of settings that just work. The official BlueBubbles app is capable and full of options; Navi is my own take on the same idea, built natively for Android and tuned to how I actually message.',
    highlights: [
      'Real-time updates over Socket.IO, with Firebase Cloud Messaging as a fallback when the app is in the background.',
      'A reliable outbound queue: messages are never sent twice and go out in order, even after the app is closed mid-send.',
      'The everyday messaging features: tapbacks and emoji reactions, reply threads, mentions, edits and unsends, link previews, stickers, voice memos, and inline video.',
      'An adaptive layout that shows the chat list and the conversation side by side on foldables and tablets.',
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
