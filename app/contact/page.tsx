import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shanit Saha Arko.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Have a question or want to connect? Feel free to reach out.
          </p>

          <div className="space-y-6 text-left">
            {/* Email */}
            <div className="rounded-2xl border bg-card/50 p-6">
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">
                The best way to reach me directly.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:giggity_Ark0@proton.me">
                  giggity_Ark0@proton.me
                </a>
              </Button>
            </div>

            {/* GitHub */}
            <div className="rounded-2xl border bg-card/50 p-6">
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out my projects and code.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/Giggity-Ark0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Giggity-Ark0
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
