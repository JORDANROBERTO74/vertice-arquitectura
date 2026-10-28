import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({
  currentLocale,
  label,
}: Readonly<{
  currentLocale: Locale;
  label: string;
}>) {
  return (
    <div
      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-light"
      role="group"
      aria-label={label}
    >
      <Link
        href="/en"
        className={`px-1.5 py-0.5 transition-opacity ${
          currentLocale === "en"
            ? "border-b border-current font-normal"
            : "opacity-45 hover:opacity-100"
        }`}
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span className="opacity-30 text-[9px]" aria-hidden="true">
        /
      </span>
      <Link
        href="/es"
        className={`px-1.5 py-0.5 transition-opacity ${
          currentLocale === "es"
            ? "border-b border-current font-normal"
            : "opacity-45 hover:opacity-100"
        }`}
        aria-current={currentLocale === "es" ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
