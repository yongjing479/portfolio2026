import { ScrollReveal } from "./scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative h-[95vh] w-full flex flex-col overflow-hidden rounded-b-[48px]">
      

      <ScrollReveal>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-50 pb-40">
          <h1 
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            I am <em className="not-italic text-primary">Yong Jing</em>
          </h1>
          
          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            Software Engineering graduate from Universiti Malaya with a strong interest in UI/UX design and user-centered digital experiences.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}