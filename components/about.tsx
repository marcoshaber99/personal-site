import { about, tagline } from "@/data/content";

export default function About() {
  return (
    <section aria-label="Introduction">
      <h1 className="font-display text-[3.25rem] italic leading-[0.95] tracking-tight text-foreground sm:text-[4rem]">
        Marco Haber
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{tagline}</p>

      <div className="mt-9 max-w-[58ch] space-y-4 text-[15px] leading-7 text-foreground/80 sm:text-base">
        {about.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6 text-sm">
        <a href="/Marco_Haber_CV.pdf" download className="link text-foreground">
          Résumé
        </a>
        <a href="mailto:marcoshaber99@gmail.com" className="link text-foreground">
          Email
        </a>
      </div>
    </section>
  );
}
