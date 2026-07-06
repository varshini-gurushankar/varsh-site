"use client";

import { siteContent } from "@/lib/content";
import IconNav from "./IconNav";

export default function HomeWindow() {
  return (
    <section
      aria-label="home window"
      className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-window shadow-window"
    >
      <div className="flex items-center justify-between border-b border-line bg-titlebar px-3 py-2 select-none">
        <span className="font-mono text-xs lowercase tracking-widest text-muted">
          home
        </span>
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-soft" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      </div>
      <div className="flex flex-col items-center gap-8 px-6 py-10 text-center sm:px-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {siteContent.name}
          </h1>
          <p className="font-mono text-sm text-muted">{siteContent.tagline}</p>
        </div>
        <IconNav />
      </div>
    </section>
  );
}
