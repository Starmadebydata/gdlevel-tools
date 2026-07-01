import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import DemonProgressionClient from "@/components/DemonProgressionClient";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Demon Progression Planner — From Easy Demon to Extreme Demon",
  description:
    "Plan your Geometry Dash demon progression route. Tell us how many demons you have beaten and get personalized recommendations for your next challenge, from Easy Demon to Extreme Demon.",
  path: "/demon-progression/",
});

export default function DemonProgressionPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon Progression", href: "/demon-progression/" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
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
        title="Demon Progression Planner"
        subtitle="Enter how many demons you have beaten to see your current stage and recommended next levels."
        accent="gold"
      />

      <DemonProgressionClient />
    </div>
  );
}
