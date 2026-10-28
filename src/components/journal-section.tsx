"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function JournalSection({
  content,
}: Readonly<{
  content: Dictionary["journalSection"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="journal" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`flex items-end justify-between mb-16 pb-6 border-b border-border transition-all duration-700 ${
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
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60 hidden sm:inline">
            {content.viewAll}
          </span>
        </div>

        <div className="divide-y divide-border">
          {content.articles.map((article) => (
            <article
              key={article.title}
              className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 tabular-nums">
                  {article.date}
                </span>
                <h3 className="text-lg md:text-xl font-light text-foreground group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
