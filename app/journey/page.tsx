import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "The learning journey and key milestones of Shanit Saha Arko.",
};

const journeyData = [
  {
    year: "2011",
    title: "First Computer",
    description:
      "I was five when my father brought home my first computer — a well-configured machine for its time. I mostly explored games (GTA: Vice City, Road Rash, The House of the Dead, NFS Underground 2, NFS Most Wanted, GTA: San Andreas) and learned the joy of interacting with a computer for the first time.",
  },
  {
    year: "2015",
    title: "First Practical Tools",
    description:
      "I started using productivity software like Microsoft Excel and Word, explored the internet more deeply, tried basic video editing, and learned file and storage management.",
  },
  {
    year: "2018",
    title: "Getting Technical",
    description:
      "My curiosity grew into a deeper interest in how computers work — I learned about hardware components, assembly and configuration, and did some basic terminal work.",
  },
  {
    year: "2024",
    title: "Started Learning Programming",
    description:
      "I began studying C, HTML, and command-line tools, learning core programming concepts and how to think like a developer.",
  },
  {
    year: "2024–2026",
    title: "Deep Dive into C",
    description:
      "I strengthened my foundation in C, practiced problem solving, and became more comfortable with low-level programming and debugging.",
  },
  {
    year: "2025–2026",
    title: "Explored Web Development",
    description:
      "I built simple websites and presentation pages, learning HTML, CSS, and basic JavaScript while creating a website for a math presentation.",
  },
  {
    year: "2026",
    title: "Building Real Projects",
    description:
      "I combined hardware and software skills to create projects like the Smart Environment Guardian System (Arduino) and the SRMS project, and launched my personal website.",
  },
  {
    year: "Present",
    title: "Continuing to Grow",
    description:
      "I’m diving deeper into artificial intelligence and quantum computing, expanding my skills across embedded systems, full-stack work, and creative tools while working on more projects.",
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
