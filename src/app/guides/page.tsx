import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { getGuides } from "@/lib/data/guides";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Guides — Geometry Dash Rewards, Mods, and Skills",
  description:
    "Browse all Geometry Dash guides: how to get diamonds, gold keys, demon keys, user coins, the Master Emblem, how to install Geode, and more.",
  path: "/guides/",
});

const categoryLabels: Record<string, string> = {
  rewards: "Rewards",
  mods: "Mods & Tools",
  fix: "Fixes",
  skills: "Skills",
  demon: "Demons",
  general: "General",
};

const categoryColors: Record<string, string> = {
  rewards: "var(--color-accent)",
  mods: "var(--color-primary)",
  fix: "var(--color-secondary)",
  skills: "var(--color-easy)",
  demon: "var(--color-demon)",
  general: "var(--color-text-muted)",
};

export default function GuidesPage() {
  const guides = getGuides();
  const categories = ["rewards", "mods", "skills", "demon", "general"].filter((c) =>
    guides.some((g) => g.category === c)
  );

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides/" },
  ];

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

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Guides"
        subtitle="Learn how to get rewards, install mods, improve your skills, and more."
        accent="cyan"
      />

      <div className="space-y-10">
        {categories.map((cat) => {
          const catGuides = guides.filter((g) => g.category === cat);
          if (catGuides.length === 0) return null;
          const color = categoryColors[cat];

          return (
            <div key={cat}>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-7 w-1.5 rounded-full" style={{ background: color }} />
                <h2 className="text-lg font-bold" style={{ color }}>{categoryLabels[cat]}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catGuides.map((guide) => {
                  const href = guide.category === "fix" ? `/fix/${guide.slug}/` : guide.category === "mods" ? `/mods/${guide.slug}/` : `/guides/${guide.slug}/`;
                  return (
                    <Link key={guide.id} href={href} className="gd-card group block p-5">
                      <span className="gd-badge mb-3" style={{ backgroundColor: `${color}22`, color }}>
                        {categoryLabels[cat]}
                      </span>
                      <h3 className="mb-2 text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{guide.summary}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
