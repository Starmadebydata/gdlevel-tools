import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
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
  path: "/demon-list/",
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
    { name: "Demon List", href: "/demon-list/" },
  ];

  const schemaItems = levels.map((l) => ({
    name: l.name,
    url: `${siteConfig.domain}/levels/${l.slug}/`,
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

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Demon List"
        subtitle="Browse demons by difficulty tier. Each level includes reviews, tips, and recommended next steps."
        accent="purple"
      />

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
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tierLevels.map((level) => (
                  <Link
                    key={level.id}
                    href={`/levels/${level.slug}/`}
                    className="gd-card group block p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="gd-badge" style={{ backgroundColor: `${color}22`, color, border: `1px solid ${color}44` }}>
                        {tier.label}
                      </span>
                      <span className="text-xs text-[var(--color-text-dim)] font-mono">ID: {level.levelId}</span>
                    </div>
                    <h3 className="mb-1 text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {level.name}
                    </h3>
                    <p className="mb-2 text-xs text-[var(--color-text-muted)]">
                      by {level.creatorName} · {lengthLabel(level.length)}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {level.skillTags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded bg-[var(--color-bg-soft)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                          {skillTagLabel(tag)}
                        </span>
                      ))}
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
