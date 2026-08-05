/**
 * 工具页页头横幅 — GD 真实关卡截图带背景
 *
 * 用法：包住页面顶部的 Breadcrumb + SectionHeading，结构和文案不变，
 * 只是给页头加上游戏截图带（缓慢滚动）+ 遮罩 + 扫描线纹理。
 *
 * offset 用于让不同页面展示不同的截图组合（0-15 之间取值）。
 * 素材是 public/images/wall/ 下的 560px 缩略图。
 */

const SHOTS = [
  "the-nightmare", "bloodbath", "cataclysm", "clubstep", "clutterfunk", "electrodynamix",
  "polargeist", "death-moon", "demon-park", "nine-circles", "jawbreaker", "forsaken-city",
  "crescendo", "impulse", "speed-racer", "windy-landscape",
];

export default function PageHeroBanner({
  offset = 0,
  children,
}: {
  offset?: number;
  children: React.ReactNode;
}) {
  // 从 offset 开始轮转取 8 张，不同页面看到不同的截图组合
  const row = Array.from({ length: 8 }, (_, i) => SHOTS[(offset + i) % SHOTS.length]);

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl border border-[var(--color-border)] px-4 py-8 sm:px-8 sm:py-10">
      {/* 截图带 — 缓慢横向滚动（纯装饰） */}
      <div className="gd-wall-band" aria-hidden="true">
        <div className="gd-wall-row gd-wall-row-slow">
          {[...row, ...row].map((slug, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${slug}-${i}`}
              src={`/images/wall/${slug}.jpg`}
              alt=""
              className="gd-wall-shot"
              decoding="async"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* 遮罩 — 左侧压暗保证标题可读 */}
      <div className="gd-banner-overlay" aria-hidden="true" />

      {/* 扫描线纹理 */}
      <div className="gd-scanlines" aria-hidden="true" />

      {/* 底部霓虹线 — 呼应首页地面条 */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/70 via-[var(--color-secondary)]/40 to-transparent"
        aria-hidden="true"
      />

      {/* 页头内容（Breadcrumb + 标题） */}
      <div className="relative">{children}</div>
    </div>
  );
}
