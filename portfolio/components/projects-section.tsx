import { ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Carlo Rino UI/UX Redesign Project",
      tags: ["Figma"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lNO1JxZZ84LkoUvYNs3IaX5ICMpeKa.png",
      label: "NEURAL_OS",
      size: "large",
    },
    {
      title: "Task Orchestrator",
      tags: ["SaaS", "Branding"],
      image: null,
      label: "VOID FLOW",
      mockup: "phone",
      size: "small",
    },
    {
      title: "Web3 Portal",
      tags: ["Solidity", "Product"],
      image: null,
      label: "ETHEREAL",
      subtitle: "Kinetic Web",
      size: "small",
    },
    {
      title: "DisasterLens (Final Year Project)",
      tags: ["Figma", "React JS", "Python", "MongoDB", "Apache Kafka", "OpenAI", "AI"],
      image: null,
      label: "OS_01",
      size: "large",
    },
  ]

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Projects
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight">Selected Works</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Large Card - Carlo Rino */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <span className="text-xs text-muted-foreground">NEURAL_OS</span>
            <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-secondary">
              <div className="flex h-full items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-2 text-[8px] text-primary/60">
                  <div className="rounded border border-primary/30 p-2">synthesis</div>
                  <div className="rounded border border-primary/30 p-2">Onirico(Data)*</div>
                  <div className="rounded border border-primary/30 p-2">Data_ste</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Carlo Rino UI/UX Redesign Project
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">Figma</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </div>

          {/* Small Card - Task Orchestrator */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <span className="text-xs text-muted-foreground">VOID FLOW</span>
            <div className="mt-4 flex justify-center">
              <div className="relative h-48 w-24 rounded-2xl border-2 border-primary/30 bg-secondary p-2">
                <div className="h-full rounded-xl bg-card p-2">
                  <div className="text-[6px] text-muted-foreground">void</div>
                  <div className="mt-1 text-[8px] font-medium text-foreground">Flow</div>
                  <div className="mt-2 text-[5px] text-muted-foreground">Safe sync</div>
                  <div className="mt-4 flex flex-col gap-1">
                    <div className="h-1 w-3 rounded bg-primary/50" />
                    <div className="h-1 w-4 rounded bg-primary/30" />
                    <div className="h-1 w-2 rounded bg-primary/20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground">
                Task Orchestrator
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">SaaS</span>
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">Branding</span>
              </div>
            </div>
          </div>

          {/* Small Card - Web3 Portal */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <span className="text-xs text-muted-foreground">ETHEREAL</span>
            <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-secondary">
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="relative text-center">
                  <div className="text-2xl font-light tracking-widest text-foreground/80">Kinetic Web</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground">
                Web3 Portal
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">Solidity</span>
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">Product</span>
              </div>
            </div>
          </div>

          {/* Large Card - DisasterLens */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <span className="text-xs text-muted-foreground">OS_01</span>
            <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-secondary">
              <div className="flex h-full items-start p-4">
                <div className="space-y-2">
                  <div className="text-[10px] text-muted-foreground">GNL</div>
                  <div className="text-lg font-medium text-foreground">Design</div>
                  <div className="text-lg text-foreground/80">System</div>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      <span className="text-[8px] text-muted-foreground">Atomic Components</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      <span className="text-[8px] text-muted-foreground">Scalable Patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  DisasterLens (Final Year Project)
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Figma", "React JS", "Python", "MongoDB", "Apache Kafka", "OpenAI", "AI"].map((tag) => (
                    <span key={tag} className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
