import { ArrowUpRight, FileText, Globe, Link2 } from "lucide-react";
import { siteContent, type LinkIcon } from "@/lib/content";

interface BrandIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

function GitHubIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

const ICONS: Record<LinkIcon, (props: BrandIconProps) => React.ReactNode> = {
  github: GitHubIcon,
  twitter: XIcon,
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
              <ArrowUpRight size={14} className="text-muted transition-colors group-hover:text-accent" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
