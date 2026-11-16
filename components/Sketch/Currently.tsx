import { siteContent } from "@/lib/content";

const cells = [
  { label: "reading", value: siteContent.books[0].title },
  { label: "learning", value: "agentic AI + ML systems" },
  { label: "rating", value: "food spots on beli" },
];

export default function Currently() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        03 / currently
      </p>
      <div className="mt-6 grid border-y-2 border-ink sm:grid-cols-3">
        {cells.map((cell, i) => (
          <div
            key={cell.label}
            className={`py-10 pr-6 ${i > 0 ? "border-t-2 border-ink sm:border-l-2 sm:border-t-0 sm:pl-8" : ""}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              {cell.label}
            </p>
            <p className="mt-4 font-hand text-3xl font-bold">{cell.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
