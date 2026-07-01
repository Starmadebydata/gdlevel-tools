"use client";

import { useSyncExternalStore, useCallback } from "react";

/**
 * 主题切换组件
 * 支持三种模式：深色（dark）、浅色（light）、跟随系统（auto）
 * 用户的选择保存在 localStorage 中，下次访问自动恢复
 *
 * 工作原理：
 * 1. 页面加载前，layout.tsx 里的内联脚本会先读取 localStorage 设置 data-theme 属性
 * 2. 这个组件通过 useSyncExternalStore 订阅 localStorage，自动显示当前主题
 * 3. 点击按钮在 dark → light → auto 之间循环切换
 * 4. 切换时更新 <html> 的 data-theme 属性 + 保存到 localStorage
 *
 * 为什么用 useSyncExternalStore 而不是 useEffect+setState：
 * React 19 不推荐在 effect 里同步调用 setState（会触发级联渲染）。
 * useSyncExternalStore 是订阅浏览器外部存储（localStorage）的官方方案，
 * 它能在 SSR 时返回 server snapshot、在客户端 hydration 后自动切换到真实值，
 * 既避免水合不匹配，也避免 effect 里的 setState。
 */
type Theme = "dark" | "light" | "auto";

/** 校验值是否是合法主题 */
function isValidTheme(v: string | null): v is Theme {
  return v === "dark" || v === "light" || v === "auto";
}

/** 读取当前主题：优先 localStorage，其次 html 上的 data-theme，最后默认 dark */
function getTheme(): Theme {
  if (typeof window === "undefined") return "dark"; // SSR 快照
  const saved = localStorage.getItem("gd-theme");
  if (isValidTheme(saved)) return saved;
  const current = document.documentElement.getAttribute("data-theme");
  if (isValidTheme(current)) return current;
  return "dark";
}

/** 订阅 localStorage 的 storage 事件 + 自定义的 theme-change 事件 */
function subscribeTheme(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener("gd-theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("gd-theme-change", callback);
  };
}

export default function ThemeToggle() {
  // 订阅外部存储（localStorage），自动响应主题变化
  const theme = useSyncExternalStore(
    subscribeTheme,
    getTheme, // client snapshot
    () => "dark" as Theme, // server snapshot（SSR 时固定返回 dark）
  );

  // 切换主题：dark → light → auto → dark 循环
  const toggleTheme = useCallback(() => {
    const current = getTheme();
    const next: Theme = current === "dark" ? "light" : current === "light" ? "auto" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gd-theme", next);
    // 通知所有订阅者主题变了（useSyncExternalStore 会重新读取）
    window.dispatchEvent(new Event("gd-theme-change"));
  }, []);

  // 根据当前主题显示不同的图标
  const icon = theme === "dark" ? <MoonIcon /> : theme === "light" ? <SunIcon /> : <AutoIcon />;
  const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "Auto";

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      aria-label={`Theme: ${label}. Click to switch.`}
      title={`Theme: ${label} — click to switch`}
      suppressHydrationWarning
    >
      {icon}
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
