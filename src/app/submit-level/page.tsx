import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import SubmitLevelClient from "@/components/SubmitLevelClient";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Submit a Geometry Dash Level",
  description:
    "Submit your Geometry Dash level to GD Level Tools. Include the level name, ID, difficulty, and skill tags for manual editorial review.",
  path: "/submit-level",
});

export default function SubmitLevelPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Submit Level", href: "/submit-level" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(
            breadcrumbs.map((b) => ({ name: b.name, url: `${siteConfig.domain}${b.href}` }))
          )),
        }}
      />

      <PageHeroBanner offset={11}>
        <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Submit a Level"
        subtitle="Share your Geometry Dash level with the community. Approved submissions may appear on GD Level Tools."
        accent="gold"
        as="h1"
      />
      </PageHeroBanner>

      <SubmitLevelClient />

      {/* 编辑审核标准说明 — 满足 AdSense UGC 审核透明度要求 */}
      <section className="gd-card mt-8 p-6">
        <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
          Editorial Review Process &amp; Guidelines
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Submissions are not published automatically. Every submitted level enters a manual review
          queue and is verified in-game within 3–5 business days before appearing in Level Finder or
          our Demon Lists.
        </p>
        <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
          <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Must include a valid, playable Geometry Dash numeric Level ID.</li>
          <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Rated levels and well-known community progression picks are prioritized.</li>
          <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Spam, duplicate submissions, promotional links, or offensive content are rejected automatically.</li>
        </ul>
      </section>
    </div>
  );
}
