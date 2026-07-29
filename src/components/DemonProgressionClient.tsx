"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import type {
  ProgressionHighestTier,
  ProgressionInput,
  ProgressionLevelRec,
} from "@/lib/types";
import {
  buildProgressionShareQuery,
  planProgression,
  PROGRESSION_ROADMAP,
} from "@/lib/recommendations";
import {
  demonDifficultyColor,
  demonDifficultyLabel,
  lengthLabel,
  skillTagLabel,
} from "@/lib/ui";

const DEFAULT_INPUT: ProgressionInput = {
  completedDemons: 0,
  highestTier: "none",
  platform: "pc",
  skillFocus: "any",
};

type Props = {
  /** 服务端从 URL searchParams 解析，避免客户端 hydrate 时无限更新 */
  initialInput?: ProgressionInput | null;
};

/**
 * Demon Progression Planner 客户端组件
 * 多维输入 → 阶段 / 下一步推荐 / Easy→Hard 桥接 / 技能路线 / 防跳级清单
 */
export default function DemonProgressionClient({ initialInput = null }: Props) {
  const [input, setInput] = useState<ProgressionInput>(initialInput ?? DEFAULT_INPUT);
  const [submitted, setSubmitted] = useState(initialInput !== null);
  const [copied, setCopied] = useState(false);

  const plan = useMemo(
    () => (submitted ? planProgression(input) : null),
    [submitted, input]
  );

  const update = useCallback(<K extends keyof ProgressionInput>(key: K, value: ProgressionInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  function handleSubmit() {
    setSubmitted(true);
    if (typeof window !== "undefined") {
      const next = `${window.location.pathname}?${buildProgressionShareQuery(input)}`;
      window.history.replaceState(null, "", next);
    }
  }

  function handleReset() {
    setInput(DEFAULT_INPUT);
    setSubmitted(false);
    setCopied(false);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  async function handleCopyLink() {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}?${buildProgressionShareQuery(input)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div>
      {/* 输入面板 */}
      <div className="gd-card mb-8 p-6">
        <h3 className="mb-1 text-lg font-bold text-[var(--color-text)]">Plan your demon route</h3>
        <p className="mb-5 text-sm text-[var(--color-text-muted)]">
          Count alone is not enough — tell us your highest tier, platform, and skill focus so we can
          bridge the Easy → Hard jump instead of dumping another level list.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Demon count */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              How many demons have you beaten?
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="number"
                min={0}
                max={500}
                value={input.completedDemons}
                onChange={(e) =>
                  update(
                    "completedDemons",
                    Math.max(0, Math.min(500, parseInt(e.target.value, 10) || 0))
                  )
                }
                className="gd-input !w-32 text-center text-lg font-bold"
                aria-label="Number of demons beaten"
              />
              <div className="flex flex-wrap gap-2">
                {[0, 1, 5, 10, 20, 30, 50, 80, 120].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => update("completedDemons", n)}
                    className={`rounded-lg border px-3 py-1 text-xs transition-all ${
                      input.completedDemons === n
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Highest tier */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Hardest demon tier you&apos;ve beaten
            </label>
            <select
              value={input.highestTier}
              onChange={(e) => update("highestTier", e.target.value as ProgressionHighestTier)}
              className="gd-input"
            >
              <option value="none">None yet</option>
              <option value="easy">Easy Demon</option>
              <option value="medium">Medium Demon</option>
              <option value="hard">Hard Demon</option>
              <option value="insane">Insane Demon</option>
              <option value="extreme">Extreme Demon</option>
            </select>
          </div>

          {/* Platform */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Platform
            </label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { value: "pc", label: "PC" },
                  { value: "mobile", label: "Mobile" },
                  { value: "both", label: "Both" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update("platform", opt.value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                    input.platform === opt.value
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill focus */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Skill focus (optional training route)
            </label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { value: "any", label: "Any" },
                  { value: "wave", label: "Wave" },
                  { value: "ship", label: "Ship" },
                  { value: "timing", label: "Timing" },
                  { value: "cube", label: "Cube" },
                  { value: "memory", label: "Memory" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update("skillFocus", opt.value)}
                  className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
                    input.skillFocus === opt.value
                      ? "border-[var(--color-secondary)] bg-[var(--color-secondary)]/10 font-semibold text-[var(--color-secondary)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={handleSubmit} className="gd-btn gd-btn-primary">
            Plan My Route
          </button>
          {submitted && (
            <>
              <button type="button" onClick={handleReset} className="gd-btn gd-btn-outline">
                Reset
              </button>
              <button type="button" onClick={handleCopyLink} className="gd-btn gd-btn-outline">
                {copied ? "Link copied" : "Copy share link"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* 结果 */}
      {submitted && plan && (
        <div>
          {/* 当前阶段 */}
          <div className="gd-card mb-6 p-6">
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/10">
                  <span className="text-xl font-black text-[var(--color-primary)] gd-glow-text">
                    {plan.stage}
                  </span>
                </div>
                <span className="mt-1 text-xs text-[var(--color-text-dim)]">Stage</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-[var(--color-text)]">{plan.name}</h2>
                  <span className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-accent)]">
                    Target: {plan.targetTierLabel}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{plan.description}</p>
                <p className="mt-2 text-sm font-medium text-[var(--color-primary)]">
                  {plan.nextMilestone}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-[var(--color-text-dim)]">
                <span>Stage 1: First Demon</span>
                <span>Stage 8: Extreme Demon</span>
              </div>
              <div className="relative h-2 rounded-full bg-[var(--color-bg-soft)]">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500"
                  style={{ width: `${(plan.stage / 8) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 跳级警告 */}
          {plan.skipWarning && (
            <div
              className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4"
              role="status"
            >
              <p className="text-sm font-semibold text-amber-200">Don&apos;t skip the bridge</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{plan.skipWarning}</p>
            </div>
          )}

          {/* 防跳级清单 */}
          <div className="gd-card mb-6 p-6">
            <h3 className="mb-3 text-lg font-bold text-[var(--color-text)]">
              Progression checklist
            </h3>
            <p className="mb-4 text-xs text-[var(--color-text-dim)]">
              Use this to avoid the Easy → Hard wall. Checked items match your current inputs.
            </p>
            <ul className="space-y-2">
              {plan.checklist.map((item) => (
                <li
                  key={item.text}
                  className={`flex items-start gap-3 rounded-lg border p-3 text-sm ${
                    item.done
                      ? "border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 text-[var(--color-text)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      item.done
                        ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                        : "border border-[var(--color-border)] text-[var(--color-text-dim)]"
                    }`}
                    aria-hidden
                  >
                    {item.done ? "✓" : ""}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 下一步推荐 */}
          <section className="mb-6">
            <h3 className="mb-1 text-lg font-bold text-[var(--color-text)]">
              Recommended next levels
            </h3>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Scored for your stage, platform, and skill focus — each card explains why it&apos;s next.
            </p>
            {plan.recommendations.length === 0 ? (
              <p className="text-sm text-[var(--color-text-muted)]">
                No matching demons in our database for this filter. Try{" "}
                <Link href="/demon-list/" className="text-[var(--color-primary)] underline">
                  Demon List
                </Link>{" "}
                or{" "}
                <Link href="/level-finder/" className="text-[var(--color-primary)] underline">
                  Level Finder
                </Link>
                .
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {plan.recommendations.map((rec) => (
                  <ProgressionRecCard key={`next-${rec.level.id}`} rec={rec} />
                ))}
              </div>
            )}
          </section>

          {/* Bridge 推荐 — Easy/Medium 断层 */}
          {plan.bridgeRecommendations.length > 0 && (
            <section className="mb-6">
              <h3 className="mb-1 text-lg font-bold text-[var(--color-text)]">
                Bridge levels for the tier jump
              </h3>
              <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                Lower-frustration picks meant to soften the jump into the next tier — not showcase
                walls.
              </p>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {plan.bridgeRecommendations.map((rec) => (
                  <ProgressionRecCard key={`bridge-${rec.level.id}`} rec={rec} badge="Bridge" />
                ))}
              </div>
            </section>
          )}

          {/* 技能路线 */}
          {plan.skillPath && (
            <section className="mb-6">
              <h3 className="mb-1 text-lg font-bold text-[var(--color-text)]">
                {plan.skillPath.title}
              </h3>
              <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                {plan.skillPath.description}
              </p>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {plan.skillPath.levels.map((rec) => (
                  <ProgressionRecCard
                    key={`skill-${rec.level.id}`}
                    rec={rec}
                    badge={skillTagLabel(plan.skillPath!.skill)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 全阶段路线图 */}
          <div className="gd-card p-6">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">
              Full progression roadmap
            </h3>
            <div className="space-y-2">
              {PROGRESSION_ROADMAP.map((s) => (
                <div
                  key={s.stage}
                  className={`flex items-center gap-4 rounded-lg border p-3 transition-all ${
                    s.stage === plan.stage
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : "border-[var(--color-border)] bg-[var(--color-bg-soft)]"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      s.stage === plan.stage
                        ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                        : "bg-[var(--color-bg)] text-[var(--color-text-dim)]"
                    }`}
                  >
                    {s.stage}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-bold ${
                        s.stage === plan.stage
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text)]"
                      }`}
                    >
                      {s.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">{s.desc}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-[var(--color-text-dim)]">
                    {s.demons} demons
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 链接 */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/level-finder/" className="gd-btn gd-btn-outline">
              Browse All Levels
            </Link>
            <Link href="/demon-list/" className="gd-btn gd-btn-outline">
              Demon List
            </Link>
            <Link href="/first-demon-picker/" className="gd-btn gd-btn-outline">
              First Demon Picker
            </Link>
            <Link href="/guides/best-easy-demons/" className="gd-btn gd-btn-outline">
              Best Easy Demons Guide
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressionRecCard({
  rec,
  badge,
}: {
  rec: ProgressionLevelRec;
  badge?: string;
}) {
  const { level } = rec;
  const demonColor = level.demonDifficulty
    ? demonDifficultyColor(level.demonDifficulty)
    : "#9c27b0";
  const thumbSrc = `/images/levels/${level.slug}.jpg`;
  const ytFallback = level.youtubeId
    ? `https://img.youtube.com/vi/${level.youtubeId}/hqdefault.jpg`
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%230a0e1a'/%3E%3Ctext x='8' y='5' font-family='sans-serif' font-size='1' fill='%2300e5ff' text-anchor='middle'%3EGD%3C/text%3E%3C/svg%3E";

  return (
    <article
      className="gd-card overflow-hidden p-0"
      style={{ ["--card-glow" as string]: `${demonColor}22` }}
    >
      <div className="flex flex-col sm:flex-row">
        <Link
          href={`/levels/${level.slug}/`}
          className="relative aspect-video w-full shrink-0 overflow-hidden bg-[var(--color-bg-soft)] sm:aspect-auto sm:h-auto sm:w-36"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbSrc}
            alt=""
            className="h-full w-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallback === "yt") {
                img.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%230a0e1a'/%3E%3Ctext x='8' y='5' font-family='sans-serif' font-size='1' fill='%2300e5ff' text-anchor='middle'%3EGD%3C/text%3E%3C/svg%3E";
                img.dataset.fallback = "svg";
              } else if (img.dataset.fallback !== "svg") {
                img.src = ytFallback;
                img.dataset.fallback = "yt";
              }
            }}
          />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <Link
                href={`/levels/${level.slug}/`}
                className="font-bold text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                {level.name}
              </Link>
              <p className="text-xs text-[var(--color-text-dim)]">
                by {level.creatorName}
                {level.levelId ? ` · ID ${level.levelId}` : ""}
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {badge && (
                <span className="rounded-md bg-[var(--color-secondary)]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-secondary)]">
                  {badge}
                </span>
              )}
              {level.demonDifficulty && (
                <span
                  className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-bg)]"
                  style={{ backgroundColor: demonColor }}
                >
                  {demonDifficultyLabel(level.demonDifficulty)}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-[var(--color-text-muted)]">
            <span className="font-semibold text-[var(--color-text)]">Why next: </span>
            {rec.whyNext}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-[var(--color-text-dim)]">
            <span className="rounded border border-[var(--color-border)] px-2 py-0.5">
              Skills: {rec.skillFocusLabel}
            </span>
            <span className="rounded border border-[var(--color-border)] px-2 py-0.5">
              {lengthLabel(level.length)}
            </span>
          </div>

          {rec.riskNote && (
            <p className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-2.5 py-1.5 text-xs text-amber-100/90">
              <span className="font-semibold">Watch for: </span>
              {rec.riskNote}
            </p>
          )}

          <Link
            href={`/levels/${level.slug}/`}
            className="mt-auto text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            Open level page →
          </Link>
        </div>
      </div>
    </article>
  );
}
