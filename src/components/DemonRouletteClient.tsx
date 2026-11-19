"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import type { Level } from "@/lib/types";
import { demonDifficultyColor, demonDifficultyLabel, lengthLabel } from "@/lib/ui";
import { trackEvent } from "@/lib/analytics";

type PoolKey = "all" | "easy" | "medium" | "hard" | "insane" | "extreme" | "mobile";

type RouletteEntry = {
  round: number;
  levelId: string;
  slug: string;
  name: string;
  creatorName: string;
  tier: string;
  requiredPct: number;
  achievedPct: number;
};

type SavedState = {
  pool: PoolKey;
  current: Level | null;
  targetPct: number;
  history: RouletteEntry[];
  finished: boolean;
  gaveUp: boolean;
};

const STORAGE_KEY = "gd_demon_roulette_v1";

const POOL_OPTIONS: { key: PoolKey; label: string }[] = [
  { key: "all", label: "All Demons" },
  { key: "easy", label: "Easy Demons" },
  { key: "medium", label: "Medium Demons" },
  { key: "hard", label: "Hard Demons" },
  { key: "insane", label: "Insane Demons" },
  { key: "extreme", label: "Extreme Demons" },
  { key: "mobile", label: "Mobile Friendly (4/5+)" },
];

function filterByPool(levels: Level[], pool: PoolKey): Level[] {
  const demons = levels.filter((l) => l.difficulty === "demon");
  if (pool === "all") return demons;
  if (pool === "mobile") return demons.filter((l) => l.mobileScore >= 4);
  return demons.filter((l) => l.demonDifficulty === pool);
}

