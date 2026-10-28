"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function StudioSection({
  content,
}: Readonly<{
  content: Dictionary["studioSection"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="studio" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-foreground leading-[1.1] mb-12 max-w-3xl">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-muted-foreground font-light text-base leading-relaxed mb-20">
          <p>{content.paragraph1}</p>
          <p>{content.paragraph2}</p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-5xl font-extralight tracking-tight text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
