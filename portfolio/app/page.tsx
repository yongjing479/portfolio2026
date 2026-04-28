import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { WinsSection } from "@/components/wins-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

// app/page.tsx
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* GLOBAL VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 space-y-12 pb-20">
        <Navigation />
        <HeroSection />
        
        {/* Each section now becomes a liquid-glass card */}
        <div className="max-w-7xl mx-auto px-6 space-y-12">
           <JourneySection />
           <ProjectsSection />
           <WinsSection />
           <ContactSection />
        </div>
      </div>
    </main>
  );
}
