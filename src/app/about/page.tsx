import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSeo, breadcrumbSchema, aboutPageSchema } from "@/lib/seo";
import { siteConfig, fanSiteDisclaimer } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "About — GD Level Tools",
  description:
    "GD Level Tools is an independent fan made Geometry Dash tools site. Learn about our mission, how we work, and our relationship with the Geometry Dash community.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema({
          name: "About GD Level Tools",
          url: `${siteConfig.domain}/about`,
          description:
            "GD Level Tools is an independent fan made Geometry Dash tools site. Learn about our mission, how we work, and our relationship with the Geometry Dash community.",
        })) }}
      />

      <Breadcrumb items={breadcrumbs} />

      <div className="mb-2 h-1 w-12 rounded-full bg-[var(--color-primary)]" />
      <h1 className="mb-6 text-3xl font-black text-[var(--color-text)] gd-glow-text">About GD Level Tools</h1>

      <div className="space-y-6">
        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Our Mission</h2>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            GD Level Tools is an independent fan made resource built to help Geometry Dash players find levels,
            choose demons, unlock rewards, fix common issues, and track their progression. We are not affiliated
            with RobTop Games.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">What We Offer</h2>
          <ul className="space-y-2 text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Level Finder with filters for difficulty, skill, platform, and more</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> First Demon Picker with personalized recommendations</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Demon Progression Planner to map your route from Easy to Extreme</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Complete Vault Codes list, updated regularly</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Guides for rewards, mods, fixes, and skills</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Level submission system for the community</li>
          </ul>
        </section>

        <section className="gd-card p-5">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">How We Review &amp; Score Levels</h2>
          <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Every level in our database is manually verified in-game (checking the exact Level ID,
            creator credit, official star/demon rating, and length) and scored on four 1–5 rubrics:
          </p>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Mobile (1–5):</strong> Touch-input fairness, absence of 144Hz-only straight fly, and low-detail readability on phone screens.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Beginner (1–5):</strong> Approachability for newer players entering that difficulty bracket, accounting for sight-readability and learning curve.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Visual Clarity (1–5):</strong> Contrast between hazards, foreground decoration, and playable path without blinding glow or fake spikes.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Frustration / Forgiving (1–5):</strong> How punishing the choke points are — levels with brutal 80–98% endings or buggy transitions receive lower forgiving scores.</span></li>
          </ul>
          <p className="mt-3 text-xs text-[var(--color-text-dim)]">
            Catalog last audited: November 2026. Community difficulty shifts and Geometry Dash 2.2 updates are reviewed monthly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Our Standards</h2>
          <ul className="space-y-2 text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> We do not provide cheats, hacks, or game downloads</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> All vault codes are legitimate in-game secret codes, not exploits</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> We clearly label third-party tools and their risks</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> We do not impersonate RobTop Games or claim official status</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> All content is created by fans, for fans</li>
          </ul>
        </section>

        <section className="gd-card p-5">
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Who Runs This Site</h2>
          <p className="mb-3 leading-relaxed text-[var(--color-text-muted)]">
            GD Level Tools is built and maintained by{" "}
            <span className="font-bold text-[var(--color-text)]">{siteConfig.author.name}</span>,
            a Geometry Dash player and developer. The site started from a simple frustration: finding a level
            that actually matches your skill — or picking the right next demon — meant digging through scattered
            forum posts, videos, and spreadsheets. These tools put that process in one place, from your first
            Easy Demon to a full Extreme progression route.
          </p>
          <p className="mb-3 leading-relaxed text-[var(--color-text-muted)]">
            Every guide and fix article on this site is written from hands-on play and community research,
            and updated when the game changes.
          </p>
          <ul className="space-y-2 text-[var(--color-text-muted)]">
            <li className="flex gap-2">
              <span className="text-[var(--color-primary)]">•</span>
              <span>
                Questions, corrections, or ideas? Reach out via the{" "}
                <a href="/contact" className="gd-link">contact page</a>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-primary)]">•</span>
              <span>
                The site is open source — see the code on{" "}
                <a
                  href="https://github.com/Starmadebydata/gdlevel-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gd-link"
                >
                  GitHub
                </a>.
              </span>
            </li>
          </ul>
        </section>

        <section className="gd-card p-5">
          <h2 className="mb-2 text-base font-bold text-[var(--color-text)]">Disclaimer</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{fanSiteDisclaimer}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Contact</h2>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            Have a question, suggestion, or found an error? Visit our{" "}
            <a href="/contact" className="gd-link">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