export default function DemonRouletteClient({ levels }: { levels: Level[] }) {
  const [pool, setPool] = useState<PoolKey>("easy");
  const [current, setCurrent] = useState<Level | null>(null);
  const [targetPct, setTargetPct] = useState<number>(1);
  const [inputPct, setInputPct] = useState<string>("1");
  const [history, setHistory] = useState<RouletteEntry[]>([]);
  const [finished, setFinished] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const poolLevels = useMemo(() => filterByPool(levels, pool), [levels, pool]);

  // Restore saved run from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as SavedState;
      if (parsed && parsed.pool) {
        setPool(parsed.pool);
        setCurrent(parsed.current ?? null);
        setTargetPct(parsed.targetPct ?? 1);
        setInputPct(String(parsed.targetPct ?? 1));
        setHistory(Array.isArray(parsed.history) ? parsed.history : []);
        setFinished(Boolean(parsed.finished));
        setGaveUp(Boolean(parsed.gaveUp));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Persist run to localStorage
  useEffect(() => {
    try {
      const state: SavedState = { pool, current, targetPct, history, finished, gaveUp };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }, [pool, current, targetPct, history, finished, gaveUp]);

  const pickRandomLevel = (usedSlugs: Set<string>, candidates: Level[]): Level | null => {
    if (candidates.length === 0) return null;
    const unused = candidates.filter((l) => !usedSlugs.has(l.slug));
    const source = unused.length > 0 ? unused : candidates;
    return source[Math.floor(Math.random() * source.length)] ?? null;
  };

  const startRun = (selectedPool: PoolKey = pool) => {
    const candidates = filterByPool(levels, selectedPool);
    const first = pickRandomLevel(new Set(), candidates);
    setPool(selectedPool);
    setCurrent(first);
    setTargetPct(1);
    setInputPct("1");
    setHistory([]);
    setFinished(false);
    setGaveUp(false);
    trackEvent("roulette_start", { pool: selectedPool });
  };

  const submitProgress = () => {
    if (!current) return;
    const pct = Math.min(100, Math.max(0, Math.floor(Number(inputPct))));
    if (Number.isNaN(pct) || pct < targetPct) return;

    const entry: RouletteEntry = {
      round: history.length + 1,
      levelId: current.levelId,
      slug: current.slug,
      name: current.name,
      creatorName: current.creatorName,
      tier: current.demonDifficulty ? demonDifficultyLabel(current.demonDifficulty) : "Demon",
      requiredPct: targetPct,
      achievedPct: pct,
    };

    const nextHistory = [entry, ...history];
    setHistory(nextHistory);

    if (pct >= 100) {
      setFinished(true);
      setCurrent(null);
      trackEvent("roulette_complete", { pool, rounds: nextHistory.length });
      return;
    }

    const nextTarget = pct + 1;
    const used = new Set(nextHistory.map((h) => h.slug));
    const nextLevel = pickRandomLevel(used, poolLevels);
    setCurrent(nextLevel);
    setTargetPct(nextTarget);
    setInputPct(String(nextTarget));
  };

  const handleGiveUp = () => {
    setGaveUp(true);
    setCurrent(null);
  };

  const copyLevelId = () => {
    if (!current) return;
    navigator.clipboard?.writeText(current.levelId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 1800);
  };

  const copyRunSummary = () => {
    const lines = [
      `GD Demon Roulette (${POOL_OPTIONS.find((p) => p.key === pool)?.label})`,
      `Score: ${history.length} levels | Highest: ${history[0]?.achievedPct ?? 0}%`,
      ...history
        .slice()
        .reverse()
        .map((h) => `#${h.round} ${h.name} (${h.requiredPct}% req → ${h.achievedPct}%)`),
      `Play at https://geometrydashlevel.com/demon-roulette`,
    ];
    navigator.clipboard?.writeText(lines.join("\n"));
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 1800);
  };

  const parsedInput = Math.floor(Number(inputPct));
  const isValidInput = !Number.isNaN(parsedInput) && parsedInput >= targetPct && parsedInput <= 100;

  return (
    <div className="space-y-6">
      {/* Pool Selector + Controls */}
      <div className="gd-card p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-bold text-[var(--color-text)]">
            1. Choose Your Demon Pool
          </h2>
          <span className="text-xs text-[var(--color-text-dim)]">
            {poolLevels.length} demons in pool
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {POOL_OPTIONS.map((opt) => {
            const active = pool === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  setPool(opt.key);
                  if (current || finished || gaveUp) {
                    startRun(opt.key);
                  }
                }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                    : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {!current && !finished && !gaveUp && (
          <button
            type="button"
            onClick={() => startRun(pool)}
            className="gd-btn gd-btn-primary w-full sm:w-auto"
          >
            Start Demon Roulette (Target: 1%)
          </button>
        )}

        {(current || finished || gaveUp) && (
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => startRun(pool)}
              className="gd-btn gd-btn-outline text-xs"
            >
              Restart Roulette
            </button>
            {history.length > 0 && (
              <button
                type="button"
                onClick={copyRunSummary}
                className="gd-btn gd-btn-outline text-xs"
              >
                {copiedSummary ? "Copied Run Summary!" : "Copy Run Summary"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Active Round Card */}
      {current && (
        <div className="gd-card border-[var(--color-primary)]/50 p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[var(--color-primary)]/15 px-2.5 py-1 font-mono text-xs font-bold text-[var(--color-primary)]">
                Round #{history.length + 1}
              </span>
              <span
                className="gd-badge text-xs"
                style={{
                  backgroundColor: `${demonDifficultyColor(current.demonDifficulty ?? "easy")}22`,
                  color: demonDifficultyColor(current.demonDifficulty ?? "easy"),
                  border: `1px solid ${demonDifficultyColor(current.demonDifficulty ?? "easy")}55`,
                }}
              >
                {current.demonDifficulty ? demonDifficultyLabel(current.demonDifficulty) : "Demon"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-[var(--color-text-dim)]">Required Progress: </span>
              <span className="font-mono text-lg font-black text-[var(--color-accent)]">
                {targetPct}%+
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-[var(--color-bg-soft)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/levels/${current.slug}.jpg`}
                alt={`${current.name} by ${current.creatorName} thumbnail`}
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between sm:col-span-2">
              <div>
                <h3 className="text-2xl font-black text-[var(--color-text)]">{current.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  by {current.creatorName} · {lengthLabel(current.length)}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-[var(--color-bg-soft)] px-2 py-1 font-mono text-xs text-[var(--color-text)]">
                    ID: {current.levelId}
                  </span>
                  <button
                    type="button"
                    onClick={copyLevelId}
                    className="text-xs font-medium text-[var(--color-primary)] hover:underline"
                  >
                    {copiedId ? "Copied!" : "Copy ID"}
                  </button>
                  <Link
                    href={`/levels/${current.slug}`}
                    className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:underline"
                  >
                    View Level Guide →
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-3">
                <div>
                  <label
                    htmlFor="roulette-pct"
                    className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    Percentage Achieved ({targetPct}%–100%)
                  </label>
                  <input
                    id="roulette-pct"
                    type="number"
                    min={targetPct}
                    max={100}
                    value={inputPct}
                    onChange={(e) => setInputPct(e.target.value)}
                    className="gd-input w-36 font-mono"
                  />
                </div>
                <button
                  type="button"
                  disabled={!isValidInput}
                  onClick={submitProgress}
                  className="gd-btn gd-btn-primary disabled:opacity-40"
                >
                  Submit &amp; Next Spin
                </button>
                <button
                  type="button"
                  onClick={handleGiveUp}
                  className="gd-btn gd-btn-outline text-xs"
                >
                  Give Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result Banner */}
      {(finished || gaveUp) && (
        <div className="gd-card border-[var(--color-accent)]/60 p-6 text-center">
          <h3 className="text-xl font-black text-[var(--color-text)]">
            {finished ? "🎉 Roulette Cleared — 100% Reached!" : "Roulette Run Ended"}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            You cleared <strong className="text-[var(--color-text)]">{history.length}</strong>{" "}
            {history.length === 1 ? "demon" : "demons"} and reached{" "}
            <strong className="text-[var(--color-accent)]">{history[0]?.achievedPct ?? 0}%</strong>.
          </p>
        </div>
      )}

      {/* History Log */}
      {history.length > 0 && (
        <div className="gd-card p-6">
          <h2 className="mb-3 text-base font-bold text-[var(--color-text)]">
            Run History ({history.length} completed)
          </h2>
          <div className="space-y-2">
            {history.map((item) => (
              <div
                key={`${item.round}-${item.slug}`}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--color-text-dim)]">
                    #{item.round}
                  </span>
                  <Link href={`/levels/${item.slug}`} className="font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    {item.name}
                  </Link>
                  <span className="text-xs text-[var(--color-text-dim)]">{item.tier}</span>
                </div>
                <div className="font-mono text-xs">
                  <span className="text-[var(--color-text-dim)]">{item.requiredPct}% req → </span>
                  <span className="font-bold text-[var(--color-primary)]">{item.achievedPct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
