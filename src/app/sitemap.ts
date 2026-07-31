import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedLevels } from "@/lib/data/levels";
import { getGuides } from "@/lib/data/guides";

/**
 * 动态 sitemap
 * 包含所有静态页面 + 关卡详情 + 指南详情
 *
 * URL 统一为非尾斜杠形式（与线上 308 重定向的 200 终点一致，首页根路径除外）。
 */

// lastmod 手动维护：页面内容实际修改时更新对应日期。
// 不要用 new Date() —— 每次构建/请求都变，搜索引擎会视为无效或操纵信号。
const CONTENT_UPDATED_AT = "2026-07-21"; // 首页及工具/指南列表页最近内容更新日期
const LEGAL_UPDATED_AT = "2026-06-30"; // 法律与信息页（about/contact/privacy/terms/dmca）最近内容更新日期
const SUBMIT_UPDATED_AT = "2026-06-30"; // 提交页最近内容更新日期

export default function sitemap(): MetadataRoute.Sitemap {
  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.domain}/`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteConfig.domain}/level-finder`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-list`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/first-demon-picker`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/demon-progression`, lastModified: CONTENT_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
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

  // 关卡详情页（lastmod 用数据里的真实 updatedAt）
  const levelPages: MetadataRoute.Sitemap = getPublishedLevels().map((level) => ({
    url: `${siteConfig.domain}/levels/${level.slug}`,
    lastModified: new Date(level.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

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

  return [...staticPages, ...levelPages, ...guidePages];
}
