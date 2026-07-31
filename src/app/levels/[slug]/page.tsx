import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import LevelVideoPlayer from "@/components/LevelVideoPlayer";
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
    path: `/levels/${level.slug}`,
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
    { name: "Levels", href: "/level-finder" },
    { name: level.name, href: `/levels/${level.slug}` },
  ];

  // FAQ 答案：按分数与难度生成确定性措辞，禁止 may/might 式模糊语
  const difficultyText = level.demonDifficulty
    ? demonDifficultyLabel(level.demonDifficulty)
    : difficultyLabel(level.difficulty);
  const difficultyArticle = /^[AEIOU]/.test(difficultyText) ? "an" : "a";

  // 新手适用性：低分时直接给出否定结论，并指向站内 Easy Demon 参照
  const beginnerLow = level.beginnerScore < 3;
  const beginnerVerdict = level.demonDifficulty
    ? `No. ${level.name} is ${difficultyArticle} ${difficultyText} and is not suitable for beginners.`
    : `No. ${level.name} has a beginner score of ${level.beginnerScore}/5, so it is not a good pick for first-time players.`;
  const beginnerAnswer = level.beginnerScore >= 4
    ? `Yes. ${level.name} is one of the more accessible ${difficultyText} levels for newer players, with a beginner score of ${level.beginnerScore}/5.`
    : beginnerLow
      ? `${beginnerVerdict} New players should start with Easy Demons like The Nightmare instead.`
      : `${level.name} has a beginner score of ${level.beginnerScore}/5. Expect a grind: learn the layout in practice mode before attempting a normal-mode clear.`;

  const mobileAnswer = level.mobileScore >= 4
    ? `Yes. ${level.name} has a mobile score of ${level.mobileScore}/5, so it plays well on mobile devices.`
    : level.mobileScore >= 2.5
      ? `${level.name} has a mobile score of ${level.mobileScore}/5. It is playable on mobile, but PC inputs are more consistent for the tighter sections.`
      : `No. ${level.name} has a mobile score of ${level.mobileScore}/5. Play it on PC — the timings are too tight for touch controls.`;

  // node 用于页面渲染（可带站内链接），answer 纯文本用于 FAQ schema
  const faqs: { question: string; answer: string; node?: React.ReactNode }[] = [
    {
      question: `Is ${level.name} good for beginners?`,
      answer: beginnerAnswer,
      node: beginnerLow ? (
        <>
          {beginnerVerdict} New players should start with Easy Demons like{" "}
          <Link href="/levels/the-nightmare" className="text-[var(--color-primary)] underline">
            The Nightmare
          </Link>{" "}
          instead.
        </>
      ) : undefined,
    },
    {
      question: `Is ${level.name} mobile friendly?`,
      answer: mobileAnswer,
    },
    {
      question: `What is the level ID for ${level.name}?`,
      answer: `The level ID for ${level.name} is ${level.levelId}. You can search for this ID in Geometry Dash to find and play the level.`,
    },
    {
      question: `How difficult is ${level.name}?`,
      answer: `${level.name} is ${difficultyArticle} ${difficultyText} level by ${level.creatorName}, rated ${lengthLabel(level.length)} length in game. On this site it has a beginner score of ${level.beginnerScore}/5 and a frustration score of ${level.frustrationScore}/5.`,
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
          url: `${siteConfig.domain}/levels/${level.slug}`,
          updatedAt: level.updatedAt,
        }))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      {/* 关卡实体 — CreativeWork 结构化标注 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: level.name,
          identifier: level.levelId,
          creator: { "@type": "Person", name: level.creatorName },
        }) }}
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
        <span className="gd-badge" style={{ backgroundColor: "color-mix(in srgb, var(--color-text-muted) 13%, transparent)", color: "var(--color-text-muted)" }}>
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

      {/* 关卡缩略图 / 视频播放器 — 点击播放 YouTube 展示视频 */}
      <LevelVideoPlayer
        slug={level.slug}
        name={level.name}
        creatorName={level.creatorName}
        youtubeId={level.youtubeId}
      />

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

      {/* Level Facts — 确定性硬数据块，供 AI 直接引用 */}
      <div className="gd-card mb-6 p-5">
        <h2 className="mb-4 text-sm font-bold text-[var(--color-text)]">Level Facts</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          <FactItem label="Level ID" value={level.levelId} mono />
          <FactItem label="Creator" value={level.creatorName} />
          <FactItem label="Difficulty" value={difficultyText} />
          <FactItem label="Length" value={lengthLabel(level.length)} />
          <FactItem label="Last updated" value={level.updatedAt} mono />
        </dl>
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
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.node ?? faq.answer}</p>
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
              <Link key={l.id} href={`/levels/${l.slug}`} className="gd-card group block p-4">
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
              <Link key={l.id} href={`/levels/${l.slug}`} className="gd-card group block p-4">
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
        <Link href="/level-finder" className="gd-btn gd-btn-outline">← Back to Level Finder</Link>
        <Link href="/demon-list" className="gd-btn gd-btn-outline">View Demon List</Link>
      </div>
    </div>
  );
}

/** 硬事实项 — Level Facts 块中的单条数据 */
function FactItem({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="mb-1 text-xs text-[var(--color-text-dim)]">{label}</dt>
      <dd className={`text-sm font-semibold text-[var(--color-text)] ${mono ? "font-mono" : ""}`}>{value}</dd>
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
