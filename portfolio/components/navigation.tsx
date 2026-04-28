"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-liquid-glass backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-8">
          <Link href="#journey" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Timeline
          </Link>
          <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#wins" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Wins
          </Link>
        </div>
        
        <Button 
          asChild
          className=" rounded-full px-6 py-2.5 text-sm text-foreground border border-secondary bg-secondary transition-colors hover:bg-transparent hover:border-secondary hover:text-primary"
         
        >
          <Link href="#contact">Contact Me</Link>
        </Button>
      </nav>
    </header>
  )
}