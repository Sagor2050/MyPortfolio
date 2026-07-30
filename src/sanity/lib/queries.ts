import { defineQuery } from "next-sanity";

export const portfolioQuery = defineQuery(`{
  "profile": *[_type == "profile"][0]{
    name,
    displayName,
    initials,
    headline,
    summary,
    location,
    email,
    phone,
    "resumeHref": coalesce(resumeFile.asset->url, resumeHref),
    "portraitSrc": coalesce(portrait.asset->url, portraitSrc),
    links[]{label, href}
  },
  "education": *[_type == "education"] | order(order asc, _createdAt asc) {
    institution,
    degree,
    location,
    start,
    end,
    gpa,
    details
  },
  "experience": *[_type == "experience"] | order(order asc, _createdAt asc) {
    title,
    organization,
    context,
    location,
    start,
    end,
    highlights
  },
  "honors": *[_type == "honor"] | order(order asc, _createdAt asc) {
    title,
    organization,
    start,
    end,
    details
  },
  "projects": *[_type == "project"] | order(order asc, _createdAt asc) {
    name,
    description,
    start,
    end,
    technologies,
    highlights,
    "slug": slug.current
  },
  "skillGroups": *[_type == "skillGroup"] | order(order asc, _createdAt asc) {
    label,
    items
  }
}`);
