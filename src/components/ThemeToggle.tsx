"use client";

import { useEffect, useState } from "react";

/**
 * 主题切换组件
 * 支持三种模式：深色（dark）、浅色（light）、跟随系统（auto）
 * 用户的选择保存在 localStorage 中，下次访问自动恢复
 *
 * 工作原理：
 * 1. 页面加载前，layout.tsx 里的内联脚本会先读取 localStorage 设置 data-theme 属性
 * 2. 这个组件挂载后读取当前主题，显示对应的图标
 * 3. 点击按钮在 dark → light → auto 之间循环切换
 * 4. 切换时更新 <html> 的 data-theme 属性 + 保存到 localStorage
 */
type Theme = "dark" | "light" | "auto";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // 组件挂载后读取当前主题
  useEffect(() => {
    const saved = localStorage.getItem("gd-theme") as Theme | null;
    if (saved && ["dark", "light", "auto"].includes(saved)) {
      setTheme(saved);
    } else {
      // 没有保存过的话，读取 html 上已有的值（防闪烁脚本设置的）
      const current = document.documentElement.getAttribute("data-theme") as Theme;
      setTheme(current || "dark");
    }
    setMounted(true);
  }, []);

  // 切换主题：dark → light → auto → dark 循环
  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : theme === "light" ? "auto" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gd-theme", next);
  };

  // 根据当前主题显示不同的图标
  const icon = theme === "dark" ? <MoonIcon /> : theme === "light" ? <SunIcon /> : <AutoIcon />;
  const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "Auto";

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      aria-label={`Theme: ${label}. Click to switch.`}
      title={`Theme: ${label} — click to switch`}
    >
      {/* mounted 前显示占位图标，避免水合不匹配 */}
      {mounted ? icon : <MoonIcon />}
    </button>
  );
}

/** 月亮图标 — 深色主题 */
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 太阳图标 — 浅色主题 */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 自动图标 — 跟随系统 */
function AutoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" />
      <path d="M12 9l4-3M12 15l-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
