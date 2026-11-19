import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import TierLevelGrid from "@/components/TierLevelGrid";
import { getPublishedLevels } from "@/lib/data/levels";
import { DEMON_TIERS, getDemonTierBySlug } from "@/lib/data/demon-tiers";
import { generateSeo, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return DEMON_TIERS.map((t) => ({ tier: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier } = await params;
  const config = getDemonTierBySlug(tier);
  if (!config) return generateSeo({ title: "Demon Tier Not Found", noIndex: true });

  return generateSeo({
    title: config.seoTitle,
    description: config.seoDescription,
    path: `/demon-list/${config.slug}`,
  });
}

export default async function DemonTierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier } = await params;
  const config = getDemonTierBySlug(tier);
  if (!config) notFound();

  const allLevels = getPublishedLevels();
  const levels = allLevels.filter(config.filter).sort(config.sort);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon List", href: "/demon-list" },
    { name: config.navLabel, href: `/demon-list/${config.slug}` },
  ];

  const schemaItems = levels.slice(0, 20).map((l) => ({
    name: l.name,
    url: `${siteConfig.domain}/levels/${l.slug}`,
    description: `by ${l.creatorName} (ID: ${l.levelId})`,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              breadcrumbs.map((b) => ({ name: b.name, url: `${siteConfig.domain}${b.href}` }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(schemaItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(config.faqs)) }}
      />

      <PageHeroBanner offset={4}>
        <Breadcrumb items={breadcrumbs} />
        <SectionHeading
          title={config.h1}
          subtitle={config.subtitle}
          accent="purple"
          as="h1"
        />
      </PageHeroBanner>

      {/* Tier 导航栏 — 强化内链互导 */}
      <nav aria-label="Demon list tiers" className="mb-6 flex flex-wrap gap-2">
        <Link
          href="/demon-list"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          All Tiers
        </Link>
        {DEMON_TIERS.map((t) => {
          const active = t.slug === config.slug;
          return (
            <Link
              key={t.slug}
              href={`/demon-list/${t.slug}`}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {t.navLabel}
            </Link>
          );
        })}
      </nav>

      {/* Quick Answer + 基准数据卡 */}
      <div className="gd-card mb-8 p-6">
        <h2 className="mb-2 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          {config.quickAnswer}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {config.benchmarks.map((b) => (
            <div
              key={b.label}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3"
            >
              <p className="text-xs text-[var(--color-text-dim)]">{b.label}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">{b.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 关卡列表 */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--color-text)]">
          {levels.length} Curated {config.navLabel}
        </h2>
        <div className="flex gap-3 text-xs">
          <Link href="/demon-roulette" className="gd-link">
            Try Demon Roulette →
          </Link>
          <Link href="/demon-tracker" className="gd-link">
            Track Clears →
          </Link>
        </div>
      </div>

      <TierLevelGrid levels={levels} tierLabel={config.navLabel} />

      {/* 深度指南 + 工具引流 + FAQ */}
      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            {config.guideHeading}
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {config.guideParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              Want a personalized route based on your exact demon count and weak skills? Use the{" "}
              <Link href="/demon-progression" className="gd-link">
                GD Demon Progression Planner
              </Link>
              , filter all levels in{" "}
              <Link href="/level-finder" className="gd-link">
                GD Level Finder
              </Link>
              , or log your completions in{" "}
              <Link href="/demon-tracker" className="gd-link">
                Demon Tracker
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">FAQ</h2>
          <dl className="space-y-4">
            {config.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-sm font-semibold text-[var(--color-text)]">{faq.question}</dt>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
