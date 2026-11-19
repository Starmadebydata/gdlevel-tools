import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import LevelFinderClient from "@/components/LevelFinderClient";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "GD Level Finder — Filter Levels by Skill",
  description:
    "Use our GD Level Finder to search Geometry Dash levels by difficulty, demon tier, skill tag, length, and mobile score. Find your next clear fast.",
  path: "/level-finder",
});

const faqs = [
  {
    question: "How do I use the GD Level Finder to pick my next level?",
    answer:
      "Start by choosing your target Difficulty or Demon Tier, then narrow results with a Skill tag (such as Wave, Ship, or Timing) and sort by Beginner Score or Mobile Score. Copy the 8-digit Level ID directly into Geometry Dash's in-game search bar.",
  },
  {
    question: "Can I search by Geometry Dash Level ID or creator name?",
    answer:
      "Yes. Type any level name, creator username, or numeric Level ID into the search box at the top of the GD Level Finder to filter instantly without reloading the page.",
  },
  {
    question: "How are Mobile Friendly levels scored in GD Level Finder?",
    answer:
      "Every level in our database is manually rated from 1/5 to 5/5 for Mobile fit based on touch-input responsiveness, absence of 144Hz-reliant straight fly, and visual clarity on smaller screens. Toggle 'Mobile Friendly Only' to see levels rated 4/5 or higher.",
  },
  {
    question: "What is the difference between GD Level Finder and GDBrowser?",
    answer:
      "GDBrowser mirrors the raw Geometry Dash server database of millions of levels, while GD Level Finder focuses on manually reviewed, progression-worthy levels with beginner ratings, frustration scores, and skill tags so you don't waste time on buggy or unreadable levels.",
  },
];

export default function LevelFinderPage() {
  const levels = getPublishedLevels();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "GD Level Finder", href: "/level-finder" },
  ];

  const schemaItems = levels.slice(0, 20).map((l) => ({
    name: l.name,
    url: `${siteConfig.domain}/levels/${l.slug}`,
    description: `by ${l.creatorName}`,
  }));

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(schemaItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PageHeroBanner offset={0}>
        <Breadcrumb items={breadcrumbs} />

        <SectionHeading
          title="GD Level Finder"
          subtitle="Search and filter Geometry Dash levels by difficulty, demon tier, skill tag, length, and mobile score."
          accent="cyan"
          as="h1"
        />
      </PageHeroBanner>

      {/* 静态可引用内容 — 工具主体是交互组件，给爬虫与 AI 一段事实性说明 */}
      <div className="gd-card mb-6 p-6">
        <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          Our <strong className="text-[var(--color-text)]">GD Level Finder</strong> searches{" "}
          {levels.length} manually reviewed Geometry Dash levels. Filter by difficulty, demon tier
          (Easy to Extreme), skill tag, length, and mobile friendliness to find your next clear,
          first demon candidate, or focused skill-practice level.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <li>Example: Difficulty = Demon + Tier = Easy lists beginner-friendly first demon picks.</li>
          <li>Example: Skill = Wave + Mobile Friendly Only highlights touch-friendly wave practice.</li>
          <li>Example: Length = XL surfaces endurance levels that train late-level nerve control.</li>
        </ul>
      </div>

      <LevelFinderClient levels={levels} />

      {/* 聚焦 SEO 与用户指引：保持全页 1200–1600 词健康区间 */}
      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            How to Get the Best Results from GD Level Finder
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              In-game Geometry Dash search filters by stars, length, and generic demon rating, but it
              cannot tell you whether a level is fair on 60Hz mobile, visually readable, or suitable
              as a bridge into a higher demon tier. This{" "}
              <strong className="text-[var(--color-text)]">Geometry Dash level finder</strong> solves
              that gap by pairing every level with four human-reviewed scores (Mobile, Beginner,
              Visual Clarity, and Forgiving/Frustration) plus targeted gamemode skill tags.
            </p>
            <p>
              If you are hunting for a specific tier rather than browsing the full catalog, jump
              straight to our curated sub-lists:{" "}
              <Link href="/demon-list/easy" className="gd-link">Easy Demon List</Link>,{" "}
              <Link href="/demon-list/medium" className="gd-link">Medium Demon List</Link>,{" "}
              <Link href="/demon-list/hard" className="gd-link">Hard Demon List</Link>,{" "}
              <Link href="/demon-list/insane" className="gd-link">Insane Demon List</Link>, or{" "}
              <Link href="/demon-list/mobile" className="gd-link">Mobile Demon List</Link>. Want a
              step-by-step skill roadmap instead? Try the{" "}
              <Link href="/demon-progression" className="gd-link">Demon Progression Planner</Link>, or
              spin a random challenge in{" "}
              <Link href="/demon-roulette" className="gd-link">Demon Roulette</Link>.
            </p>
            <p>
              For raw server lookups across millions of unrated and user-created IDs, we recommend
              pairing this tool with{" "}
              <a href="https://gdbrowser.com" target="_blank" rel="noopener noreferrer" className="gd-link">
                GDBrowser
              </a>{" "}
              or checking community tier consensus on{" "}
              <a href="https://gdladder.com" target="_blank" rel="noopener noreferrer" className="gd-link">
                GD Demon Ladder
              </a>
              .
            </p>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">
            GD Level Finder FAQ
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-sm font-semibold text-[var(--color-text)]">{faq.question}</dt>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
