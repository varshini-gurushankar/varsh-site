import Image from "next/image";
import { siteContent } from "@/lib/content";

const resume = siteContent.links.find((l) => l.label === "Resume");

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        {/* polaroid */}
        <figure className="mx-auto w-full max-w-sm -rotate-2 border border-line bg-paper-card p-3 pb-5 shadow-photo">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/varshinibeach-crop.jpg"
              alt="me at the beach"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="pt-4 text-center font-hand text-2xl">
            me at the beach :)
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            02 / a little about me
          </p>
          <h2 className="mt-4 font-hand text-5xl font-bold leading-tight sm:text-6xl">
            curious mind.
            <br />
            busy hands.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            <p>
              i was born in india and grew up in san diego &mdash; a curious
              kid who spent most of my childhood building things, like dolls
              out of toilet paper rolls to keep myself entertained.
            </p>
            <p>
              at uc san diego, joining clubs like the ai student collective
              and meeting ambitious, passionate people at conferences (mark
              zuckerberg included) solidified that tech &mdash; specifically
              the intersection of swe + product &mdash; is what i want to do.
            </p>
            <p>
              away from the screen, you&rsquo;ll find me at the beach, rating
              food spots on beli, or traveling with friends and family.
            </p>
          </div>
          {resume && (
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border-b-2 border-ink pb-1 font-hand text-2xl transition-colors hover:border-accent hover:text-accent"
            >
              the full story (my resume) &rarr;
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
