"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Hero({ content }: Readonly<{ content: Dictionary["hero"] }>) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial/hero.jpg"
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-transform duration-[2s] ease-out ${
            visible ? "scale-100" : "scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20 text-white">
        <div className="max-w-5xl">
          <div
            className={`overflow-hidden mb-6 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">
              {content.subtitle}
            </p>
          </div>

          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95] mb-12 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {content.titleLine1}
            <br />
            <span className="italic font-light">{content.titleLine2}</span>
          </h1>

          <div
            className={`flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-white/20 gap-4 transition-all duration-1000 delay-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[11px] tracking-[0.2em] text-white/60 tabular-nums">
              {content.coordinates}
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/60">
              {content.scrollHint}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
