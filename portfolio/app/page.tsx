import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { WinsSection } from "@/components/wins-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <JourneySection />
      <ProjectsSection />
      <WinsSection />
      <ContactSection />
    </main>
  )
}
