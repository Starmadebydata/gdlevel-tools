"use client";

import { useSyncExternalStore, useCallback } from "react";
import Link from "next/link";

/**
 * Cookie 同意横幅组件
 *
 * 功能：
 * - 第一次访问时在页面底部显示一条小横幅
 * - 用户可以选择 "Accept"（接受）或 "Decline"（拒绝）
 * - 选择保存在 localStorage 里，下次访问不再显示
 * - 通过 GA4 Consent Mode v2 控制 Google Analytics 的 cookie 行为：
 *   · 接受 → gtag('consent', 'update', { analytics_storage: 'granted' })
 *   · 拒绝 → 保持 denied，GA4 仍会发送无 cookie 的服务端 ping（聚合数据可用）
 *
 * 为什么默认 denied：
 * GDPR 要求非必要 cookie（analytics 属于非必要）必须在用户同意后才能设置。
 * 所以页面加载时先 set 默认 denied，等用户点 Accept 才 update 为 granted。
 *
 * 架构说明（useSyncExternalStore）：
 * React 19 不推荐在 effect 里同步调用 setState（会触发级联渲染）。
 * 这里用 useSyncExternalStore 订阅 localStorage，和 ThemeToggle 的模式一致：
 * - getServerSnapshot 返回 "pending"（SSR 时不显示横幅，避免水合不匹配）
 * - getSnapshot 读取 localStorage，返回 "accepted" / "declined" / "pending"
 * - 用户点击按钮时，更新 localStorage + dispatchEvent 通知订阅者重新读取
 */

const STORAGE_KEY = "gd-cookie-consent";
type ConsentValue = "accepted" | "declined" | "pending";

/** 读取 localStorage 中的 consent 状态 */
function getConsent(): ConsentValue {
  if (typeof window === "undefined") return "pending"; // SSR 快照
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return "pending";
}

/** 订阅 localStorage 的 storage 事件 + 自定义的 consent-change 事件 */
function subscribeConsent(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener("gd-consent-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("gd-consent-change", callback);
  };
}

export default function CookieConsent() {
  // 订阅外部存储（localStorage），自动响应 consent 变化
  // SSR 时返回 "pending"（不显示），客户端 hydration 后读取真实值
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent, // client snapshot
    () => "pending" as ConsentValue, // server snapshot
  );

  /** 用户点击 Accept */
  const handleAccept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    updateGtagConsent("accepted");
    window.dispatchEvent(new Event("gd-consent-change"));
  }, []);

  /** 用户点击 Decline */
  const handleDecline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "declined");
    updateGtagConsent("declined");
    window.dispatchEvent(new Event("gd-consent-change"));
  }, []);

  // 只有 pending 状态（用户还没选过）才显示横幅
  if (consent !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)]/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            We use cookies to understand how you use our site and improve your
            experience. See our{" "}
            <Link
              href="/privacy/"
              className="font-medium text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[var(--color-primary-hover)]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 更新 GA4 Consent Mode 状态
 *
 * gtag('consent', 'update', {...}) 会通知 Google Analytics
 * 用户是否同意被设置 cookie。
 * - granted: GA4 正常工作，设置 _ga 等 cookie
 * - denied: GA4 不设置 cookie，但仍发送无 cookie 的服务端 ping
 *   （你仍能看到聚合的访问量数据，只是没有用户级追踪）
 *
 * 即使 gtag 还没加载完，这个命令也会缓存在 dataLayer 里，
 * 等 gtag 初始化后自动执行。
 */
function updateGtagConsent(consent: "accepted" | "declined") {
  if (typeof window === "undefined") return;
  const granted = consent === "accepted";
  const args = [
    "consent",
    "update",
    {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
    },
  ];
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    // gtag 还没加载，先 push 到 dataLayer，gtag 加载后会自动处理
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}

// 声明全局类型，让 TS 认识 window.gtag 和 window.dataLayer
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
