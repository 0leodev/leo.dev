import SocialIcons from "./SocialIcons";
import { FOOTER_SOCIALS } from "../lib/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 px-5 py-16 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <div>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.4em] text-muted">
            {"// let's build something"}
          </p>
        </div>

        <SocialIcons items={FOOTER_SOCIALS} className="justify-center" />

        <div className="mt-4 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted/60">
          <p>
            <span className="text-[var(--color-neon-cyan)]">$</span> echo "built with astro +
            typescript + react + tailwind"
          </p>
          <p>
            {year}
            <span className="cursor-blink ml-1 text-[var(--color-neon-pink)]">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
