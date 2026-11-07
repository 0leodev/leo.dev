interface SectionHeaderProps {
  index: string
  title: string
  accent?: "pink" | "cyan"
}

export default function SectionHeader({ index, title, accent = "pink" }: SectionHeaderProps) {
  const accentColor =
    accent === "pink" ? "var(--color-neon-pink)" : "var(--color-neon-cyan)"
  const glow = accent === "pink" ? "glow-pink" : "glow-cyan"

  return (
    <div className="mb-10 flex items-center gap-4">
      <span
        className="font-mono text-sm text-muted"
        style={{ color: accentColor }}
      >
        {index}
      </span>
      <h2
        className={`font-mono text-2xl font-extrabold uppercase tracking-widest sm:text-3xl ${glow}`}
        style={{ color: accentColor }}
      >
        {title}
      </h2>
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, ${accentColor}, transparent)`,
        }}
      />
    </div>
  )
}
