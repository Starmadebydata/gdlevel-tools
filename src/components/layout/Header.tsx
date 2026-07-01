"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * 顶部导航栏
 * 游戏风格深色导航 + 霓虹高亮 + 移动端抽屉
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
          <div className="relative flex h-9 w-9 items-center justify-center">
            {/* 几何方块 Logo */}
            <div className="absolute inset-0 rotate-45 rounded-md border-2 border-[var(--color-primary)] transition-transform group-hover:rotate-[135deg] duration-500" />
            <div className="absolute inset-1.5 rotate-45 rounded-sm bg-[var(--color-primary)]/20" />
            <span className="relative text-sm font-black text-[var(--color-primary)] gd-glow-text">GD</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold tracking-tight text-[var(--color-text)]">
              {siteConfig.shortName}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-bg-card)] hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Submit Button + Theme Toggle + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link href="/submit-level/" className="gd-btn gd-btn-primary hidden sm:inline-flex !py-2 !px-4 text-xs">
            Submit Level
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] lg:hidden"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2.5 text-sm font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/submit-level/"
              onClick={() => setMobileOpen(false)}
              className="gd-btn gd-btn-primary mt-3 w-full"
            >
              Submit Level
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
