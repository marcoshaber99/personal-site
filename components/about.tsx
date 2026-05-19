import { about, tagline } from "@/data/content";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

export default function About() {
  return (
    <section className="relative">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="font-pp-italic text-4xl sm:text-5xl text-neutral-900 dark:text-neutral-100">
            Marco Haber
          </h1>
          <h2 className="text-lg sm:text-xl text-muted-foreground font-normal tracking-tight">
            {tagline}
          </h2>
        </div>

        <div className="max-w-[68ch] leading-relaxed text-muted-foreground space-y-4">
          {about.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/Marco_Haber_CV.pdf"
            download
            className="group inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-base font-medium relative">
              Download Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-800 dark:bg-neutral-200 group-hover:w-full transition-all duration-300" />
            </span>
            <DownloadIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
