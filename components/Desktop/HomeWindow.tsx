"use client";

import { siteContent } from "@/lib/content";
import IconNav from "./IconNav";

export default function HomeWindow() {
  return (
    <section
      aria-label="home window"
      className="w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-window shadow-window"
    >
      <div className="flex items-center justify-between bg-titlebar px-4 py-2.5 select-none">
        <span className="font-mono text-xs lowercase tracking-widest text-titlebar-text">
          home
        </span>
        <span aria-hidden className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f5bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c554]" />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-16 text-center sm:min-h-[480px] sm:px-12">
        <div className="space-y-3 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            hi! i&apos;m <span className="text-accent">{siteContent.name}</span>
          </h1>
          <div className="space-y-2 text-left font-mono text-sm tracking-wide text-muted sm:text-base">
            {siteContent.tagline.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <IconNav />
      </div>
    </section>
  );
}
