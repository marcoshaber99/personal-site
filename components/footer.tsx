import { socialLinks } from "@/data/social-links";
import NewsletterSignup from "@/components/newsletter-signup";
import { Container } from "@/components/container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border sm:mt-28">
      <Container className="py-10 sm:py-12">
        <NewsletterSignup />
        <div className="mt-12 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Marco Haber · Limassol, Cyprus</span>
          <nav aria-label="Social" className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
