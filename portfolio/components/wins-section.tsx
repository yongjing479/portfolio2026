"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

interface Achievement {
  date: string;
  title: string;
  org: string;
  description: string;
  image?: string;
  details?: string;
}

export function WinsSection() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const achievements: Achievement[] = [
    {
      date: "Oct 2025",
      title: "First Runner Up - Youth Leadership Academy 2025",
      org: "McKinsey & Company X Teach for Malaysia",
      description:
        "Co-founded & led branding direction for Benih Bumi, a social enterprise transforming textile waste into plushies of Malaysia endangered animals in 3 months.",
      image: "/ylateam.jpeg",
      details:
        "As Chief Branding Officer, I collaborated with a team of 5 to build Benih Bumi from concept to launch in just 3 months.\n\n" +
        "• Branding & Creative: Led the complete visual identity, product design, and social media presence.\n" +
        "• Experiential Design: Designed the booth experience for the Klang River Festival to drive community engagement.\n" +
        "• Strategy: Developed marketing and product strategies to strengthen brand positioning.\n\n" +
        "IMPACT:\n" +
        "• Economic: Generated RM2,200 for B40 women tailors.\n" +
        "• Conservation: Donated RM1,000 to MareCet (marine conservation NGO).\n" +
        "• Storytelling: Delivered high-impact pitches focused on textile waste problem-framing.",
    },
    {
      date: "July 2024",
      title: "Top 10 Innovate Carlo Rino/ UPM UI/UX Competition 2024",
      org: "Universiti Putra Malaysia (UPM)",
      description:
        "Redesigned & Proposed new features on Carlo Rino eCommerce platform to create smart, stylish & surprise shopping experience.",
      image: "/carlorino.jpeg",
      details:
        "As UI/UX Design Lead, I spearheaded the platform's visual overhaul, focusing on reducing friction in the user journey and boosting product discoverability.\n\n" +
        "DESIGN & INNOVATION:\n" +
        '• Feature Initiation: Proposed high-clarity features including 360° product views and "Notify Me" restock alerts.\n' +
        "• Community Engagement: Conceptualized integrated community features to foster brand loyalty.\n" +
        "• Platform Excellence: Designed the core landing page with a focus on visual hierarchy and full mobile responsiveness.\n\n" +
        "TECHNICAL EXECUTION:\n" +
        "• User Analysis: Identified navigation friction points and redesigned user flows to optimize CTA placement.\n" +
        "• High-Fidelity Prototyping: Built interactive Figma prototypes showcasing improved purchase experiences.\n" +
        "• Result: Successfully achieved a Top 10 ranking among all participants in the competition.",
    },
    {
      date: "Jan 2024",
      title: "Top 3 (Best Pitch Award) - KitaHack 2024",
      org: "Google Developer Students Club KL",
      description: "Pitched an app solution that combat with food waste.",
      image: "/kitahack.jpeg",
      details:
        "Evolved the FreshRescue concept by identifying how Generative AI could bridge the gap between food waste and user cooking habits.\n\n" +
        "• Problem-Solution Fit: Analyzed user pain points to justify the integration of Gemini AI for accurate, surplus-based recipe generation.\n" +
        "• Product Vision: Defined how AI features would enhance the original marketplace model to provide more immediate value to the user.\n" +
        "• Impactful Storytelling: Focused the pitch on problem-framing and the strategic fit of the solution, securing the 'Best Pitch Award.'",
    },
    {
      date: "April 2024",
      title: "Head of Creation - UM Hackathon 2024",
      org: "Persatuan Komputer Universiti Malaya (PEKOM)",
      description:
        "Led a creative department of 10 to deliver end-to-end branding and visual experiences for one of UM's flagship tech events.",
      image: "/umh2024.jpeg",
      details:
        "Directly oversaw the visual identity and user experience for one of FSKTM's flagship tech events.\n\n" +
        "• Leadership: Managed a 10-person creative squad across stage, and merchandise departments.\n" +
        "• UX Audit: Led the UI/UX direction for the event website to ensure clear navigation for 500+ attendees.\n" +
        "• Branding: Maintained strict visual consistency across all physical print and digital touchpoints.",
    },
    {
      date: "Dec 2023",
      title: "Champion - DevHack 2023 (International Hackathon)",
      org: "Google Developer Groups Georgetown",
      description:
        "Led UI/UX design & pitched an app named FreshRescue which rescues visually imperfect foods & nearly expired food.",
      image: "/devhack.jpeg",
      details:
        "As the Lead Designer, I focused on creating an intuitive B2B2C marketplace that bridges the gap between surplus food suppliers and eco-conscious consumers.\n\n" +
        "DESIGN ARCHITECTURE:\n" +
        "• User Flow Optimization: Defined complex flows for multi-persona features, including 'Surprise Bag' purchases, seamless donation channels, and community engagement hubs.\n" +
        "• Intuitive Interface: Designed high-fidelity interfaces in Figma with a focus on accessibility, ensuring that users of all ages could navigate the 'Rescue' process easily.\n\n" +
        "PROJECT IMPACT:\n" +
        "• Global Competition: Outperformed 154 teams from 9 countries to secure the Champion title.\n" +
        "• Problem-Solving: Translated the abstract problem of food waste into a tangible, high-impact digital solution recognized for its scalability and user-centric approach.",
    },
  ];

  // Handle opening animation
  useEffect(() => {
    if (selectedAchievement && !isClosing) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [selectedAchievement, isClosing]);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setSelectedAchievement(null);
      setIsClosing(false);
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <section id="wins" className="px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Milestones
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              Wins & Achievements
            </h2>

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
        </ScrollReveal>
      </section>

      {/* Modal Popup */}
      {selectedAchievement && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isVisible
              ? "bg-black/60 backdrop-blur-md" 
              : "bg-black/0 backdrop-blur-none"
          }`}
          onClick={handleBackdropClick}
        >
          <div
            className={`relative flex flex-col max-h-[85vh] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out liquid-glass bg-black/80 backdrop-blur-xl ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* NEW SCROLLABLE INNER CONTAINER */}
            <div className="overflow-y-auto p-6 custom-scrollbar">
              <div
                className={`relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-white/5 border border-border transition-all duration-500 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {/* Close Button - floats on image */}
                <button
                  onClick={handleClose}
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:text-white hover:rotate-90 hover:scale-110 active:scale-95"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {selectedAchievement.image ? (
                  <Image
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <span className="text-sm">Competition Image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div
                  className={`transition-all duration-500 delay-150 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
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

                <div
                  className={`space-y-3 border-t border-border pt-4 transition-all duration-500 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    About
                  </h4>
                  {/* Updated text color to white/80 for better readability on blur */}
                  <p className="text-sm leading-relaxed text-white/80">
                    {selectedAchievement.description}
                  </p>
                </div>

                {selectedAchievement.details && (
                  <div
                    className={`space-y-3 border-t border-border pt-4 transition-all duration-500 delay-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Details
                    </h4>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-white/90">
                      {selectedAchievement.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
