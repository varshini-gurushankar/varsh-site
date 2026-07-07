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
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
      </div>
      <div className="flex flex-col items-center gap-10 px-6 py-14 text-center sm:px-12">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            hi! i&apos;m <span className="text-accent">{siteContent.name}</span>
          </h1>
          <p className="font-mono text-sm text-muted sm:text-base">
            {siteContent.tagline}
          </p>
        </div>
        <IconNav />
      </div>
    </section>
  );
}
