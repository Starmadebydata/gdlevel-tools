import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedLevels } from "@/lib/data/levels";
import { getGuides } from "@/lib/data/guides";

/**
 * 动态 sitemap
 * 包含所有静态页面 + 关卡详情 + 指南详情
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.domain}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteConfig.domain}/level-finder/`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-list/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/first-demon-picker/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-progression/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/vault-codes/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/guides/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/fix/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/mods/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/submit-level/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.domain}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.domain}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.domain}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.domain}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.domain}/dmca/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 关卡详情页
  const levelPages: MetadataRoute.Sitemap = getPublishedLevels().map((level) => ({
    url: `${siteConfig.domain}/levels/${level.slug}/`,
    lastModified: new Date(level.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 指南详情页
  const guidePages: MetadataRoute.Sitemap = getGuides().map((guide) => {
    const basePath = guide.category === "fix" ? "/fix" : guide.category === "mods" ? "/mods" : "/guides";
    return {
      url: `${siteConfig.domain}${basePath}/${guide.slug}/`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...levelPages, ...guidePages];
}
