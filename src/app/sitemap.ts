import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedLevels } from "@/lib/data/levels";
import { isIndexedLevel, getLevelDeepDive } from "@/lib/data/level-guides";
import { DEMON_TIERS } from "@/lib/data/demon-tiers";
import { getGuides } from "@/lib/data/guides";

/**
 * 动态 sitemap
 * 包含所有核心工具页、独立分难度榜单页、28 个深度评测关卡页 + 指南详情页
 *
 * URL 统一为非尾斜杠形式（与线上 308 重定向的 200 终点一致，首页根路径除外）。
 * 其余 61 个薄模板关卡页设为 noindex, follow 且不进 sitemap，以保护整站 Google 质量分与 AdSense 审核。
 */

const CONTENT_UPDATED_AT = "2026-11-19";
const LEGAL_UPDATED_AT = "2026-11-19";
const SUBMIT_UPDATED_AT = "2026-11-19";

export default function sitemap(): MetadataRoute.Sitemap {
  // 核心静态页面与工具页
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.domain}/`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteConfig.domain}/level-finder`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-list`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-progression`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-roulette`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-tracker`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/first-demon-picker`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/vault-codes`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/guides`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/fix`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/mods`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.domain}/submit-level`, lastModified: SUBMIT_UPDATED_AT, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.domain}/about`, lastModified: LEGAL_UPDATED_AT, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.domain}/contact`, lastModified: LEGAL_UPDATED_AT, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.domain}/privacy`, lastModified: LEGAL_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.domain}/terms`, lastModified: LEGAL_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.domain}/dmca`, lastModified: LEGAL_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 独立 Demon Tier 榜单页（P1 高意图蓝海词）
  const tierPages: MetadataRoute.Sitemap = DEMON_TIERS.map((t) => ({
    url: `${siteConfig.domain}/demon-list/${t.slug}`,
    lastModified: CONTENT_UPDATED_AT,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 仅收录 28 个已深度扩写评测的高价值关卡页
  const levelPages: MetadataRoute.Sitemap = getPublishedLevels()
    .filter((level) => isIndexedLevel(level.slug))
    .map((level) => {
      const deep = getLevelDeepDive(level);
      return {
        url: `${siteConfig.domain}/levels/${level.slug}`,
        lastModified: new Date(deep?.auditedAt ?? level.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    });

  // 指南详情页（lastmod 用数据里的真实 updatedAt）
  const guidePages: MetadataRoute.Sitemap = getGuides().map((guide) => {
    const basePath = guide.category === "fix" ? "/fix" : guide.category === "mods" ? "/mods" : "/guides";
    return {
      url: `${siteConfig.domain}${basePath}/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...tierPages, ...levelPages, ...guidePages];
}
