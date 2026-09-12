"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

export default function MaterialsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Materials
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Free resources and protected learning notes.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          <FadeIn delay={0.15}>
            <div className="group h-full rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-6">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  Public
                </span>
                <h2 className="text-2xl font-semibold mb-3">Free Resources</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Downloadable files and materials available to everyone. No login required.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/materials/free">Browse Free Resources</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="group h-full rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-6">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-4">
                  Protected
                </span>
                <h2 className="text-2xl font-semibold mb-3">Protected Notes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed notes available only to signed-in users. View-only access with protection.
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/materials/protected">View Protected Notes</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
