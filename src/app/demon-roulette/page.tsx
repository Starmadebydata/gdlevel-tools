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
            Tips for Surviving Longer Demon Roulette Runs
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Originally popularized by top Geometry Dash players using the Pointercrate Extreme
              Demon list, <strong className="text-[var(--color-text)]">Demon Roulette</strong> is
              even more fun when scaled to your actual skill bracket. Choosing the{" "}
              <strong className="text-[var(--color-text)]">Easy Demon Roulette</strong> or{" "}
              <strong className="text-[var(--color-text)]">Medium Demon</strong> pool turns it into
              a fast-paced sight-reading workout that sharpens your reaction speed across dozens of
              creators.
            </p>
            <p>
              <strong className="text-[var(--color-text)]">Control your overshoots:</strong> If your
              target is 12% and you are aiming for the highest possible level count, deliberately crash
              at 12%–15% rather than accidentally coasting to 55%. On the other hand, if you want a
              quick speedrun to 100%, push every comfortable level as far as you can!
            </p>
            <p>
              Want to study a tier before spinning? Browse our{" "}
              <Link href="/demon-list/easy" className="gd-link">Easy Demon List</Link>,{" "}
              <Link href="/demon-list/medium" className="gd-link">Medium Demon List</Link>,{" "}
              <Link href="/demon-list/hard" className="gd-link">Hard Demon List</Link>, or{" "}
              <Link href="/demon-list/mobile" className="gd-link">Mobile Demon List</Link>, and log
              your full clears in the{" "}
              <Link href="/demon-tracker" className="gd-link">GD Demon Tracker</Link>.
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
