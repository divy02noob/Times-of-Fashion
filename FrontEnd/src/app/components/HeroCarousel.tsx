"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HeroCarouselProps = {
  images: { src: string; alt?: string }[];
  intervalMs?: number;
  className?: string;
  overlayGradient?: boolean;
};

export default function HeroCarousel({
  images,
  intervalMs = 4500,
  className,
  overlayGradient = true,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const safeImages = useMemo(() => (images && images.length > 0 ? images : []), [images]);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [intervalMs, safeImages.length]);

  if (safeImages.length === 0) {
    return (
      <div className={"relative w-full h-full bg-[var(--color-pastel-pink)] " + (className || "")} />
    );
  }

  return (
    <div className={"relative w-full h-full overflow-hidden " + (className || "")}>
      {safeImages.map((img, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (isActive ? "opacity-100" : "opacity-0 pointer-events-none")
            }
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {overlayGradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      )}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {safeImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={
              "h-1.5 w-6 rounded-full transition-colors " +
              (idx === activeIndex ? "bg-white" : "bg-white/40 hover:bg-white/70")
            }
          />
        ))}
      </div>
    </div>
  );
}


