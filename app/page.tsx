import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Building, Learning &{" "}
            <span className="text-primary">Growing</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            A personal space where I share my journey, projects, achievements,
            and carefully crafted learning resources.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <Link
            href="/journey"
            className="group relative rounded-2xl border bg-card/50 p-7 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="mb-4 text-sm font-medium text-primary">01</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Journey
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Follow my learning path and key milestones over time.
            </p>
          </Link>

          <Link
            href="/achievements"
            className="group relative rounded-2xl border bg-card/50 p-7 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="mb-4 text-sm font-medium text-primary">02</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Achievements
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Notable progress and milestones I have reached so far.
            </p>
          </Link>

          <Link
            href="/projects"
            className="group relative rounded-2xl border bg-card/50 p-7 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-4 text-sm font-medium text-primary">03</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Projects
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Things I have built, practiced, and learned from.
            </p>
          </Link>

        </div>
      </section>
    </div>
  );
}
