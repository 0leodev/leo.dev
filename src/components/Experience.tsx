import { ChevronRight } from "lucide-react"
import SectionHeader from "./SectionHeader"
import { EXPERIENCE, type ExperienceItem } from "../lib/experience"
import { useReveal } from "../lib/useReveal"

function ExperienceCard({ item, line }: { item: ExperienceItem; line: number }) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`card-blur group relative rounded-md p-6 transition-all duration-500 sm:p-7 ${
        visible ? "boot-in" : "opacity-0"
      }`}
      style={visible ? { animationDelay: `${line * 0.08}s` } : undefined}
    >
      {/* line-number gutter, LazyVim style */}
      <span className="pointer-events-none absolute left-2 top-6 select-none font-mono text-xs text-muted/40">
        {String(line + 1).padStart(2, "0")}
      </span>

      <div className="pl-5">
        <h3 className="flex items-start gap-2 font-mono text-lg font-extrabold uppercase tracking-wide text-foreground sm:text-xl">
          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[var(--color-neon-pink)]" />
          {item.title}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-[var(--color-neon-cyan)]/30 bg-[var(--color-neon-cyan)]/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-neon-cyan)] sm:text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>

        {item.bullets && (
          <ul className="mt-4 space-y-1.5">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 font-mono text-xs text-foreground/80">
                <span className="mt-0.5 text-[var(--color-neon-pink)]">▹</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {item.status && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-sm border border-[var(--color-neon-yellow)]/40 bg-[var(--color-neon-yellow)]/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-[var(--color-neon-yellow)]">
            <span className="cursor-blink">●</span>
            {item.status}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeader index="01" title="Experience" accent="pink" />
      <div className="grid gap-5">
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard key={item.title} item={item} line={i} />
        ))}
      </div>
    </section>
  )
}
