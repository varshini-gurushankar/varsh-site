import { ArrowUpRight, FileText, Globe, Link2 } from "lucide-react";
import { siteContent, type LinkIcon } from "@/lib/content";

const ICONS: Record<LinkIcon, typeof Globe> = {
  github: Link2,
  twitter: Link2,
  globe: Globe,
  file: FileText,
};

export default function LinksPanel() {
  return (
    <ul className="space-y-2">
      {siteContent.links.map((link) => {
        const Icon = ICONS[link.icon] ?? Link2;
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 transition-colors hover:border-accent hover:bg-accent-soft"
            >
              <Icon size={16} strokeWidth={1.75} className="text-muted transition-colors group-hover:text-accent" />
              <span className="flex-1 text-sm font-semibold">{link.label}</span>
              <span className="hidden font-mono text-xs text-muted sm:block">
                {link.url.replace(/^https?:\/\//, "")}
              </span>
              <ArrowUpRight size={14} className="text-muted transition-colors group-hover:text-accent" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
