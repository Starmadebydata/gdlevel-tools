import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import LevelFinderClient from "@/components/LevelFinderClient";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Level Finder — Search Geometry Dash Levels by Difficulty & Skill",
  description:
    "Find Geometry Dash levels by difficulty, demon tier, skill type, length, and platform. Filter for mobile friendly levels, first demon candidates, and skill practice levels.",
  path: "/level-finder",
});

export default function LevelFinderPage() {
  const levels = getPublishedLevels();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Level Finder", href: "/level-finder" },
  ];

  const schemaItems = levels.map((l) => ({
    name: l.name,
    url: `${siteConfig.domain}/levels/${l.slug}`,
    description: `by ${l.creatorName}`,
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

      <PageHeroBanner offset={0}>
        <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Level Finder"
        subtitle="Search and filter Geometry Dash levels by difficulty, skill, platform, and more."
        accent="cyan"
        as="h1"
      />
      </PageHeroBanner>

      {/* 静态可引用内容 — 工具主体是交互组件，给爬虫与 AI 一段事实性说明 */}
      <div className="gd-card mb-6 p-6">
        <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          Level Finder searches {levels.length} manually reviewed Geometry Dash levels. You can
          filter by difficulty, demon tier (Easy to Extreme), skill tag, level length, and platform
          fit, including mobile friendly levels and first demon candidates.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <li>Example: Difficulty = Demon, Tier = Easy lists beginner-friendly first demon picks.</li>
          <li>Example: Skill tag = Wave plus Mobile filter shows wave practice that plays well on touch.</li>
          <li>Example: Length = XL shows long levels suited for endurance training.</li>
        </ul>
      </div>

      <LevelFinderClient levels={levels} />
    </div>
  );
}
