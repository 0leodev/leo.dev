import { memo } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="focus:outline-none"
    >
      {Icon === 'X' ? (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ) : Icon === 'Telegram' ? (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.01-14.2c.309-1.239-.473-1.8-1.273-1.458z" />
        </svg>
      ) : (
        <Icon className="social-icon" />
      )}
    </a>
  )
})

export default memo(function SocialFooter() {
  const socialLinks = [
    { href: 'https://github.com/0leodev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/leonardo-jim%C3%A9nez-411996194', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/0xleo_dev', icon: 'X', label: 'X (Twitter)' },
    { href: 'https://t.me/leojim2002', icon: 'Telegram', label: 'Telegram' },
  ]

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h3 className="footer-title">LEO.DEV</h3>
        <p className="footer-subtitle">PRECISION • INNOVATION • EXCELLENCE</p>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <div className="contact-info">
          <a
            className="contact-item"
            href="https://mail.google.com/mail/u/0/?fs=1&to=leojimdev@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to leojimdev@gmail.com"
          >
            <Mail className="contact-icon" />
            <span>leojimdev@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  )
})
