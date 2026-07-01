import Link from "next/link";
import type { Level } from "@/lib/types";
import {
  demonDifficultyColor,
  demonDifficultyLabel,
  difficultyLabel,
  lengthLabel,
  scoreColor,
  scoreLabel,
  skillTagLabel,
} from "@/lib/ui";

/**
 * 关卡卡片组件
 * 展示关卡核心信息：名称、ID、难度、评分、标签
 * 增强版：带 GD 风格几何难度指示器 + 渐变色条 + 动画效果
 */
export default function LevelCard({ level }: { level: Level }) {
  const demonColor = level.demonDifficulty
    ? demonDifficultyColor(level.demonDifficulty)
    : "#9c27b0";

  return (
    <Link
      href={`/levels/${level.slug}/`}
      className="gd-card gd-card-glow group block h-full p-5"
      style={{ ["--card-glow" as string]: `${demonColor}33` }}
    >
      {/* 顶部：难度几何指示器 + 难度徽章 */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* GD 风格几何难度图标 — 根据难度颜色变化 */}
          <DifficultyIcon color={demonColor} />
          <span
            className="gd-badge"
            style={{ backgroundColor: `${demonColor}22`, color: demonColor, border: `1px solid ${demonColor}44` }}
          >
            {level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : difficultyLabel(level.difficulty)}
          </span>
        </div>
        <span className="text-xs text-[var(--color-text-dim)] font-mono">
          ID: {level.levelId}
        </span>
      </div>

      {/* 标题 */}
      <h3 className="mb-1 text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
        {level.name}
      </h3>
      <p className="mb-3 text-sm text-[var(--color-text-muted)]">
        by {level.creatorName} · {lengthLabel(level.length)}
      </p>

      {/* 短评 */}
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
        {level.review}
      </p>

      {/* 评分 */}
      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2">
        <ScoreBar label="Mobile" score={level.mobileScore} />
        <ScoreBar label="Beginner" score={level.beginnerScore} />
        <ScoreBar label="Visual" score={level.visualClarityScore} />
        <ScoreBar label="Frustration" score={6 - level.frustrationScore} invert />
      </div>

      {/* 标签 */}
      <div className="flex flex-wrap gap-1.5">
        {level.skillTags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--color-bg-soft)] px-2 py-0.5 text-xs text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)]"
          >
            {skillTagLabel(tag)}
          </span>
        ))}
      </div>
    </Link>
  );
}

/** GD 风格难度几何图标 — 不同形状代表不同视觉层次 */
function DifficultyIcon({ color }: { color: string }) {
  return (
    <div
      className="flex h-7 w-7 items-center justify-center rounded-md transition-transform group-hover:rotate-12 group-hover:scale-110"
      style={{ background: `${color}15`, border: `1px solid ${color}33` }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {/* GD 风格方块+内部图案 */}
        <rect x="2" y="2" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5" />
        <path d="M5 8L7 10L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** 分数条 — 带渐变色和动画 */
function ScoreBar({
  label,
  score,
  invert,
}: {
  label: string;
  score: number;
  invert?: boolean;
}) {
  const displayScore = invert ? score : score;
  const color = scoreColor(displayScore);
  const pct = Math.min((displayScore / 5) * 100, 100);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-dim)]">{label}</span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>
          {scoreLabel(displayScore)}
        </span>
      </div>
      <div className="gd-score-bar">
        <div
          className="gd-score-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}
