import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { footerLinks, footerText } from "@/data/content";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

interface FooterLinkProps {
  icon: string;
  url: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, url, label }) => {
  const Icon = iconMap[icon] || FaEnvelope; // Fallback to FaEnvelope if icon not found
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground"
      aria-label={label}
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
            {footerLinks.map((link) => (
              <FooterLink key={link.icon} {...link} />
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
