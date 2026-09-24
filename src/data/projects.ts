import type { Project } from '../types';

/**
 * Portfolio entries, in display order. The first project is featured full-width on the homepage;
 * the rest flow into a responsive grid, so adding a project is a data-only change here plus its
 * screenshots under `public/projects/<slug>/`.
 */
export const projects: Project[] = [
  {
    slug: 'memoria',
    title: 'Memoria',
    kicker: 'WhatsApp voice memo library for Android',
    summary:
      'An Android app that takes WhatsApp chat exports and imports them into a searchable library of voice memos, with waveforms, playlists, and on-device transcription.',
    lead:
      'Memoria imports voice memos from ZIP export files from WhatsApp and keeps them organized by conversation. Manage your voice memos by creating playlists, categories, and bookmarks. Everything stays on the phone: no account, no cloud, and no network access at all.',
    status: 'Internal beta on Google Play',
    stack: ['Kotlin', 'Jetpack Compose', 'Media3', 'whisper.cpp'],
    media: {
      device: 'phone',
      screenshots: [
        {
          src: '/projects/memoria/library-light.jpg',
          alt: 'Memoria home screen listing six imported conversations, each with its voice memo count and last import time, above a button to import a WhatsApp export ZIP.',
          caption: 'Conversations imported from WhatsApp exports',
        },
        {
          src: '/projects/memoria/playback-light.jpg',
          alt: 'A Memoria conversation playing a voice memo named Old photo albums, with its waveform partly filled in to show progress, and a starred memo named Birthday message below it.',
          caption: 'Playback with waveforms, named and starred memos',
        },
        {
          src: '/projects/memoria/transcript.jpg',
          alt: 'A transcription sheet for a voice memo, split into timestamped segments that can be tapped to play from that point.',
          caption: 'On-device transcript with tap-to-seek timestamps',
        },
        {
          src: '/projects/memoria/search.jpg',
          alt: 'Memoria search results for the word bring, showing four voice memos from different conversations with the matching spoken words under each.',
          caption: 'Searching what was said across every conversation',
        },
        {
          src: '/projects/memoria/unfolded-search.jpg',
          alt: 'Memoria on an unfolded foldable in the dark theme, with search results on the left and the selected voice memo playing on the right.',
          caption: 'Unfolded: search results beside the player',
          device: 'foldable',
        },
        {
          src: '/projects/memoria/library-dark.jpg',
          alt: 'Memoria home screen in the dark theme, with a paused voice memo in the mini player.',
          caption: 'Dark theme',
        },
        {
          src: '/projects/memoria/playback-dark.jpg',
          alt: 'A group conversation in the dark theme playing a voice memo tagged Trips.',
          caption: 'Dark theme playback with a tag',
        },
      ],
    },
    credits: {
      title: 'Built on Whisper',
      body: "Memoria's transcripts come from OpenAI's open-source Whisper speech recognition model, running on the phone through whisper.cpp. Thanks to both projects and their contributors for making private, offline transcription possible.",
      links: [
        { label: 'whisper.cpp on GitHub', href: 'https://github.com/ggml-org/whisper.cpp' },
        { label: 'Whisper on GitHub', href: 'https://github.com/openai/whisper' },
      ],
    },
    problem:
      "A lot of the voice memos that matter to me live in WhatsApp: messages from family, friends, and people I want to remember. WhatsApp doesn't provide tools to find, categorize, or listen to a series of voice memos. I wanted one private place on my phone to keep them, manage them, find them by what was said, and listen to them back to back, without uploading any of it anywhere.",
    highlights: [
      'Imports WhatsApp chat export ZIPs, shared straight from WhatsApp or picked from files, and skips memos already in the library.',
      'Transcribes voice memos on the device, so you can search by the words spoken as well as by contact, tag, or date.',
      'Inline playback with waveforms, variable speed, bookmarked sections, and continuous playback through a conversation or playlist, with media controls in the notification.',
      'Organize with tags, stars, custom names, and playlists, and lock private playlists or starred memos behind a fingerprint or the screen lock.',
      'No network permission, accounts, or telemetry: audio and transcripts never leave the phone.',
      'An adaptive layout that places lists and playback side by side on foldables and tablets.',
    ],
  },
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
