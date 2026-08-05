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

        {/* 真实游戏截图墙 — 三排 GD 关卡截图缓慢滚动 */}
        <ScreenshotWall />

        {/* 遮罩 — 压暗截图中心区域，保证标题文字可读 */}
        <div className="gd-wall-overlay" aria-hidden="true" />

        {/* 浮动几何粒子背景 */}
        <GeoBackground count={18} />

        {/* 透视网格地平线 */}
        <div className="gd-grid-perspective" />

        {/* CRT 扫描线纹理 */}
        <div className="gd-scanlines" aria-hidden="true" />

        {/* 锯齿 — GD 经典障碍物，左右各一个缓慢旋转 */}
        <SawBlade
          className="absolute left-[4%] top-[16%] hidden h-24 w-24 lg:block gd-rotate-medium pointer-events-none opacity-40"
        />
        <SawBlade
          className="absolute right-[6%] top-[55%] hidden h-16 w-16 lg:block gd-rotate-reverse-slow pointer-events-none opacity-30"
        />

        {/* 跳跃环 — 发光圆环 */}
        <div
          className="gd-orb absolute right-[14%] top-[22%] hidden h-7 w-7 lg:block pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="gd-orb absolute left-[12%] top-[62%] hidden h-5 w-5 lg:block pointer-events-none"
          style={{ animationDelay: "1.2s" }}
          aria-hidden="true"
        />

        {/* GD 玩家方块 — 沿地面跑酷（跑动 + 跳跃旋转） */}
        <div
          className="gd-runner absolute bottom-6 left-0 hidden sm:block pointer-events-none"
          aria-hidden="true"
        >
          <div className="gd-runner-cube">
            <Image src="/images/gd-cube.svg" alt="" width={42} height={42} />
          </div>
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

            {/* H1 — GD 展示字体 + 硬质投影（文案不变） */}
            <ScrollReveal animation="up" delay={100}>
              <h1 className="gd-display mx-auto max-w-5xl text-4xl leading-[1.1] sm:text-6xl md:text-7xl">
                <span className="gd-title-shadow text-[var(--color-primary)]">Geometry Dash</span>
                <br />
                <span className="gd-title-shadow text-[var(--color-text)]">Level Finder</span>{" "}
                <span className="text-[var(--color-text-muted)]">&</span>{" "}
                <span className="gd-title-shadow text-[var(--color-accent)]">Demon Tools</span>
              </h1>
            </ScrollReveal>

            {/* 副标题 */}
            <ScrollReveal animation="up" delay={250}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg md:text-xl">
                Find levels, choose your next demon, unlock rewards, fix common issues, and follow
                skill based progression routes.
              </p>
            </ScrollReveal>

            {/* 定义性首段 — AI 可直接摘取的站点定义 */}
            <ScrollReveal animation="up" delay={320}>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-text-dim)]">
                GD Level Tools is a free, fan-made website that helps Geometry Dash players find
                levels, plan demon progression, and fix common technical issues.
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal animation="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link href="/level-finder" className="gd-btn gd-btn-primary text-base !px-6 !py-3">
                  <span>Find a Level</span>
                </Link>
                <Link href="/first-demon-picker" className="gd-btn gd-btn-secondary text-base !px-6 !py-3">
                  <span>Pick My First Demon</span>
                </Link>
                <Link href="/demon-list" className="gd-btn gd-btn-outline text-base !px-6 !py-3">
                  <span>View Demon List</span>
                </Link>
                <Link href="/vault-codes" className="gd-btn gd-btn-accent text-base !px-6 !py-3">
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

        {/* GD 地面条 — 方块地面 + 刺排（替代原来的渐变细线） */}
        <GroundStrip />
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
              href="/level-finder"
              title="Level Finder"
              desc="Filter levels by difficulty, skill, platform, and more."
              icon="search"
              color="cyan"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <ToolCard
              href="/first-demon-picker"
              title="First Demon Picker"
              desc="Answer a few questions to find your perfect first demon."
              icon="pick"
              color="purple"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={200}>
            <ToolCard
              href="/demon-progression"
              title="Demon Progression"
              desc="Plan your route from Easy Demon to Extreme Demon."
              icon="ladder"
              color="gold"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={0}>
            <ToolCard
              href="/vault-codes"
              title="Vault Codes"
              desc="All secret codes for The Vault, Vault of Secrets, and more."
              icon="key"
              color="cyan"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <ToolCard
              href="/fix"
              title="Fix Guides"
              desc="Solve screen dark, tearing, and loading issues."
              icon="wrench"
              color="purple"
            />
          </ScrollReveal>
          <ScrollReveal animation="up" delay={200}>
            <ToolCard
              href="/submit-level"
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
            <Link href="/first-demon-picker" className="gd-link text-sm font-medium">
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
            <Link href="/level-finder" className="gd-link text-sm font-medium">
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
        style={{ color, textShadow: `0 0 20px color-mix(in srgb, ${color} 40%, transparent)` }}
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
            style={{ borderColor: `color-mix(in srgb, ${colorVar} 40%, transparent)`, background: `color-mix(in srgb, ${colorVar} 13%, transparent)`, boxShadow: `0 0 25px color-mix(in srgb, ${colorVar} 20%, transparent)` }}
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
function GuideCardLink({ guide }: { guide: ReturnType<typeof getGuides>[0] }) {  const categoryColor =
    guide.category === "fix" ? "var(--color-secondary)" : guide.category === "rewards" ? "var(--color-accent)" : "var(--color-primary)";

  const href = guide.category === "fix" ? `/fix/${guide.slug}` : guide.category === "mods" ? `/mods/${guide.slug}` : `/guides/${guide.slug}`;

  return (
    <Link href={href} className="gd-card group block h-full p-5">
      <span className="gd-badge mb-3" style={{ backgroundColor: `color-mix(in srgb, ${categoryColor} 13%, transparent)`, color: categoryColor }}>
        {guide.category}
      </span>
      <h3 className="mb-2 text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
        {guide.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{guide.summary}</p>
    </Link>
  );
}

/** GD 地面条 — Hero 底部的方块地面 + 刺排（pattern 平铺，纯装饰） */
function GroundStrip() {
  return (
    <svg
      className="absolute bottom-0 left-0 h-12 w-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="gd-ground-tile" width="192" height="48" patternUnits="userSpaceOnUse">
          {/* 地面发光顶边 */}
          <rect x="0" y="22" width="192" height="2" fill="var(--color-primary)" opacity="0.9" />
          {/* 地面方块 */}
          {Array.from({ length: 8 }, (_, i) => (
            <rect
              key={i}
              x={i * 24}
              y="24"
              width="24"
              height="24"
              fill="var(--color-bg-soft)"
              stroke="var(--color-border)"
              strokeWidth="1"
            />
          ))}
          {/* 刺排 — 只在每段右半部分，给跑酷方块留跑道 */}
          <path d="M120 24 L128 6 L136 24 Z" fill="var(--color-primary)" opacity="0.3" stroke="var(--color-primary)" strokeWidth="1.5" />
          <path d="M136 24 L144 10 L152 24 Z" fill="var(--color-primary)" opacity="0.3" stroke="var(--color-primary)" strokeWidth="1.5" />
          <path d="M168 24 L176 8 L184 24 Z" fill="var(--color-accent)" opacity="0.3" stroke="var(--color-accent)" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gd-ground-tile)" />
    </svg>
  );
}

