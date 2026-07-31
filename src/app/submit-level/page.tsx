import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import SubmitLevelClient from "@/components/SubmitLevelClient";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Submit a Level — Share Your Geometry Dash Level",
  description:
    "Submit your Geometry Dash level to GD Level Tools. Include the level name, ID, difficulty, and skill tags. Approved levels may appear on our site after manual review.",
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

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Submit a Level"
        subtitle="Share your Geometry Dash level with the community. Approved submissions may appear on GD Level Tools."
        accent="gold"
      />

      <SubmitLevelClient />
    </div>
  );
}
