import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * SEO helper — 统一生成 metadata
 */

type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  /** 不编入索引但允许爬虫沿内链抓取（用于薄内容长尾页收敛） */
  noIndexFollow?: boolean;
};

/** 生成页面 metadata */
export function generateSeo({
  title,
  description,
  path,
  noIndex,
  noIndexFollow,
}: SeoOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.tagline;

  const desc = description || siteConfig.description;
  // 全站权威 URL 为非尾斜杠形式（与线上 308 重定向的 200 终点一致，根路径除外）
  const cleanPath = path ? path.replace(/\/+$/, "") : "";
  const url = `${siteConfig.domain}${cleanPath}`;

  const robots = noIndex
    ? { index: false, follow: false }
    : noIndexFollow
      ? { index: false, follow: true }
      : undefined;

  return {
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    ...(robots ? { robots } : {}),
  };
}

/** JSON-LD WebSite schema */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.domain}/#org` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/level-finder?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** JSON-LD Organization schema */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#org`,
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    // Google 不支持 SVG logo，使用 PNG
    logo: `${siteConfig.domain}/images/gd-cube-512.png`,
    image: `${siteConfig.domain}/images/gd-cube-512.png`,
    sameAs: [...siteConfig.socialProfiles],
  };
}

/** JSON-LD BreadcrumbList schema */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** JSON-LD FAQPage schema */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** JSON-LD Article schema */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  updatedAt: string;
  publishedAt?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    image: opts.image ?? `${siteConfig.domain}/images/gd-level-tools-banner.png`,
    datePublished: opts.publishedAt ?? opts.updatedAt,
    dateModified: opts.updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: { "@id": `${siteConfig.domain}/#org` },
  };
}

/** JSON-LD HowTo schema — 用于带步骤的 fix 指南 */
export function howToSchema(opts: {
  name: string;
  url: string;
  steps: { title: string; detail: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: `${s.title} ${s.detail}`,
    })),
  };
}

/** JSON-LD AboutPage schema */
export function aboutPageSchema(opts: { name: string; url: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: opts.name,
    url: opts.url,
    description: opts.description,
    isPartOf: { "@id": `${siteConfig.domain}/#website` },
  };
}

/** JSON-LD ContactPage schema */
export function contactPageSchema(opts: { name: string; url: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: opts.name,
    url: opts.url,
    description: opts.description,
    isPartOf: { "@id": `${siteConfig.domain}/#website` },
  };
}

/**
 * 把 YYYY-MM-DD（或无时区的日期时间）转成 ISO 8601 DateTime。
 * Google VideoObject 的 uploadDate 必须带时区，否则 GSC 报「缺少时区」/「日期时间值无效」。
 */
export function toIso8601DateTime(date: string): string {
  const trimmed = date.trim();
  if (/[zZ]$|[+-]\d{2}:\d{2}$/.test(trimmed)) {
    return trimmed.includes(" ") ? trimmed.replace(" ", "T") : trimmed;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T00:00:00Z`;
  }
  return `${trimmed.replace(" ", "T")}Z`;
}

/** JSON-LD VideoObject schema — 关卡展示视频 */
export function videoObjectSchema(opts: {
  name: string;
  description: string;
  youtubeId: string;
  uploadDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${opts.youtubeId}/hqdefault.jpg`,
    uploadDate: toIso8601DateTime(opts.uploadDate),
    embedUrl: `https://www.youtube.com/embed/${opts.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${opts.youtubeId}`,
  };
}

/** JSON-LD ItemList schema */
export function itemListSchema(
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
