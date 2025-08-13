"use client"

import { useState, useEffect, useCallback, memo } from "react"
import dynamic from "next/dynamic"
import { ChevronDown } from "lucide-react"

const ExperienceSection = dynamic(() => import("./components/experience-section"), {
  loading: () => <div className="h-96 bg-black/50 animate-pulse" />,
})

const PortfolioSection = dynamic(() => import("./components/portfolio-section"), {
  loading: () => <div className="h-96 bg-black/50 animate-pulse" />,
})

const SocialFooter = dynamic(() => import("./components/social-footer"), {
  loading: () => <div className="h-32 bg-black/50 animate-pulse" />,
})

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
          <span className="hero-separator">DESIGNER</span>
        </div>
        <p className="hero-description">
          Precision-driven development. Strategic problem solving. Uncompromising quality standards.
        </p>
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
      <PortfolioSection />
      <SocialFooter />
    </div>
  )
}
