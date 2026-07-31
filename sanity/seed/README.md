# Sanity Seed Data

The seed file in this directory is generated from the local resume-derived content in `src/content/portfolio.ts`.

Generate it with:

```bash
npm run sanity:seed
```

After configuring Sanity environment variables and authenticating the Sanity CLI, import with:

```bash
npm run sanity:import
```

The seed keeps local asset paths for `portraitSrc` and `resumeHref`. Uploading the portrait and resume as Sanity assets should happen after the initial content import.
