import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideView from "@/components/GuideView";
import { getGuides, getGuideBySlug } from "@/lib/data/guides";
import { generateSeo } from "@/lib/seo";

export function generateStaticParams() {
  return getGuides()
    .filter((g) => g.category === "fix")
    .map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return generateSeo({ title: "Fix Not Found", noIndex: true });

  return generateSeo({
    title: guide.title,
    description: guide.summary,
    path: `/fix/${guide.slug}/`,
  });
}

export default async function FixGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide || guide.category !== "fix") {
    notFound();
  }

  return <GuideView guide={guide} basePath="/fix" />;
}
