"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently, the email is still
      // visible and selectable as text.
    }
  }

  return (
    <button
      type="button"
      className={`pillButton ${styles.copyButton}`}
      onClick={handleCopy}
      aria-live="polite"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
