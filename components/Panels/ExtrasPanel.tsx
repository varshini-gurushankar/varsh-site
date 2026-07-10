"use client";

import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/lib/content";
import { useSite } from "@/context/SiteContext";

export default function ExtrasPanel() {
  const { openWindow, playBubble } = useSite();

  return (
    <ul className="space-y-4">
      {siteContent.extras.map((extra) => (
        <li key={extra.title}>
          {extra.window ? (
            <button
              type="button"
              aria-label={`Open ${extra.title} window`}
              onClick={() => {
                playBubble();
                openWindow(extra.window!);
              }}
              className="w-full rounded-lg border border-line p-4 text-left transition-colors hover:border-accent hover:bg-accent-soft"
            >
              <h2 className="text-sm font-bold">{extra.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {extra.description}
              </p>
            </button>
          ) : (
            <div className="rounded-lg border border-line p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-bold">{extra.title}</h2>
                {extra.url && (
                  <a
                    href={extra.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${extra.title}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {extra.description}
              </p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
