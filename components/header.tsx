import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinks";
import { ModeToggle } from "./theme-toggle";

function SocialLink({
  href,
  icon: Icon,
  name,
}: {
  href: string;
  icon: React.ElementType;
  name: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" aria-label={name}>
        <Icon className="h-5 w-5" />
      </Button>
    </Link>
  );
}

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mb-8">
      <h1 className="text-2xl font-bold">Marco Haber</h1>
      <div className="flex space-x-2">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>
      <ModeToggle />
    </header>
  );
}
