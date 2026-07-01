import type { Level, PickerInput, Recommendation } from "@/lib/types";
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
 * 根据已通关数判断当前阶段
 */
export function getProgressionStage(completedDemons: number): {
  stage: number;
  name: string;
  description: string;
} {
  if (completedDemons === 0) {
    return {
      stage: 1,
      name: "First Demon",
      description: "You haven't beaten a demon yet. Start with an Easy Demon like The Nightmare or The Lightning Road.",
    };
  } else if (completedDemons <= 5) {
    return {
      stage: 2,
      name: "Beginner Easy Demon",
      description: "You're building confidence. Keep clearing Easy Demons to develop fundamental skills.",
    };
  } else if (completedDemons <= 15) {
    return {
      stage: 3,
      name: "Standard Easy Demon",
      description: "You're comfortable with Easy Demons. Start challenging yourself with harder ones.",
    };
  } else if (completedDemons <= 30) {
    return {
      stage: 4,
      name: "Late Easy Demon / Early Medium",
      description: "You're ready to attempt your first Medium Demon. Try B or Problematic.",
    };
  } else if (completedDemons <= 50) {
    return {
      stage: 5,
      name: "Medium Demon",
      description: "You're solid in Medium Demons. Start looking at Hard Demons like Nine Circles.",
    };
  } else if (completedDemons <= 80) {
    return {
      stage: 6,
      name: "Hard Demon",
      description: "You're tackling Hard Demons. Build consistency before moving to Insane Demons.",
    };
  } else if (completedDemons <= 120) {
    return {
      stage: 7,
      name: "Insane Demon",
      description: "You're in Insane Demon territory. Endurance and consistency are your priorities.",
    };
  } else {
    return {
      stage: 8,
      name: "Extreme Demon",
      description: "You're ready for Extreme Demons. Check the Pointercrate Demon List for the hardest levels.",
    };
  }
}

/** 获取某阶段的推荐关卡 */
export function getProgressionRecommendations(stage: number): Level[] {
  const all = getPublishedLevels();

  switch (stage) {
    case 1:
    case 2:
      return all.filter((l) => l.skillTags.includes("first-demon")).slice(0, 5);
    case 3:
      return all.filter((l) => l.demonDifficulty === "easy").slice(0, 5);
    case 4:
      return all.filter((l) => l.demonDifficulty === "medium").slice(0, 3);
    case 5:
      return all.filter((l) => l.demonDifficulty === "medium" || l.demonDifficulty === "hard").slice(0, 5);
    case 6:
      return all.filter((l) => l.demonDifficulty === "hard").slice(0, 3);
    case 7:
      return all.filter((l) => l.demonDifficulty === "insane").slice(0, 3);
    default:
      return all.filter((l) => l.demonDifficulty === "insane").slice(0, 3);
  }
}
