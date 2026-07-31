import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Terms of Service — GD Level Tools",
  description: "Terms of service for GD Level Tools. Read the rules and conditions for using our website.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Terms of Service", href: "/terms" },
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

      <div className="mb-2 h-1 w-12 rounded-full bg-[var(--color-primary)]" />
      <h1 className="mb-6 text-3xl font-black text-[var(--color-text)] gd-glow-text">Terms of Service</h1>
      <p className="mb-8 text-sm text-[var(--color-text-dim)]">Last updated: June 2026</p>

      <div className="space-y-6 text-[var(--color-text-muted)]">
        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using GD Level Tools, you accept and agree to be bound by these Terms of Service.
            If you do not agree, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">2. Fan Site Disclaimer</h2>
          <p className="leading-relaxed">
            GD Level Tools is an independent fan made resource. We are not affiliated with, endorsed by, or
            sponsored by RobTop Games. Geometry Dash and all related names, images, and assets are the
            property of their respective owners. We do not claim any official status.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">3. Use of Content</h2>
          <p className="mb-3 leading-relaxed">You agree to the following:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> You will not use our site for any illegal or unauthorized purpose</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> You will not attempt to hack, disrupt, or overload our servers</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> You will not submit false or misleading level information</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> You will not use our content to create a competing service without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">4. Vault Codes and Guides</h2>
          <p className="leading-relaxed">
            All vault codes listed on our site are legitimate in-game secret codes, not cheats or hacks.
            However, codes may expire or stop working after game updates. We do not guarantee that all codes
            will work at all times. Mod and tool guides are provided for educational purposes only. We are
            not responsible for any damage caused by third-party tools.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">5. Level Submissions</h2>
          <p className="leading-relaxed">
            When you submit a level, you confirm that the information you provide is accurate. We reserve the
            right to review, edit, reject, or remove any submission at our discretion. Submitted levels may
            take time to appear on our site, and not all submissions will be published.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">6. Third-Party Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites, including the Pointercrate Demon List,
            Geode, and other community resources. We are not responsible for the content or practices of
            these third-party sites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">7. Limitation of Liability</h2>
          <p className="leading-relaxed">
            GD Level Tools is provided &quot;as is&quot; without warranties of any kind. We are not liable for any
            damages arising from the use of our website, including but not limited to indirect, incidental,
            or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">8. Changes to Terms</h2>
          <p className="leading-relaxed">
            We may update these Terms of Service at any time. Continued use of our website after changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">9. Contact</h2>
          <p className="leading-relaxed">
            Questions about these Terms? Contact us at{" "}
            <span className="font-mono text-[var(--color-primary)]">contact@geometrydashlevel.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
