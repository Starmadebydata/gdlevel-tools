"use client";

import { useState } from "react";

/** 唯一需要客户端的小按钮：复制可分享链接 */
export default function CopyShareLinkButton({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}${path}`
        : path;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <button type="button" onClick={handleCopy} className="gd-btn gd-btn-outline">
      {copied ? "Link copied" : "Copy share link"}
    </button>
  );
}
