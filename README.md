# MyPortfolio

Portfolio reconstruction in progress.

This repository is being migrated from a static HTML/CSS/JavaScript site to a modern, content-driven portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Sanity CMS, and Vercel.

## Current Phase

Completed foundation work:

- Next.js App Router project structure
- TypeScript and Tailwind CSS setup
- Local typed content inventory extracted from `public/SagorS.Dhor_Resume.pdf`
- Legacy static site preserved in `legacy/static-site/`
- Reusable design system primitives and section components
- Light/dark theme toggle with persistent preference
- Framer Motion reveal primitives with reduced-motion support
- Sanity CMS configuration, schemas, query helpers, and embedded Studio route

## Sanity CMS

The app falls back to local resume-derived content until a Sanity project is connected.

Create `.env.local` from `.env.example` and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-30
```

Once configured, Sanity Studio is available at `/studio`.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```
