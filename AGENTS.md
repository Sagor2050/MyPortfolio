# AI Agent Contributor Guide

This file is the handoff guide for future AI agents and developers working in this repository. Keep it current when architecture, commands, or conventions change.

## Project Intent

This repository is being reconstructed into a long-lived, production quality portfolio for Sagor S. Dhor.

The goal is a premium, content-driven portfolio built with:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Vercel

Preserve the existing Git history. Do not replace this repository with a new scaffold.

## Content Rules

- Do not invent portfolio content, metrics, projects, employers, education, awards, or skills.
- The current local content source is `src/content/portfolio.ts`, which was extracted from `public/SagorS.Dhor_Resume.pdf`.
- The resume PDF at `public/SagorS.Dhor_Resume.pdf` is the canonical local resume asset.
- The profile image currently used by the app is `public/images/profile.jpeg`.
- When Sanity is configured, CMS content should become the primary source. Local content remains the fallback for development and unconfigured environments.
- If new portfolio content is needed, ask the owner for source material or pull from a confirmed local document. Do not fill gaps with plausible-sounding copy.

## Repository Map

- `src/app/`
  Next.js App Router entry points. `page.tsx` renders the portfolio. `layout.tsx` defines metadata and global shell. `studio/[[...tool]]/page.tsx` hosts Sanity Studio or the setup screen.

- `src/components/layout/`
  Shared layout primitives such as the site header and container.

- `src/components/sections/`
  Page sections composed from typed content: hero, experience, projects, education, honors, and contact.

- `src/components/ui/`
  Reusable UI primitives such as buttons, badges, cards, icon buttons, and section wrappers.

- `src/components/motion/`
  Motion primitives. `Reveal` centralizes Framer Motion reveal behavior and reduced-motion support.

- `src/components/studio/`
  Sanity Studio client wrapper.

- `src/content/portfolio.ts`
  Typed fallback content derived from the resume. Keep it factual and compact.

- `src/types/portfolio.ts`
  Shared TypeScript types for content used by local fallback data and Sanity mapping.

- `src/sanity/`
  Sanity environment helpers, client, image builder, GROQ queries, schema definitions, and portfolio data loader.

- `scripts/write-sanity-seed.ts`
  Generates `sanity/seed/portfolio.ndjson` from local fallback content.

- `sanity/seed/`
  Generated Sanity import data and seed instructions.

- `legacy/static-site/`
  Archived copy of the previous static HTML/CSS/JavaScript site. Keep it for reference unless the owner asks to remove it.

- `public/`
  Public static assets, including the resume and profile image.

## Current Architecture

The portfolio is a single-page App Router experience composed from typed content.

Content flow:

1. `src/app/page.tsx` calls the portfolio data loader.
2. `src/sanity/lib/portfolio.ts` tries to fetch structured content from Sanity when required public environment variables are present.
3. If Sanity is not configured or content is unavailable, the app falls back to `src/content/portfolio.ts`.
4. Section components receive typed content and render the page.

This lets the site run locally without a CMS while still supporting a content-driven production path.

## Sanity Notes

