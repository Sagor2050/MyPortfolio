type MetricProps = {
  label: string;
  value: string;
};

export function Metric({ label, value }: MetricProps) {
  return (
    <div className="border-l border-[var(--border)] pl-4">
      <p className="text-2xl font-semibold leading-none">{value}</p>
      <p className="mt-2 text-sm leading-5 text-[var(--muted)]">{label}</p>
    </div>
  );
}
