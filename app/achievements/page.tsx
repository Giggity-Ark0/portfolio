"use client";

import FadeIn from "@/components/FadeIn";

const achievements = [
  {
    title: "Started Learning Programming",
    description:
      "Began formal programming study with C and command-line tools, developing core concepts like variables, control flow, and debugging.",
    year: "2024",
    category: "Learning",
  },
  {
    title: "Mastered C Programming Fundamentals",
    description:
      "Solidified knowledge of C through practice and problem solving, gaining confidence in low-level programming, memory concepts, and structured programming techniques.",
    year: "2025",
    category: "Learning",
  },
  {
    title: "Explored Web Development",
    description:
      "Built simple websites and presentation pages using HTML, CSS, and basic JavaScript, including a dedicated site for a math presentation.",
    year: "2025",
    category: "Learning",
  },
  {
    title: "Built Personal Portfolio",
    description:
      "Designed and launched a modern personal website featuring dark mode, clean design, and a structured way to showcase projects and learning journey.",
    year: "2026",
    category: "Project",
  },
  {
    title: "Smart Environment Guardian System",
    description:
      "Designed and prototyped an Arduino-based system that monitors environmental parameters and responds with actuations — combining hardware and software skills.",
    year: "2026",
    category: "Hardware",
  },
  {
    title: "SRMS Project",
    description:
      "Contributed to the SRMS project, strengthening teamwork, project planning, and practical problem-solving abilities.",
    year: "2026",
    category: "Team Project",
  },
  {
    title: "C Programming Notes",
    description:
      "Created comprehensive, well-structured notes covering C fundamentals, pointers, memory management, and basic data structures.",
    year: "2026",
    category: "Education",
  },
  {
    title: "Exploring AI & Quantum Computing",
    description:
      "Actively studying artificial intelligence fundamentals and introductory quantum computing concepts while experimenting with small models and simulations.",
    year: "2026 – Present",
    category: "Research",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Achievements
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Key milestones and moments that mark my progress and growth.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <FadeIn key={index} delay={0.05 * index}>
              <div className="group rounded-2xl border bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5 h-full">
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
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
