"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

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
  const [imageError, setImageError] = useState<Set<number>>(new Set());
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

  const handleImageError = (index: number) => {
    setImageError((prev) => new Set(prev).add(index));
  };

  if (safeImages.length === 0) {
    return (
      <div className={"relative w-full h-full bg-[var(--color-pastel-pink)] " + (className || "")} />
    );
  }

  return (
    <div className={"relative w-full h-full overflow-hidden " + (className || "")}>
      {safeImages.map((img, idx) => {
        const isActive = idx === activeIndex;
        const hasError = imageError.has(idx);

        return (
          <div
            key={idx}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (isActive ? "opacity-100" : "opacity-0 pointer-events-none")
            }
          >
            {hasError ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm opacity-70">Image unavailable</div>
                </div>
              </div>
            ) : (
              <Image
                src={img.src}
                alt={img.alt || ""}
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover"
                onError={() => handleImageError(idx)}
                unoptimized={img.src.startsWith("http")}
              />
            )}
          </div>
        );
      })}

      {overlayGradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      )}

      {safeImages.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {safeImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={
                "h-2 w-8 rounded-full transition-all duration-300 " +
                (idx === activeIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70 hover:scale-105")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}


