"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Me
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              I’m Shanit Saha Arko, a Computer Science and Engineering student passionate about programming and developing practical solutions. I’m also deeply interested in artificial intelligence, quantum computing, and creating useful projects.
            </p>
          </FadeIn>

          <div className="space-y-14">
            <FadeIn delay={0.15}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started learning programming with C and command-line tools, and my curiosity quickly expanded into AI, quantum computing concepts, and physics. My studies combine coursework with hands-on projects — from Arduino systems to websites and multimedia — so I can turn ideas into working prototypes.
                  </p>
                  <p>
                    I read widely about scientific history and achievements, practice critical thinking, and write in both English and Bangla to communicate technical ideas clearly.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Currently I’m focused on developing projects that blend software, hardware, and design. Recent work includes the SRMS project, a website for a math presentation, my personal website, and a Smart Environment Guardian System built with Arduino. I experiment with AI models, explore quantum computing theories, and create visual content to explain technical concepts.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <h2 className="text-2xl font-semibold mb-5">Skills & Tools</h2>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "C",
                    "Git",
                    "Terminal",
                    "WSL",
                    "Arduino",
                    "HTML/CSS",
                    "JavaScript",
                    "Photoshop",
                    "DaVinci Resolve",
                    "AI & ML Foundations",
                    "Quantum Computing (Intro)",
                    "Technical Writing",
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
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy reading, learning new things, and exploring the history of science. I also like sports and games — video games, F1, football, and basketball — and I enjoy combining creative design with technical work. I’m always excited to collaborate on projects that mix hardware, software, and storytelling.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
