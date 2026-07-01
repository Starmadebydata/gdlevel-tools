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
 */
export default function LevelCard({ level }: { level: Level }) {
  const demonColor = level.demonDifficulty
    ? demonDifficultyColor(level.demonDifficulty)
    : "#9c27b0";

  return (
    <Link href={`/levels/${level.slug}/`} className="gd-card block p-5 group">
      {/* 顶部：难度条 */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="gd-badge"
          style={{ backgroundColor: `${demonColor}22`, color: demonColor, border: `1px solid ${demonColor}44` }}
        >
          {level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : difficultyLabel(level.difficulty)}
        </span>
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
            className="rounded-md bg-[var(--color-bg-soft)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
          >
            {skillTagLabel(tag)}
          </span>
        ))}
      </div>
    </Link>
  );
}

/** 分数条 */
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
        <div className="gd-score-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
