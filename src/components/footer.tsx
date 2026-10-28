"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";

export function Footer({ content }: Readonly<{ content: Dictionary["footer"] }>) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 py-12 md:px-12 lg:px-20 border-t border-border bg-background">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-foreground block mb-1">
            Vértice
          </span>
          <p className="text-[11px] tracking-[0.1em] text-muted-foreground">
            {content.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px] tracking-[0.15em] text-muted-foreground/60">
          <span>{content.copyright}</span>
          <button
            onClick={scrollToTop}
            className="uppercase hover:text-foreground transition-colors cursor-pointer"
          >
            {content.backToTop} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
