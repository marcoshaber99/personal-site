import Link from "next/link";
import { socialLinks } from "@/data/social-links";
import { footerText } from "@/data/content";

const FooterLink: React.FC<(typeof socialLinks)[number]> = ({
  name,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground"
      aria-label={name}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="mt-auto py-6">
      <div className="layout max-w-2xl mx-auto px-5 md:px-0">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {footerText}
          </p>
        </div>
      </div>
    </footer>
  );
}
