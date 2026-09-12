"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm font-medium text-primary/80 mb-5 tracking-wider uppercase">
              Computer Science & Engineering
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Building systems<br />
              that work in the<br />
              real world.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              I’m Shanit Saha Arko — focused on programming, artificial intelligence, 
              quantum computing, and turning ideas into working projects across software and hardware.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-4 pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <FadeIn delay={0.1} className="md:col-span-2">
            <Link
              href="/projects"
              className="block h-full group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 md:p-10 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="text-sm text-primary/70 mb-4">Projects</div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Hardware, software & experiments
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                From Arduino systems and C projects to modern web applications — a collection of things I’ve built and learned from.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href="/journey"
              className="block h-full group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="text-sm text-primary/70 mb-4">Journey</div>
              <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                From first computer to real systems
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A timeline of curiosity, learning, and continuous growth.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link
              href="/achievements"
              className="block h-full group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="text-sm text-primary/70 mb-4">Achievements</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Milestones
              </h2>
              <p className="text-sm text-muted-foreground">
                Key moments that shaped my progress.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Link
              href="/materials"
              className="block h-full group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="text-sm text-primary/70 mb-4">Materials</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Learning Resources
              </h2>
              <p className="text-sm text-muted-foreground">
                Free and protected notes.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.35}>
            <Link
              href="/contact"
              className="block h-full group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="text-sm text-primary/70 mb-4">Contact</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Get in touch
              </h2>
              <p className="text-sm text-muted-foreground">
                Let’s connect and collaborate.
              </p>
            </Link>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
