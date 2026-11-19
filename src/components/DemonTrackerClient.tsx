"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import type { Level, DemonDifficulty } from "@/lib/types";
import { demonDifficultyColor, demonDifficultyLabel } from "@/lib/ui";
import { trackEvent } from "@/lib/analytics";

type TrackStatus = "beaten" | "in-progress";

type TrackedItem = {
  status: TrackStatus;
  bestPct: number;
  attempts: number;
  updatedAt: string;
};

type TrackerMap = Record<string, TrackedItem>;

const STORAGE_KEY = "gd_demon_tracker_v1";

const TIERS: { key: DemonDifficulty; label: string }[] = [
  { key: "easy", label: "Easy Demon" },
  { key: "medium", label: "Medium Demon" },
  { key: "hard", label: "Hard Demon" },
  { key: "insane", label: "Insane Demon" },
  { key: "extreme", label: "Extreme Demon" },
];

export default function DemonTrackerClient({ levels }: { levels: Level[] }) {
  const demons = useMemo(() => levels.filter((l) => l.difficulty === "demon"), [levels]);
  const [tracked, setTracked] = useState<TrackerMap>({});
  const [tierFilter, setTierFilter] = useState<DemonDifficulty | "all">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "beaten" | "in-progress" | "unbeaten">("all");
  const [search, setSearch] = useState("");
  const [copiedJson, setCopiedJson] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTracked(JSON.parse(raw) as TrackerMap);
      }
    } catch {
      // ignore
    }
  }, []);

  const save = (next: TrackerMap) => {
    setTracked(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const toggleBeaten = (slug: string) => {
    const existing = tracked[slug];
    const next = { ...tracked };
    if (existing?.status === "beaten") {
      delete next[slug];
    } else {
      next[slug] = {
        status: "beaten",
        bestPct: 100,
        attempts: existing?.attempts ?? 0,
        updatedAt: new Date().toISOString().slice(0, 10),
      };
      trackEvent("tracker_mark_beaten", { slug });
    }
    save(next);
  };

  const updateProgress = (slug: string, bestPct: number, attempts: number) => {
    const pct = Math.min(100, Math.max(0, Math.floor(bestPct) || 0));
    const att = Math.max(0, Math.floor(attempts) || 0);
    const next = { ...tracked };
    if (pct === 0 && att === 0) {
      delete next[slug];
    } else {
      next[slug] = {
        status: pct >= 100 ? "beaten" : "in-progress",
        bestPct: pct,
        attempts: att,
        updatedAt: new Date().toISOString().slice(0, 10),
      };
    }
    save(next);
  };

  const stats = useMemo(() => {
    let beaten = 0;
    let inProgress = 0;
    let totalAttempts = 0;
    const byTier: Record<DemonDifficulty, { beaten: number; total: number }> = {
      easy: { beaten: 0, total: 0 },
      medium: { beaten: 0, total: 0 },
      hard: { beaten: 0, total: 0 },
      insane: { beaten: 0, total: 0 },
      extreme: { beaten: 0, total: 0 },
    };

    let highestTier: DemonDifficulty | "none" = "none";
    const order: DemonDifficulty[] = ["easy", "medium", "hard", "insane", "extreme"];

    for (const d of demons) {
      const t = d.demonDifficulty ?? "easy";
      byTier[t].total += 1;
      const item = tracked[d.slug];
      if (item) {
        totalAttempts += item.attempts;
        if (item.status === "beaten") {
          beaten += 1;
          byTier[t].beaten += 1;
          if (highestTier === "none" || order.indexOf(t) > order.indexOf(highestTier)) {
            highestTier = t;
          }
        } else {
          inProgress += 1;
        }
      }
    }

    return { beaten, inProgress, totalAttempts, byTier, highestTier };
  }, [demons, tracked]);

  const filtered = useMemo(() => {
    return demons.filter((d) => {
      if (tierFilter !== "all" && d.demonDifficulty !== tierFilter) return false;
      const item = tracked[d.slug];
      if (statusFilter === "beaten" && item?.status !== "beaten") return false;
      if (statusFilter === "in-progress" && item?.status !== "in-progress") return false;
      if (statusFilter === "unbeaten" && item?.status === "beaten") return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !d.name.toLowerCase().includes(q) &&
          !d.creatorName.toLowerCase().includes(q) &&
          !d.levelId.includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [demons, tierFilter, statusFilter, search, tracked]);

  const exportBackup = () => {
    navigator.clipboard?.writeText(JSON.stringify(tracked, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 1800);
  };

  const plannerHref = `/demon-progression?demons=${stats.beaten}&tier=${stats.highestTier}&platform=pc&skill=any&plan=1`;

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="gd-card p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text)]">Your Demon Progress</h2>
            <p className="text-xs text-[var(--color-text-dim)]">
              Saved locally in your browser — no account required.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={plannerHref} className="gd-btn gd-btn-primary !py-2 !px-3 text-xs">
              Build Next-Step Plan ({stats.beaten} clears) →
            </Link>
            <button
              type="button"
              onClick={exportBackup}
              className="gd-btn gd-btn-outline !py-2 !px-3 text-xs"
            >
              {copiedJson ? "Backup JSON Copied!" : "Copy JSON Backup"}
            </button>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
            <p className="text-xs text-[var(--color-text-dim)]">Beaten Demons</p>
            <p className="mt-1 font-mono text-2xl font-black text-[var(--color-primary)]">
              {stats.beaten}
              <span className="text-xs font-normal text-[var(--color-text-dim)]"> / {demons.length}</span>
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
            <p className="text-xs text-[var(--color-text-dim)]">In Progress</p>
            <p className="mt-1 font-mono text-2xl font-black text-[var(--color-accent)]">
              {stats.inProgress}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
            <p className="text-xs text-[var(--color-text-dim)]">Hardest Cleared</p>
            <p className="mt-1 text-lg font-bold text-[var(--color-text)]">
              {stats.highestTier === "none" ? "None yet" : demonDifficultyLabel(stats.highestTier)}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
            <p className="text-xs text-[var(--color-text-dim)]">Logged Attempts</p>
            <p className="mt-1 font-mono text-2xl font-black text-[var(--color-text)]">
              {stats.totalAttempts.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Tier progress bars */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {TIERS.map((t) => {
            const { beaten, total } = stats.byTier[t.key];
            const pct = total > 0 ? Math.round((beaten / total) * 100) : 0;
            const color = demonDifficultyColor(t.key);
            return (
              <div key={t.key}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-[var(--color-text-muted)]">{t.label.replace(" Demon", "")}</span>
                  <span className="font-mono" style={{ color }}>
                    {beaten}/{total}
                  </span>
                </div>
                <div className="gd-score-bar">
                  <div className="gd-score-fill" style={{ width: `${pct}%`, background: color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="gd-card p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Search demon, creator, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="gd-input"
          />
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value as DemonDifficulty | "all")}
            className="gd-input"
          >
            <option value="all">All Demon Tiers</option>
            {TIERS.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as "all" | "beaten" | "in-progress" | "unbeaten")
            }
            className="gd-input"
          >
            <option value="all">All Statuses</option>
            <option value="beaten">Beaten Only</option>
            <option value="in-progress">In Progress Only</option>
            <option value="unbeaten">Not Beaten Yet</option>
          </select>
        </div>
      </div>

      {/* Checklist Table */}
      <div className="space-y-2">
        {filtered.map((level) => {
          const item = tracked[level.slug];
          const isBeaten = item?.status === "beaten";
          const color = demonDifficultyColor(level.demonDifficulty ?? "easy");
          return (
            <div
              key={level.id}
              className={`gd-card flex flex-wrap items-center justify-between gap-3 px-4 py-3 transition-colors ${
                isBeaten ? "border-[var(--color-easy)]/50 bg-[var(--color-easy)]/5" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isBeaten}
                  onChange={() => toggleBeaten(level.slug)}
                  aria-label={`Mark ${level.name} as beaten`}
                  className="h-5 w-5 cursor-pointer accent-[var(--color-easy)]"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/levels/${level.slug}`}
                      className={`text-sm font-bold hover:text-[var(--color-primary)] ${
                        isBeaten ? "text-[var(--color-easy)]" : "text-[var(--color-text)]"
                      }`}
                    >
                      {level.name}
                    </Link>
                    <span
                      className="rounded px-1.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: `${color}22`, color }}
                    >
                      {level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : "Demon"}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-dim)]">
                    by {level.creatorName} · ID: {level.levelId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 text-xs text-[var(--color-text-dim)]">
                  <span>Best %</span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={item?.bestPct ?? 0}
                    onChange={(e) =>
                      updateProgress(level.slug, Number(e.target.value), item?.attempts ?? 0)
                    }
                    className="gd-input !w-16 !px-2 !py-1 text-center font-mono text-xs"
                  />
                </label>
                <label className="flex items-center gap-1 text-xs text-[var(--color-text-dim)]">
                  <span>Att</span>
                  <input
                    type="number"
                    min={0}
                    value={item?.attempts ?? 0}
                    onChange={(e) =>
                      updateProgress(level.slug, item?.bestPct ?? 0, Number(e.target.value))
                    }
                    className="gd-input !w-20 !px-2 !py-1 text-center font-mono text-xs"
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
