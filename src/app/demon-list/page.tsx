import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { demonDifficultyColor, demonDifficultyLabel, lengthLabel, skillTagLabel } from "@/lib/ui";
import type { DemonDifficulty } from "@/lib/types";

export const metadata: Metadata = generateSeo({
  title: "Demon List — Best Geometry Dash Demons by Difficulty Tier",
  description:
    "Browse Geometry Dash demons by difficulty tier: Easy Demon, Medium Demon, Hard Demon, Insane Demon, and Extreme Demon. Find your next demon challenge with reviews and tips.",
  path: "/demon-list",
});

const tiers: { key: DemonDifficulty; label: string; desc: string }[] = [
  { key: "easy", label: "Easy Demon", desc: "Beginner friendly demons for your first completion." },
  { key: "medium", label: "Medium Demon", desc: "A step up — requires solid fundamentals." },
  { key: "hard", label: "Hard Demon", desc: "Rite of passage levels like Nine Circles." },
  { key: "insane", label: "Insane Demon", desc: "Endurance and consistency tests." },
  { key: "extreme", label: "Extreme Demon", desc: "The hardest levels in the game." },
];

export default function DemonListPage() {
  const levels = getPublishedLevels().filter((l) => l.difficulty === "demon");

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon List", href: "/demon-list" },
  ];

  const schemaItems = levels.map((l) => ({
    name: l.name,
    url: `${siteConfig.domain}/levels/${l.slug}`,
    description: `${demonDifficultyLabel(l.demonDifficulty!)} by ${l.creatorName}`,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(schemaItems)) }}
      />

      <PageHeroBanner offset={3}>
        <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Demon List"
        subtitle="Browse demons by difficulty tier. Each level includes reviews, tips, and recommended next steps."
        accent="purple"
        as="h1"
      />
      </PageHeroBanner>

      {/* Pointercrate 提示 */}
      <div className="gd-card mb-8 flex items-start gap-4 p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 8h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-[var(--color-text)]">
            Looking for the hardest demons in the world? Check the{" "}
            <a href="https://pointercrate.com/demonlist/" target="_blank" rel="noopener noreferrer" className="gd-link font-medium">
              Pointercrate Demon List
            </a>{" "}
            for the official Top 150 ranking.
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-dim)]">
            Our list focuses on recommended demons for progression, not the absolute hardest.
          </p>
        </div>
      </div>

      {/* 按 tier 分组 */}
      <div className="space-y-12">
        {tiers.map((tier) => {
          const tierLevels = levels.filter((l) => l.demonDifficulty === tier.key);
          if (tierLevels.length === 0) return null;

          const color = demonDifficultyColor(tier.key);

          return (
            <div key={tier.key}>
              {/* Tier 标题 */}
              <div className="mb-4 flex items-center gap-3">
                <div className="h-8 w-1.5 rounded-full" style={{ background: color }} />
                <div>
                  <h2 className="text-xl font-bold" style={{ color }}>
                    {tier.label}
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)]">{tier.desc}</p>
                </div>
                <span className="ml-auto text-sm text-[var(--color-text-dim)]">{tierLevels.length} levels</span>
              </div>

              {/* 关卡列表 */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tierLevels.map((level) => (
                  <Link
                    key={level.id}
                    href={`/levels/${level.slug}`}
                    className="gd-card gd-card-glow group block overflow-hidden p-0"
                    style={{ ["--card-glow" as string]: `${color}33` }}
                  >
                    {/* 缩略图 + 叠加信息 */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-soft)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/levels/${level.slug}.jpg`}
                        alt={`${level.name} by ${level.creatorName} — gameplay thumbnail`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* 渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* 难度徽章 — 左上角 */}
                      <span
                        className="absolute left-3 top-3 gd-badge backdrop-blur-sm"
                        style={{ backgroundColor: `${color}cc`, color: "#fff", border: `1px solid ${color}` }}
                      >
                        {tier.label}
                      </span>
                      {/* Level ID — 右上角 */}
                      <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-mono text-white/90 backdrop-blur-sm">
                        ID: {level.levelId}
                      </span>
                      {/* 标题 + 作者 — 底部叠加 */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-base font-bold leading-tight text-white drop-shadow-md group-hover:text-[var(--color-primary)] transition-colors">
                          {level.name}
                        </h3>
                        <p className="text-xs text-white/80">
                          by {level.creatorName} · {lengthLabel(level.length)}
                        </p>
                      </div>
                    </div>

                    {/* 卡片正文 — 技能标签 */}
                    <div className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {level.skillTags.slice(0, 4).map((tag) => (
                          <span key={tag} className="rounded bg-[var(--color-bg-soft)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)]">
                            {skillTagLabel(tag)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