Required public environment variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-30
```

Expected workflow:

1. Create `.env.local` from `.env.example`.
2. Set Sanity project values.
3. Run `npm run sanity:seed` to regenerate `sanity/seed/portfolio.ndjson` from local content.
4. Authenticate the Sanity CLI if needed.
5. Run `npm run sanity:import` to import seed data into the `production` dataset.
6. Upload the resume and portrait as Sanity assets later if the CMS should fully own media.

Dependency caveats:

- `sanity@5.31.1` is currently used to support Node 20 while satisfying `next-sanity@13`.
- Some transitive packages may print Node engine warnings under Node 20.20.2. The app currently builds despite those warnings.
- Keep Sanity, Next, React, and TypeScript upgrades deliberate. Check peer dependency ranges before bumping them.

## Design System Rules

This site should not look like a generic portfolio template.

Preserve these design constraints:

- Keep the first screen focused on Sagor, not dashboard-style metrics.
- Avoid fake counters such as "3 roles", "2 projects", or "20 skills" unless the owner explicitly wants them.
- Favor professional content hierarchy over decorative panels.
- Use compact, reusable primitives in `src/components/ui/`.
- Use lucide-react icons for button and utility icons when available.
- Keep card border radius at `rounded-md` or smaller unless a future design system says otherwise.
- Do not add gradient orbs, bokeh blobs, or generic decorative backgrounds.
- Make button text visible in both themes. For Tailwind arbitrary color values, include the explicit `color:` hint.
- Respect reduced motion. Put new scroll or reveal animations behind shared motion primitives when possible.
- Do not add visible in-app text explaining how the site works, what technologies it uses, or how to navigate unless it is real portfolio content.

## Styling Notes

- Global tokens live in `src/app/globals.css`.
- Tailwind v4 is used through CSS-first configuration and `@tailwindcss/postcss`.
- Prefer existing CSS custom properties:
  - `--background`
  - `--foreground`
  - `--muted`
  - `--surface`
  - `--surface-strong`
  - `--border`
  - `--accent`
  - `--accent-strong`
  - `--amber`
  - `--amber-strong`
  - `--plum`
  - `--plum-strong`
  - `--coral`
  - `--coral-strong`
- When using arbitrary Tailwind text colors, include the `color:` type hint so Tailwind emits a color rule instead of treating the value ambiguously.
- Use `cn` from `src/lib/utils.ts` for conditional class composition.

## Development Commands

Use these commands before handing work back:

```bash
npm run lint
npm run typecheck
npm run build
```

Useful local commands:

```bash
npm run dev
npm run sanity:seed
npm run sanity:import
```

Operational notes:

- `npm run build` may need permission to bind local ports because Next/Turbopack can open local worker sockets.
- `npm run sanity:seed` may need elevated execution in restricted sandboxes because `tsx` can open an IPC pipe.
- If `npm run typecheck` fails only because `.next/types` is stale, run `npm run build` and then rerun `npm run typecheck`.

## Git Workflow

- Current active branch: `agent/design-system-homepage`.
- Keep commits scoped and descriptive.
- Do not commit unless the owner asks.
- Stage files explicitly. Avoid broad staging when unrelated local changes are present.
- Do not revert user changes or generated work from previous agents unless the owner explicitly requests it.
- Preserve `legacy/static-site/` unless removal is approved.

## Safe Modification Patterns

When adding a new page section:

1. Update the relevant types in `src/types/portfolio.ts`.
2. Add or update fallback content in `src/content/portfolio.ts`.
3. Add or update Sanity schema documents or objects in `src/sanity/schemas/`.
4. Add or update GROQ queries in `src/sanity/lib/queries.ts`.
5. Update the mapping logic in `src/sanity/lib/portfolio.ts`.
6. Add a section component under `src/components/sections/`.
7. Compose it from `src/app/page.tsx`.
8. Run lint, typecheck, and build.

When changing visual primitives:

1. Start in `src/components/ui/`.
2. Verify both light and dark themes.
3. Check mobile and desktop layouts.
4. Ensure text stays readable against backgrounds and hover states.
5. Prefer changing one primitive over patching each section individually.

When changing content:

1. Confirm the source with the owner or a repository document.
2. Update `src/content/portfolio.ts`.
3. Regenerate Sanity seed data with `npm run sanity:seed`.
4. Review `sanity/seed/portfolio.ndjson` for factual consistency.

## Verification Checklist

Before completing meaningful UI work, check:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Primary, secondary, and ghost buttons in light and dark themes
- Header resume button visibility
- Hero resume and email button visibility
- Contact email, phone, LinkedIn, and GitHub button visibility
- Mobile wrapping for button rows and navigation-critical content
- Sanity fallback behavior when env vars are missing

## Known Follow-Up Work

- Configure the real Sanity project and environment variables.
- Import generated seed data into Sanity.
- Decide whether Sanity should own resume and portrait assets.
- Add project detail pages when confirmed project case study content exists.
- Wire more site settings to Sanity when navigation and metadata should be CMS-managed.
- Configure Vercel deployment and production environment variables.
- Continue refining layout polish section by section with real content only.
