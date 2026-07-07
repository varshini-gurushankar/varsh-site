import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-0 flex items-center justify-center gap-4 px-4 py-4 font-mono text-xs text-ink/70">
      {siteContent.socials.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.platform} profile`}
          className="lowercase transition-colors hover:text-accent"
        >
          {social.platform}
        </a>
      ))}
      <span aria-hidden>·</span>
      <span>
        © {new Date().getFullYear()} {siteContent.name}
      </span>
    </footer>
  );
}
