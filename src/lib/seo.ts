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
};

/** 生成页面 metadata */
export function generateSeo({
  title,
  description,
  path,
  noIndex,
}: SeoOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.tagline;

  const desc = description || siteConfig.description;
  // 全站权威 URL 为非尾斜杠形式（与线上 308 重定向的 200 终点一致，根路径除外）
  const cleanPath = path ? path.replace(/\/+$/, "") : "";
  const url = `${siteConfig.domain}${cleanPath}`;

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
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
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
