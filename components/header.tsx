import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/social-links";

export function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <header>
        <Link href="/" className="text-xl font-semibold">
          Marco Haber
        </Link>
      </header>
      <nav className="flex items-center">
        <div className="flex space-x-2 mr-10">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              title={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "p-0",
              })}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <ModeToggle />
      </nav>
    </div>
  );
}
