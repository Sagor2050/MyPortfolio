import { Badge } from "@/components/ui/badge";

type TimelineCardProps = {
  title: string;
  meta: string;
  context?: string;
  points: string[];
  tone?: "teal" | "amber" | "plum" | "coral";
};

export function TimelineCard({ title, meta, context, points, tone = "teal" }: TimelineCardProps) {
  return (
    <article className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm shadow-black/[0.03]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {context ? <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{context}</p> : null}
        </div>
        <Badge tone={tone} className="w-fit shrink-0">
          {meta}
        </Badge>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
        {points.map((point) => (
          <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-[var(--accent)]" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
