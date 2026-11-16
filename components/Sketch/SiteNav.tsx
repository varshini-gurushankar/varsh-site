import { siteContent } from "@/lib/content";
import { Squiggle } from "./doodles";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "journey", href: "#journey" },
  { label: "say hi", href: "#contact" },
];

export default function SiteNav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <a href="#top" className="font-hand text-3xl font-bold leading-none">
        {siteContent.name}.
        <Squiggle className="mt-0.5 h-2 w-full text-accent" />
      </a>
      <nav className="flex items-center gap-8 sm:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-hand text-xl transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
