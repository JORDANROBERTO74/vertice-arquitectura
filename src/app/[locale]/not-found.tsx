import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background text-foreground">
      <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
        Vértice
      </span>
      <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">
        404 — Void of Space
      </h1>
      <p className="max-w-md text-sm text-muted-foreground font-light leading-relaxed mb-8">
        The architectural coordinates you are seeking have left no physical trace.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
      >
        Return to Studio
      </Link>
    </main>
  );
}
