import { UserRound } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function AboutPanel() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
        <UserRound size={28} strokeWidth={1.5} />
      </span>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">{siteContent.name}</h2>
        <p className="text-sm leading-relaxed text-muted">
          {siteContent.about.bio}
        </p>
      </div>
    </div>
  );
}
