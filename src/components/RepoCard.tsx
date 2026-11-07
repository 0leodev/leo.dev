import { Star, GitFork, Eye, CircleDot, ArrowUpRight, GitBranch, Scale } from "lucide-react"
import type { RepoData } from "../lib/github"
import { useReveal } from "../lib/useReveal"

function formatDate(iso: string | null): string {
  if (!iso) return "—"
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

function Stat({ icon: Icon, value, label }: { icon: typeof Star; value: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted" title={label}>
      <Icon className="h-3.5 w-3.5 text-[var(--color-neon-cyan)]" />
      <span className="font-mono text-foreground/90">{value}</span>
    </div>
  )
}

export default function RepoCard({ repo, index }: { repo: RepoData; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`card-blur group relative flex flex-col rounded-md p-6 transition-all duration-500 ${
        visible ? "boot-in" : "opacity-0"
      }`}
      style={visible ? { animationDelay: `${index * 0.08}s` } : undefined}
    >
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {repo.fullName.split("/")[0]}/
          </p>
          <h3 className="truncate font-mono text-lg font-extrabold uppercase tracking-wide text-[var(--color-neon-pink)] glow-pink">
            {repo.name}
          </h3>
        </div>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${repo.fullName} on GitHub`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border/70 text-muted transition-all hover:border-[var(--color-neon-pink)] hover:text-[var(--color-neon-pink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* description */}
      <p className="mt-3 min-h-[2.5rem] text-sm leading-relaxed text-muted">
        {repo.fallback
          ? "// repository metadata unavailable — click to view on github"
          : repo.description || "// no description provided"}
      </p>

      {/* languages */}
      {repo.languages.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {repo.languages.slice(0, 5).map((lang) => (
            <li
              key={lang}
              className="rounded-sm border border-[var(--color-neon-purple)]/40 bg-[var(--color-neon-purple)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/90"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}

      {/* topics */}
      {repo.topics.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((topic) => (
            <li key={topic} className="font-mono text-[10px] text-[var(--color-neon-cyan)]">
              #{topic}
            </li>
          ))}
        </ul>
      )}

      {/* stats */}
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/50 pt-4">
        <Stat icon={Star} value={repo.stars} label="Stars" />
        <Stat icon={GitFork} value={repo.forks} label="Forks" />
        <Stat icon={Eye} value={repo.watchers} label="Watchers" />
        <Stat icon={CircleDot} value={repo.openIssues} label="Open issues" />
      </div>

      {/* footer meta */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-muted/70">
        <span className="flex items-center gap-1">
          <GitBranch className="h-3 w-3" />
          {repo.defaultBranch}
        </span>
        {repo.license && (
          <span className="flex items-center gap-1">
            <Scale className="h-3 w-3" />
            {repo.license}
          </span>
        )}
        <span>pushed {formatDate(repo.pushedAt)}</span>
        {repo.isArchived && (
          <span className="text-[var(--color-neon-yellow)]">archived</span>
        )}
      </div>
    </div>
  )
}
