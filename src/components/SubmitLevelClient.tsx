"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Submit Level 客户端表单
 * 收集用户提交的关卡信息
 */
export default function SubmitLevelClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    levelName: "",
    levelId: "",
    creatorName: "",
    difficulty: "demon",
    demonDifficulty: "easy",
    length: "medium",
    skillTags: [] as string[],
    mobileFriendly: false,
    review: "",
    yourName: "",
    yourEmail: "",
  });

  function toggleTag(tag: string) {
    setForm((prev) => ({
      ...prev,
      skillTags: prev.skillTags.includes(tag)
        ? prev.skillTags.filter((t) => t !== tag)
        : [...prev.skillTags, tag],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 在实际部署中，这里会发送到 API
    // 目前仅展示成功状态
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="gd-card p-8 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[var(--color-easy)] bg-[var(--color-easy)]/10">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l5 5 11-11" stroke="var(--color-easy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-bold text-[var(--color-text)]">Submission Received!</h2>
        <p className="mb-6 text-sm text-[var(--color-text-muted)]">
          Thank you for submitting <span className="font-bold text-[var(--color-primary)]">{form.levelName}</span>.
          Our team will review your level and may add it to GD Level Tools after manual verification.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => setSubmitted(false)} className="gd-btn gd-btn-outline">
            Submit Another Level
          </button>
          <Link href="/level-finder/" className="gd-btn gd-btn-primary">
            Browse Levels
          </Link>
        </div>
      </div>
    );
  }

  const availableTags = [
    "wave", "ship", "cube", "timing", "memory", "dual", "ufo", "ball", "robot", "spider",
    "mobile-friendly", "first-demon", "skill-practice", "platformer",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 基本信息 */}
      <div className="gd-card p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--color-text)]">Level Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Level Name *</label>
            <input
              required
              type="text"
              value={form.levelName}
              onChange={(e) => setForm({ ...form, levelName: e.target.value })}
              className="gd-input"
              placeholder="e.g. The Nightmare"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Level ID *</label>
            <input
              required
              type="text"
              value={form.levelId}
              onChange={(e) => setForm({ ...form, levelId: e.target.value })}
              className="gd-input font-mono"
              placeholder="e.g. 13519"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Creator Name *</label>
            <input
              required
              type="text"
              value={form.creatorName}
              onChange={(e) => setForm({ ...form, creatorName: e.target.value })}
              className="gd-input"
              placeholder="e.g. Jax"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Length</label>
            <select
              value={form.length}
              onChange={(e) => setForm({ ...form, length: e.target.value })}
              className="gd-input"
            >
              <option value="tiny">Tiny</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="xl">XL</option>
              <option value="platformer">Platformer</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Difficulty</label>
            <select
              value={form.difficulty}
              onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="gd-input"
            >
              <option value="auto">Auto</option>
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
              <option value="harder">Harder</option>
              <option value="insane">Insane</option>
              <option value="demon">Demon</option>
            </select>
          </div>
          {form.difficulty === "demon" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Demon Tier</label>
              <select
                value={form.demonDifficulty}
                onChange={(e) => setForm({ ...form, demonDifficulty: e.target.value })}
                className="gd-input"
              >
                <option value="easy">Easy Demon</option>
                <option value="medium">Medium Demon</option>
                <option value="hard">Hard Demon</option>
                <option value="insane">Insane Demon</option>
                <option value="extreme">Extreme Demon</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 技能标签 */}
      <div className="gd-card p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--color-text)]">Skill Tags</h3>
        <p className="mb-3 text-sm text-[var(--color-text-muted)]">Select all skills that apply to this level.</p>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-all ${
                form.skillTags.includes(tag)
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
              }`}
            >
              {tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>
        <label className="mt-4 flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.mobileFriendly}
            onChange={(e) => setForm({ ...form, mobileFriendly: e.target.checked })}
            className="h-4 w-4 accent-[var(--color-primary)]"
          />
          <span className="text-sm text-[var(--color-text-muted)]">This level is mobile friendly</span>
        </label>
      </div>

      {/* 评测 */}
      <div className="gd-card p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--color-text)]">Your Review</h3>
        <textarea
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
          className="gd-input min-h-[120px] resize-y"
          placeholder="Write a brief review of the level. What makes it good? Who should play it? What are the hardest parts?"
        />
      </div>

      {/* 联系信息 */}
      <div className="gd-card p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--color-text)]">Your Information (Optional)</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Your Name</label>
            <input
              type="text"
              value={form.yourName}
              onChange={(e) => setForm({ ...form, yourName: e.target.value })}
              className="gd-input"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Your Email</label>
            <input
              type="email"
              value={form.yourEmail}
              onChange={(e) => setForm({ ...form, yourEmail: e.target.value })}
              className="gd-input"
              placeholder="Optional — only used to contact you about your submission"
            />
          </div>
        </div>
      </div>

      {/* 提交 */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-[var(--color-text-dim)]">
          By submitting, you confirm this is a legitimate Geometry Dash level. Submissions are reviewed manually.
        </p>
        <button type="submit" className="gd-btn gd-btn-primary shrink-0">
          Submit Level
        </button>
      </div>
    </form>
  );
}
