"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function ApproachSection({
  content,
}: Readonly<{
  content: Dictionary["approachSection"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="approach" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-muted/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-foreground leading-[1.1] mb-16">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.principles.map((principle) => (
            <div key={principle.number} className="flex flex-col">
              <span className="text-xs tracking-[0.2em] text-muted-foreground/60 mb-6 font-mono">
                {principle.number}
              </span>
              <h3 className="text-xl font-light tracking-tight text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
