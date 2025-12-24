"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { photographs } from "@/data/content";
import { SectionTitle } from "./section-title";
import { cn } from "@/lib/utils";

export default function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const currentPhoto = currentIndex !== null ? photographs[currentIndex] : null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    // Delay clearing index to allow exit animation
    setTimeout(() => setCurrentIndex(null), 200);
  }, []);

  // Handle body scroll lock with scrollbar compensation
  useEffect(() => {
    if (lightboxOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Delay cleanup to match exit animation duration
      const timeout = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [lightboxOpen]);

  const goToNext = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev !== null ? (prev + 1) % photographs.length : 0
      );
    }
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev !== null
          ? (prev - 1 + photographs.length) % photographs.length
          : 0
      );
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "ArrowLeft":
          goToPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToNext, goToPrev]);

  // Bento layout: strategic spanning to fill all rows perfectly
  // Row 1: 0(2) + 1 + 2 = 4
  // Row 2: 3 + 4 + 5(2) = 4
  // Row 3: 6(2) + 7(2) = 4
  const getSpanClass = (index: number) => {
    if (index === 0) return "sm:col-span-2 lg:col-span-2";
    if (index === 5 || index === 6 || index === 7) return "lg:col-span-2";
    return "";
  };

  return (
    <section className="relative">
      <SectionTitle title="Photography" />

      {/* Bento Grid - Aceternity-inspired */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-3">
        {photographs.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-xl",
              "border border-neutral-200 dark:border-neutral-800",
              "transition-all duration-300",
              "hover:border-neutral-300 dark:hover:border-neutral-700",
              "hover:shadow-xl hover:shadow-neutral-200/40 dark:hover:shadow-neutral-900/40",
              getSpanClass(index)
            )}
            onClick={() => openLightbox(index)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Title on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-medium text-sm">
                {photo.alt}
              </span>
            </div>

            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={index < 4 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentPhoto && currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 z-50"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white/70 text-sm font-medium z-50">
              {currentIndex + 1} / {photographs.length}
            </div>

            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 h-10 w-10 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="sr-only">Previous photo</span>
            </Button>

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 h-10 w-10 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="sr-only">Next photo</span>
            </Button>

            {/* Image container */}
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-3">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  width={currentPhoto.width}
                  height={currentPhoto.height}
                  className="max-h-[75vh] w-full object-contain rounded-lg"
                  priority
                />
                <p className="text-white/80 text-center text-sm sm:text-base font-medium">
                  {currentPhoto.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
