import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "DMCA — GD Level Tools",
  description: "DMCA policy for GD Level Tools. Learn how to report copyright infringement.",
  path: "/dmca/",
});

export default function DmcaPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "DMCA", href: "/dmca/" },
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
      <h1 className="mb-6 text-3xl font-black text-[var(--color-text)] gd-glow-text">DMCA Policy</h1>
      <p className="mb-8 text-sm text-[var(--color-text-dim)]">Last updated: June 2026</p>

      <div className="space-y-6 text-[var(--color-text-muted)]">
        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Copyright Respect</h2>
          <p className="leading-relaxed">
            GD Level Tools respects the intellectual property rights of others. We are a fan made site and
            do not claim ownership of Geometry Dash, its characters, levels, or any other assets belonging
            to RobTop Games or other rights holders.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Filing a DMCA Notice</h2>
          <p className="mb-3 leading-relaxed">
            If you believe that content on our site infringes your copyright, please send a DMCA notice to:
          </p>
          <div className="gd-card p-4">
            <p className="font-mono text-sm text-[var(--color-primary)]">contact@gdleveltools.com</p>
          </div>
          <p className="mt-3 leading-relaxed">Your notice must include:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Identification of the copyrighted work</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Identification of the infringing material and its location on our site</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Your contact information</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> A statement that you have a good faith belief that the use is unauthorized</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> A statement under penalty of perjury that the information is accurate</li>
            <li className="flex gap-2"><span className="text-[var(--color-primary)]">•</span> Your physical or electronic signature</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Our Response</h2>
          <p className="leading-relaxed">
            Upon receiving a valid DMCA notice, we will promptly remove or disable access to the infringing
            material and notify the party that posted the content, if applicable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Repeat Infringers</h2>
          <p className="leading-relaxed">
            We will terminate the accounts of users who are found to be repeat infringers of copyright.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Fan Content Notice</h2>
          <p className="leading-relaxed">
            All content on GD Level Tools, including reviews, guides, and tool descriptions, is original
            content created by our team. Level names and creator names are referenced for identification
            purposes only and belong to their respective creators. We do not host or distribute any
            Geometry Dash game files, levels, or copyrighted assets.
          </p>
        </section>
      </div>
    </div>
  );
}
