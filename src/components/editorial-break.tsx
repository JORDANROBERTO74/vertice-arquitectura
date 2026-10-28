"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function EditorialBreak({
  content,
}: Readonly<{
  content: Dictionary["editorialBreak"];
}>) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial/break.jpg"
          alt={content.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight leading-snug mb-8">
          “{content.quote}”
        </blockquote>
        <div className="flex flex-col items-center gap-1.5">
          <cite className="text-xs tracking-[0.2em] uppercase text-white/80 not-italic">
            — {content.author}
          </cite>
          <span className="text-[10px] tracking-[0.15em] text-white/50">
            {content.title} / {content.location}
          </span>
        </div>
      </div>
    </section>
  );
}
