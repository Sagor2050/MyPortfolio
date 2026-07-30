import { FileText } from "lucide-react";
import type { Link, Profile } from "@/types/portfolio";
import { ButtonLink } from "@/components/ui/button-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type SiteHeaderProps = {
  profile: Profile;
  navigation: readonly Link[];
};

export function SiteHeader({ profile, navigation }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_90%,transparent)] backdrop-blur-xl">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-7 lg:px-10">
        <a className="flex min-w-0 items-center gap-3" href="#top" aria-label={`${profile.displayName} home`}>
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
            {profile.initials}
          </span>
          <span className="truncate text-sm font-semibold">{profile.displayName}</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              className="rounded-md px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-[var(--surface)] hover:text-[color:var(--foreground)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={profile.resumeHref} icon={FileText} variant="secondary" size="sm">
            Resume
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
