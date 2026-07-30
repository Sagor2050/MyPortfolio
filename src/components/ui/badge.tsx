import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "teal" | "amber" | "plum" | "coral";
};

const toneClasses = {
  neutral: "border-[var(--border)] bg-[var(--surface)] text-[color:var(--muted)]",
  teal: "border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_9%,var(--surface))] text-[color:var(--accent-strong)]",
  amber: "border-[color-mix(in_srgb,var(--amber)_38%,var(--border))] bg-[color-mix(in_srgb,var(--amber)_10%,var(--surface))] text-[color:var(--amber-strong)]",
  plum: "border-[color-mix(in_srgb,var(--plum)_36%,var(--border))] bg-[color-mix(in_srgb,var(--plum)_8%,var(--surface))] text-[color:var(--plum-strong)]",
  coral: "border-[color-mix(in_srgb,var(--coral)_38%,var(--border))] bg-[color-mix(in_srgb,var(--coral)_9%,var(--surface))] text-[color:var(--coral-strong)]"
};

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium", toneClasses[tone], className)}>
      {children}
    </span>
  );
}
