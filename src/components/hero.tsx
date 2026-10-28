import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Entrance motion is CSS-only so the hero renders without hydration.
export function Hero({ content }: Readonly<{ content: Dictionary["hero"] }>) {
  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial/hero.jpg"
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-settle"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20 text-white">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-6 animate-rise" style={{ animationDelay: "260ms" }}>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">
              {content.subtitle}
            </p>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95] mb-12 animate-rise"
            style={{ animationDelay: "420ms" }}
          >
            {content.titleLine1}
            <br />
            <span className="italic font-light">{content.titleLine2}</span>
          </h1>

          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-white/20 gap-4 animate-rise"
            style={{ animationDelay: "600ms" }}
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
