"use client";

import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: LucideIcon;
  label: string;
};

export function IconButton({ icon: Icon, label, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        "inline-grid size-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[color:var(--muted)] transition hover:border-[var(--foreground)] hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]",
        className
      )}
      aria-label={label}
      title={label}
      type="button"
      {...props}
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
    </button>
  );
}
