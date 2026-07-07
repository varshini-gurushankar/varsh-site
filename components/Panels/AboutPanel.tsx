import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function AboutPanel() {
  return (
    <div className="flex flex-col gap-10">
      {siteContent.about.sections.map((section, i) => (
        <section
          key={i}
          className={`flex flex-col items-center gap-4 sm:gap-6 ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}
        >
          <div className="w-full shrink-0 sm:w-2/5">
            {section.image ? (
              <Image
                src={section.image}
                alt={section.imageAlt ?? ""}
                width={480}
                height={360}
                className="w-full rounded-xl border border-line object-cover shadow-photo"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-dashed border-line bg-accent-soft">
                <span className="font-mono text-xs lowercase tracking-widest text-muted">
                  {section.imageAlt ?? "photo"}
                </span>
              </div>
            )}
          </div>
          <p className="text-sm leading-relaxed text-ink sm:text-base">
            {section.text}
          </p>
        </section>
      ))}
    </div>
  );
}
