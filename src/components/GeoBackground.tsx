"use client";

import { useMemo } from "react";

/**
 * GD 风格浮动几何背景
 * 在背景中生成随机分布的方块、三角形、菱形等 GD 标志性几何元素
 * 它们缓慢上浮 + 旋转，营造游戏世界的氛围
 *
 * 这是纯 CSS/SVG 实现，不需要任何图片文件
 */
export default function GeoBackground({
  count = 15,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  // 用 useMemo 确保粒子位置只在组件挂载时生成一次，不会每次渲染都变
  const particles = useMemo(() => {
    const colors = [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
    ];
    const shapes = ["cube", "spike", "diamond", "triangle"];

    return Array.from({ length: count }, (_, i) => {
      const shape = shapes[i % shapes.length];
      const color = colors[i % colors.length];
      // 随机位置、大小、动画时长、延迟
      const left = Math.random() * 100;
      const size = 12 + Math.random() * 28;
      const duration = 12 + Math.random() * 18;
      const delay = Math.random() * 15;
      const opacity = 0.08 + Math.random() * 0.12;

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
