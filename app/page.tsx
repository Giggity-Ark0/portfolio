import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">
            Computer Science & Engineering Student
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
            Building practical systems<br />
            with code, hardware & ideas.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            I’m Shanit Saha Arko — focused on programming, artificial intelligence, 
            quantum computing, and turning concepts into working projects. 
            From low-level C and Arduino systems to modern web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Programming",
                desc: "Strong foundation in C with growing full-stack skills",
              },
              {
                title: "Embedded Systems",
                desc: "Arduino-based projects combining sensors and logic",
              },
              {
                title: "AI & Quantum",
                desc: "Actively exploring modern AI and quantum concepts",
              },
              {
                title: "Building",
                desc: "Turning ideas into real, working prototypes",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-card/40 p-5 hover:bg-card/70 transition-colors"
              >
                <h3 className="font-semibold mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 pb-28">
        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-3">
          <Link
            href="/journey"
            className="group rounded-2xl border bg-card/40 p-6 hover:bg-card transition-all hover:-translate-y-0.5"
          >
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
              Journey
            </h3>
            <p className="text-sm text-muted-foreground">
              From first computer to real projects
            </p>
          </Link>

          <Link
            href="/achievements"
            className="group rounded-2xl border bg-card/40 p-6 hover:bg-card transition-all hover:-translate-y-0.5"
          >
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
              Achievements
            </h3>
            <p className="text-sm text-muted-foreground">
              Key milestones and progress
            </p>
          </Link>

          <Link
            href="/materials"
            className="group rounded-2xl border bg-card/40 p-6 hover:bg-card transition-all hover:-translate-y-0.5"
          >
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
              Materials
            </h3>
            <p className="text-sm text-muted-foreground">
              Free and protected learning resources
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
