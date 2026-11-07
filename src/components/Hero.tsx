import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { SOCIALS } from "../lib/socials";

const BOOT_LINES = [
  "> sudo pacman -S leo-dev",
  "> loading modules ......... 847 of them, pray",
  "> mounting packages ....... left-pad too",
  "> compiling contracts ..... 0 bugs (trust me)",
  "> cooking meal ............ don't open the oven",
  "> starting session ........ ready, unfortunately",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisibleLines(BOOT_LINES.length);
      setBooted(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setBooted(true), 150);
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative mx-auto flex min-h-[92vh] w-full max-w-5xl flex-col justify-center px-5 py-20 sm:px-8">
      {/* Boot terminal */}
      <div
        className={`card-blur mx-auto mb-10 w-full max-w-xl rounded-md p-4 font-mono text-xs transition-all duration-500 sm:text-sm ${
          booted ? "opacity-60" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div className="mb-3 flex items-center gap-2 border-b border-border/60 pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neon-pink)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neon-yellow)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neon-cyan)]" />
          <span className="ml-2 text-[10px] uppercase tracking-widest text-muted">
            ~/home/leo
          </span>
        </div>
        {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
          <p
            key={line}
            className={`whitespace-pre ${
              idx === 0 ? "text-[var(--color-neon-cyan)]" : "text-muted"
            }`}
          >
            {line}
          </p>
        ))}
        {!booted && <span className="cursor-blink text-[var(--color-neon-pink)]">█</span>}
      </div>

      {/* Identity */}
      <div className={booted ? "boot-in" : "opacity-0"}>

        <h1 className="flicker font-mono text-5xl font-extrabold leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl">
          <span className="text-muted/50">{"["}</span>
          <span className="glow-pink text-[var(--color-neon-pink)]">LEO</span>
          <span className="text-foreground">.DEV</span>
          <span className="text-muted/50">{"]"}</span>
        </h1>

        <p className="mt-4 text-lg font-bold uppercase tracking-[0.5em] text-[var(--color-neon-cyan)] glow-cyan sm:text-2xl">
          Developer
        </p>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {"// "}Cooking the future.
        </p>

        <div className="mt-8">
          <SocialIcons items={SOCIALS} />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`mt-16 ${booted ? "boot-in" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <a
          href="#experience"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted transition-colors hover:text-[var(--color-neon-pink)]"
        >
          <span className="text-[var(--color-neon-cyan)]">↓</span> scroll to explore
        </a>
      </div>
    </header>
  );
}
