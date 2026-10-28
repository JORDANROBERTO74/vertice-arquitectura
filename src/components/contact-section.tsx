"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function ContactSection({
  content,
}: Readonly<{
  content: Dictionary["contactSection"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-background/50 mb-4">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.05] mb-8 max-w-3xl">
          {content.title}
        </h2>

        <p className="text-base text-background/70 font-light max-w-xl leading-relaxed mb-16">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-background/15">
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-background/40 block mb-2">
              {content.emailLabel}
            </span>
            <a
              href={`mailto:${content.email}`}
              className="text-sm font-light text-background hover:text-background/70 transition-colors inline-flex items-center gap-1.5"
            >
              {content.email} <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-background/40 block mb-2">
              {content.addressLabel}
            </span>
            <p className="text-sm font-light text-background/80 leading-relaxed">
              {content.address}
            </p>
          </div>

          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-background/40 block mb-2">
              {content.phoneLabel}
            </span>
            <a
              href={`tel:${content.phone.replace(/\s+/g, "")}`}
              className="text-sm font-light text-background hover:text-background/70 transition-colors"
            >
              {content.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
