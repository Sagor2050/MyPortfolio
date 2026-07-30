import type { Metadata } from "next";
import { SanityStudio } from "@/components/studio/sanity-studio";
import { isSanityConfigured } from "@/sanity/env";

export const metadata: Metadata = {
  title: "Sanity Studio | Sagor S. Dhor"
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="grid min-h-screen place-items-center bg-[var(--background)] px-6 text-[color:var(--foreground)]">
        <div className="max-w-xl rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm shadow-black/[0.03]">
          <p className="text-sm font-semibold uppercase text-[color:var(--accent-strong)]">Sanity Studio</p>
          <h1 className="mt-3 text-2xl font-semibold">Connect a Sanity project to enable the CMS.</h1>
          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to your environment, then restart the dev server.
          </p>
        </div>
      </main>
    );
  }

  return <SanityStudio />;
}
