export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-30";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const readToken = process.env.SANITY_API_READ_TOKEN;
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const isSanityConfigured = Boolean(projectId && dataset);
export const studioProjectId = projectId || "00000000";
