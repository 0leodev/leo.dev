import { memo } from "react"
import { Github, Linkedin, MessageCircle, Phone, Globe } from "lucide-react"

const SocialLink = memo(function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: any
  label: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
      {Icon === "X" ? (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ) : (
        <Icon className="social-icon" />
      )}
    </a>
  )
})

export default memo(function SocialFooter() {
  const socialLinks = [
    { href: "https://github.com/0leodev", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/leonardo-jim%C3%A9nez-411996194/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/0xleo_dev", icon: "X", label: "X (Twitter)" },
    { href: "https://t.me/leojim2002", icon: MessageCircle, label: "Telegram" },
  ]

  return (
    <footer className="footer-section">
      <div className="footer-bg" />
      <div className="footer-container">
        <h3 className="footer-title">LEO.DEV</h3>
        <p className="footer-subtitle">PRECISION • INNOVATION • EXCELLENCE</p>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span>+58 4121508152</span>
          </div>
          <div className="contact-item">
            <Globe className="contact-icon" />
            <span>ENGLISH • SPANISH</span>
          </div>
        </div>
      </div>
    </footer>
  )
})
