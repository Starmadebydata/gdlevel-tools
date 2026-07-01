/**
 * Section 标题组件
 * 带霓虹下划线效果
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
  const glowClass =
    accent === "purple"
      ? "gd-glow-text-purple"
      : accent === "gold"
      ? "gd-glow-text-gold"
      : "gd-glow-text";

  const barColor =
    accent === "purple"
      ? "var(--color-secondary)"
      : accent === "gold"
      ? "var(--color-accent)"
      : "var(--color-primary)";

  return (
    <div className="mb-8">
      <div className="mb-2 h-1 w-12 rounded-full" style={{ background: barColor }} />
      <h2 className={`gd-section-title ${glowClass}`}>{title}</h2>
      {subtitle && <p className="gd-section-subtitle">{subtitle}</p>}
    </div>
  );
}
