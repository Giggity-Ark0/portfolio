import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my background, and what I do.",
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            A short powerful introduction about who you are goes here.
            Example: I’m a developer passionate about building clean, useful,
            and meaningful digital experiences.
          </p>

          <div className="space-y-14">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Write 2–4 paragraphs about yourself here. Talk about your
                  background, what drives you, and how you got into programming
                  or your field.
                </p>
                <p>
                  You can also mention your current focus, what you’re learning,
                  or what kind of work you enjoy the most.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                Describe the kind of work you do or want to do.
                Example: I build web applications with modern tools,
                focus on clean code, and care about user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-5">Skills & Tools</h2>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "C Programming",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
              <p className="text-muted-foreground leading-relaxed">
                Share a bit about your interests outside of programming —
                books, music, sports, learning, or anything that makes you human.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
