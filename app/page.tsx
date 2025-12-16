"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { ChevronDown } from "lucide-react"
import SocialHeader from "./components/social-header"
import ExperienceSection from "./components/experience-section"
import GithubSection from "./components/github-section"
import SocialFooter from "./components/social-footer"

const HeroSection = memo(function HeroSection({
  isVisible,
  onScrollClick,
}: { isVisible: boolean; onScrollClick: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="hero-bg" />
      <div className="hero-blur" />

      <div className={`hero-content ${isVisible ? "hero-visible" : ""}`}>
        <h1 className="section-title">LEO.DEV</h1>
        <div className="hero-subtitle">
          <span className="hero-role">FRONTEND DEVELOPER</span>
        </div>
        <p className="hero-description">
          Precision-driven development. Strategic troubleshooting. Uncompromising quality standards.
        </p>
        <SocialHeader />
      </div>

      <button onClick={onScrollClick} className="hero-scroll-btn" aria-label="Scroll to next section">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
      </button>
    </section>
  )
})

export default function CoverLetter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true)
    })
    return () => cancelAnimationFrame(timer)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleHeroScroll = useCallback(() => {
    scrollToSection("experience")
  }, [])

  return (
    <div className="app-container">
      <HeroSection isVisible={isVisible} onScrollClick={handleHeroScroll} />
      <ExperienceSection />
      <GithubSection />
      <SocialFooter />
    </div>
  )
}
