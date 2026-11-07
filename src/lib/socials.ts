import { Github, Linkedin, Send, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
  /** short command-style handle shown in terminal contexts */
  handle: string
}

/** X (Twitter) has no dedicated lucide icon; provided as inline component in SocialIcons. */
export const SOCIALS: Omit<SocialLink, "icon">[] = [
  { label: "GitHub", href: "https://github.com/0leodev", handle: "gh:0leodev" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardo-jiménez-411996194/",
    handle: "in:leonardo-jimenez",
  },
  { label: "X", href: "https://x.com/0xleo_dev", handle: "x:0xleo_dev" },
  { label: "Telegram", href: "https://t.me/leojim2002", handle: "tg:leojim2002" },
]

export const FOOTER_SOCIALS: Omit<SocialLink, "icon">[] = [
  ...SOCIALS,
  {
    label: "Mail",
    href: "https://mail.google.com/mail/u/0/?fs=1&to=leojimdev@gmail.com&tf=cm",
    handle: "mail:leojimdev",
  },
]

export const ICONS = { Github, Linkedin, Send, Mail }
