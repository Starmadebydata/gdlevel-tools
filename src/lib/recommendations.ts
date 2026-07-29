import type {
  DemonDifficulty,
  Level,
  PickerInput,
  ProgressionHighestTier,
  ProgressionInput,
  ProgressionLevelRec,
  ProgressionPlan,
  ProgressionSkillFocus,
  Recommendation,
  SkillTag,
} from "@/lib/types";
import { getPublishedLevels } from "@/lib/data/levels";

/**
 * 推荐算法 — First Demon Picker & Demon Progression
 * 使用规则引擎（非 AI），按 PRD 设计的评分公式
 */

/**
 * First Demon Picker 推荐算法
 * 评分公式：beginnerScore*2 + mobileScore(if mobile) - frustrationScore
 *          + skillMatchBonus - weakSkillPenalty - memoryPenalty + lengthBonus
 */
export function recommendFirstDemons(input: PickerInput): Recommendation[] {
  const candidates = getPublishedLevels().filter(
    (l) =>
      l.difficulty === "demon" &&
      l.demonDifficulty === "easy" &&
      l.skillTags.includes("first-demon")
  );

  const scored = candidates.map((level) => {
    let score = level.beginnerScore * 2;

    // 移动端加分
    if (input.platform === "mobile" || input.platform === "both") {
      score += level.mobileScore;
    }

    // 挫败感扣分
    score -= level.frustrationScore;

    // 技能匹配加分
    if (level.skillTags.includes(input.strongestSkill as never)) {
      score += 1.5;
    }

    // 弱项惩罚
    if (level.skillTags.includes(input.weakestSkill as never)) {
      score -= 1.0;
    }

    // 记忆量惩罚
    if (input.memoryTolerance === "low" && level.skillTags.includes("memory")) {
      score -= 1.5;
    } else if (input.memoryTolerance === "medium" && level.skillTags.includes("memory")) {
      score -= 0.5;
    }

    // 视觉容忍度
    if (input.visualTolerance === "clean" && level.visualClarityScore < 4.0) {
      score -= 1.0;
    }

    // 长度偏好
    if (input.preferredLength === "short" && level.length === "short") {
      score += 1.0;
    } else if (input.preferredLength === "long" && level.length === "long") {
      score += 1.0;
    } else if (input.preferredLength === "medium" && level.length === "medium") {
      score += 0.5;
    }

    // 目标匹配
    if (input.goal === "first-clear" && level.frustrationScore <= 2.5) {
      score += 1.0;
    } else if (input.goal === "skill-building" && level.skillTags.includes("skill-practice")) {
      score += 1.0;
    } else if (input.goal === "fast-clear" && level.length === "short") {
      score += 1.0;
    }

    return { level, score };
  });

  // 按分数排序，取前 5
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 5);

  return top.map(({ level }) => buildRecommendation(level, input));
}

