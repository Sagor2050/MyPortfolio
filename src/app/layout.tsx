import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/portfolio";
import { siteUrl } from "@/sanity/env";

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored === "light" || stored === "dark" ? stored : system;
    document.documentElement.dataset.theme = theme;
  } catch {
  }
})();
`;

const title = `${profile.displayName} — ${profile.headline}`;
const description = profile.summary;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
  keywords: ["Sagor Sutra Dhor", "Sagor S. Dhor", "software engineer", "computer science", "full-stack developer", "AI systems"],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: profile.displayName,
    title,
    description,
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  url: siteUrl,
  jobTitle: profile.headline,
  description: profile.summary,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location
  },
  sameAs: profile.links.map((link) => link.href)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
