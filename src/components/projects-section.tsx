"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Dictionary, Project } from "@/i18n/dictionaries/en";

function ProjectCard({ project, index }: Readonly<{ project: Project; index: number }>) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className={`bg-background group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden relative aspect-[4/3] bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[800ms] ease-out ${
            hovered ? "scale-[1.04]" : "scale-100"
          }`}
        />
      </div>
      <div className="p-6 md:p-8 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-1.5 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-1.5">
              {project.title}
            </h3>
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {project.category} / {project.location} / {project.year}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className={`h-4 w-4 text-muted-foreground/40 transition-all duration-300 mt-1.5 ${
            hovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
          }`}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export function ProjectsSection({
  content,
}: Readonly<{
  content: Dictionary["projectsSection"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
            {content.title}
          </h2>
        </div>
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
          ({String(content.items.length).padStart(2, "0")}) {content.countLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {content.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
