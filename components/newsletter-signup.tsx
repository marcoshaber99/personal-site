"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      await fetch(BUTTONDOWN_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch {
      // no-cors produces opaque responses; the request still goes through
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="text-sm text-muted-foreground">
        Check your email to confirm your subscription.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm text-muted-foreground mb-3">
        I send occasional emails when I publish something new.
      </p>
      <div className="flex gap-2">
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="max-w-xs"
        />
        <input type="hidden" name="embed" value="1" />
        <Button
          type="submit"
          variant="outline"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
