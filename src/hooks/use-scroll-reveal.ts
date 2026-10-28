"use client";

import { useEffect, useRef, useState } from "react";

// Starts visible so the server-rendered page is readable without JS; only
// sections that begin below the fold are hidden, then revealed on scroll.
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    if (el.getBoundingClientRect().top > window.innerHeight) {
      setIsVisible(false);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
