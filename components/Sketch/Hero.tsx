import { Briefcase, Link2, Mail, Sparkles, User } from "lucide-react";
import { siteContent } from "@/lib/content";
import { CurvyArrow, PortraitDoodle, Sparkle, Squiggle } from "./doodles";

const quickLinks = [
  { label: "about", href: "#about", Icon: User },
  { label: "experience", href: "#journey", Icon: Briefcase },
  { label: "links", href: "#links", Icon: Link2 },
  { label: "contact", href: "#contact", Icon: Mail },
  { label: "extras", href: siteContent.extras[0].url ?? "#", Icon: Sparkles, external: true },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      {/* hand-drawn browser window */}
      <div className="sketchy border-2 border-ink bg-paper-card shadow-window">
        {/* title bar */}
        <div className="relative flex items-center border-b-2 border-ink px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="sketchy-blob h-3.5 w-3.5 border-2 border-ink" />
            <span className="sketchy-blob h-3.5 w-3.5 border-2 border-ink" />
            <span className="sketchy-blob h-3.5 w-3.5 border-2 border-ink" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 font-hand text-xl">
            home
          </span>
          <Sparkle className="ml-auto h-5 w-5 text-accent" />
        </div>

        {/* window body */}
        <div className="grid items-center gap-10 px-8 py-16 sm:px-14 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              welcome to my little corner of the internet
            </p>
            <h1 className="mt-4 inline-block font-hand text-6xl font-bold leading-none sm:text-7xl">
              hi, i&rsquo;m {siteContent.name}
              <Squiggle className="mt-2 h-3 w-full text-accent" />
            </h1>
            <div className="mt-8 space-y-2 text-lg leading-relaxed sm:text-xl">
              <p>{siteContent.tagline[0]}</p>
              <p>{siteContent.tagline[1]}</p>
              <p>
                the best way to reach me is{" "}
                <a
                  href="mailto:vgurushankar@ucsd.edu"
                  className="font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  right here &rarr;
                </a>
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <PortraitDoodle className="w-full text-ink" />
            <div className="absolute -top-2 right-0 text-right">
              <p className="font-hand text-2xl">that&rsquo;s me!</p>
              <CurvyArrow className="ml-auto h-9 w-12 text-ink" />
            </div>
          </div>
        </div>
      </div>

      {/* quick links */}
      <nav className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
        {quickLinks.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="sketchy-sm flex items-center gap-2.5 border-2 border-ink bg-paper px-6 py-3 font-hand text-xl transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <Icon className="h-4.5 w-4.5" strokeWidth={2.25} />
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
