/**
 * 站点全局配置
 * 集中管理站点名称、域名、导航等常量
 *
 * 内部链接统一为非尾斜杠形式（与线上 308 重定向的 200 终点一致）。
 */

export const siteConfig = {
  name: "GD Level Tools",
  shortName: "GD Level Tools",
  domain: "https://geometrydashlevel.com",
  description:
    "Find Geometry Dash levels, choose your next demon, check vault codes, fix common issues, and follow skill based progression routes.",
  tagline: "Geometry Dash Level Finder and Demon Progression Tools",
  subtitle:
    "Find levels, choose your next demon, unlock rewards, fix common issues, and follow skill based progression routes.",
  language: "en",
  locale: "en_US",
  /** 内容作者（结构化数据 Person） */
  author: {
    name: "Starmade",
    url: "https://geometrydashlevel.com/about",
    sameAs: ["https://github.com/Starmadebydata"],
  },
  /** 组织社交档案（Organization sameAs） */
  socialProfiles: ["https://github.com/Starmadebydata/gdlevel-tools"],
} as const;

/** 顶部导航项 */
export const navItems = [
  { label: "Level Finder", href: "/level-finder" },
  { label: "Demon List", href: "/demon-list" },
  { label: "Progression", href: "/demon-progression" },
  { label: "First Demon", href: "/first-demon-picker" },
  { label: "Codes", href: "/vault-codes" },
  { label: "Guides", href: "/guides" },
  { label: "Fixes", href: "/fix" },
] as const;

/** 移动端导航 */
export const mobileNavItems = [
  { label: "Tools", href: "/level-finder" },
  { label: "Demons", href: "/demon-list" },
  { label: "Codes", href: "/vault-codes" },
  { label: "Guides", href: "/guides" },
  { label: "Submit", href: "/submit-level" },
] as const;

/** Footer 链接分组 */
export const footerLinks = {
  Tools: [
    { label: "Level Finder", href: "/level-finder" },
    { label: "First Demon Picker", href: "/first-demon-picker" },
    { label: "Demon Progression", href: "/demon-progression" },
    { label: "Demon List", href: "/demon-list" },
    { label: "Vault Codes", href: "/vault-codes" },
  ],
  Guides: [
    { label: "Diamonds", href: "/guides/diamonds" },
    { label: "Gold Keys", href: "/guides/gold-keys" },
    { label: "Geode", href: "/mods/geode" },
    { label: "FPS Unlock", href: "/mods/fps-unlock-guide" },
    { label: "Fixes", href: "/fix" },
  ],
  Legal: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "DMCA", href: "/dmca" },
  ],
} as const;

/** Fan site 声明 */
export const fanSiteDisclaimer =
  "GD Level Tools is an independent fan made resource and is not affiliated with RobTop Games. Geometry Dash and related names, images, and assets belong to their respective owners.";