/** 构建推荐理由 */
function buildRecommendation(level: Level, input: PickerInput): Recommendation {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let practiceTip = "";

  if (level.beginnerScore >= 4.5) {
    reasons.push("Highly rated for beginners — most players clear this as their first demon.");
  } else if (level.beginnerScore >= 4.0) {
    reasons.push("Good beginner score with forgiving gameplay.");
  }

  if (level.mobileScore >= 4.0 && (input.platform === "mobile" || input.platform === "both")) {
    reasons.push("Excellent mobile compatibility with clean controls.");
  }

  if (level.frustrationScore <= 2.0) {
    reasons.push("Low frustration — deaths feel fair, not cheap.");
  } else if (level.frustrationScore >= 3.5) {
    warnings.push("Higher frustration — expect to die repeatedly at certain sections.");
  }

  if (level.skillTags.includes(input.strongestSkill as never)) {
    reasons.push(`Matches your strongest skill: ${input.strongestSkill}.`);
  }

  if (level.skillTags.includes(input.weakestSkill as never)) {
    warnings.push(`Tests your weakest skill: ${input.weakestSkill}. Practice this section carefully.`);
  }

  if (level.skillTags.includes("memory") && input.memoryTolerance === "low") {
    warnings.push("Contains memory sections — you'll need to learn the route.");
  }

  if (level.visualClarityScore < 4.0 && input.visualTolerance === "clean") {
    warnings.push("Visual decoration may be distracting if you prefer clean levels.");
  }

  // 练习建议
  if (level.skillTags.includes("ship")) {
    practiceTip = "Practice the ship sections in isolation. Smooth throttle control is key — brief holds, brief releases.";
  } else if (level.skillTags.includes("wave")) {
    practiceTip = "For wave sections, use micro-taps instead of holding. Don't overcorrect — small adjustments only.";
  } else if (level.skillTags.includes("timing")) {
    practiceTip = "Turn up the volume. The jumps sync to the music — let the beat guide your taps.";
  } else {
    practiceTip = "Use practice mode to learn the layout, then switch to normal mode for the real attempt.";
  }

  const nextDemon = level.nextLevelIds.length > 0
    ? getPublishedLevels().find((l) => l.id === level.nextLevelIds[0])?.name || "Try another Easy Demon"
    : "Try another Easy Demon";

  return {
    level,
    whyItFits: reasons.join(" "),
    whatToWatchFor: warnings.join(" ") || "No major warnings — this is a solid choice.",
    practiceTip,
    nextDemon,
  };
}

/**
 * Demon Progression Planner
 * 结合通关数量 + 最高 tier + 平台 + 技能偏好，输出完整路线计划
 */

/** 从 URL / searchParams 解析 Progression 输入（SSR + 客户端共用） */
export function parseProgressionSearchParams(
  params: URLSearchParams | Record<string, string | string[] | undefined>
): ProgressionInput | null {
  const get = (key: string): string | null => {
    if (params instanceof URLSearchParams) {
      return params.get(key);
    }
    const raw = params[key];
    if (Array.isArray(raw)) return raw[0] ?? null;
    return raw ?? null;
  };

  const demonsRaw = get("demons");
  const tierRaw = get("tier");
  if (demonsRaw === null && tierRaw === null) return null;

  const completedDemons = Math.max(
    0,
    Math.min(500, parseInt(demonsRaw || "0", 10) || 0)
  );

  const validTiers: ProgressionHighestTier[] = [
    "none",
    "easy",
    "medium",
    "hard",
    "insane",
    "extreme",
  ];
  const validPlatforms = ["pc", "mobile", "both"] as const;
  const validSkills: ProgressionSkillFocus[] = [
    "any",
    "wave",
    "ship",
    "timing",
    "cube",
    "memory",
  ];

  const tier = (tierRaw || "none") as ProgressionHighestTier;
  const platform = (get("platform") || "pc") as ProgressionInput["platform"];
  const skill = (get("skill") || "any") as ProgressionSkillFocus;

  return {
    completedDemons,
    highestTier: validTiers.includes(tier) ? tier : "none",
    platform: validPlatforms.includes(platform as (typeof validPlatforms)[number])
      ? (platform as ProgressionInput["platform"])
      : "pc",
    skillFocus: validSkills.includes(skill) ? skill : "any",
  };
}

export function buildProgressionShareQuery(input: ProgressionInput): string {
  const params = new URLSearchParams();
  params.set("demons", String(input.completedDemons));
  params.set("tier", input.highestTier);
  params.set("platform", input.platform);
  if (input.skillFocus !== "any") params.set("skill", input.skillFocus);
  return params.toString();
}

const TIER_ORDER: ProgressionHighestTier[] = [
  "none",
  "easy",
  "medium",
  "hard",
  "insane",
  "extreme",
];

const TIER_STAGE_FLOOR: Record<ProgressionHighestTier, number> = {
  none: 1,
  easy: 2,
  medium: 4,
  hard: 6,
  insane: 7,
  extreme: 8,
};

