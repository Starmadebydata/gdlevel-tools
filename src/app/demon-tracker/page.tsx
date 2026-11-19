import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import DemonTrackerClient from "@/components/DemonTrackerClient";
import { getPublishedLevels } from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "GD Demon Tracker — Log Clears & Attempts",
  description:
    "Track your Geometry Dash demon completions, best percentages, and attempt counts by tier (Easy to Extreme). Free browser-saved GD Demon Tracker.",
  path: "/demon-tracker",
});

const faqs = [
  {
    question: "How does the GD Demon Tracker store my progress?",
    answer:
      "All beaten demons, best percentages, and attempt counts are saved locally in your browser's localStorage—no sign-up or Geometry Dash password required. Use 'Copy JSON Backup' anytime to save a copy of your data.",
  },
  {
    question: "Can I connect my tracked demons to the Progression Planner?",
    answer:
      "Yes! Click the 'Build Next-Step Plan' button at the top of the tracker to send your exact beaten demon count and hardest cleared tier directly into our Demon Progression Planner.",
  },
  {
    question: "Why should I log attempt counts and best percentages?",
    answer:
      "Tracking attempt counts across Easy, Medium, Hard, and Insane Demons shows you whether your practice habits are improving. Most players see their attempt count drop sharply once they start practicing 60%–100% before grinding from 0%.",
  },
];

export default function DemonTrackerPage() {
  const levels = getPublishedLevels();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Demon Tracker", href: "/demon-tracker" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
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

      <PageHeroBanner offset={12}>
        <Breadcrumb items={breadcrumbs} />
        <SectionHeading
          title="GD Demon Tracker"
          subtitle="Check off beaten Geometry Dash demons, log your best percentage and attempts, and see your tier progress at a glance."
          accent="cyan"
          as="h1"
        />
      </PageHeroBanner>

      <div className="gd-card mb-6 p-6">
        <h2 className="mb-2 text-lg font-bold text-[var(--color-text)]">Quick Answer</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          Our <strong className="text-[var(--color-text)]">GD Demon Tracker</strong> lets you check
          off beaten Geometry Dash demons from Easy to Extreme, record in-progress best percentages
          and attempt counts, and export your progress—all saved privately in your browser with zero
          account login required.
        </p>
      </div>

      <DemonTrackerClient levels={levels} />

      <section className="mt-12 space-y-6">
        <div className="gd-card p-6">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">
            Why Track Your Geometry Dash Demon Progression?
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Geometry Dash shows your total Demon counter on your profile, but it does not break
              down how many Easy, Medium, Hard, Insane, or Extreme Demons you have cleared—or which
              levels you currently have 70%–90% progress on. Keeping a structured{" "}
              <strong className="text-[var(--color-text)]">Geometry Dash demon tracker</strong>{" "}
              helps you spot gaps in your progression before jumping tiers too early.
            </p>
            <p>
              Once you log your clears here, click{" "}
              <strong className="text-[var(--color-text)]">Build Next-Step Plan</strong> to feed
              your exact demon count and hardest tier into our{" "}
              <Link href="/demon-progression" className="gd-link">
                Demon Progression Planner
              </Link>
              , or explore specific tier checklists like our{" "}
              <Link href="/demon-list/easy" className="gd-link">Easy Demon List</Link>,{" "}
              <Link href="/demon-list/medium" className="gd-link">Medium Demon List</Link>, and{" "}
              <Link href="/demon-list/insane" className="gd-link">Insane Demon List</Link>.
            </p>
          </div>
        </div>

        <div className="gd-card p-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">Demon Tracker FAQ</h2>
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
