"use client";
import { useState } from "react";
import { Mail, Linkedin, Check } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yjing479@gmail.com";

  const contacts = [
    { icon: Mail, label: "EMAIL", href: `mailto:${emailAddress}` },
    {
      icon: "/github.png",
      label: "GITHUB",
      href: "https://github.com/yongjing479",
      isCustom: true,
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/yong-jing-ng",
    },
  ];

  const copyEmail = (e: React.MouseEvent) => {
    // Prevent the default mailto behavior if you only want it to copy
    e.preventDefault(); 
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Open to UI/UX internship and full-time opportunities.
              Happy to connect and chat about meaningful product work.
            </p>

            <div className="mt-12 flex items-center justify-center gap-12">
              {contacts.map((contact) => {
                const isEmail = contact.label === "EMAIL";
                
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    // Conditional click handler: copy email if it's the email link
                    onClick={isEmail ? copyEmail : undefined}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="group flex flex-col items-center gap-3 transition-colors cursor-pointer"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary bg-secondary transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10">
                      {isEmail && copied ? (
                        <Check className="h-5 w-5 text-green-500 animate-in zoom-in" />
                      ) : contact.isCustom ? (
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
                      {isEmail && copied ? "COPIED!" : contact.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-foreground">
              Designed & Built by Yong Jing
            </p>
          </footer>
        </div>
      </ScrollReveal>
    </section>
  );
}