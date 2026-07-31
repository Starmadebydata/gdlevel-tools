import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { getGuidesByCategory } from "@/lib/data/guides";
import { generateSeo, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Mods & Tools — Geode, FPS Unlock, TPS, and More",
  description:
    "Guides for Geometry Dash mods and tools: how to install Geode, unlock FPS, understand TPS, and use community tools safely.",
  path: "/mods",
});

export default function ModsListPage() {
  const guides = getGuidesByCategory("mods");

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Mods", href: "/mods" },
  ];

  const schemaItems = guides.map((guide) => ({
    name: guide.title,
    url: `${siteConfig.domain}/mods/${guide.slug}`,
    description: guide.summary,
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
        title="Mods & Tools"
        subtitle="Guides for Geode, FPS unlock, TPS, and other community tools."
        accent="cyan"
      />

      {/* 风险提示 */}
      <div className="gd-card mb-6 border-[var(--color-accent)]/30 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L2 4v4c0 3 2.5 5.5 6 7 3.5-1.5 6-4 6-7V4l-6-3z" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--color-text)]">
              Mods are third-party tools, not affiliated with RobTop Games.
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              Always download from official project pages and check compatibility with your game version. Use at your own risk.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link key={guide.id} href={`/mods/${guide.slug}`} className="gd-card group block p-5">
            <span className="gd-badge mb-3" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 13%, transparent)", color: "var(--color-primary)" }}>
              Mod
            </span>
            <h3 className="mb-2 text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
              {guide.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{guide.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
