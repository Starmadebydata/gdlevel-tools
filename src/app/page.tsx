import Link from "next/link";
import Image from "next/image";
import LevelCard from "@/components/LevelCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import GeoBackground from "@/components/GeoBackground";
import { getPublishedLevels, getFirstDemonCandidates } from "@/lib/data/levels";
import { getGuides } from "@/lib/data/guides";
import { faqSchema } from "@/lib/seo";

export default function HomePage() {
  const allLevels = getPublishedLevels();
  const featuredLevels = allLevels.slice(0, 6);
  const firstDemons = getFirstDemonCandidates().slice(0, 4);
  const fixGuides = getGuides().filter((g) => g.category === "fix").slice(0, 3);
  const rewardGuides = getGuides().filter((g) => g.category === "rewards").slice(0, 3);
  const allGuides = getGuides();

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
      {/* ===== Hero — 全新设计 ===== */}
      <section className="relative overflow-hidden">
        {/* 动态渐变背景 */}
        <div className="absolute inset-0 gd-bg-animated" />

        {/* SVG 几何背景图层 — GD 风格方块/三角/菱形 */}
        <Image
          src="/images/hero-geo-bg.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-60 pointer-events-none"
        />

        {/* 浮动几何粒子背景 */}
        <GeoBackground count={18} />

        {/* 透视网格地平线 */}
        <div className="gd-grid-perspective" />

        {/* GD 玩家方块 — 右侧浮动装饰 */}
        <div className="absolute right-[8%] top-[20%] hidden lg:block gd-float pointer-events-none">
          <Image
            src="/images/gd-cube.svg"
            alt=""
            width={160}
            height={160}
            className="opacity-70"
          />
        </div>

        {/* 大型旋转几何装饰 */}
        <div
          className="gd-geo-deco gd-rotate-slow"
          style={{ width: 180, height: 180, top: 60, right: 8, transform: "rotate(15deg)", opacity: 0.06 }}
        />
        <div
          className="gd-geo-deco gd-rotate-reverse-slow"
          style={{ width: 120, height: 120, top: 200, left: 12, borderColor: "var(--color-secondary)", opacity: 0.08 }}
        />
        <div
          className="gd-geo-deco gd-rotate-medium"
          style={{ width: 80, height: 80, bottom: 100, right: 20, borderColor: "var(--color-accent)", opacity: 0.1 }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 md:py-40">
          <div className="text-center">
            {/* 标签 */}
            <ScrollReveal animation="scale">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] gd-pulse" />
                <span className="text-xs font-medium tracking-wide text-[var(--color-primary)]">
                  FAN MADE GEOMETRY DASH TOOLS
                </span>
              </div>
            </ScrollReveal>

            {/* H1 — 更大、更有冲击力 */}
            <ScrollReveal animation="up" delay={100}>
              <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                <span className="gd-gradient-text-animated">Geometry Dash</span>
                <br />
                <span className="text-[var(--color-text)]">Level Finder</span>{" "}
                <span className="text-[var(--color-text-muted)]">&</span>{" "}
                <span className="gd-gradient-text-gold">Demon Tools</span>
              </h1>
            </ScrollReveal>

            {/* 副标题 */}
            <ScrollReveal animation="up" delay={250}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg md:text-xl">
                Find levels, choose your next demon, unlock rewards, fix common issues, and follow
                skill based progression routes.
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal animation="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link href="/level-finder/" className="gd-btn gd-btn-primary text-base !px-6 !py-3">
                  <span>Find a Level</span>
                </Link>
                <Link href="/first-demon-picker/" className="gd-btn gd-btn-secondary text-base !px-6 !py-3">
                  <span>Pick My First Demon</span>
                </Link>
                <Link href="/demon-list/" className="gd-btn gd-btn-outline text-base !px-6 !py-3">
                  <span>View Demon List</span>
                </Link>
                <Link href="/vault-codes/" className="gd-btn gd-btn-accent text-base !px-6 !py-3">
                  <span>Check Vault Codes</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* 统计数据条 */}
            <ScrollReveal animation="up" delay={600}>
              <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-8 sm:gap-12">
                <StatBlock value={allLevels.length} label="Levels" color="var(--color-primary)" />
                <Divider />
                <StatBlock value={firstDemons.length} label="First Demon Picks" color="var(--color-secondary)" />
                <Divider />
                <StatBlock value={allGuides.length} label="Guides & Fixes" color="var(--color-accent)" />
                <Divider />
                <StatBlock value={6} label="Tools" color="var(--color-primary)" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
      </section>

      {/* ===== 工具入口卡片 — 游戏化设计 ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Tools"
            subtitle="Pick a tool to find your next level, demon, or fix."
            accent="cyan"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal animation="up" delay={0}>
            <ToolCard
              href="/level-finder/"
              title="Level Finder"
              desc="Filter levels by difficulty, skill, platform, and more."
              icon="search"
              color="cyan"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <ToolCard
              href="/first-demon-picker/"
              title="First Demon Picker"
              desc="Answer a few questions to find your perfect first demon."
              icon="pick"
              color="purple"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={200}>
            <ToolCard
              href="/demon-progression/"
              title="Demon Progression"
              desc="Plan your route from Easy Demon to Extreme Demon."
              icon="ladder"
              color="gold"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={0}>
            <ToolCard
              href="/vault-codes/"
              title="Vault Codes"
              desc="All secret codes for The Vault, Vault of Secrets, and more."
              icon="key"
              color="cyan"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <ToolCard
              href="/fix/"
              title="Fix Guides"
              desc="Solve screen dark, tearing, and loading issues."
              icon="wrench"
              color="purple"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={200}>
            <ToolCard
              href="/submit-level/"
              title="Submit a Level"
              desc="Share your level with the GD community."
              icon="upload"
              color="gold"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Best First Demons ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Best First Demons"
            subtitle="Start your demon journey with these beginner-friendly picks."
            accent="purple"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {firstDemons.map((level, i) => (
            <ScrollReveal key={level.id} animation="up" delay={i * 100}>
              <LevelCard level={level} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link href="/first-demon-picker/" className="gd-link text-sm font-medium">
              Get a personalized recommendation →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== Featured Levels ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Featured Levels"
            subtitle="Hand-picked levels across all difficulties."
            accent="cyan"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLevels.map((level, i) => (
            <ScrollReveal key={level.id} animation="up" delay={(i % 3) * 100}>
              <LevelCard level={level} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link href="/level-finder/" className="gd-link text-sm font-medium">
              Browse all levels →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== Guides ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Guides & Fixes"
            subtitle="Learn how to get rewards, install mods, and fix issues."
            accent="gold"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rewardGuides.map((guide, i) => (
            <ScrollReveal key={guide.id} animation="up" delay={i * 100}>
              <GuideCardLink guide={guide} />
            </ScrollReveal>
          ))}
          {fixGuides.map((guide, i) => (
            <ScrollReveal key={guide.id} animation="up" delay={(i + 3) * 100}>
              <GuideCardLink guide={guide} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <ScrollReveal>
          <SectionHeading title="FAQ" subtitle="Common questions about GD Level Tools." accent="cyan" />
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} animation="up" delay={i * 100}>
              <div className="gd-card p-5">
                <h3 className="mb-2 text-base font-bold text-[var(--color-text)]">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.answer}</p>
              </div>
            </ScrollReveal>
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

/** 统计数据块 — Hero 区域的数字展示 */
function StatBlock({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="text-center">
      <div
        className="gd-count-up text-3xl font-black sm:text-4xl"
        style={{ color, textShadow: `0 0 20px ${color}66` }}
      >
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </div>
    </div>
  );
}

/** 分隔线 */
function Divider() {
  return <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />;
}

/** 工具卡片 — 游戏化设计，带 GD 几何缩略图 */
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

  // 根据颜色选择对应的 GD 风格缩略图
  const thumbSrc =
    color === "purple" ? "/images/thumb-purple.svg" : color === "gold" ? "/images/thumb-gold.svg" : "/images/thumb-cyan.svg";

  return (
    <Link href={href} className="gd-card gd-card-game group block h-full overflow-hidden">
      {/* GD 风格几何缩略图 — 顶部视觉区域 */}
      <div className="relative h-32 overflow-hidden border-b border-[var(--color-border)]">
        <Image
          src={thumbSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* 缩略图上的图标浮层 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ borderColor: `${colorVar}66`, background: `${colorVar}22`, boxShadow: `0 0 25px ${colorVar}33` }}
          >
            <ToolIcon name={icon} color={colorVar} />
          </div>
        </div>
      </div>

      {/* 卡片内容 */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
            {title}
          </h3>
          {/* 右上角几何装饰 */}
          <div
            className="h-5 w-5 rotate-45 border-2 opacity-20 transition-all duration-500 group-hover:rotate-[135deg] group-hover:opacity-50"
            style={{ borderColor: colorVar }}
          />
        </div>
        <p className="text-sm text-[var(--color-text-muted)]">{desc}</p>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: colorVar }}>
          <span>Open</span>
          <span className="transition-transform group-hover:translate-x-1.5">→</span>
        </div>
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
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="2" />
      <path d="M15 15l5 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function PickIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
      <path d="M11 2v18M5 8l6-6 6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LadderIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
      <path d="M6 2v18M16 2v18M6 7h10M6 12h10M6 17h10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function KeyIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
      <circle cx="7" cy="15" r="4" stroke={color} strokeWidth="2" />
      <path d="M10 12L20 2M17 5l2 2M14 8l2 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function WrenchIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
      <path d="M15 3a5 5 0 00-6 6L2 16v3l3-1 7-7a5 5 0 006-6l-3 3-3-3 3-3z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function UploadIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
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
    <Link href={href} className="gd-card group block h-full p-5">
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
