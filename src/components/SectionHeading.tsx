/**
 * Section 标题组件
 * GD 风格：旋转菱形徽章 + 展示字体大写标题 + 硬质投影
 */
export default function SectionHeading({
  title,
  subtitle,
  accent = "cyan",
}: {
  title: string;
  subtitle?: string;
  accent?: "cyan" | "purple" | "gold";
}) {
  const barColor =
    accent === "purple"
      ? "var(--color-secondary)"
      : accent === "gold"
      ? "var(--color-accent)"
      : "var(--color-primary)";

  return (
    <div className="mb-8">
      {/* GD 风格菱形徽章 + 装饰线 */}
      <div className="mb-3 flex items-center gap-3">
        <div
          className="h-3.5 w-3.5 rotate-45 border-2"
          style={{ borderColor: barColor, boxShadow: `0 0 10px color-mix(in srgb, ${barColor} 40%, transparent)` }}
        />
        <div
          className="h-px flex-1 max-w-16"
          style={{ background: `linear-gradient(90deg, ${barColor}, transparent)` }}
        />
      </div>
      {/* 硬质投影 + 主题色微光（内联样式避免与 glow class 冲突） */}
      <h2
        className="gd-section-title"
        style={{ textShadow: `3px 3px 0 var(--gd-hard-shadow), 0 0 24px color-mix(in srgb, ${barColor} 27%, transparent)` }}
      >
        {title}
      </h2>
      {subtitle && <p className="gd-section-subtitle">{subtitle}</p>}
    </div>
  );
}
