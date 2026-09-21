"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades content up once as it enters the viewport.
 * Opacity + transform only, so nothing reflows. Honours prefers-reduced-motion
 * via the global media query in globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(14px)",
        transition: `opacity 500ms var(--ease-out-soft) ${delay}ms, transform 500ms var(--ease-out-soft) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
