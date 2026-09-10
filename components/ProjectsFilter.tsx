"use client";

import { useState } from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio. Features dark mode, protected content, and clean design.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2026",
  },
  {
    title: "C Programming Notes",
    description:
      "Comprehensive and well-structured notes covering C programming fundamentals, pointers, memory management, and data structures.",
    category: "Notes",
    tags: ["C", "Education"],
    year: "2025",
  },
  {
    title: "Problem Solving Practice",
    description:
      "Collection of solved programming problems focused on improving logic, algorithms, and clean coding habits.",
    category: "Practice",
    tags: ["Algorithms", "C"],
    year: "2025",
  },
  {
    title: "Learning Tracker",
    description:
      "A simple system to track daily learning progress, milestones, and consistency over time.",
    category: "Tool",
    tags: ["Productivity"],
    year: "2026",
  },
];

const categories = ["All", "Web", "Notes", "Practice", "Tool"];

export default function ProjectsFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${active === cat
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-secondary"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {project.category}
              </span>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
