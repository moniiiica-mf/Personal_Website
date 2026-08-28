# Monica Fang — Portfolio

Personal design portfolio for Monica Fang, an interaction/product designer. Built with Next.js (App Router), React, TypeScript, and CSS Modules.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **CSS Modules** for component styling, global design tokens in `src/app/globals.css`
- **Framer Motion** for restrained, purposeful motion only (respects `prefers-reduced-motion`)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
src/
  app/
    layout.tsx          root layout, fonts, global metadata
    globals.css          design tokens, typography scale, grid system
    page.tsx              homepage (composes section components)
    work/[slug]/page.tsx  dynamic case-study route
  components/            all UI building blocks (one folder per component)
  data/
    site.ts               site-wide content: nav, about, education, experience, contact, footer links
    projects/              one file per project + index.ts aggregator
  lib/                    small shared helpers (motion variants, etc.)
public/
  projects/<slug>/         per-project image assets (thumbnail, hero, etc.)
```

## Adding a new project

1. Duplicate `src/data/projects/_template.ts` (or an existing project file) into a new file, e.g. `src/data/projects/my-project.ts`.
2. Fill in the `Project` fields — set `featured: true` if it should appear in the homepage Featured Works grid.
3. Add its images to `public/projects/<slug>/`.
4. Register the new project in `src/data/projects/index.ts`.

No component code needs to change — the homepage grid and the `/work/[slug]` route both read from this data automatically. Project order in the "Previous / Next" case-study navigation follows the order projects are listed in `index.ts`.

## Deploying

This project deploys to [Vercel](https://vercel.com) with zero configuration — connect the repository and it will build with `next build`.
