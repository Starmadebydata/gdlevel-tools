import Link from "next/link";
import LevelCard from "@/components/LevelCard";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedLevels, getFirstDemonCandidates } from "@/lib/data/levels";
import { getGuides } from "@/lib/data/guides";
import { faqSchema } from "@/lib/seo";

export default function HomePage() {
  const featuredLevels = getPublishedLevels().slice(0, 6);
  const firstDemons = getFirstDemonCandidates().slice(0, 4);
  const fixGuides = getGuides().filter((g) => g.category === "fix").slice(0, 3);
  const rewardGuides = getGuides().filter((g) => g.category === "rewards").slice(0, 3);

  const faqs = [
    {
      question: "What is GD Level Tools?",
      answer:
        "GD Level Tools is a fan made Geometry Dash tools site that helps players find levels, choose demons, unlock rewards, fix issues, and progress faster. It is not affiliated with RobTop Games.",
    },
    {
      question: "How do I find my first demon in Geometry Dash?",
      answer:
        "Use our First Demon Picker tool. Tell it your platform, strongest and weakest skills, and preferences, and it will recommend the best easy demons for you to start with.",
    },
    {
      question: "Are the vault codes on this site cheats?",
      answer:
        "No. All codes listed here are in-game secret codes and unlock references, not cheats or hacks. They are legitimate features built into Geometry Dash by RobTop.",
    },
    {
      question: "Can I submit my own level?",
      answer:
        "Yes. Go to the Submit Level page and fill out the form with your level's name, ID, difficulty, and skill tags. Approved levels may appear on GD Level Tools after manual verification.",
    },
  ];

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* 几何装饰 */}
        <div className="gd-geo-deco" style={{ width: 120, height: 120, top: 40, right: 10, transform: "rotate(15deg)" }} />
        <div className="gd-geo-deco" style={{ width: 80, height: 80, bottom: 20, left: 5, transform: "rotate(45deg)", borderColor: "var(--color-secondary)" }} />
        <div className="gd-geo-deco" style={{ width: 60, height: 60, top: 60, left: 15, transform: "rotate(30deg)", borderColor: "var(--color-accent)" }} />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            {/* 标签 */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] gd-pulse" />
              <span className="text-xs font-medium text-[var(--color-primary)]">Fan Made Geometry Dash Tools</span>
            </div>

            {/* H1 */}
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="gd-gradient-text gd-glow-text">Geometry Dash</span>
              <br />
              <span className="text-[var(--color-text)]">Level Finder & Demon Tools</span>
            </h1>

            {/* 副标题 */}
            <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
              Find levels, choose your next demon, unlock rewards, fix common issues, and follow skill based
              progression routes.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/level-finder/" className="gd-btn gd-btn-primary">
                <span>Find a Level</span>
              </Link>
              <Link href="/first-demon-picker/" className="gd-btn gd-btn-secondary">
                <span>Pick My First Demon</span>
              </Link>
              <Link href="/demon-list/" className="gd-btn gd-btn-outline">
                <span>View Demon List</span>
              </Link>
              <Link href="/vault-codes/" className="gd-btn gd-btn-accent">
                <span>Check Vault Codes</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
      </section>

      {/* ===== 工具入口卡片 ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Tools"
          subtitle="Pick a tool to find your next level, demon, or fix."
          accent="cyan"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            href="/level-finder/"
            title="Level Finder"
            desc="Filter levels by difficulty, skill, platform, and more."
            icon="search"
            color="cyan"
          />
          <ToolCard
            href="/first-demon-picker/"
            title="First Demon Picker"
            desc="Answer a few questions to find your perfect first demon."
            icon="pick"
            color="purple"
          />
          <ToolCard
            href="/demon-progression/"
            title="Demon Progression"
            desc="Plan your route from Easy Demon to Extreme Demon."
            icon="ladder"
            color="gold"
          />
          <ToolCard
            href="/vault-codes/"
            title="Vault Codes"
            desc="All secret codes for The Vault, Vault of Secrets, and more."
            icon="key"
            color="cyan"
          />
          <ToolCard
            href="/fix/"
            title="Fix Guides"
            desc="Solve screen dark, tearing, and loading issues."
            icon="wrench"
            color="purple"
          />
          <ToolCard
            href="/submit-level/"
            title="Submit a Level"
            desc="Share your level with the GD community."
            icon="upload"
            color="gold"
          />
        </div>
      </section>

      {/* ===== Best First Demons ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Best First Demons"
          subtitle="Start your demon journey with these beginner-friendly picks."
          accent="purple"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {firstDemons.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/first-demon-picker/" className="gd-link text-sm font-medium">
            Get a personalized recommendation →
          </Link>
        </div>
      </section>

      {/* ===== Featured Levels ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Featured Levels"
          subtitle="Hand-picked levels across all difficulties."
          accent="cyan"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLevels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/level-finder/" className="gd-link text-sm font-medium">
            Browse all levels →
          </Link>
        </div>
      </section>

      {/* ===== Guides ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Guides & Fixes"
          subtitle="Learn how to get rewards, install mods, and fix issues."
          accent="gold"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewardGuides.map((guide) => (
            <GuideCardLink key={guide.id} guide={guide} />
          ))}
          {fixGuides.map((guide) => (
            <GuideCardLink key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionHeading title="FAQ" subtitle="Common questions about GD Level Tools." accent="cyan" />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="gd-card p-5">
              <h3 className="mb-2 text-base font-bold text-[var(--color-text)]">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
        />
      </section>
    </div>
  );
}

/** 工具卡片 */
function ToolCard({
  href,
  title,
  desc,
  icon,
  color,
}: {
  href: string;
  title: string;
  desc: string;
  icon: string;
  color: "cyan" | "purple" | "gold";
}) {
  const colorVar =
    color === "purple" ? "var(--color-secondary)" : color === "gold" ? "var(--color-accent)" : "var(--color-primary)";

  return (
    <Link href={href} className="gd-card group block p-6">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg border transition-transform group-hover:scale-110"
          style={{ borderColor: `${colorVar}44`, background: `${colorVar}11` }}
        >
          <ToolIcon name={icon} color={colorVar} />
        </div>
        <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[var(--color-text-muted)]">{desc}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: colorVar }}>
        <span>Open</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

/** 工具图标 */
function ToolIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    search: <SearchIcon color={color} />,
    pick: <PickIcon color={color} />,
    ladder: <LadderIcon color={color} />,
    key: <KeyIcon color={color} />,
    wrench: <WrenchIcon color={color} />,
    upload: <UploadIcon color={color} />,
  };
  return icons[name] || null;
}

function SearchIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="2" />
      <path d="M15 15l5 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function PickIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2v18M5 8l6-6 6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LadderIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M6 2v18M16 2v18M6 7h10M6 12h10M6 17h10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function KeyIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="7" cy="15" r="4" stroke={color} strokeWidth="2" />
      <path d="M10 12L20 2M17 5l2 2M14 8l2 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function WrenchIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M15 3a5 5 0 00-6 6L2 16v3l3-1 7-7a5 5 0 006-6l-3 3-3-3 3-3z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function UploadIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 15V3M6 8l5-5 5 5M3 18h16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 指南卡片链接 */
function GuideCardLink({ guide }: { guide: ReturnType<typeof getGuides>[0] }) {
  const categoryColor =
    guide.category === "fix" ? "var(--color-secondary)" : guide.category === "rewards" ? "var(--color-accent)" : "var(--color-primary)";

  const href = guide.category === "fix" ? `/fix/${guide.slug}/` : guide.category === "mods" ? `/mods/${guide.slug}/` : `/guides/${guide.slug}/`;

  return (
    <Link href={href} className="gd-card group block p-5">
      <span className="gd-badge mb-3" style={{ backgroundColor: `${categoryColor}22`, color: categoryColor }}>
        {guide.category}
      </span>
      <h3 className="mb-2 text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
        {guide.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{guide.summary}</p>
    </Link>
  );
}
