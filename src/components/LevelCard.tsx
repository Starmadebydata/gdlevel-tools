"use client";

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

  // 缩略图路径约定：/images/levels/{slug}.jpg
  // 缺失时 onError 兜底：先 YouTube 缩略图，再 SVG 占位
  const thumbSrc = `/images/levels/${level.slug}.jpg`;
  const ytFallback = level.youtubeId
    ? `https://img.youtube.com/vi/${level.youtubeId}/hqdefault.jpg`
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%230a0e1a'/%3E%3Ctext x='8' y='5' font-family='sans-serif' font-size='1' fill='%2300e5ff' text-anchor='middle'%3EGD%3C/text%3E%3C/svg%3E";

  return (
    <Link
      href={`/levels/${level.slug}`}
      className="gd-card gd-card-glow group block h-full overflow-hidden p-0"
      style={{ ["--card-glow" as string]: `${demonColor}33` }}
    >
      {/* 顶部：真实关卡缩略图 + 难度徽章叠加 */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-soft)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbSrc}
          alt={`${level.name} by ${level.creatorName} — gameplay thumbnail`}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src === ytFallback) return;
            img.src = ytFallback;
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* 渐变遮罩，让叠加文字更清晰 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* 难度徽章 — 左上角 */}
        <span
          className="absolute left-3 top-3 gd-badge backdrop-blur-sm"
          style={{ backgroundColor: `${demonColor}cc`, color: "#fff", border: `1px solid ${demonColor}` }}
        >
          {level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : difficultyLabel(level.difficulty)}
        </span>
        {/* Level ID — 右上角 */}
        <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-mono text-white/90 backdrop-blur-sm">
          ID: {level.levelId}
        </span>
        {/* 标题 + 作者 — 底部叠加在图上 */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-lg font-bold leading-tight text-white drop-shadow-md group-hover:text-[var(--color-primary)] transition-colors">
            {level.name}
          </h3>
          <p className="text-sm text-white/80">
            by {level.creatorName} · {lengthLabel(level.length)}
          </p>
        </div>
      </div>

      {/* 卡片正文 */}
      <div className="p-5">
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
      </div>
    </Link>
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
