import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: LucideIcon;
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary: "button-link-primary shadow-sm shadow-black/10",
  secondary: "button-link-secondary",
  ghost: "button-link-ghost"
};

const sizeClasses = {
  sm: "h-10 px-3 text-sm",
  md: "h-12 px-4 text-sm"
};

export function ButtonLink({
  href,
  children,
  className,
  external,
  icon: Icon = ArrowUpRight,
  size = "md",
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "button-link inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
      <span>{children}</span>
    </a>
  );
}
