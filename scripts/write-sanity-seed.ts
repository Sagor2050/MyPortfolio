import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fallbackPortfolioContent } from "../src/content/portfolio";

const outputPath = resolve("sanity/seed/portfolio.ndjson");

type SanityDocument = Record<string, unknown> & {
  _id: string;
  _type: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function keyFor(value: string, index: number) {
  return `${slugify(value).slice(0, 40)}-${index}`;
}

const documents: SanityDocument[] = [
  {
    _id: "profile.sagor-s-dhor",
    _type: "profile",
    ...fallbackPortfolioContent.profile,
    links: fallbackPortfolioContent.profile.links.map((link, index) => ({
      _key: keyFor(link.label, index),
      _type: "link",
      ...link
    }))
  },
  {
    _id: "siteSettings.main",
    _type: "siteSettings",
    title: "Sagor S. Dhor",
    description: fallbackPortfolioContent.profile.summary,
    navigation: fallbackPortfolioContent.navigation.map((link, index) => ({
      _key: keyFor(link.label, index),
      _type: "link",
      ...link
    }))
  },
  ...fallbackPortfolioContent.education.map((item, index) => ({
    _id: `education.${slugify(item.institution)}`,
    _type: "education",
    ...item,
    order: index
  })),
  ...fallbackPortfolioContent.experience.map((item, index) => ({
    _id: `experience.${slugify(item.title)}`,
    _type: "experience",
    ...item,
    order: index
  })),
  ...fallbackPortfolioContent.projects.map((item, index) => ({
    _id: `project.${slugify(item.name)}`,
    _type: "project",
    ...item,
    slug: {
      _type: "slug",
      current: slugify(item.name)
    },
    order: index
  })),
  ...fallbackPortfolioContent.honors.map((item, index) => ({
    _id: `honor.${slugify(item.title)}`,
    _type: "honor",
    ...item,
    order: index
  })),
  ...fallbackPortfolioContent.skillGroups.map((item, index) => ({
    _id: `skillGroup.${slugify(item.label)}`,
    _type: "skillGroup",
    ...item,
    order: index
  }))
];

async function main() {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`);

  console.log(`Wrote ${documents.length} Sanity documents to ${outputPath}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
