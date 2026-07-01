import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import FirstDemonPickerClient from "@/components/FirstDemonPickerClient";
import { generateSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeo({
  title: "First Demon Picker — Which Geometry Dash Demon Should You Beat First?",
  description:
    "Answer a few questions about your playstyle and get personalized recommendations for your first Geometry Dash demon. Find the perfect easy demon for your skills and platform.",
  path: "/first-demon-picker/",
});

const faqs = [
  {
    question: "What is the easiest demon in Geometry Dash?",
    answer:
      "The Nightmare by Jax is widely considered the easiest demon, at about 30 seconds long with simple cube and ship gameplay. The Lightning Road is another classic first demon choice.",
  },
  {
    question: "How do I choose my first demon?",
    answer:
      "Consider your strongest skill (cube, ship, wave, etc.), your platform (PC or mobile), and how much memory and frustration you can tolerate. Use our First Demon Picker tool to get personalized recommendations.",
  },
  {
    question: "Can I beat a demon on mobile?",
    answer:
      "Yes. Many easy demons are mobile friendly. Levels like The Nightmare, Platinum Adventure, and Shiver have high mobile scores and are great choices for mobile players.",
  },
  {
    question: "How long does it take to beat your first demon?",
    answer:
      "It varies widely. Some players beat their first demon in a few hours, others take weeks. The key is consistent practice — use practice mode to learn the layout, then attempt normal mode.",
  },
];

export default function FirstDemonPickerPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "First Demon Picker", href: "/first-demon-picker/" },
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
        title="First Demon Picker"
        subtitle="Answer a few questions and we'll recommend the best demons for your skill level and playstyle."
        accent="purple"
      />

      <FirstDemonPickerClient />

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
