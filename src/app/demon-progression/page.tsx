import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import DemonProgressionForm from "@/components/DemonProgressionForm";
import DemonProgressionResults from "@/components/DemonProgressionResults";
import TrackEvent from "@/components/TrackEvent";
import {
  parseProgressionSearchParams,
  planProgression,
} from "@/lib/recommendations";
import type { ProgressionInput } from "@/lib/types";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "GD Demon Progression Planner & Route",
  description:
    "Plan your Geometry Dash demon progression by clear count, tier, platform, and skill focus. Get Easy to Extreme bridge levels and a no-skip checklist.",
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
  {
    question: "How is this GD demon progression planner different from GDDP or GDDL?",
    answer:
      "GDDP focuses on curated skill packs and GDDL focuses on community tier ratings from Tier 1 to Tier 35. Our planner combines your demon count, hardest tier, device (PC vs Mobile), and weak skill into an actionable next-level list with bridge levels and a no-skip checklist.",
  },
  {
    question: "How long does it take to progress from Easy Demon to Extreme Demon?",
    answer:
      "Most consistent players spend 1 to 3 months building a base of 10–15 Easy Demons and 5–10 Medium Demons, another 3 to 6 months clearing Hard and Insane Demons, and 6+ months before their first entry-level Extreme Demon like Acu or Cataclysm.",
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

      <PageHeroBanner offset={6}>
        <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Demon Progression Planner"
        subtitle="Build a real route — not another demon list. We combine your clear count, hardest tier, platform, and skill focus to recommend next levels, Easy→Hard bridges, and a no-skip checklist."
        accent="gold"
        as="h1"
      />
      </PageHeroBanner>

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
          <TrackEvent
            name="planner_complete"
            params={{
              demons: input.completedDemons,
              highest_tier: input.highestTier,
              platform: input.platform,
              skill_focus: input.skillFocus,
              stage: plan.stage,
            }}
          />
          <DemonProgressionResults plan={plan} />
        </div>
      )}

      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            Geometry Dash Demon Progression Roadmap (Easy to Extreme)
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            A healthy <strong className="text-[var(--color-text)]">GD demon progression</strong>{" "}
            route builds consistency before raw difficulty. Jumping straight from your first Easy
            Demon to a Hard or Insane Demon usually leads to burnout at 60–80% choke points. Use the
            six-stage roadmap below as a benchmark alongside the interactive planner above.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-xs uppercase text-[var(--color-text-dim)]">
                  <th className="py-2 pr-4">Stage</th>
                  <th className="py-2 pr-4">Target Clears</th>
                  <th className="py-2 pr-4">Core Skills Built</th>
                  <th className="py-2">Recommended Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]/50 text-[var(--color-text-muted)]">
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">1. First Demon</td>
                  <td className="py-2.5 pr-4">1–3 Easy</td>
                  <td className="py-2.5 pr-4">Practice mode, cube memory, basic ship</td>
                  <td className="py-2.5">
                    <Link href="/levels/the-nightmare" className="gd-link">The Nightmare</Link>,{" "}
                    <Link href="/levels/platinum-adventure" className="gd-link">Platinum Adventure</Link>,{" "}
                    <Link href="/levels/shiver" className="gd-link">Shiver</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">2. Easy Demon Base</td>
                  <td className="py-2.5 pr-4">5–15 Easy</td>
                  <td className="py-2.5 pr-4">Speed changes, ship control, XL nerves</td>
                  <td className="py-2.5">
                    <Link href="/levels/clubstep" className="gd-link">Clubstep</Link>,{" "}
                    <Link href="/levels/speed-racer" className="gd-link">Speed Racer</Link>,{" "}
                    <Link href="/levels/death-moon" className="gd-link">Death Moon</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">3. Medium Bridge</td>
                  <td className="py-2.5 pr-4">3–8 Medium</td>
                  <td className="py-2.5 pr-4">Fast wave, duals, tight UFO &amp; ball timings</td>
                  <td className="py-2.5">
                    <Link href="/levels/b" className="gd-link">B</Link>,{" "}
                    <Link href="/levels/problematic" className="gd-link">Problematic</Link>,{" "}
                    <Link href="/levels/mechanical-showdown" className="gd-link">Mechanical Showdown</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">4. Hard Demon</td>
                  <td className="py-2.5 pr-4">3–6 Hard</td>
                  <td className="py-2.5 pr-4">Nine Circles wave, reverse gravity, endurance</td>
                  <td className="py-2.5">
                    <Link href="/levels/nine-circles" className="gd-link">Nine Circles</Link>,{" "}
                    <Link href="/levels/jawbreaker" className="gd-link">Jawbreaker</Link>,{" "}
                    <Link href="/levels/fairydust" className="gd-link">Fairydust</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">5. Insane Demon</td>
                  <td className="py-2.5 pr-4">2–5 Insane</td>
                  <td className="py-2.5 pr-4">Frame-tight timings, straight fly, high-speed flow</td>
                  <td className="py-2.5">
                    <Link href="/levels/windy-landscape" className="gd-link">Windy Landscape</Link>,{" "}
                    <Link href="/levels/supersonic" className="gd-link">Supersonic</Link>,{" "}
                    <Link href="/levels/stalemate" className="gd-link">Stalemate</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--color-text)]">6. Entry Extreme</td>
                  <td className="py-2.5 pr-4">1+ Extreme</td>
                  <td className="py-2.5 pr-4">240Hz/CBF precision, long grind discipline</td>
                  <td className="py-2.5">
                    <Link href="/levels/acu" className="gd-link">Acu</Link>,{" "}
                    <Link href="/levels/cataclysm" className="gd-link">Cataclysm</Link>,{" "}
                    <Link href="/levels/bloodbath" className="gd-link">Bloodbath</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            How This Demon Progression Tool Works (vs. GDDP &amp; GDDL)
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Many players stall between Easy and Hard Demons because raw demon lists jump difficulty
              too fast. This planner scores published demons on beginner friendliness, frustration,
              mobile fit, and your skill focus, then separates{" "}
              <strong className="text-[var(--color-text)]">next steps</strong> from{" "}
              <strong className="text-[var(--color-text)]">bridge levels</strong> so tier jumps stay
              learnable.
            </p>
            <p>
              Our route complements community standards like the{" "}
              <a href="https://gdladder.com" target="_blank" rel="noopener noreferrer" className="gd-link">
                Geometry Dash Demon Ladder (GDDL)
              </a>{" "}
              for granular tier ratings,{" "}
              <a href="https://gddp.pro" target="_blank" rel="noopener noreferrer" className="gd-link">
                GDDP
              </a>{" "}
              for structured skill packs, and the official{" "}
              <a href="https://pointercrate.com/demonlist/" target="_blank" rel="noopener noreferrer" className="gd-link">
                Pointercrate Demonlist
              </a>{" "}
              for top Extreme benchmarks. Unlike static spreadsheets, our planner adapts immediately
              to mobile players (filtering out 144Hz-dependent straight fly) and lets you pick a
              specific weak gamemode.
            </p>
            <p>
              <strong className="text-[var(--color-text)]">Skill-focus training tips:</strong> If wave
              holds you back, run <Link href="/levels/problematic" className="gd-link">Problematic</Link>{" "}
              into <Link href="/levels/nine-circles" className="gd-link">Nine Circles</Link> and{" "}
              <Link href="/levels/jawbreaker" className="gd-link">Jawbreaker</Link>. If ship control
              is your bottleneck, grind <Link href="/levels/clubstep" className="gd-link">Clubstep</Link>{" "}
              and <Link href="/levels/gold-temple" className="gd-link">Gold Temple</Link>. For pure
              timing precision, practice <Link href="/levels/acropolis" className="gd-link">Acropolis</Link>{" "}
              from the end backwards using start positions or practice checkpoints.
            </p>
            <p>
              Ready to browse by tier or test your consistency? Explore our dedicated{" "}
              <Link href="/demon-list/easy" className="gd-link">Easy Demon List</Link>,{" "}
              <Link href="/demon-list/medium" className="gd-link">Medium Demon List</Link>,{" "}
              <Link href="/demon-list/hard" className="gd-link">Hard Demon List</Link>,{" "}
              <Link href="/demon-list/insane" className="gd-link">Insane Demon List</Link>, log your
              clears in the{" "}
              <Link href="/demon-tracker" className="gd-link">Demon Tracker</Link>, or test yourself
              with{" "}
              <Link href="/demon-roulette" className="gd-link">Demon Roulette</Link>.
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
