# Bio

A simple personal bio and portfolio site for myself.

The site is built with React, TypeScript, and Vite. It includes a short bio, profile links, a portrait image, and a client-side GitHub repository section that fetches the latest public repositories by most recent push.

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS
- Cloudflare Pages for deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is intended to deploy on Cloudflare Pages.

Use these Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank

After the GitHub repository is connected to Cloudflare Pages, pushing to the production branch will automatically trigger a new deployment.

## Notes

- The portrait image in `public/chad-luangrath.jpg` is an optimized copy of the original photo with metadata stripped.
- The GitHub projects section fetches from the public GitHub API at runtime.
- If the GitHub API is unavailable or rate-limited, the site falls back to saved repository links.
