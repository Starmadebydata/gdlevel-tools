"use client";

import { useState } from "react";

/**
 * 关卡视频播放器组件
 * 显示关卡缩略图，点击后嵌入 YouTube iframe 播放展示视频
 *
 * 工作原理：
 * 1. 初始状态显示缩略图 + 播放按钮 overlay
 * 2. 用户点击后，替换为 YouTube iframe（autoplay）
 * 3. 没有 youtubeId 时，只显示缩略图（不可点击）
 */
export default function LevelVideoPlayer({
  slug,
  name,
  creatorName,
  youtubeId,
}: {
  slug: string;
  name: string;
  creatorName: string;
  youtubeId?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbSrc = `/images/levels/${slug}.jpg`;
  const alt = `${name} by ${creatorName} — gameplay thumbnail`;

  // 点击播放：切换到 YouTube iframe
  const handlePlay = () => {
    if (!youtubeId) return;
    setPlaying(true);
  };

  // 已经在播放 → 显示 YouTube iframe
  if (playing && youtubeId) {
    return (
      <div className="gd-card mb-6 overflow-hidden p-0">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={`${name} — YouTube showcase`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // 默认状态：缩略图 + 播放按钮（如果有 youtubeId）
  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={!youtubeId}
      className="gd-card group mb-6 block w-full overflow-hidden p-0 disabled:cursor-default"
      aria-label={youtubeId ? `Play ${name} showcase video` : `${name} thumbnail`}
    >
      <div className="relative aspect-video w-full bg-[var(--color-bg-soft)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbSrc}
          alt={alt}
          className={`h-full w-full object-cover ${youtubeId ? "transition-transform duration-500 group-hover:scale-105" : ""}`}
        />

        {/* 渐变遮罩（有视频时才显示，让播放按钮更突出） */}
        {youtubeId && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity group-hover:from-black/70" />
        )}

        {/* 播放按钮 — 居中，有 youtubeId 时才显示 */}
        {youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/90 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
              {/* YouTube 风格播放三角形 */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* 右下角 "Watch on YouTube" 标签 */}
        {youtubeId && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch showcase
          </div>
        )}
      </div>
    </button>
  );
}
