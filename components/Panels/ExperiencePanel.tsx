import { siteContent } from "@/lib/content";

export default function ExperiencePanel() {
  return (
    <ul className="space-y-5">
      {siteContent.experience.map((item) => (
        <li
          key={`${item.company}-${item.period}`}
          className="border-l-2 border-accent/40 pl-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h2 className="text-sm font-bold">
              {item.role} · {item.company}
            </h2>
            <span className="font-mono text-xs text-muted">{item.period}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
