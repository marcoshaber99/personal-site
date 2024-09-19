import { about } from "@/data/content";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

export default function About() {
  return (
    <div>
      <h2 className="heading dark:text-green-400">about</h2>
      <div className="group mt-2">
        <p className="text-base dark:text-neutral-400">{about}</p>
        <Link
          href="/marco-haber-resume.pdf"
          download
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 dark:text-green-400 dark:hover:text-green-400/80"
        >
          Resume <DownloadIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
