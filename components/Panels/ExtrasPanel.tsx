import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function ExtrasPanel() {
  return (
    <ul className="space-y-4">
      {siteContent.extras.map((extra) => (
        <li key={extra.title} className="rounded-lg border border-line p-4">
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
        </li>
      ))}
    </ul>
  );
}