/** GD 锯齿 — 旋转的经典障碍物（纯装饰） */
function SawBlade({ className = "" }: { className?: string }) {

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon
        points="81.3,43.3 98,50 81.3,56.7 80.4,59.9 91.6,74 73.8,71.4 71.4,73.8 74,91.6 59.9,80.4 56.7,81.3 50,98 43.3,81.3 40.1,80.4 26,91.6 28.6,73.8 26.2,71.4 8.4,74 19.6,59.9 18.7,56.7 2,50 18.7,43.3 19.6,40.1 8.4,26 26.2,28.6 28.6,26.2 26,8.4 40.1,19.6 43.3,18.7 50,2 56.7,18.7 59.9,19.6 74,8.4 71.4,26.2 73.8,28.6 91.6,26 80.4,40.1"
        fill="var(--color-bg-card)"
        stroke="var(--color-secondary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="14" fill="var(--color-bg-soft)" stroke="var(--color-secondary)" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" fill="var(--color-secondary)" opacity="0.6" />
    </svg>
  );
}

/** 真实游戏截图墙 — Hero 背景：三排关卡截图缓慢滚动（纯装饰）
 *  每排图片序列渲染两份，translateX(-50%) 实现无缝循环；
 *  素材是 public/images/wall/ 下的 560px 缩略图（由 levels 原图缩小，控制加载体积） */
function ScreenshotWall() {
  const shots = [
    "the-nightmare", "bloodbath", "cataclysm", "clubstep", "clutterfunk", "electrodynamix",
    "polargeist", "death-moon", "demon-park", "nine-circles", "jawbreaker", "forsaken-city",
    "crescendo", "impulse", "speed-racer", "windy-landscape",
  ];
  const rows = [
    { images: shots.slice(0, 6), cls: "" },
    { images: shots.slice(6, 12), cls: "gd-wall-row-reverse" },
    { images: [...shots.slice(12, 16), ...shots.slice(0, 2)], cls: "gd-wall-row-slow" },
  ];

  return (
    <div className="gd-wall" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className={`gd-wall-row ${row.cls}`}>
          {[...row.images, ...row.images].map((slug, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${slug}-${i}`}
              src={`/images/wall/${slug}.jpg`}
              alt=""
              className="gd-wall-shot"
              decoding="async"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
