"use client";

import { useState, type FormEvent } from "react";

const BUTTONDOWN_URL =
  "https://buttondown.com/api/emails/embed-subscribe/marcohaber";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      await fetch(BUTTONDOWN_URL, { method: "POST", body: formData, mode: "no-cors" });
    } catch {
      // no-cors produces opaque responses; the request still goes through
    }
    setStatus("success");
  }

  return (
    <div className="max-w-sm">
      <p className="text-sm text-muted-foreground">
        Occasional emails when I publish something new.
      </p>
      {status === "success" ? (
        <p className="mt-3 text-sm text-foreground">
          Check your inbox to confirm.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-3 flex items-center gap-4 border-b border-border transition-colors focus-within:border-foreground"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Email address"
            required
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <input type="hidden" name="embed" value="1" />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
          >
            {status === "submitting" ? "Sending…" : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
