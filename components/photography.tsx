"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { photographs } from "@/data/content";

export default function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<
    (typeof photographs)[0] | null
  >(null);

  const openLightbox = (photo: (typeof photographs)[0]) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setCurrentPhoto(null);
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="relative">
      {/* Section Title with decorative line and gradient */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-pp-italic tracking-wide">Photography</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>

      {/* Optional subtitle */}
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 font-pp-italic text-lg">
        A collection of moments captured through my lens
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
        {photographs.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border border-neutral-200 dark:border-neutral-800"
            onClick={() => openLightbox(photo)}
          >
            {/* Hover overlay with photo title */}
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex items-end">
              <span className="p-3 sm:p-4 text-white font-pp-italic text-xs sm:text-sm w-full bg-black/20 backdrop-blur-sm">
                {photo.alt}
              </span>
            </div>

            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-10 right-0 text-white hover:bg-white/10 touch-manipulation"
                onClick={closeLightbox}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="space-y-2">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  width={currentPhoto.width}
                  height={currentPhoto.height}
                  className="max-h-[75vh] w-full object-contain rounded-lg"
                  priority
                />
                <p className="text-white/90 font-pp-italic text-center text-sm sm:text-base">
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
