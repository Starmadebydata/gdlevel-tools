import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Privacy Policy — GD Level Tools",
  description: "Privacy policy for GD Level Tools. Learn how we handle data, cookies, and third-party advertising.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy" },
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
      <h1 className="mb-6 text-3xl font-black text-[var(--color-text)] gd-glow-text">Privacy Policy</h1>
      <p className="mb-8 text-sm text-[var(--color-text-dim)]">Last updated: November 2026</p>

      <div className="space-y-6 text-[var(--color-text-muted)]">
        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">1. Introduction &amp; General Audience Scope</h2>
          <p className="leading-relaxed">
            GD Level Tools (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is an independent fan-made website operating at
            geometrydashlevel.com that provides level discovery tools, progression planners, trackers, and
            guides for Geometry Dash players. This site is designed for a general audience and is not
            directed to children under the age of 13 (or the equivalent minimum age of digital consent in
            your jurisdiction). This Privacy Policy explains what information we collect, how we use it,
            how cookies and third-party advertising operate, and what rights you have over your data.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">2. Information We Collect &amp; Retention</h2>
          <p className="mb-3 leading-relaxed">We keep data collection minimal and transparent:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Level submissions:</strong> When you use the Submit a Level form, we collect the level name, numeric Level ID, creator name, difficulty tier, skill tags, and any optional notes or contact email you choose to include. Submissions are reviewed manually; optional contact emails are retained only long enough to follow up on a submission (typically up to 90 days) and are never published publicly or sold.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Local browser storage:</strong> Interactive tools such as our Demon Tracker, Demon Roulette history, theme preference, and cookie consent choice save data locally in your browser&apos;s <code className="font-mono text-xs">localStorage</code>. This data never leaves your device unless you export it yourself.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Usage analytics:</strong> We use Google Analytics 4 with Google Consent Mode v2 to understand aggregate traffic, popular tools, and page performance (such as page views, tool interactions, country, and device type).</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Cookies &amp; advertising identifiers:</strong> Used only according to your cookie consent selection as detailed below.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">3. Third-Party Advertising</h2>
          <p className="leading-relaxed">
            We may display third-party advertisements on our site. Third-party vendors, including Google,
            may use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based
            on their visit to our site and/or other sites on the Internet.
          </p>
          <p className="mt-3 leading-relaxed">
            Users may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="gd-link">
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">4. Cookie Consent</h2>
          <p className="leading-relaxed">
            When you visit our website for the first time, a cookie consent banner will appear at the
            bottom of the page. You can choose to <strong className="text-[var(--color-text)]">Accept</strong> or{" "}
            <strong className="text-[var(--color-text)]">Decline</strong> non-essential cookies.
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Essential cookies</strong> (functionality and security) are always enabled and do not require consent.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Analytics cookies</strong> (Google Analytics) are only set if you accept. If you decline, we still receive aggregate, cookie-less usage data via Google&apos;s Consent Mode.</span></li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> <span><strong className="text-[var(--color-text)]">Advertising cookies</strong> are only set if you accept.</span></li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Your choice is stored in your browser&apos;s local storage for future visits. You can change your
            mind at any time by clearing your browser&apos;s local storage for this site, which will show the
            consent banner again.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">5. How We Use Your Information</h2>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> To review and potentially publish submitted levels</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> To improve our website content and user experience</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> To respond to your inquiries and feedback</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> To display relevant advertising</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">6. Data Security</h2>
          <p className="leading-relaxed">
            We take reasonable measures to protect your information. However, no method of transmission over
            the Internet is 100% secure. We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">7. Children&apos;s Privacy (COPPA)</h2>
          <p className="leading-relaxed">
            GD Level Tools is a general-audience gaming reference and utility site and is not directed to
            children under 13. We do not knowingly collect personally identifiable information from children
            under 13, we do not offer user accounts or public comment profiles, and we configure advertising
            controls to respect non-personalized ad preferences where required. If you are a parent or
            guardian and believe a child under 13 submitted personal information through our contact or
            submission forms, please email us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">8. EEA, UK &amp; California Privacy Rights</h2>
          <p className="leading-relaxed">
            Visitors from the European Economic Area (EEA), the United Kingdom, Switzerland, and California
            have the right to request access to, correction of, or deletion of any personal information we
            hold (such as an email sent via our contact form), as well as the right to withdraw consent to
            analytics or advertising cookies at any time. To exercise these rights, contact us at the email
            below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">9. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">10. Contact Us</h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <span className="font-mono text-[var(--color-primary)]">contact@geometrydashlevel.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
