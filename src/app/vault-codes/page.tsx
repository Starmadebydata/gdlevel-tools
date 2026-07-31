import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import VaultCodesClient from "@/components/VaultCodesClient";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "Vault Codes — All Geometry Dash Secret Codes (2026)",
  description:
    "Complete list of Geometry Dash vault codes for The Vault, Vault of Secrets, Chamber of Time, and Wraith Vault. Unlock icons, colors, diamonds, and keys with these in-game secret codes.",
  path: "/vault-codes",
});

const faqs = [
  {
    question: "Are Geometry Dash vault codes cheats?",
    answer:
      "No. Vault codes are legitimate in-game secret codes built into Geometry Dash by RobTop. They are not cheats, hacks, or exploits. They unlock icons, colors, and other cosmetic rewards.",
  },
  {
    question: "How do I unlock the Vault of Secrets?",
    answer:
      "You need to collect 50 diamonds to unlock the Vault of Secrets. Diamonds can be earned through daily quests, daily levels, weekly demons, and opening chests.",
  },
  {
    question: "How do I unlock the Chamber of Time?",
    answer:
      "Enter the code 'The Challenge' in the Vault of Secrets to unlock a secret level. Beat it, then buy the Master Emblem from the shop (700 diamonds + 1000 mana orbs). Then open the hidden door in the Coming Soon section.",
  },
  {
    question: "Do vault codes expire?",
    answer:
      "Some codes may stop working after game updates. We verify our codes regularly — last updated June 2026. If a code doesn't work, it may have been removed in a recent update.",
  },
  {
    question: "Where is the Wraith Vault?",
    answer:
      "The Wraith Vault was added in Update 2.2. Access it through The Tower level — look for a face icon in the bottom-right corner inside the level.",
  },
];

export default function VaultCodesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Vault Codes", href: "/vault-codes" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Breadcrumb items={breadcrumbs} />

      <SectionHeading
        title="Vault Codes"
        subtitle="All secret codes for The Vault, Vault of Secrets, Chamber of Time, and Wraith Vault. Updated June 2026."
        accent="gold"
      />

      <VaultCodesClient />

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="gd-card p-4">
              <h3 className="mb-2 text-sm font-bold text-[var(--color-text)]">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
