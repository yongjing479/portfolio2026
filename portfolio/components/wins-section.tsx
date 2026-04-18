"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface Achievement {
  date: string
  title: string
  org: string
  description: string
  image?: string
  details?: string
}

export function WinsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const achievements: Achievement[] = [
    {
      date: "Oct 2025",
      title: "First Runner Up - Youth Leadership Academy 2025",
      org: "McKinsey & Company X Teach for Malaysia",
      description: "Co-founded & led branding direction for Benih Bumi, a social enterprise transforming textile waste into plushies of Malaysia endangered animals in 3 months.",
      image: "/images/achievements/youth-leadership.jpg",
      details: "During this intensive 3-month program, I collaborated with a diverse team of aspiring leaders to develop Benih Bumi from concept to execution. My role focused on establishing the brand identity, creating visual assets, and ensuring consistent messaging across all touchpoints. The project successfully raised awareness about textile waste while celebrating Malaysia's endangered wildlife."
    },
    {
      date: "July 2024",
      title: "Top 10 Innovate Carlo Rino/ UPM UI/UX Competition 2024",
      org: "Universiti Putra Malaysia (UPM)",
      description: "Redesigned & Proposed new features on Carlo Rino eCommerce platform to create smart, stylish & surprise shopping experience.",
      image: "/images/achievements/carlo-rino.jpg",
      details: "Conducted comprehensive user research and competitive analysis to identify pain points in the existing Carlo Rino shopping experience. Proposed innovative features including personalized style recommendations, AR try-on functionality, and a gamified loyalty program that resonated with the judges."
    },
    {
      date: "Jan 2024",
      title: "Top 3 (Best Pitch Award) - KitaHack 2024",
      org: "Google Developer Students Club KL",
      description: "Pitched an app solution that combat with food waste.",
      image: "/images/achievements/kitahack.jpg",
      details: "Developed and pitched a mobile application connecting consumers with restaurants and grocery stores to purchase surplus food at discounted prices. The solution addressed food waste at multiple points in the supply chain while making quality food more accessible to budget-conscious consumers."
    },
    {
      date: "April 2024",
      title: "Head of Creation - UM Hackathon 2024",
      org: "Persatuan Komputer Universiti Malaya (PEKOM)",
      description: "Led a team of 10, overseeing all visual, stage & creative materials including provide guidance on UI/UX Design for the event website.",
      image: "/images/achievements/um-hackathon.jpg",
      details: "Managed end-to-end creative direction for one of Malaysia's largest student hackathons. Responsibilities included designing the event branding, coordinating with vendors for physical materials, mentoring junior designers, and ensuring the event website delivered an excellent user experience for over 500 participants."
    },
    {
      date: "Dec 2023",
      title: "Champion - DevHack 2023 (International Hackathon)",
      org: "Google Developer Groups Georgetown",
      description: "Led UI/UX design & pitched an app named FreshRescue which rescues visually imperfect foods & nearly expired food.",
      image: "/images/achievements/devhack.jpg",
      details: "Won first place among international teams by designing and presenting FreshRescue, an app that connects consumers with imperfect but perfectly edible produce. Created the complete design system, user flows, and high-fidelity prototypes while also delivering the winning pitch presentation."
    },
  ]

  // Handle opening animation
  useEffect(() => {
    if (selectedAchievement && !isClosing) {
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    }
  }, [selectedAchievement, isClosing])

  const handleClose = () => {
    setIsClosing(true)
    setIsVisible(false)
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setSelectedAchievement(null)
      setIsClosing(false)
    }, 300)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      <section id="wins" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Milestones
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Wins & Achievements</h2>

          <div className="mt-12 space-y-0">
            {achievements.map((achievement, index) => (
              <button
                key={index}
                onClick={() => setSelectedAchievement(achievement)}
                className="group grid w-full cursor-pointer border-t border-border py-8 text-left transition-all duration-300 ease-out hover:bg-white/5 hover:scale-[1.01] md:grid-cols-[120px_1fr] rounded-lg px-4 -mx-4"
              >
                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {achievement.date}
                </span>
                <div className="mt-2 md:mt-0">
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary transition-colors duration-300">
                    by {achievement.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                    {achievement.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedAchievement && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isVisible ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'
          }`}
          onClick={handleBackdropClick}
        >
          <div 
            className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl transition-all duration-300 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Placeholder */}
            <div className={`relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-white/5 border border-border transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {/* Close Button - floats on image */}
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:text-white hover:rotate-90 hover:scale-110 active:scale-95"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <span className="text-sm">Competition Image</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className={`transition-all duration-500 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <span className="text-xs font-medium text-primary">
                  {selectedAchievement.date}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-foreground">
                  {selectedAchievement.title}
                </h3>
                <p className="mt-1 text-sm text-primary">
                  by {selectedAchievement.org}
                </p>
              </div>

              <div className={`space-y-3 border-t border-border pt-4 transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  About
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedAchievement.description}
                </p>
              </div>

              {selectedAchievement.details && (
                <div className={`space-y-3 border-t border-border pt-4 transition-all duration-500 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Details
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground">
                    {selectedAchievement.details}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