const RECOMMENDED_MIN_COUNT: Record<ProgressionHighestTier, number> = {
  none: 0,
  easy: 1,
  medium: 10,
  hard: 25,
  insane: 45,
  extreme: 80,
};

function countBasedStage(completedDemons: number): number {
  if (completedDemons === 0) return 1;
  if (completedDemons <= 5) return 2;
  if (completedDemons <= 15) return 3;
  if (completedDemons <= 30) return 4;
  if (completedDemons <= 50) return 5;
  if (completedDemons <= 80) return 6;
  if (completedDemons <= 120) return 7;
  return 8;
}

function stageMeta(stage: number): { name: string; description: string; targetTierLabel: string } {
  switch (stage) {
    case 1:
      return {
        name: "First Demon",
        description:
          "You haven't beaten a demon yet. Start with a short, forgiving Easy Demon and learn practice mode.",
        targetTierLabel: "Easy Demon (entry)",
      };
    case 2:
      return {
        name: "Beginner Easy Demon",
        description:
          "You're building confidence. Clear a few more Easy Demons so ship, wave, and timing patterns feel familiar.",
        targetTierLabel: "Easy Demon",
      };
    case 3:
      return {
        name: "Standard Easy Demon",
        description:
          "You're comfortable with Easy Demons. Push harder Easy clears and start preparing for the Medium jump.",
        targetTierLabel: "Harder Easy Demon",
      };
    case 4:
      return {
        name: "Late Easy / Early Medium",
        description:
          "This is the common choke point. Use bridge Medium Demons with lower frustration before anything flashy.",
        targetTierLabel: "First Medium Demon",
      };
    case 5:
      return {
        name: "Medium Demon",
        description:
          "You're solid in Medium territory. Stack consistent clears, then edge into Hard Demons carefully.",
        targetTierLabel: "Medium → Hard Demon",
      };
    case 6:
      return {
        name: "Hard Demon",
        description:
          "You're tackling Hard Demons. Prioritize consistency and one skill focus at a time before Insane.",
        targetTierLabel: "Hard Demon",
      };
    case 7:
      return {
        name: "Insane Demon",
        description:
          "You're in Insane Demon territory. Endurance, consistency, and calm retries matter more than raw aim.",
        targetTierLabel: "Insane Demon",
      };
    default:
      return {
        name: "Extreme Demon",
        description:
          "You're ready for Extreme Demons. Start with entry Extremes in our list, then consult Pointercrate for the top end.",
        targetTierLabel: "Extreme Demon",
      };
  }
}

/** 解析阶段：取 count 与 highest-tier 的较高就绪度，并修正 0 通关特例 */
export function resolveProgressionStage(
  completedDemons: number,
  highestTier: ProgressionHighestTier
): number {
  if (completedDemons === 0 && highestTier === "none") return 1;

  const fromCount = countBasedStage(completedDemons);
  const fromTier = TIER_STAGE_FLOOR[highestTier];
  let stage = Math.max(fromCount, fromTier);

  // 有通关数但声称还没打过 demon → 按数量走
  if (highestTier === "none" && completedDemons > 0) {
    stage = fromCount;
  }

  // 数量为 0 却选了 tier → 以 tier 为准（用户可能只记最高难度）
  if (completedDemons === 0 && highestTier !== "none") {
    stage = fromTier;
  }

  return Math.min(8, Math.max(1, stage));
}

/** @deprecated 保留兼容；新逻辑请用 planProgression */
export function getProgressionStage(completedDemons: number): {
  stage: number;
  name: string;
  description: string;
} {
  const stage = resolveProgressionStage(completedDemons, "none");
  const meta = stageMeta(stage);
  return { stage, name: meta.name, description: meta.description };
}

function skillTagsForFocus(focus: ProgressionSkillFocus): SkillTag[] {
  if (focus === "any") return [];
  return [focus];
}

