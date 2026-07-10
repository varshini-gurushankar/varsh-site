"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/lib/content";

export default function ContactPanel() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const { emails } = siteContent.contact;

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-muted">
        Want to chat, collaborate, or just say hi? Email is the best way to
        reach me.
      </p>
      {emails.map((email) => (
        <div key={email} className="flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-mono text-sm transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
          >
            <Mail size={15} strokeWidth={1.75} />
            {email}
          </a>
          <button
            type="button"
            onClick={() => copyEmail(email)}
            aria-label={`Copy ${email}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {copiedEmail === email ? (
              <Check size={15} className="text-accent" />
            ) : (
              <Copy size={15} />
            )}
          </button>
          <span aria-live="polite" className="font-mono text-xs text-accent">
            {copiedEmail === email ? "copied!" : ""}
          </span>
        </div>
      ))}
    </div>
  );
}
