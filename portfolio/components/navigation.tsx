"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link 
            href="#journey" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Timeline
          </Link>
          <Link 
            href="#projects" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link 
            href="#wins" 
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Wins
          </Link>
        </div>
        <Button 
          asChild
          className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
        >
          <Link href="#contact">Hire Me</Link>
        </Button>
      </nav>
    </header>
  )
}