function skillFocusLabel(level: Level, preferred: ProgressionSkillFocus): string {
  const gameplayTags = level.skillTags.filter((t) =>
    ["wave", "ship", "cube", "timing", "memory", "dual", "ufo", "ball", "robot", "spider"].includes(t)
  );
  if (preferred !== "any" && level.skillTags.includes(preferred)) {
    return preferred.charAt(0).toUpperCase() + preferred.slice(1);
  }
  if (gameplayTags.length === 0) return "Mixed skills";
  return gameplayTags
    .slice(0, 2)
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join(" · ");
}

function scoreProgressionLevel(
  level: Level,
  input: ProgressionInput,
  intent: "next" | "bridge" | "skill-path"
): number {
  let score = 0;

  // 早期阶段偏 beginner；后期偏“可挑战但仍可控”
  if (intent === "bridge") {
    score += level.beginnerScore * 2.2;
    score -= level.frustrationScore * 1.4;
    score += level.visualClarityScore * 0.4;
  } else if (intent === "skill-path") {
    score += level.beginnerScore * 1.2;
    score -= level.frustrationScore * 0.6;
    if (input.skillFocus !== "any" && level.skillTags.includes(input.skillFocus)) {
      score += 2.5;
    }
  } else {
    score += level.beginnerScore * 1.6;
    score -= level.frustrationScore * 0.9;
  }

  if (input.platform === "mobile" || input.platform === "both") {
    score += level.mobileScore * 0.8;
  }

  if (input.skillFocus !== "any" && level.skillTags.includes(input.skillFocus)) {
    score += intent === "skill-path" ? 0 : 1.2;
  }

  if (level.skillTags.includes("first-demon") && resolveProgressionStage(input.completedDemons, input.highestTier) <= 2) {
    score += 1.5;
  }

  if (level.skillTags.includes("skill-practice")) {
    score += 0.4;
  }

  // 略偏好短关，降低早期挫败
  if (level.length === "short" || level.length === "tiny") score += 0.35;
  if (level.length === "xl") score -= 0.25;

  return score;
}

