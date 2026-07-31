"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getActiveTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  return (
    <button
      aria-label="Toggle color theme"
      className="inline-grid size-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[color:var(--muted)] transition hover:border-[var(--foreground)] hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
      onClick={() => {
        const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem("theme", nextTheme);
      }}
      title="Toggle color theme"
      type="button"
    >
      <Moon aria-hidden="true" className="theme-toggle-moon size-4" strokeWidth={2} />
      <Sun aria-hidden="true" className="theme-toggle-sun size-4" strokeWidth={2} />
    </button>
  );
}
