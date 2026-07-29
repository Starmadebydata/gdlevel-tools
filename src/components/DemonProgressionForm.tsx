import Link from "next/link";
import type { ProgressionInput } from "@/lib/types";
import { buildProgressionShareQuery } from "@/lib/recommendations";
import CopyShareLinkButton from "@/components/CopyShareLinkButton";

const COUNT_PRESETS = [0, 1, 5, 10, 20, 30, 50, 80, 120] as const;

type Props = {
  input: ProgressionInput;
  /** 是否已生成计划（用于显示 Reset / 分享） */
  hasPlan: boolean;
};

/**
 * 纯 HTML GET 表单 — 不依赖客户端 JS 也能提交并出结果
 * （避免 CDN 缓存旧 HTML 导致 /_next 哈希 404 后按钮“没反应”）
 */
export default function DemonProgressionForm({ input, hasPlan }: Props) {
  const sharePath = hasPlan
    ? `/demon-progression/?plan=1&${buildProgressionShareQuery(input)}`
    : null;

  return (
    <form
      method="get"
      action="/demon-progression/"
      className="gd-card mb-8 p-6"
      id="progression-form"
    >
      {/* 标记：只有点了 Plan 才出结果；分享链接也会带 plan=1 */}
      <input type="hidden" name="plan" value="1" />

      <h3 className="mb-1 text-lg font-bold text-[var(--color-text)]">Plan your demon route</h3>
      <p className="mb-5 text-sm text-[var(--color-text-muted)]">
        Count alone is not enough — tell us your highest tier, platform, and skill focus so we can
        bridge the Easy → Hard jump instead of dumping another level list.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Demon count */}
        <div className="sm:col-span-2">
          <label
            htmlFor="demons"
            className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
          >
            How many demons have you beaten?
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <input
              id="demons"
              name="demons"
              type="number"
              min={0}
              max={500}
              defaultValue={input.completedDemons}
              className="gd-input !w-32 text-center text-lg font-bold"
              required
            />
            <div className="flex flex-wrap gap-2">
              {COUNT_PRESETS.map((n) => {
                const href = `/demon-progression/?plan=1&demons=${n}&tier=${input.highestTier}&platform=${input.platform}&skill=${input.skillFocus}`;
                return (
                  <Link
                    key={n}
                    href={href}
                    className={`rounded-lg border px-3 py-1 text-xs transition-all ${
                      input.completedDemons === n && hasPlan
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {n}
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-dim)]">
            Quick chips open a plan with that count (uses current tier / platform / skill from last plan).
          </p>
        </div>

        {/* Highest tier */}
        <div>
          <label
            htmlFor="tier"
            className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
          >
            Hardest demon tier you&apos;ve beaten
          </label>
          <select
            id="tier"
            name="tier"
            defaultValue={input.highestTier}
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

        {/* Platform — radio group, no JS */}
        <div>
          <span className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
            Platform
          </span>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { value: "pc", label: "PC" },
                { value: "mobile", label: "Mobile" },
                { value: "both", label: "Both" },
              ] as const
            ).map((opt) => (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition-all has-[:checked]:border-[var(--color-primary)] has-[:checked]:bg-[var(--color-primary)]/10 has-[:checked]:font-semibold has-[:checked]:text-[var(--color-primary)] ${
                  input.platform === opt.value
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]"
                    : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]"
                }`}
              >
                <input
                  type="radio"
                  name="platform"
                  value={opt.value}
                  defaultChecked={input.platform === opt.value}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Skill focus */}
        <div className="sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
            Skill focus (optional training route)
          </span>
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
              <label
                key={opt.value}
                className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs transition-all has-[:checked]:border-[var(--color-secondary)] has-[:checked]:bg-[var(--color-secondary)]/10 has-[:checked]:font-semibold has-[:checked]:text-[var(--color-secondary)] ${
                  input.skillFocus === opt.value
                    ? "border-[var(--color-secondary)] bg-[var(--color-secondary)]/10 font-semibold text-[var(--color-secondary)]"
                    : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]"
                }`}
              >
                <input
                  type="radio"
                  name="skill"
                  value={opt.value}
                  defaultChecked={input.skillFocus === opt.value}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="gd-btn gd-btn-primary">
          Plan My Route
        </button>
        {hasPlan && (
          <>
            <Link href="/demon-progression/" className="gd-btn gd-btn-outline">
              Reset
            </Link>
            {sharePath && <CopyShareLinkButton path={sharePath} />}
          </>
        )}
      </div>
    </form>
  );
}
