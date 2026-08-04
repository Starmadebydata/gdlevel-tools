import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import type { Guide } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, articleSchema, howToSchema } from "@/lib/seo";

/**
 * 权威外链映射：攻略正文中提到的外部权威来源域名 → 链接。
 * 纯文本提及会被渲染成真实超链接（E-E-A-T 可交叉验证信号）。
 */
const EXTERNAL_SOURCES: Record<string, string> = {
  "pointercrate.com": "https://pointercrate.com/demonlist/",
  "geode-sdk.org": "https://geode-sdk.org",
  "aredl.net": "https://aredl.net",
};

const EXTERNAL_SOURCES_PATTERN = new RegExp(
  `\\b(${Object.keys(EXTERNAL_SOURCES)
    .map((d) => d.replace(/\./g, "\\."))
    .join("|")})\\b`,
  "g"
);

/** 把正文中的权威来源域名渲染为外链 */
function linkifySources(text: string): React.ReactNode {
  const parts = text.split(EXTERNAL_SOURCES_PATTERN);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    EXTERNAL_SOURCES[part] ? (
      <a
        key={i}
        href={EXTERNAL_SOURCES[part]}
        target="_blank"
        rel="noopener noreferrer"
        className="gd-link"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

/**
 * 指南详情视图组件
 * 在 /guides/[slug] 和 /fix/[slug] 和 /mods/[slug] 下复用
 */
export default function GuideView({
  guide,
  basePath,
}: {
  guide: Guide;
  basePath: string; // "/guides" or "/fix" or "/mods"
}) {
  const baseLabel = basePath === "/fix" ? "Fixes" : basePath === "/mods" ? "Mods" : "Guides";
  const url = `${siteConfig.domain}${basePath}/${guide.slug}`;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: baseLabel, href: basePath },
    { name: guide.title, href: `${basePath}/${guide.slug}` },
  ];

  // fix 指南且正文含步骤段落时，汇总所有步骤输出 HowTo schema
  const howToSteps =
    basePath === "/fix"
      ? guide.body.flatMap((section) => section.steps ?? [])
      : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(
            breadcrumbs.map((b) => ({ name: b.name, url: `${siteConfig.domain}${b.href}` }))
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
          title: guide.title,
          description: guide.summary,
          url,
          updatedAt: guide.updatedAt,
        }))}}
      />
      {guide.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(guide.faq)) }}
        />
      )}
      {howToSteps.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({
            name: guide.title,
            url,
            steps: howToSteps,
          })) }}
        />
      )}

      <Breadcrumb items={breadcrumbs} />

      {/* 标题 */}
      <div className="mb-2 h-1 w-12 rounded-full bg-[var(--color-primary)]" />
      <h1 className="mb-3 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
        <span className="gd-glow-text">{guide.title}</span>
      </h1>
      <p className="mb-6 text-base text-[var(--color-text-muted)]">{guide.summary}</p>
      {/* 署名行：作者（链到 About 页）+ 更新日期，名字取自 siteConfig.author */}
      <p className="mb-8 text-xs text-[var(--color-text-dim)]">
        By{" "}
        <Link href="/about" className="gd-link">
          {siteConfig.author.name}
        </Link>{" "}
        · Updated {guide.updatedAt}
      </p>

      {/* 正文 */}
      <div className="space-y-8">
        {guide.body.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 text-xl font-bold text-[var(--color-text)]">{section.heading}</h2>
            <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">{linkifySources(section.content)}</p>
            {section.steps && (
              <ol className="space-y-3">
                {section.steps.map((step, j) => (
                  <li key={j} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                      {j + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)]">{step.title}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{linkifySources(step.detail)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}
      </div>

      {/* FAQ */}
      {guide.faq.length > 0 && (
        <div className="mt-12">
          <div className="mb-4 h-1 w-12 rounded-full bg-[var(--color-secondary)]" />
          <h2 className="mb-4 text-xl font-bold text-[var(--color-text)]">FAQ</h2>
          <div className="space-y-3">
            {guide.faq.map((item) => (
              <div key={item.question} className="gd-card p-4">
                <h3 className="mb-2 text-sm font-bold text-[var(--color-text)]">{item.question}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{linkifySources(item.answer)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 相关指南 */}
      {guide.relatedGuideSlugs.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-[var(--color-text)]">Related Guides</h2>
          <div className="flex flex-wrap gap-2">
            {guide.relatedGuideSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/guides/${slug}`}
                className="gd-btn gd-btn-outline !py-2 !text-xs"
              >
                {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
