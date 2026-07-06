"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/lib/content";

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const { email } = siteContent.contact;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-mono text-sm transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
        >
          <Mail size={15} strokeWidth={1.75} />
          {email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
        </button>
        <span aria-live="polite" className="font-mono text-xs text-accent">
          {copied ? "copied!" : ""}
        </span>
      </div>
    </div>
  );
}
