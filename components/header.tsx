import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/social-links";
import { Container } from "@/components/container";

export function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between py-8 sm:py-10">
        <Link
          href="/"
          aria-label="Home"
          className="font-display text-[1.375rem] italic leading-none tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          MH
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Writing
          </Link>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>
    </Container>
  );
}
