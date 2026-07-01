import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSeo, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Contact — GD Level Tools",
  description: "Contact GD Level Tools for questions, suggestions, error reports, or business inquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact/" },
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
      <h1 className="mb-6 text-3xl font-black text-[var(--color-text)] gd-glow-text">Contact Us</h1>

      <div className="space-y-6">
        <section>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            We would love to hear from you. Whether you found an error, have a suggestion, or want to report a
            broken vault code, here is how to reach us.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="gd-card p-5">
            <h2 className="mb-2 text-base font-bold text-[var(--color-text)]">Report an Error</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Found incorrect information or a broken code? Let us know so we can fix it.
            </p>
          </div>
          <div className="gd-card p-5">
            <h2 className="mb-2 text-base font-bold text-[var(--color-text)]">Suggest a Level</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Want to see a specific level on our site? Use the{" "}
              <a href="/submit-level/" className="gd-link">Submit Level</a> page.
            </p>
          </div>
          <div className="gd-card p-5">
            <h2 className="mb-2 text-base font-bold text-[var(--color-text)]">General Questions</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Questions about our tools, guides, or policies? We are happy to help.
            </p>
          </div>
          <div className="gd-card p-5">
            <h2 className="mb-2 text-base font-bold text-[var(--color-text)]">Business Inquiries</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              For partnerships or advertising inquiries, please reach out.
            </p>
          </div>
        </div>

        <section className="gd-card p-6">
          <h2 className="mb-4 text-base font-bold text-[var(--color-text)]">Send a Message</h2>
          <p className="mb-4 text-sm text-[var(--color-text-muted)]">
            Email us at: <span className="font-mono text-[var(--color-primary)]">contact@gdleveltools.com</span>
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            We typically respond within 48 hours. This is a fan site — please do not send inquiries about
            official Geometry Dash game support, as we cannot help with account or purchase issues.
          </p>
        </section>
      </div>
    </div>
  );
}
