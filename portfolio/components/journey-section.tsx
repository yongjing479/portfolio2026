"use client";

import { ScrollReveal } from "./scroll-reveal";

export function JourneySection() {
  const techStack = [
    { name: "Figma", category: "Design" },
    { name: "React", category: "Frontend" },
    { name: "Javascript", category: "Language" },
    { name: "HTML & CSS", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Golang", category: "Backend" },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Grab Malaysia",
      period: "July 2024 - Jan 2025",
      points: [
        "Designed and implemented a simplified one-page UI for key workflows, organizing complex information for better clarity and faster user comprehension",
        "Developed and enhanced internal web portals using React JS, Tailwind CSS, Ant Design, and Golang",
        "Collaborated in Agile sprints with cross-functional teams, participating in sprint planning, code reviews, and CI/CD deployments",
        "Built and integrated RESTful APIs, and implemented CRUD operations",
        "Wrote unit tests (70%+ coverage) and debugged production issues using Kibana",
      ],
    },
    {
      title: "Bachelor of Computer Science",
      company: "Universiti Malaya",
      period: "Oct 2022 - March 2026",
      cgpa: "3.85 / 4.00",
      description:
        "Majoring in Software Engineering & graduated with First Class Honors.",
    },
  ];

  return (
    <section id="journey" className="liquid-glass rounded-[40px] p-8 md:p-12 shadow-2xl backdrop-blur-md">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
            {/* Left Column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Timeline
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">
                My Journey
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Building scalable digital infrastructures and high-fidelity user
                interfaces across diverse ecosystems.
              </p>

              {/* Tech Stack Card */}
              <div className="mt-8 rounded-lg border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Core Tech Stack
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {techStack.map((tech) => (
                    <span key={tech.name} className="text-sm text-foreground">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="relative">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pb-12 pl-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[3px] top-4 h-full w-px bg-border" />
                  )}

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {exp.points && (
                    <ul className="mt-4 list-disc pl-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.points.map((point, i) => (
                        <li key={i} className="mb-2">
                          {point.includes("React JS") ||
                          point.includes("Tailwind CSS") ? (
                            <span>
                              {point
                                .split(
                                  /(React JS|Tailwind CSS|Ant Design|Golang)/g,
                                )
                                .map((part, j) =>
                                  [
                                    "React JS",
                                    "Tailwind CSS",
                                    "Ant Design",
                                    "Golang",
                                  ].includes(part) ? (
                                    <span
                                      key={j}
                                      className="font-medium text-foreground"
                                    >
                                      {part}
                                    </span>
                                  ) : (
                                    <span key={j}>{part}</span>
                                  ),
                                )}
                            </span>
                          ) : (
                            point
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.cgpa && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-primary">
                        CGPA {exp.cgpa}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
