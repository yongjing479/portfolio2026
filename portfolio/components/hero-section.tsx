export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="block text-primary">Yong Jing</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A software engineering fresh graduate who interested in UI/UX Design & passionate to solve real world problem using technologies.
        </p>
      </div>
    </section>
  )
}
