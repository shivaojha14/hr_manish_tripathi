# Manish Kumar Tripathi — HR Portfolio

A clean, single-page HR portfolio built with **Next.js (App Router)** and **Tailwind CSS** in TypeScript.

## Features

- Sticky navbar with smooth scroll and a mobile hamburger menu
- Hero with profile photo, experience badge, and CV download
- About with a quick-facts card
- Vertical experience timeline
- Skills grouped into tag-chip cards (no fake percentage bars)
- Education card list
- Contact details, click-to-call, WhatsApp/LinkedIn buttons, and a validated form
- Light/dark mode toggle, responsive, accessible, subtle fade-in on scroll
- SEO metadata (title, description, Open Graph) and a favicon

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command           | Description             |
| ----------------- | ----------------------- |
| `npm run dev`     | Start the dev server    |
| `npm run build`   | Production build        |
| `npm run start`   | Run the production build|
| `npm run lint`    | Run ESLint              |
| `npm run typecheck` | Run TypeScript check  |

## Editing content

All content lives in a single file: [`data/portfolio.ts`](data/portfolio.ts).
Update the object/arrays there to change text, contact details, timeline, skills, and education.

## Files to replace before deploying

- `public/profile.jpg` — the profile photo (currently a placeholder)
- `public/cv.pdf` — the résumé (currently a placeholder PDF)
- `site.email` in `data/portfolio.ts` — currently `your.email@example.com`
- `site.whatsapp` and `site.linkedin` in `data/portfolio.ts` — currently placeholders
- `metadataBase` in `app/layout.tsx` — set it to your production URL

## Contact form

`components/ContactForm.tsx` performs client-side validation only. The submit
handler is a clearly marked `TODO` — connect it to an API route or a service such
as Resend or Formspree before going live.

## Deploy to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the default build settings.
4. Click **Deploy**.

No environment variables are required for the base site.
