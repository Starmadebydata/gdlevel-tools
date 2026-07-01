import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import LevelFinderClient from "@/components/LevelFinderClient";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Level Finder — Search Geometry Dash Levels by Difficulty & Skill",
  description:
    "Find Geometry Dash levels by difficulty, demon tier, skill type, length, and platform. Filter for mobile friendly levels, first demon candidates, and skill practice levels.",
  path: "/level-finder/",
});

export default function LevelFinderPage() {
  const levels = getPublishedLevels();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Level Finder", href: "/level-finder/" },
  ];

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

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Level Finder"
        subtitle="Search and filter Geometry Dash levels by difficulty, skill, platform, and more."
        accent="cyan"
      />

      <LevelFinderClient levels={levels} />
    </div>
  );
}
