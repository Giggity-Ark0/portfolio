import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Your Name
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/journey" className="transition-colors hover:text-foreground/80">
            Journey
          </Link>
          <Link href="/projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="/materials" className="transition-colors hover:text-foreground/80">
            Materials
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
