/** Small neutral chip used for tech stacks and entry types. */
export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill border border-line px-2.5 py-1 font-mono text-[11px] leading-none tracking-tight text-muted">
      {children}
    </span>
  );
}
