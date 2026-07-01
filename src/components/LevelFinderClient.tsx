"use client";

import { useState, useMemo } from "react";
import LevelCard from "@/components/LevelCard";
import type { Level, Difficulty, DemonDifficulty, LevelLength } from "@/lib/types";

/**
 * Level Finder 客户端组件
 * 支持按难度、Demon 子难度、技能、平台、长度筛选
 */
export default function LevelFinderClient({ levels }: { levels: Level[] }) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [demonDiff, setDemonDiff] = useState<DemonDifficulty | "all">("all");
  const [length, setLength] = useState<LevelLength | "all">("all");
  const [skill, setSkill] = useState<string>("all");
  const [mobileOnly, setMobileOnly] = useState(false);
  const [firstDemonOnly, setFirstDemonOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"beginner" | "mobile" | "name">("beginner");

  const filtered = useMemo(() => {
    let result = levels.filter((l) => l.status === "published");

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.creatorName.toLowerCase().includes(q) ||
          l.levelId.includes(q)
      );
    }

    if (difficulty !== "all") {
      result = result.filter((l) => l.difficulty === difficulty);
    }

    if (demonDiff !== "all") {
      result = result.filter((l) => l.demonDifficulty === demonDiff);
    }

    if (length !== "all") {
      result = result.filter((l) => l.length === length);
    }

    if (skill !== "all") {
      result = result.filter((l) => l.skillTags.includes(skill as never));
    }

    if (mobileOnly) {
      result = result.filter((l) => l.skillTags.includes("mobile-friendly"));
    }

    if (firstDemonOnly) {
      result = result.filter((l) => l.skillTags.includes("first-demon"));
    }

    // 排序
    result = [...result].sort((a, b) => {
      if (sortBy === "beginner") return b.beginnerScore - a.beginnerScore;
      if (sortBy === "mobile") return b.mobileScore - a.mobileScore;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [levels, search, difficulty, demonDiff, length, skill, mobileOnly, firstDemonOnly, sortBy]);

  const skillOptions = [
    "wave", "ship", "cube", "timing", "memory", "ufo", "ball", "robot", "spider",
    "mobile-friendly", "first-demon", "skill-practice", "platformer",
  ];

  return (
    <div>
      {/* 筛选面板 */}
      <div className="gd-card mb-8 p-5">
        {/* 搜索 */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, creator, or level ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="gd-input"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {/* 难度 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">Difficulty</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty | "all")} className="gd-input">
              <option value="all">All</option>
              <option value="auto">Auto</option>
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
              <option value="harder">Harder</option>
              <option value="insane">Insane</option>
              <option value="demon">Demon</option>
            </select>
          </div>

          {/* Demon 子难度 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">Demon Tier</label>
            <select value={demonDiff} onChange={(e) => setDemonDiff(e.target.value as DemonDifficulty | "all")} className="gd-input">
              <option value="all">All</option>
              <option value="easy">Easy Demon</option>
              <option value="medium">Medium Demon</option>
              <option value="hard">Hard Demon</option>
              <option value="insane">Insane Demon</option>
              <option value="extreme">Extreme Demon</option>
            </select>
          </div>

          {/* 长度 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">Length</label>
            <select value={length} onChange={(e) => setLength(e.target.value as LevelLength | "all")} className="gd-input">
              <option value="all">All</option>
              <option value="tiny">Tiny</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="xl">XL</option>
              <option value="platformer">Platformer</option>
            </select>
          </div>

          {/* 技能 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">Skill</label>
            <select value={skill} onChange={(e) => setSkill(e.target.value)} className="gd-input">
              <option value="all">All</option>
              {skillOptions.map((s) => (
                <option key={s} value={s}>{s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</option>
              ))}
            </select>
          </div>

          {/* 排序 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "beginner" | "mobile" | "name")} className="gd-input">
              <option value="beginner">Beginner Score</option>
              <option value="mobile">Mobile Score</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* 开关 */}
        <div className="mt-4 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={mobileOnly}
              onChange={(e) => setMobileOnly(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-primary)]"
            />
            <span className="text-sm text-[var(--color-text-muted)]">Mobile Friendly Only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={firstDemonOnly}
              onChange={(e) => setFirstDemonOnly(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-primary)]"
            />
            <span className="text-sm text-[var(--color-text-muted)]">First Demon Candidates Only</span>
          </label>
        </div>
      </div>

      {/* 结果计数 */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">
          {filtered.length} level{filtered.length !== 1 ? "s" : ""} found
        </p>
        {(search || difficulty !== "all" || demonDiff !== "all" || length !== "all" || skill !== "all" || mobileOnly || firstDemonOnly) && (
          <button
            onClick={() => {
              setSearch("");
              setDifficulty("all");
              setDemonDiff("all");
              setLength("all");
              setSkill("all");
              setMobileOnly(false);
              setFirstDemonOnly(false);
            }}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* 结果列表 */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
      ) : (
        <div className="gd-card p-12 text-center">
          <p className="text-[var(--color-text-muted)]">No levels match your filters. Try adjusting them.</p>
        </div>
      )}
    </div>
  );
}
