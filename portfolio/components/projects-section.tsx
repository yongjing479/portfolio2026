"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Benih Bumi - Social Enterprise",
      description: "A social enterprise transforming textile waste into marine-themed plushies to support B40 women tailors and marine conservation.",
      tags: ["Branding", "Product Design", "Social Impact"],
      image: "/benihbumi-cover.png",
      label: "CHIEF BRANDING OFFICER",
      link: "https://www.google.com",
    },
    {
      title: "Carlo Rino UI/UX Redesign",
      description: "Strategic redesign of the Carlo Rino eCommerce platform to improve user journey, product discovery, and conversion rates.",
      tags: ["Figma", "E-commerce"],
      image: "/carlorino-cover.png",
      label: "UI/UX DESIGN",
      link: "https://drive.google.com/file/d/1KhJGCv7ZDE5e_y_r-Q28kYSUFd0aT22J/view?usp=sharing",
      figmaUrl: "https://www.figma.com/design/PFUykv7sLMWPp7SD4Z2AAS/FourFuture---Carlo-Rino-UIUX--Copy-?node-id=0-1&t=PpcAgqt0gSbYWGlu-1",
    },
    {
      title: "DisasterLens",
      description: "AI-powered disaster management system that leverages social media data and Generative AI (GenAI) for real-time disaster monitoring in Malaysia.",
      tags: ["React JS", "Tailwind CSS", "Python", "MongoDB", "OpenAI", "Kafka", "Docker", "Leaflet"],
      image: "/disasterlens-cover.png", 
      video: "/demo.gif",
      label: "FINAL YEAR PROJECT",
      link: "https://github.com/rachelfong0320/DisasterLens",
    },
    {
      title: "Task Orchestrator",
      description: "A SaaS productivity tool designed for high-performance teams to manage complex workflows and task orchestration.",
      tags: ["SaaS", "Branding"],
      image: null,
      label: "VOID FLOW",
      link: "#",
    }
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Projects</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Selected Works</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Header: Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono tracking-wider text-secondary uppercase px-2 py-1 rounded">
                  {project.label}
                </span>
              </div>

              {/* Main Link Wrapper */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
                {/* Visual Content */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary">
                  {project.video ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image || "/placeholder.png"}
                        alt={project.title}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={project.video}
                        alt={`${project.title} demo`}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </div>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs italic text-muted-foreground">Coming Soon</div>
                  )}
                </div>

                {/* Title & Description */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  )}
                </div>
              </a>

             {/* Footer: Tags and Buttons on the same line */}
              <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/50 pt-3">
                
                {/* Tags (Left Aligned) */}
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-md px-2 py-0.5 text-[10px] font-semibold text-foreground/90 border-2 bg-secondary transition-colors group-hover:border-primary group-hover:bg-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons (Right Aligned) */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.link?.includes("github.com") && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold text-foreground transition-all hover:bg-primary hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="relative h-3.5 w-3.5">
                        <Image src="/github.png" alt="GitHub" fill className="object-contain transition-all" />
                      </div>
                      GITHUB
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a 
                      href={project.figmaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold text-foreground transition-all hover:bg-primary hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                     <div className="relative h-3.5 w-3.5">
                        <Image src="/figma.png" alt="GitHub" fill className="object-contain transition-all" />
                      </div>
                      FIGMA
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}