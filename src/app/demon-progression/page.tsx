import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import DemonProgressionClient from "@/components/DemonProgressionClient";
import { parseProgressionSearchParams } from "@/lib/recommendations";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Demon Progression Planner — Easy to Extreme Route",
  description:
    "Plan your Geometry Dash demon progression. Enter how many demons you beat, your hardest tier, platform, and skill focus. Get bridge levels for the Easy → Hard jump, a no-skip checklist, and a clear next-step route.",
  path: "/demon-progression/",
});

const faqs = [
  {
    question: "How many Easy Demons should I beat before Medium?",
    answer:
      "Most players feel more stable after about 10 Easy Demon clears before grinding Medium in normal mode. If you only have a handful of Easy clears, use our bridge Medium recommendations instead of jumping to a flashy showcase level.",
  },
  {
    question: "Why does this tool ask for highest tier and not just demon count?",
    answer:
      "Count and tier measure different things. Someone with 30 Easy Demons is not in the same place as someone with 10 clears including a Hard Demon. Combining both inputs avoids bad tier jumps.",
  },
  {
    question: "What is a bridge level?",
    answer:
      "A bridge level is a lower-frustration pick in the next tier, meant to teach pacing and patterns without a sudden wall. Bridge picks are especially useful for the Easy → Medium and Medium → Hard jumps.",
  },
  {
    question: "Can I share my progression plan?",
    answer:
      "Yes. After you plan a route, use Copy share link. The URL stores your demon count, highest tier, platform, and skill focus so friends can open the same plan.",
  },
];

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DemonProgressionPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialInput = parseProgressionSearchParams(params);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon Progression", href: "/demon-progression/" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Demon Progression Planner"
        subtitle="Build a real route — not another demon list. We combine your clear count, hardest tier, platform, and skill focus to recommend next levels, Easy→Hard bridges, and a no-skip checklist."
        accent="gold"
      />

      <DemonProgressionClient initialInput={initialInput} />

      {/* SEO / 说明区块 */}
      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            How this progression tool works
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Many players stall between Easy and Hard Demons because community lists jump difficulty
              too fast. This planner scores published demons on beginner friendliness, frustration,
              mobile fit, and your skill focus, then separates{" "}
              <strong className="text-[var(--color-text)]">next steps</strong> from{" "}
              <strong className="text-[var(--color-text)]">bridge levels</strong> so tier jumps stay
              learnable.
            </p>
            <p>
              For your first demon only, try the{" "}
              <Link href="/first-demon-picker/" className="text-[var(--color-primary)] underline">
                First Demon Picker
              </Link>
              . To browse by tag or difficulty, use{" "}
              <Link href="/level-finder/" className="text-[var(--color-primary)] underline">
                Level Finder
              </Link>{" "}
              or the{" "}
              <Link href="/demon-list/" className="text-[var(--color-primary)] underline">
                Demon List
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">FAQ</h2>
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
