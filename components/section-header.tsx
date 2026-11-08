export default function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 font-mono text-xs text-soft" aria-hidden="true">
      <span className="text-signal">{index}</span>
      <span className="uppercase tracking-[0.08em]">{label}</span>
      <div className="flex-1 h-px bg-ink/10" />
    </div>
  )
}
