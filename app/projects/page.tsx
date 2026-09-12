"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive personal website built to showcase my projects and writing. Features dark mode, protected content, clean design, and performance-focused code.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2026",
  },
  {
    title: "Smart Environment Guardian System",
    description:
      "An Arduino-based prototype that monitors environmental parameters (temperature, humidity, light) and triggers actuators or alerts when thresholds are crossed. Combines sensor interfacing, control logic, and data logging.",
    category: "Hardware",
    tags: ["Arduino", "Embedded", "C"],
    year: "2026",
  },
  {
    title: "SRMS Project",
    description:
      "A collaborative project built primarily with C and terminal tools. Contributed to planning, implementation, and testing while strengthening teamwork and problem-solving skills.",
    category: "Team",
    tags: ["C", "Terminal"],
    year: "2026",
  },
  {
    title: "Math Presentation Website",
    description:
      "A focused website created to present mathematical concepts and visualizations for a class presentation, emphasizing clarity, interactive examples, and accessible layout.",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2025",
  },
  {
    title: "C Programming Notes",
    description:
      "A thorough, organized collection of notes covering C fundamentals, pointers, memory management, and basic data structures — intended as a study resource and quick reference.",
    category: "Education",
    tags: ["C", "Documentation"],
    year: "2026",
  },
  {
    title: "Problem Solving Collection",
    description:
      "A curated set of solved programming problems used to improve logic, algorithmic thinking, and coding style; includes explanations and clean implementations.",
    category: "Practice",
    tags: ["Algorithms", "Data Structures"],
    year: "2025–2026",
  },
  {
    title: "Learning Tracker",
    description:
      "A small app to log daily learning activities, visualize streaks, and track milestones to maintain consistent progress over time.",
    category: "Tool",
    tags: ["Productivity", "JavaScript"],
    year: "2026",
  },
];

const categories = ["All", "Web", "Hardware", "Team", "Education", "Practice", "Tool"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Projects
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of things I have built, learned from, and worked on.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:bg-secondary border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          {filtered.map((project, index) => (
            <FadeIn key={project.title} delay={0.05 * index}>
              <div className="group rounded-2xl border bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
