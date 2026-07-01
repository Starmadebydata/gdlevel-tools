import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getPublishedLevels,
  getLevelBySlug,
  getLevelById,
} from "@/lib/data/levels";
import { generateSeo, breadcrumbSchema, faqSchema, articleSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  demonDifficultyColor,
  demonDifficultyLabel,
  difficultyLabel,
  lengthLabel,
  scoreColor,
  scoreLabel,
  skillTagLabel,
} from "@/lib/ui";

export function generateStaticParams() {
  return getPublishedLevels().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const level = getLevelBySlug(slug);
  if (!level) return generateSeo({ title: "Level Not Found", noIndex: true });

  const title = `${level.name} by ${level.creatorName} — ${level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : difficultyLabel(level.difficulty)}`;
  return generateSeo({
    title,
    description: level.review.slice(0, 160),
    path: `/levels/${level.slug}/`,
  });
}

export default async function LevelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const level = getLevelBySlug(slug);

  if (!level) notFound();

  const demonColor = level.demonDifficulty
    ? demonDifficultyColor(level.demonDifficulty)
    : "#9c27b0";

  const similar = level.similarLevelIds
    .map((id) => getLevelById(id))
    .filter(Boolean)
    .slice(0, 3);
  const nextLevels = level.nextLevelIds
    .map((id) => getLevelById(id))
    .filter(Boolean)
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Levels", href: "/level-finder/" },
    { name: level.name, href: `/levels/${level.slug}/` },
  ];

  const faqs = [
    {
      question: `Is ${level.name} good for beginners?`,
      answer:
        level.beginnerScore >= 4
          ? `Yes. ${level.name} has a beginner score of ${level.beginnerScore}/5, making it ${level.beginnerScore >= 4.5 ? "one of the best" : "a solid"} choice for newer players.`
          : `${level.name} has a beginner score of ${level.beginnerScore}/5. It may be challenging for new players — consider easier levels first.`,
    },
    {
      question: `Is ${level.name} mobile friendly?`,
      answer:
        level.mobileScore >= 4
          ? `Yes. ${level.name} has a mobile score of ${level.mobileScore}/5, making it well suited for mobile play.`
          : `${level.name} has a mobile score of ${level.mobileScore}/5. It may be harder to play on mobile.`,
    },
    {
      question: `What is the level ID for ${level.name}?`,
      answer: `The level ID for ${level.name} is ${level.levelId}. You can search for this ID in Geometry Dash to find and play the level.`,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Schema */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
          title: level.name,
          description: level.review,
          url: `${siteConfig.domain}/levels/${level.slug}/`,
          updatedAt: level.updatedAt,
        }))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* 标题区 */}
      <div className="mb-2 h-1 w-12 rounded-full" style={{ background: demonColor }} />
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span
          className="gd-badge"
          style={{ backgroundColor: `${demonColor}22`, color: demonColor, border: `1px solid ${demonColor}44` }}
        >
          {level.demonDifficulty ? demonDifficultyLabel(level.demonDifficulty) : difficultyLabel(level.difficulty)}
        </span>
        <span className="gd-badge" style={{ backgroundColor: "rgba(136,146,176,0.13)", color: "var(--color-text-muted)" }}>
          {lengthLabel(level.length)}
        </span>
        <span className="text-xs text-[var(--color-text-dim)] font-mono">Level ID: {level.levelId}</span>
      </div>

      <h1 className="mb-2 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
        <span className="gd-glow-text">{level.name}</span>
      </h1>
      <p className="mb-6 text-base text-[var(--color-text-muted)]">
        by <span className="font-medium text-[var(--color-text)]">{level.creatorName}</span>
      </p>

      {/* 评分卡片 */}
      <div className="gd-card mb-6 p-5">
        <h2 className="mb-4 text-sm font-bold text-[var(--color-text)]">Scores</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          <ScoreItem label="Mobile" score={level.mobileScore} />
          <ScoreItem label="Beginner" score={level.beginnerScore} />
          <ScoreItem label="Visual" score={level.visualClarityScore} />
          <ScoreItem label="Frustration" score={6 - level.frustrationScore} invert label2="Forgiving" />
        </div>
      </div>

      {/* 评测 */}
      <div className="gd-card mb-6 p-6">
        <h2 className="mb-3 text-lg font-bold text-[var(--color-text)]">Review</h2>
        <p className="leading-relaxed text-[var(--color-text-muted)]">{level.review}</p>
      </div>

      {/* 技能标签 */}
      <div className="gd-card mb-6 p-5">
        <h2 className="mb-3 text-sm font-bold text-[var(--color-text)]">Skill Tags</h2>
        <div className="flex flex-wrap gap-2">
          {level.skillTags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1 text-sm text-[var(--color-text-muted)]"
            >
              {skillTagLabel(tag)}
            </span>
          ))}
        </div>
      </div>

      {/* Tips / Who should play */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {level.tips && (
          <div className="gd-card p-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--color-primary)]">Tips</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{level.tips}</p>
          </div>
        )}
        {level.hardestSections && (
          <div className="gd-card p-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--color-hard)]">Hardest Sections</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{level.hardestSections}</p>
          </div>
        )}
        {level.whoShouldPlay && (
          <div className="gd-card p-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--color-easy)]">Who Should Play</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{level.whoShouldPlay}</p>
          </div>
        )}
        {level.whoShouldSkip && (
          <div className="gd-card p-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--color-text-dim)]">Who Should Skip</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{level.whoShouldSkip}</p>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mb-6">
        <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="gd-card p-4">
              <h3 className="mb-2 text-sm font-bold text-[var(--color-text)]">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 相关关卡 */}
      {similar.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">Similar Levels</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {similar.map((l) => l && (
              <Link key={l.id} href={`/levels/${l.slug}/`} className="gd-card group block p-4">
                <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{l.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">by {l.creatorName}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 下一步 */}
      {nextLevels.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-bold text-[var(--color-text)]">Next Steps</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {nextLevels.map((l) => l && (
              <Link key={l.id} href={`/levels/${l.slug}/`} className="gd-card group block p-4">
                <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{l.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {l.demonDifficulty ? demonDifficultyLabel(l.demonDifficulty) : difficultyLabel(l.difficulty)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 返回链接 */}
      <div className="flex flex-wrap gap-3">
        <Link href="/level-finder/" className="gd-btn gd-btn-outline">← Back to Level Finder</Link>
        <Link href="/demon-list/" className="gd-btn gd-btn-outline">View Demon List</Link>
      </div>
    </div>
  );
}

function ScoreItem({ label, score, label2 }: { label: string; score: number; invert?: boolean; label2?: string }) {
  const color = scoreColor(score);
  const pct = Math.min((score / 5) * 100, 100);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-dim)]">{label2 || label}</span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>{scoreLabel(score)}</span>
      </div>
      <div className="gd-score-bar">
        <div className="gd-score-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
