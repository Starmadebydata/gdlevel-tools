"use client";

import { useState } from "react";
import { vaultCodes, vaultInfo } from "@/lib/data/vault-codes";
import type { VaultCode } from "@/lib/types";

/**
 * Vault Codes 客户端组件
 * 支持按 Vault 切换和代码搜索
 */
export default function VaultCodesClient() {
  const [activeVault, setActiveVault] = useState<VaultCode["vault"]>("vault");
  const [search, setSearch] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredCodes = vaultCodes.filter((c) => {
    if (c.vault !== activeVault) return false;
    if (search) {
      const q = search.toLowerCase();
      return c.code.toLowerCase().includes(q) || c.reward.toLowerCase().includes(q);
    }
    return true;
  });

  function copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    });
  }

  const vaults: { key: VaultCode["vault"]; label: string; icon: string }[] = [
    { key: "vault", label: "The Vault", icon: "🔒" },
    { key: "vault-of-secrets", label: "Vault of Secrets", icon: "🔐" },
    { key: "chamber-of-time", label: "Chamber of Time", icon: "⏳" },
    { key: "wraith", label: "Wraith Vault", icon: "💀" },
  ];

  return (
    <div>
      {/* 合规声明 */}
      <div className="gd-card mb-6 border-[var(--color-accent)]/30 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L2 4v4c0 3 2.5 5.5 6 7 3.5-1.5 6-4 6-7V4l-6-3z" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--color-text)]">
              These are in-game secret codes, not cheats or hacks.
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              All codes are legitimate features built into Geometry Dash by RobTop. Codes may expire with updates — last verified June 2026.
            </p>
          </div>
        </div>
      </div>

      {/* Vault 选择器 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {vaults.map((v) => (
          <button
            key={v.key}
            onClick={() => {
              setActiveVault(v.key);
              setSearch("");
            }}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
              activeVault === v.key
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                : "border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
            }`}
          >
            <span className="mr-1.5">{v.icon}</span>
            {v.label}
          </button>
        ))}
      </div>

      {/* 当前 Vault 信息 */}
      <div className="gd-card mb-6 p-5">
        <h3 className="mb-2 text-base font-bold text-[var(--color-text)]">
          {vaultInfo[activeVault].name}
        </h3>
        <div className="space-y-2">
          <div>
            <span className="text-xs font-medium text-[var(--color-text-dim)]">Unlock requirement: </span>
            <span className="text-sm text-[var(--color-text-muted)]">{vaultInfo[activeVault].unlockRequirement}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-[var(--color-text-dim)]">Location: </span>
            <span className="text-sm text-[var(--color-text-muted)]">{vaultInfo[activeVault].location}</span>
          </div>
        </div>
      </div>

      {/* 搜索 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search codes or rewards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="gd-input"
        />
      </div>

      {/* 代码列表 */}
      <div className="mb-4 text-sm text-[var(--color-text-muted)]">
        {filteredCodes.length} code{filteredCodes.length !== 1 ? "s" : ""} found
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filteredCodes.map((code) => (
          <div key={`${code.vault}-${code.code}`} className="gd-card p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <code className="rounded bg-[var(--color-bg-soft)] px-2 py-0.5 text-sm font-mono font-bold text-[var(--color-primary)]">
                    {code.code}
                  </code>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{code.reward}</p>
              </div>
              <button
                onClick={() => copyCode(code.code)}
                className="shrink-0 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                {copiedCode === code.code ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCodes.length === 0 && (
        <div className="gd-card p-12 text-center">
          <p className="text-[var(--color-text-muted)]">No codes match your search.</p>
        </div>
      )}
    </div>
  );
}
