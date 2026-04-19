"use client";

import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Carlo Rino UI/UX Redesign",
      description: "Strategic redesign of the Carlo Rino eCommerce platform to improve user journey, product discovery, and conversion rates.",
      tags: ["Figma", "E-commerce"],
      image: "/carlorino-cover.png",
      label: "CASE STUDY",
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
      title: "Benih Bumi - Social Enterprise",
      description: "A social enterprise transforming textile waste into marine-themed plushies to support B40 women tailors and marine conservation.",
      tags: ["Branding", "Product Design", "Social Impact"],
      image: "/benihbumi-cover.png",
      label: "CHIEF BRANDING OFFICER",
      link: "https://www.google.com",
    },
    {
      title: "FreshRescue",
      description: "A platform that rescues imperfect produce and near-expiry food, connecting suppliers to urban consumers.",
      tags: ["Figma", "React JS"],
      image: "/freshrescue-cover.png",
      label: "UI/UX DESIGN",
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
              className="group relative flex flex-col rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            >
              {/* Header: Label */}
              <div className="mb-4">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-white/5 px-2 py-1 rounded">
                  {project.label}
                </span>
              </div>

              {/* Visual Content Link */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative aspect-video overflow-hidden rounded-xl bg-secondary block">
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
              </a>

              {/* Title & Action Row */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-foreground transition-colors leading-tight group-hover:text-primary ">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 shrink-0">
                  {project.link?.includes("github.com") && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="group/github flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold text-foreground transition-all hover:bg-primary hover:text-white"
                    >
                      <div className="relative h-3.5 w-3.5">
                        <Image src="/github.png" alt="GitHub" fill className="object-contain transition-all group-hover/github:invert" />
                      </div>
                      GITHUB
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a 
                      href={project.figmaUrl} 
                      target="_blank" 
                      className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold text-foreground transition-all hover:bg-primary hover:text-white"
                    >
                      <div className="relative h-3.5 w-3.5">
                        <Image src="/figma.png" alt="Figma" fill className="object-contain" />
                      </div>
                      FIGMA
                    </a>
                  )}
                </div>
              </div>

              {/* Tags Section (Now directly under Title) */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-md bg-white/10 border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-foreground/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description Section (Pushed to bottom) */}
              <div className="mt-4 flex-grow">
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}