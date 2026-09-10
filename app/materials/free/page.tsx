import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources",
  description: "Free downloadable learning materials.",
};

const freeResources = [
  {
    title: "Example Resource 1",
    description: "A sample free resource. Replace with real files later.",
    type: "PDF",
  },
  {
    title: "Example Resource 2",
    description: "Another sample free resource for download.",
    type: "ZIP",
  },
  {
    title: "Example Resource 3",
    description: "Additional free material placeholder.",
    type: "PDF",
  },
];

export default function FreeResourcesPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Free Resources</h1>
          <p className="text-muted-foreground mb-12">
            These materials are free to download for everyone.
          </p>

          <div className="space-y-4">
            {freeResources.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border bg-card p-5 hover:bg-accent/50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
