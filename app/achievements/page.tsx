import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Key milestones, accomplishments, and recognitions along my journey.",
};

const achievements = [
  {
    title: "Mastered C Programming Fundamentals",
    description:
      "Completed an intensive self-study of C programming, including pointers, memory management, and data structures. Created comprehensive personal notes.",
    year: "2025",
    category: "Learning",
  },
  {
    title: "Built Personal Portfolio",
    description:
      "Designed and developed a modern, full-featured personal portfolio using Next.js, TypeScript, and Tailwind CSS with authentication and protected content.",
    year: "2026",
    category: "Project",
  },
  {
    title: "Consistent Daily Practice",
    description:
      "Maintained a strong habit of daily coding and problem-solving to build discipline and improve problem-solving speed.",
    year: "2025 – Present",
    category: "Habit",
  },
  {
    title: "Created Structured Learning Notes",
    description:
      "Organized detailed, high-quality notes on C programming that will later be shared as protected educational resources.",
    year: "2025",
    category: "Knowledge Sharing",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Achievements
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Key milestones and moments that mark my progress and growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {item.category}
                </span>
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
