"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/**
 * 滚动入场动画组件
 * 当元素滚动进入视口时，触发 CSS 动画让元素淡入上滑出现
 * 让页面有"活"的感觉，而不是一开始所有内容都静态显示
 *
 * 用法：
 * <ScrollReveal>内容</ScrollReveal>
 * <ScrollReveal animation="left">从左滑入</ScrollReveal>
 * <ScrollReveal delay={200}>延迟200ms出现</ScrollReveal>
 */
export default function ScrollReveal({
  children,
  animation = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  animation?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 用 IntersectionObserver 监听元素是否进入视口
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 进入视口后，延迟一点再显示（支持错开动画）
          const timer = setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
          return () => clearTimeout(timer);
        }
      },
      {
        // 元素露出 15% 就触发
        threshold: 0.15,
        // 提前 50px 开始触发，感觉更流畅
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // 根据动画类型选择对应的 CSS 类名
  const animClass =
    animation === "left"
      ? "gd-reveal-left"
      : animation === "right"
      ? "gd-reveal-right"
      : animation === "scale"
      ? "gd-reveal-scale"
      : "gd-reveal";

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      className={`${animClass} ${visible ? "gd-reveal-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
