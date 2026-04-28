import { Mail, Share2, Linkedin } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function ContactSection() {
  const contacts = [
    { icon: Mail, label: "EMAIL", href: "mailto:yjing479@gmail.com" },
    {
      icon: "/github.png",
      label: "GITHUB",
      href: "https://github.com/yongjing479",
      isCustom: true,
      iconSrc: "/github.png",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/yong-jing-ng",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <div className="liquid-glass rounded-[40px] p-8 md:p-12 shadow-2xl backdrop-blur-2xl py-20 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Let&apos;s work{" "}
              <span className="text-muted-foreground">together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-muted-foreground">
              Always open to discussing high-impact projects, design
              consultations.
            </p>

            <div className="mt-12 flex items-center justify-center gap-12">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex flex-col items-center gap-3 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    {contact.isCustom ? (
                      <img
                        src={contact.icon as string}
                        alt={contact.label}
                        className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <contact.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </div>
                  <span className="text-xs tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t border-border pt-8 text-center">
            <p className="text-sm text-foreground">
              Designed & Built by Yong Jing
            </p>
          </footer>
        </div>
      </ScrollReveal>
    </section>
  );
}
