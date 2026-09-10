import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protected Notes",
  description: "Login-required learning notes.",
};

export default function ProtectedNotesPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Protected Notes</h1>
          <p className="text-muted-foreground mb-12">
            This section will later require login. For now it is open while we rebuild authentication properly.
          </p>

          <div className="rounded-xl border bg-card p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Your protected content (C Programming Notes, etc.) will appear here later.
              <br /><br />
              We will add secure view-only access in a future phase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
