import Link from "next/link";
import type { ProgressionLevelRec, ProgressionPlan } from "@/lib/types";
import { PROGRESSION_ROADMAP } from "@/lib/recommendations";
import {
  demonDifficultyColor,
  demonDifficultyLabel,
  lengthLabel,
  skillTagLabel,
} from "@/lib/ui";

/**
 * 服务端渲染的 Progression 结果（不依赖客户端 hydrate）
 */
export default function DemonProgressionResults({ plan }: { plan: ProgressionPlan }) {
  return (
    <div id="progression-results">
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
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
              style={{ width: `${(plan.stage / 8) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {plan.skipWarning && (
        <div
          className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4"
          role="status"
        >
          <p className="text-sm font-semibold text-amber-200">Don&apos;t skip the bridge</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{plan.skipWarning}</p>
        </div>
      )}

      <div className="gd-card mb-6 p-6">
        <h3 className="mb-3 text-lg font-bold text-[var(--color-text)]">Progression checklist</h3>
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
            <Link href="/demon-list" className="text-[var(--color-primary)] underline">
              Demon List
            </Link>{" "}
            or{" "}
            <Link href="/level-finder" className="text-[var(--color-primary)] underline">
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

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/level-finder" className="gd-btn gd-btn-outline">
          Browse All Levels
        </Link>
        <Link href="/demon-list" className="gd-btn gd-btn-outline">
          Demon List
        </Link>
        <Link href="/first-demon-picker" className="gd-btn gd-btn-outline">
          First Demon Picker
        </Link>
        <Link href="/guides/best-easy-demons" className="gd-btn gd-btn-outline">
          Best Easy Demons Guide
        </Link>
      </div>
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

  // 优先 YouTube 缩略图，避免缺失本地 jpg 刷屏 404
  const thumbSrc = level.youtubeId
    ? `https://img.youtube.com/vi/${level.youtubeId}/hqdefault.jpg`
    : `/images/levels/${level.slug}.jpg`;

  return (
    <article
      className="gd-card overflow-hidden p-0"
      style={{ ["--card-glow" as string]: `${demonColor}22` }}
    >
      <div className="flex flex-col sm:flex-row">
        <Link
          href={`/levels/${level.slug}`}
          className="relative aspect-video w-full shrink-0 overflow-hidden bg-[var(--color-bg-soft)] sm:aspect-auto sm:h-auto sm:w-36"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumbSrc} alt="" className="h-full w-full object-cover" />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <Link
                href={`/levels/${level.slug}`}
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
            href={`/levels/${level.slug}`}
            className="mt-auto text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            Open level page →
          </Link>
        </div>
      </div>
    </article>
  );
}
