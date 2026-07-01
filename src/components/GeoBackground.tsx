"use client";

import { useMemo } from "react";

/**
 * GD 风格浮动几何背景
 * 在背景中生成随机分布的方块、三角形、菱形等 GD 标志性几何元素
 * 它们缓慢上浮 + 旋转，营造游戏世界的氛围
 *
 * 这是纯 CSS/SVG 实现，不需要任何图片文件
 *
 * 注意：React 19 要求 render 必须是纯函数，不能在 render 中调用 Math.random()。
 * 这里用一个基于 index 的确定性伪随机（mulberry32 种子哈希），
 * 既保证每个粒子位置/大小看起来是"随机"的，又保证同一次渲染结果稳定。
 */

/** 基于 seed 的确定性伪随机数生成器（mulberry32）—— 返回 [0,1) 的数 */
function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function GeoBackground({
  count = 15,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  // 用 useMemo 确保粒子位置只在 count 变化时重新生成
  // 用确定性伪随机，避免在 render 中调用 Math.random（React 19 纯函数要求）
  const particles = useMemo(() => {
    const colors = [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
    ];
    const shapes = ["cube", "spike", "diamond", "triangle"];
    // 固定种子，保证视觉布局稳定（也可换成 prop 传入不同种子）
    const rand = seededRandom(20260701);

    return Array.from({ length: count }, (_, i) => {
      const shape = shapes[i % shapes.length];
      const color = colors[i % colors.length];
      // 用确定性伪随机生成位置、大小、动画时长、延迟
      const left = rand() * 100;
      const size = 12 + rand() * 28;
      const duration = 12 + rand() * 18;
      const delay = rand() * 15;
      const opacity = 0.08 + rand() * 0.12;

      return { shape, color, left, size, duration, delay, opacity, id: i };
    });
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="gd-particle"
          style={{
            left: `${p.left}%`,
            bottom: "-50px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          <GeoShape shape={p.shape} color={p.color} size={p.size} />
        </div>
      ))}
    </div>
  );
}

/** GD 风格几何形状 — 纯 SVG/CSS 绘制 */
function GeoShape({
  shape,
  color,
  size,
}: {
  shape: string;
  color: string;
  size: number;
}) {
  if (shape === "cube") {
    // 方块 — GD 玩家方块
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke={color}
          strokeWidth="2"
        />
        <rect x="7" y="7" width="10" height="10" rx="1" fill={color} opacity="0.3" />
      </svg>
    );
  }

  if (shape === "spike") {
    // 尖刺 — GD 经典障碍物
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 22H2L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 8L18 20H6L12 8Z" fill={color} opacity="0.3" />
      </svg>
    );
  }

  if (shape === "diamond") {
    // 菱形 — GD 装饰元素
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 7L17 12L12 17L7 12L12 7Z" fill={color} opacity="0.3" />
      </svg>
    );
  }

  // triangle — 三角形
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L21 20H3L12 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
