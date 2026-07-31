import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { getFixGuides } from "@/lib/data/guides";
import { generateSeo, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Fix Guides — Solve Geometry Dash Screen, FPS, and Loading Issues",
  description:
    "Fix screen dark, screen tearing, can't play online levels, V-Sync issues, and other common Geometry Dash problems with step by step guides.",
  path: "/fix",
});

export default function FixListPage() {
  const guides = getFixGuides();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Fixes", href: "/fix" },
  ];

  const schemaItems = guides.map((guide) => ({
    name: guide.title,
    url: `${siteConfig.domain}/fix/${guide.slug}`,
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
        title="Fix Guides"
        subtitle="Step by step solutions for common Geometry Dash issues."
        accent="purple"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link key={guide.id} href={`/fix/${guide.slug}`} className="gd-card group block p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M13 2a4 4 0 00-5 5L2 13v3l3-1 6-6a4 4 0 005-5l-2.5 2.5L11 4l2-2z" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="gd-badge" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 13%, transparent)", color: "var(--color-secondary)" }}>
                Fix
              </span>
            </div>
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
