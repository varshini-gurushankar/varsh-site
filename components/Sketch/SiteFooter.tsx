import { siteContent } from "@/lib/content";
import { Sparkle } from "./doodles";

const footerLinks = [
  { label: "email", href: `mailto:${siteContent.contact.emails[0]}` },
  ...siteContent.links.map((l) => ({
    label: l.label.toLowerCase(),
    href: l.url,
  })),
];

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-20 pt-32 text-center sm:pt-40"
    >
      <div className="flex items-center justify-center gap-4">
        <Sparkle className="h-9 w-9 text-accent" />
        <p className="font-hand text-5xl font-bold sm:text-6xl">
          {siteContent.name}
        </p>
      </div>
      <p className="mt-6 text-lg text-muted">
        have a thought, a project, or a food spot worth rating?
      </p>
      <nav
        id="links"
        className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-10"
      >
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noreferrer" })}
            className="font-hand text-2xl transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