function pickTop(
  candidates: Level[],
  input: ProgressionInput,
  intent: ProgressionLevelRec["role"],
  limit: number,
  excludeIds: Set<string>
): Level[] {
  const scored = candidates
    .filter((l) => !excludeIds.has(l.id))
    .map((level) => ({ level, score: scoreProgressionLevel(level, input, intent) }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.level);
}

function demonsByTier(tier: DemonDifficulty): Level[] {
  return getPublishedLevels().filter(
    (l) => l.difficulty === "demon" && l.demonDifficulty === tier
  );
}

function targetTiersForStage(stage: number): DemonDifficulty[] {
  switch (stage) {
    case 1:
    case 2:
    case 3:
      return ["easy"];
    case 4:
      return ["medium", "easy"];
    case 5:
      return ["medium", "hard"];
    case 6:
      return ["hard"];
    case 7:
      return ["insane"];
    default:
      return ["extreme"];
  }
}

function buildWhyNext(
  level: Level,
  stage: number,
  role: ProgressionLevelRec["role"],
  input: ProgressionInput
): string {
  const bits: string[] = [];

  if (role === "bridge") {
    bits.push(
      "Gentle bridge pick — lower relative frustration for the tier jump you are about to make."
    );
  } else if (stage <= 2) {
    bits.push("Strong entry demon for building confidence without unfair deaths.");
  } else if (stage === 3) {
    bits.push("Solid Easy Demon that stretches fundamentals before Medium.");
  } else if (stage === 4) {
    bits.push("Natural next step after Easy Demons — teaches Medium pacing without a wall.");
  } else if (stage === 5) {
    bits.push("Good consistency builder while you sit in Medium / early Hard range.");
  } else if (stage === 6) {
    bits.push("Hard Demon that rewards clean execution and focused practice.");
  } else if (stage === 7) {
    bits.push("Insane-level endurance check — learn sections, then grind normal mode.");
  } else {
    bits.push("Entry Extreme on our list — treat Pointercrate ranks as optional later.");
  }

  if (level.beginnerScore >= 4.3 && stage <= 4) {
    bits.push("High beginner score for this difficulty band.");
  }
  if (level.frustrationScore <= 2.2) {
    bits.push("Deaths tend to feel fair.");
  }
  if (
    (input.platform === "mobile" || input.platform === "both") &&
    level.mobileScore >= 4
  ) {
    bits.push("Plays cleanly on mobile.");
  }
  if (input.skillFocus !== "any" && level.skillTags.includes(input.skillFocus)) {
    bits.push(`Matches your ${input.skillFocus} focus.`);
  }

  return bits.join(" ");
}

function buildRiskNote(
  level: Level,
  stage: number,
  role: ProgressionLevelRec["role"],
  input: ProgressionInput
): string | undefined {
  const notes: string[] = [];

  if (role === "bridge" && level.demonDifficulty === "medium" && input.completedDemons < 10) {
    notes.push("You may still want 2–3 more Easy clears before grinding this in normal mode.");
  }
  if (level.frustrationScore >= 3.6) {
    notes.push("Higher frustration — expect a longer practice-mode phase.");
  }
  if (level.skillTags.includes("memory")) {
    notes.push("Has memory routes — learn the path before full attempts.");
  }
  if (level.skillTags.includes("wave") && input.skillFocus !== "wave" && stage <= 5) {
    notes.push("Wave sections can spike difficulty if wave is your weak skill.");
  }
  if (level.length === "xl" || level.length === "long") {
    notes.push("Longer level — consistency matters as much as skill.");
  }
  if (stage >= 8 && level.demonDifficulty === "extreme") {
    notes.push("Extreme Demons are multi-week projects for most players.");
  }

  return notes.length ? notes.join(" ") : undefined;
}

function toRec(
  level: Level,
  stage: number,
  role: ProgressionLevelRec["role"],
  input: ProgressionInput
): ProgressionLevelRec {
  return {
    level,
    whyNext: buildWhyNext(level, stage, role, input),
    skillFocusLabel: skillFocusLabel(level, input.skillFocus),
    riskNote: buildRiskNote(level, stage, role, input),
    role,
  };
}

function buildSkipWarning(input: ProgressionInput, stage: number): string | null {
  const minForTier = RECOMMENDED_MIN_COUNT[input.highestTier];
  if (
    input.highestTier !== "none" &&
    input.completedDemons > 0 &&
    input.completedDemons < minForTier
  ) {
    const tierLabel = input.highestTier.charAt(0).toUpperCase() + input.highestTier.slice(1);
    return `You've reached ${tierLabel} Demon with only ${input.completedDemons} total demon clears. That can work, but most players feel more stable after ~${minForTier}+ clears at or below this tier. Consider a few bridge levels before the next jump.`;
  }

  if (input.highestTier === "easy" && input.completedDemons >= 3 && input.completedDemons < 8 && stage >= 4) {
    return "The Easy → Medium jump is where many players stall. Finish a short Easy stack first, then take a low-frustration Medium bridge level.";
  }

  if (input.highestTier === "medium" && input.completedDemons < 20 && stage >= 6) {
    return "Jumping from early Medium into Hard often feels unfair. Add more Medium clears so ship/wave patterns become automatic.";
  }

  return null;
}

function buildChecklist(input: ProgressionInput, stage: number): { done: boolean; text: string }[] {
  const c = input.completedDemons;
  const tierIdx = TIER_ORDER.indexOf(input.highestTier);

  const items: { done: boolean; text: string }[] = [
    {
      done: c >= 1 || tierIdx >= TIER_ORDER.indexOf("easy"),
      text: "Beat your first Easy Demon (e.g. The Nightmare or The Lightning Road)",
    },
    {
      done: c >= 5 || tierIdx > TIER_ORDER.indexOf("easy"),
      text: "Clear 3–5 Easy Demons to learn ship, wave, and practice-mode habits",
    },
    {
      done: c >= 10 || tierIdx >= TIER_ORDER.indexOf("medium"),
      text: "Reach ~10 Easy Demon clears before grinding Medium in normal mode",
    },
    {
      done: tierIdx >= TIER_ORDER.indexOf("medium"),
      text: "Beat a bridge Medium Demon (lower frustration, not a showcase wall)",
    },
    {
      done: (c >= 25 && tierIdx >= TIER_ORDER.indexOf("medium")) || tierIdx >= TIER_ORDER.indexOf("hard"),
      text: "Stack Medium consistency, then attempt Hard Demons like Nine Circles",
    },
    {
      done: tierIdx >= TIER_ORDER.indexOf("insane") || (stage >= 7 && c >= 50),
      text: "Only move to Insane/Extreme after Hard feels repeatable, not lucky",
    },
  ];

  // 当前阶段相关的 4 条优先展示
  if (stage <= 2) return items.slice(0, 3);
  if (stage <= 4) return items.slice(0, 4);
  if (stage <= 6) return items.slice(1, 5);
  return items.slice(2, 6);
}

function nextMilestone(stage: number, input: ProgressionInput): string {
  switch (stage) {
    case 1:
      return "Milestone: beat 1 Easy Demon.";
    case 2:
      return `Milestone: reach 5 Easy Demon clears (you have ${input.completedDemons}).`;
    case 3:
      return `Milestone: reach ~10–15 Easy clears, then take one Medium bridge level.`;
    case 4:
      return "Milestone: beat your first Medium Demon without rage-quitting the grind.";
    case 5:
      return "Milestone: 5+ Medium Demons, then sample an entry Hard Demon.";
    case 6:
      return "Milestone: consistent Hard clears before any Insane attempt.";
    case 7:
      return "Milestone: one Insane Demon clear with controlled practice sessions.";
    default:
      return "Milestone: first Extreme clear — track attempts, rest, and section progress.";
  }
}

function candidatesForNext(stage: number, input: ProgressionInput): Level[] {
  const tiers = targetTiersForStage(stage);
  let pool = tiers.flatMap((t) => demonsByTier(t));

  if (stage <= 2) {
    const first = pool.filter((l) => l.skillTags.includes("first-demon"));
    if (first.length >= 3) pool = first;
  }

  if (stage === 3) {
    // 偏“进阶 Easy”：排除过低挑战感可选，但库小则保留全部 easy
    pool = demonsByTier("easy");
  }

  if (stage === 4) {
    // 下一步主推 medium；easy 作为补位在 pick 时由 bridge 承担
    pool = demonsByTier("medium");
    if (pool.length < 3) pool = [...pool, ...demonsByTier("easy")];
  }

  if (input.platform === "mobile") {
    // 不硬过滤，评分已偏好 mobileScore
  }

  return pool;
}

function bridgePool(stage: number): Level[] {
  // Easy → Medium 与 Medium → Hard 是社区评论点名的断层
  if (stage === 3 || stage === 4) {
    return demonsByTier("medium");
  }
  if (stage === 5) {
    return demonsByTier("hard");
  }
  if (stage === 6) {
    return demonsByTier("insane");
  }
  return [];
}

/**
 * 主入口：生成完整 Progression 计划
 */
export function planProgression(input: ProgressionInput): ProgressionPlan {
  const stage = resolveProgressionStage(input.completedDemons, input.highestTier);
  const meta = stageMeta(stage);
  const used = new Set<string>();

  const nextLevels = pickTop(candidatesForNext(stage, input), input, "next", 5, used);
  nextLevels.forEach((l) => used.add(l.id));

  const bridgeLevels = pickTop(bridgePool(stage), input, "bridge", 3, used);
  bridgeLevels.forEach((l) => used.add(l.id));

  let skillPath: ProgressionPlan["skillPath"] = null;
  if (input.skillFocus !== "any") {
    const focusTags = skillTagsForFocus(input.skillFocus);
    const pathTiers = targetTiersForStage(stage);
    // 技能路线可跨当前 + 下一 tier 一点
    const extendedTiers: DemonDifficulty[] =
      stage <= 3 ? ["easy", "medium"] : pathTiers;

    const skillCandidates = getPublishedLevels().filter(
      (l) =>
        l.difficulty === "demon" &&
        l.demonDifficulty &&
        extendedTiers.includes(l.demonDifficulty) &&
        focusTags.some((t) => l.skillTags.includes(t))
    );

    const skillLevels = pickTop(skillCandidates, input, "skill-path", 4, used);
    if (skillLevels.length > 0) {
      const skillName = input.skillFocus.charAt(0).toUpperCase() + input.skillFocus.slice(1);
      skillPath = {
        skill: input.skillFocus,
        title: `${skillName} training route`,
        description: `Four demons that lean on ${skillName.toLowerCase()} at your current stage — practice the skill without random tier spikes.`,
        levels: skillLevels.map((l) => toRec(l, stage, "skill-path", input)),
      };
      skillLevels.forEach((l) => used.add(l.id));
    }
  }

  // Extreme 库不足时的诚实兜底
  let recommendations = nextLevels.map((l) => toRec(l, stage, "next", input));
  if (stage >= 8 && recommendations.length === 0) {
    const insaneFallback = pickTop(demonsByTier("insane"), input, "next", 3, used);
    recommendations = insaneFallback.map((l) => ({
      ...toRec(l, stage, "next", input),
      whyNext:
        "No Extreme entry fit your filters in our database yet — use these Insane clears as final prep, then check Pointercrate for Extremes.",
      riskNote: "This is prep, not an Extreme substitute.",
    }));
  }

  // Stage 8 有 extreme 时正常返回；确保不会错误返回 insane 作为主推荐（除非上面兜底）
  if (stage >= 8) {
    const extremes = pickTop(demonsByTier("extreme"), input, "next", 5, new Set());
    if (extremes.length > 0) {
      recommendations = extremes.map((l) => toRec(l, stage, "next", input));
    }
  }

  return {
    stage,
    name: meta.name,
    description: meta.description,
    targetTierLabel: meta.targetTierLabel,
    recommendations,
    bridgeRecommendations: bridgeLevels.map((l) => toRec(l, stage, "bridge", input)),
    skillPath,
    checklist: buildChecklist(input, stage),
    skipWarning: buildSkipWarning(input, stage),
    nextMilestone: nextMilestone(stage, input),
  };
}

/** @deprecated 保留兼容；新逻辑请用 planProgression */
export function getProgressionRecommendations(stage: number): Level[] {
  const plan = planProgression({
    completedDemons:
      stage <= 1 ? 0 : stage === 2 ? 3 : stage === 3 ? 10 : stage === 4 ? 20 : stage === 5 ? 40 : stage === 6 ? 60 : stage === 7 ? 100 : 130,
    highestTier: "none",
    platform: "both",
    skillFocus: "any",
  });
  return plan.recommendations.map((r) => r.level);
}

/** 全阶段路线图静态数据（UI 用） */
export const PROGRESSION_ROADMAP = [
  { stage: 1, name: "First Demon", demons: "0", desc: "The Nightmare, The Lightning Road" },
  { stage: 2, name: "Beginner Easy Demon", demons: "1-5", desc: "Platinum Adventure, Demon Park" },
  { stage: 3, name: "Standard Easy Demon", demons: "6-15", desc: "Shiver, Speed Racer, Nocturne" },
  { stage: 4, name: "Early Medium Demon", demons: "16-30", desc: "Bridge Mediums — low frustration first" },
  { stage: 5, name: "Medium Demon", demons: "31-50", desc: "Medium stack, then entry Hard" },
  { stage: 6, name: "Hard Demon", demons: "51-80", desc: "Nine Circles, Jawbreaker" },
  { stage: 7, name: "Insane Demon", demons: "81-120", desc: "Supersonic, Windy Landscape" },
  { stage: 8, name: "Extreme Demon", demons: "120+", desc: "Entry Extremes → Pointercrate" },
] as const;
