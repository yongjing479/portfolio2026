import { ScrollReveal } from "./scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* 1. The Navigation must be here to stay over the video */}

      <video
        autoPlay
        loop
        muted
        playsInline
        /* Ensure z-0 is set so it stays behind everything */
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      <ScrollReveal>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-50 pb-40">
          <h1 
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            I am <em className="not-italic text-muted-foreground">Yong Jing</em>
          </h1>
          
          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            UI/UX Designer with a Software Engineering background, passionate about building thoughtful, user-centered digital experiences. 
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}