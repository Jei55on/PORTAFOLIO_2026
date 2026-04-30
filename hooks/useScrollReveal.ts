'use client';
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(rootMargin = '-60px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fix #2: check if already in viewport on mount (no waiting for scroll)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    // Fix #1: threshold:0 fires as soon as 1px enters viewport
    // rootMargin negative value triggers *before* the element hits the bottom edge
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: `0px 0px ${rootMargin} 0px` },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}
