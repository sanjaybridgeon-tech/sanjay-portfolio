"use client";
import { useEffect, useRef } from 'react';

/**
 * A reusable hook to add scroll-reveal animations to components.
 * It adds the 'revealVisible' class when the element enters the viewport.
 */
export default function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealVisible');
          // Optional: Unobserve after revealing to save performance
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
      }
    );

    if (ref.current) {
      // Add the initial reveal class
      ref.current.classList.add('reveal');
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
}
