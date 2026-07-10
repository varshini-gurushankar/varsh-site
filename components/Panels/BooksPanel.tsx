import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function BooksPanel() {
  return (
    <ul className="space-y-4">
      {siteContent.books.map((book) => (
        <li
          key={book.title}
          className="flex gap-4 rounded-lg border border-line p-4"
        >
          <div className="w-20 shrink-0 sm:w-24">
            {book.image ? (
              <Image
                src={book.image}
                alt={`${book.title} cover`}
                width={192}
                height={288}
                className="w-full rounded-md border border-line object-cover shadow-photo"
              />
            ) : (
              <div className="flex aspect-[2/3] w-full items-center justify-center rounded-md border-2 border-dashed border-line bg-accent-soft">
                <span className="px-1 text-center font-mono text-[10px] lowercase tracking-widest text-muted">
                  cover
                </span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold">{book.title}</h2>
            <p className="mt-0.5 font-mono text-xs lowercase tracking-wide text-muted">
              {book.author}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {book.thoughts}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
