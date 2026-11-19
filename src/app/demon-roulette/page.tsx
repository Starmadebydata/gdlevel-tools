import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import DemonRouletteClient from "@/components/DemonRouletteClient";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "GD Demon Roulette — Easy to Extreme",
  description:
    "Play Geometry Dash Demon Roulette online. Choose Easy, Medium, Hard, Insane, Extreme, or Mobile Demon pools and climb from 1% to 100%.",
  path: "/demon-roulette",
});

const faqs = [
  {
    question: "How do the Geometry Dash Demon Roulette rules work?",
    answer:
      "You start at 1% required progress on a random demon. After you beat or pass the required percentage in Geometry Dash, enter your exact percentage (for example, 14%). Your next random demon requires at least 1% higher than your previous score (15%), continuing until you hit 100% or give up.",
  },
  {
    question: "What is an Easy Demon Roulette?",
    answer:
      "An Easy Demon Roulette restricts the random pool exclusively to rated Easy Demons. It is the most popular roulette format for casual players and streamers because you can often finish a full 1% to 100% run in under an hour.",
  },
  {
    question: "Does Demon Roulette save my current run?",
    answer:
      "Yes. Your active level, target percentage, and round history are automatically saved in your browser's local storage so you can close the tab and resume later.",
  },
  {
    question: "What happens if I overshoot the required percentage?",
    answer:
      "Overshooting makes the challenge faster—and riskier! If you needed 5% and got 35%, your next random demon immediately requires at least 36%. Experienced players intentionally die right after passing the target percent to rack up higher level counts.",
  },
];

export default function DemonRoulettePage() {
  const levels = getPublishedLevels();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon Roulette", href: "/demon-roulette" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PageHeroBanner offset={9}>
        <Breadcrumb items={breadcrumbs} />
        <SectionHeading
          title="GD Demon Roulette"
          subtitle="Spin random Geometry Dash demons from 1% to 100%. Pick Easy, Medium, Hard, Insane, Extreme, or Mobile-friendly pools."
          accent="gold"
          as="h1"
        />
      </PageHeroBanner>

      <div className="gd-card mb-6 p-6">
        <h2 className="mb-2 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          <strong className="text-[var(--color-text)]">GD Demon Roulette</strong> generates a
          random Geometry Dash demon with an escalating percentage goal starting at 1%. Enter the
          percent you achieved on each spin—the next demon always requires at least{" "}
          <strong className="text-[var(--color-text)]">your last percent + 1%</strong> until you
          reach 100% or tap out.
        </p>
      </div>

      <DemonRouletteClient levels={levels} />

      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            How to Play Geometry Dash Demon Roulette (Official Rules)
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Originally popularized by top Geometry Dash players using the Pointercrate Extreme
              Demon list, <strong className="text-[var(--color-text)]">Demon Roulette</strong> is
              one of the most addictive replayable challenges in Geometry Dash. Instead of grinding
              a single demon for weeks, a Demon Roulette forces you to sight-read and adapt to a
              fresh random demon every few minutes as the required percentage climbs from 1% all the
              way to 100%.
            </p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong className="text-[var(--color-text)]">Select your difficulty pool:</strong>{" "}
                Pick Easy Demons for a fast casual challenge, Medium or Hard Demons for an
                intermediate sight-reading test, Mobile Friendly for 60Hz touch devices, or All
                Demons / Extreme Demons for the classic marathon.
              </li>
              <li>
                <strong className="text-[var(--color-text)]">Copy the Level ID and beat the target %:</strong>{" "}
                Round #1 always starts at 1%. Open Geometry Dash, search the numeric Level ID shown
                on the roulette card, and play in Normal Mode until you reach at least the required
                percentage.
              </li>
              <li>
                <strong className="text-[var(--color-text)]">Log your exact percentage:</strong>{" "}
                Enter the exact percentage you achieved (not just the minimum target). If you needed
                1% and reached 9%, your next random demon immediately requires at least 10%.
              </li>
              <li>
                <strong className="text-[var(--color-text)]">Climb to 100% or tap out:</strong>{" "}
                Keep spinning until a level stops you—or until you beat a demon at 100% to complete
                the entire Demon Roulette run! Use Copy Run Summary to share your final score with
                friends or Discord servers.
              </li>
            </ol>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            Demon Roulette Strategy: Choosing Pools &amp; Controlling Overshoots
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              <strong className="text-[var(--color-text)]">Control your overshoots for high scores:</strong>{" "}
              There are two ways players score a Demon Roulette run: <em>Maximum Levels Cleared</em>{" "}
              and <em>Fastest 100% Clear</em>. If you want the highest possible level count, watch
              the progress bar closely and deliberately crash right after passing your target
              percentage (for example, dying at 12%–14% when the target is 12%). Overshooting to 55%
              on an easy opener can suddenly trap you with a 56% requirement on a brutal memory demon!
            </p>
            <p>
              <strong className="text-[var(--color-text)]">Use Practice Mode on 40%+ spins:</strong>{" "}
              Once your Demon Roulette target passes 40%, never jump straight into Normal Mode blind.
              Do one quick Practice Mode pass up to your target percentage so you know where fake
              orbs, mirror portals, and speed transitions sit. Spending 90 seconds in Practice Mode
              saves 20 minutes of frustrating early deaths.
            </p>
            <p>
              <strong className="text-[var(--color-text)]">Match the pool to your skill ceiling:</strong>{" "}
              A good rule of thumb is to run Demon Roulette one tier below your hardest clear. If
              your hardest demon is a Medium Demon, run an{" "}
              <strong className="text-[var(--color-text)]">Easy Demon Roulette</strong>. If you have
              beaten Insane Demons like Windy Landscape, a Hard Demon or All Demons pool delivers
              the ideal balance of tension and beatable late-game percentages.
            </p>
            <p>
              Want to study a tier before spinning? Browse our{" "}
              <Link href="/demon-list/easy" className="gd-link">Easy Demon List</Link>,{" "}
              <Link href="/demon-list/medium" className="gd-link">Medium Demon List</Link>,{" "}
              <Link href="/demon-list/hard" className="gd-link">Hard Demon List</Link>,{" "}
              <Link href="/demon-list/insane" className="gd-link">Insane Demon List</Link>, or{" "}
              <Link href="/demon-list/mobile" className="gd-link">Mobile Demon List</Link>. You can
              also log full completions in the{" "}
              <Link href="/demon-tracker" className="gd-link">GD Demon Tracker</Link> or plan your
              next skill jump with the{" "}
              <Link href="/demon-progression" className="gd-link">Demon Progression Planner</Link>.
            </p>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">Demon Roulette FAQ</h2>
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
