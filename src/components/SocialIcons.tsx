import { Github, Linkedin, Send, Mail } from "lucide-react";
import type { ComponentType } from "react";

interface SocialItem {
  label: string;
  href: string;
  handle: string;
}

/** Inline X (Twitter) logo — lucide has no dedicated brand icon. */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: XIcon,
  Telegram: Send,
  Mail: Mail,
};

interface SocialIconsProps {
  items: SocialItem[];
  className?: string;
}

export default function SocialIcons({ items, className = "" }: SocialIconsProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-7 ${className}`}>
      {items.map((item) => {
        const Icon = ICON_MAP[item.label] ?? Github;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.handle}
              className="group relative text-muted transition-colors duration-200 hover:text-[var(--color-neon-pink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
            >
              <Icon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-widest text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.handle}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
