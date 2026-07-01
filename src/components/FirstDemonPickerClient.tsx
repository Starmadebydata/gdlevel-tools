"use client";

import { useState } from "react";
import Link from "next/link";
import type { PickerInput, Recommendation } from "@/lib/types";
import { recommendFirstDemons } from "@/lib/recommendations";
import { demonDifficultyColor, demonDifficultyLabel, lengthLabel, skillTagLabel } from "@/lib/ui";

/**
 * First Demon Picker 客户端组件
 * 通过问卷收集玩家信息，推荐最适合的第一个 Demon
 */
export default function FirstDemonPickerClient() {
  const [input, setInput] = useState<PickerInput>({
    platform: "pc",
    strongestSkill: "cube",
    weakestSkill: "wave",
    preferredLength: "any",
    memoryTolerance: "medium",
    visualTolerance: "any",
    goal: "first-clear",
  });

  const [results, setResults] = useState<Recommendation[] | null>(null);
  const [loading, setLoading] = useState(false);

  function handleGetRecommendations() {
    setLoading(true);
    // 模拟"思考"效果
    setTimeout(() => {
      const recs = recommendFirstDemons(input);
      setResults(recs);
      setLoading(false);
    }, 600);
  }

  function updateField<K extends keyof PickerInput>(field: K, value: PickerInput[K]) {
    setInput((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      {/* 问卷 */}
      <div className="gd-card mb-8 p-6">
        <h3 className="mb-5 text-lg font-bold text-[var(--color-text)]">Tell us about your playstyle</h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* 平台 */}
          <QuestionField label="What platform do you play on?">
            <RadioGroup
              name="platform"
              value={input.platform}
              options={[
                { value: "pc", label: "PC (Steam)" },
                { value: "mobile", label: "Mobile (iOS/Android)" },
                { value: "both", label: "Both" },
              ]}
              onChange={(v) => updateField("platform", v as PickerInput["platform"])}
            />
          </QuestionField>

          {/* 最强技能 */}
          <QuestionField label="What's your strongest skill?">
            <select
              value={input.strongestSkill}
              onChange={(e) => updateField("strongestSkill", e.target.value)}
              className="gd-input"
            >
              <option value="cube">Cube (jumping)</option>
              <option value="ship">Ship (flying)</option>
              <option value="wave">Wave (micro-control)</option>
              <option value="ball">Ball (gravity switching)</option>
              <option value="ufo">UFO (mid-air jumps)</option>
              <option value="robot">Robot (jump height)</option>
              <option value="spider">Spider (instant teleport)</option>
              <option value="timing">Timing (precise clicks)</option>
              <option value="memory">Memory (learning routes)</option>
            </select>
          </QuestionField>

          {/* 最弱技能 */}
          <QuestionField label="What's your weakest skill?">
            <select
              value={input.weakestSkill}
              onChange={(e) => updateField("weakestSkill", e.target.value)}
              className="gd-input"
            >
              <option value="cube">Cube (jumping)</option>
              <option value="ship">Ship (flying)</option>
              <option value="wave">Wave (micro-control)</option>
              <option value="ball">Ball (gravity switching)</option>
              <option value="ufo">UFO (mid-air jumps)</option>
              <option value="robot">Robot (jump height)</option>
              <option value="spider">Spider (instant teleport)</option>
              <option value="timing">Timing (precise clicks)</option>
              <option value="memory">Memory (learning routes)</option>
            </select>
          </QuestionField>

          {/* 长度偏好 */}
          <QuestionField label="Preferred level length?">
            <RadioGroup
              name="length"
              value={input.preferredLength}
              options={[
                { value: "short", label: "Short (under 30s)" },
                { value: "medium", label: "Medium (30-60s)" },
                { value: "long", label: "Long (60s+)" },
                { value: "any", label: "No preference" },
              ]}
              onChange={(v) => updateField("preferredLength", v as PickerInput["preferredLength"])}
            />
          </QuestionField>

          {/* 记忆容忍度 */}
          <QuestionField label="How do you feel about memory levels?">
            <RadioGroup
              name="memory"
              value={input.memoryTolerance}
              options={[
                { value: "low", label: "I hate memorizing routes" },
                { value: "medium", label: "Some memory is fine" },
                { value: "high", label: "I love memory levels" },
              ]}
              onChange={(v) => updateField("memoryTolerance", v as PickerInput["memoryTolerance"])}
            />
          </QuestionField>

          {/* 视觉容忍度 */}
          <QuestionField label="Visual decoration preference?">
            <RadioGroup
              name="visual"
              value={input.visualTolerance}
              options={[
                { value: "clean", label: "I prefer clean, readable levels" },
                { value: "moderate", label: "Moderate decoration is fine" },
                { value: "any", label: "I don't care about visuals" },
              ]}
              onChange={(v) => updateField("visualTolerance", v as PickerInput["visualTolerance"])}
            />
          </QuestionField>

          {/* 目标 */}
          <QuestionField label="What's your main goal?">
            <RadioGroup
              name="goal"
              value={input.goal}
              options={[
                { value: "first-clear", label: "Just get my first demon clear" },
                { value: "skill-building", label: "Build skills for harder demons" },
                { value: "fun", label: "Have fun and enjoy the level" },
                { value: "fast-clear", label: "Clear it as fast as possible" },
              ]}
              onChange={(v) => updateField("goal", v as PickerInput["goal"])}
            />
          </QuestionField>
        </div>

        {/* 提交按钮 */}
        <div className="mt-6">
          <button
            onClick={handleGetRecommendations}
            disabled={loading}
            className="gd-btn gd-btn-primary w-full sm:w-auto"
          >
            {loading ? "Analyzing your answers..." : "Get My Recommendations"}
          </button>
        </div>
      </div>

      {/* 结果 */}
      {loading && (
        <div className="gd-card p-12 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center">
            <div className="h-10 w-10 rotate-45 rounded-md border-2 border-[var(--color-primary)] gd-pulse" />
          </div>
          <p className="text-[var(--color-text-muted)]">Finding the perfect demons for you...</p>
        </div>
      )}

      {results && !loading && (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-[var(--color-primary)]" />
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text)]">Your Top {results.length} Recommendations</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Ranked by how well they match your playstyle.</p>
            </div>
          </div>

          <div className="space-y-4">
            {results.map((rec, i) => {
              const color = demonDifficultyColor(rec.level.demonDifficulty!);
              return (
                <div key={rec.level.id} className="gd-card gd-card-glow overflow-hidden p-0" style={{ ["--card-glow" as string]: `${color}33` }}>
                  {/* 缩略图 + 排名 + 标题叠加 */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-soft)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/levels/${rec.level.slug}.jpg`}
                      alt={`${rec.level.name} by ${rec.level.creatorName} — gameplay thumbnail`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* 排名徽章 — 左上角 */}
                    <div
                      className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border-2 font-black text-sm backdrop-blur-sm"
                      style={{ borderColor: color, background: `${color}33`, color: "#fff" }}
                    >
                      #{i + 1}
                    </div>

                    {/* 难度徽章 — 右上角 */}
                    <span
                      className="absolute right-4 top-4 gd-badge backdrop-blur-sm"
                      style={{ backgroundColor: `${color}cc`, color: "#fff", border: `1px solid ${color}` }}
                    >
                      {demonDifficultyLabel(rec.level.demonDifficulty!)}
                    </span>

                    {/* 标题 + 作者 — 底部叠加 */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <Link
                        href={`/levels/${rec.level.slug}/`}
                        className="text-xl font-bold text-white drop-shadow-md hover:text-[var(--color-primary)] transition-colors"
                      >
                        {rec.level.name}
                      </Link>
                      <p className="text-sm text-white/80">
                        by {rec.level.creatorName} · {lengthLabel(rec.level.length)} · ID: {rec.level.levelId}
                      </p>
                    </div>
                  </div>

                  {/* 卡片正文 */}
                  <div className="p-6">
                    {/* 推荐理由 */}
                    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <InfoBox label="Why it fits" content={rec.whyItFits} color="var(--color-easy)" />
                      <InfoBox label="Watch out for" content={rec.whatToWatchFor} color="var(--color-hard)" />
                      <InfoBox label="Practice tip" content={rec.practiceTip} color="var(--color-primary)" />
                    </div>

                    {/* 技能标签 */}
                    <div className="flex flex-wrap gap-1.5">
                      {rec.level.skillTags.map((tag) => (
                        <span key={tag} className="rounded-md bg-[var(--color-bg-soft)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                          {skillTagLabel(tag)}
                        </span>
                      ))}
                    </div>

                    {/* 下一步 */}
                    {i === 0 && (
                      <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                        <p className="text-sm text-[var(--color-text-muted)]">
                          <span className="font-medium text-[var(--color-accent)]">After clearing this:</span> {rec.nextDemon}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 重新选择 */}
          <div className="mt-6 text-center">
            <button onClick={() => setResults(null)} className="gd-btn gd-btn-outline">
              Change my answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** 问题字段包装 */
function QuestionField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">{label}</label>
      {children}
    </div>
  );
}

/** 单选组 */
function RadioGroup({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded-lg border px-3 py-2 text-sm transition-all ${
            value === opt.value
              ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
              : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/** 信息框 */
function InfoBox({ label, content, color }: { label: string; content: string; color: string }) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
      <p className="mb-1 text-xs font-bold" style={{ color }}>{label}</p>
      <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{content}</p>
    </div>
  );
}
