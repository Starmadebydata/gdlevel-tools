import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import DemonProgressionForm from "@/components/DemonProgressionForm";
import DemonProgressionResults from "@/components/DemonProgressionResults";
import {
  parseProgressionSearchParams,
  planProgression,
} from "@/lib/recommendations";
import type { ProgressionInput } from "@/lib/types";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Demon Progression Planner — Easy to Extreme Route",
  description:
    "Plan your Geometry Dash demon progression. Enter how many demons you beat, your hardest tier, platform, and skill focus. Get bridge levels for the Easy → Hard jump, a no-skip checklist, and a clear next-step route.",
  path: "/demon-progression",
});

/** 部署后 HTML 必须立刻拿到新版本，避免旧 HTML 引用已删除的 /_next 哈希 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

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

const DEFAULT_INPUT: ProgressionInput = {
  completedDemons: 0,
  highestTier: "none",
  platform: "pc",
  skillFocus: "any",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function getParam(
  params: Record<string, string | string[] | undefined>,
  key: string
): string | null {
  const raw = params[key];
  if (Array.isArray(raw)) return raw[0] ?? null;
  return raw ?? null;
}

export default async function DemonProgressionPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const parsed = parseProgressionSearchParams(params);
  const wantsPlan = getParam(params, "plan") === "1";
  const input = parsed ?? DEFAULT_INPUT;
  const plan = wantsPlan ? planProgression(input) : null;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon Progression", href: "/demon-progression" },
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

      {/* 静态可引用内容 — 工具主体是交互组件，给爬虫与 AI 一段事实性说明 */}
      <div className="gd-card mb-6 p-6">
        <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          The Demon Progression Planner takes four inputs — how many demons you have beaten, your
          hardest cleared tier, your platform, and your skill focus — and outputs your next
          recommended demons, bridge levels that smooth the jump into the next tier, and a no-skip
          checklist for your current stage.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Example: at 10 Easy Demon clears, the planner typically suggests bridge Medium Demons such
          as{" "}
          <Link href="/levels/b" className="text-[var(--color-primary)] underline">B</Link>,{" "}
          <Link href="/levels/problematic" className="text-[var(--color-primary)] underline">Problematic</Link>, and{" "}
          <Link href="/levels/gold-temple" className="text-[var(--color-primary)] underline">Gold Temple</Link>{" "}
          before harder picks.
        </p>
      </div>

      <DemonProgressionForm input={input} hasPlan={!!plan} />

      {plan && (
        <div className="mt-2">
          <DemonProgressionResults plan={plan} />
        </div>
      )}

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
              <Link href="/first-demon-picker" className="text-[var(--color-primary)] underline">
                First Demon Picker
              </Link>
              . To browse by tag or difficulty, use{" "}
              <Link href="/level-finder" className="text-[var(--color-primary)] underline">
                Level Finder
              </Link>{" "}
              or the{" "}
              <Link href="/demon-list" className="text-[var(--color-primary)] underline">
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
