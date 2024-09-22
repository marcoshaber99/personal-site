"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { photographs } from "@/data/content";

function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<
    (typeof photographs)[0] | null
  >(null);

  const openLightbox = (photo: (typeof photographs)[0]) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentPhoto(null);
    setLightboxOpen(false);
  };

  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-4">gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photographs.map((photo) => (
          <Card key={photo.id} className="overflow-hidden cursor-pointer group">
            <CardContent
              className="p-0 aspect-square"
              onClick={() => openLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      {lightboxOpen && currentPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              width={currentPhoto.width}
              height={currentPhoto.height}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Photography;
