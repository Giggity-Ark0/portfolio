import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "My learning journey, progress, and growth over time.",
};

const journeyData = [
  {
    year: "2024",
    title: "Started Learning Programming",
    description:
      "Began my journey into programming. Focused on fundamentals and building a strong foundation.",
  },
  {
    year: "2025",
    title: "Deep Dive into C Programming",
    description:
      "Spent significant time mastering C. Created detailed notes and solved many problems to strengthen problem-solving skills.",
  },
  {
    year: "2025",
    title: "Explored Web Development",
    description:
      "Started learning modern web technologies including HTML, CSS, JavaScript, and later moved into React and Next.js.",
  },
  {
    year: "2026",
    title: "Building Real Projects",
    description:
      "Started creating full projects and this personal portfolio to showcase my work and learning progress.",
  },
  {
    year: "Present",
    title: "Continuing to Grow",
    description:
      "Currently focused on improving skills, building better projects, and sharing knowledge through notes and resources.",
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            My Journey
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A timeline of my learning path, key milestones, and continuous growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative border-l border-border ml-3 space-y-12">
            {journeyData.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <span className="text-sm font-medium text-primary">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
