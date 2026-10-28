"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navigation({
  content,
  locale,
}: Readonly<{
  content: Dictionary["navigation"];
  locale: Locale;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setHidden(currentY > lastScrollY && currentY > 400);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: content.links.projects, href: "#projects" },
    { label: content.links.studio, href: "#studio" },
    { label: content.links.approach, href: "#approach" },
    { label: content.links.journal, href: "#journal" },
    { label: content.links.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link
          href={`/${locale}`}
          className={`text-xs font-medium tracking-[0.3em] uppercase transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white drop-shadow-sm"
          }`}
        >
          {content.brand}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className={scrolled ? "" : "text-white"}>
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled || isOpen ? "text-foreground" : "text-white"
          }`}
          aria-label={isOpen ? content.closeMenu : content.openMenu}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              {content.localeLabel}
            </span>
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          </div>
        </div>
      )}
    </header>
  );
}
