import type { Difficulty, DemonDifficulty } from "@/lib/types";

/**
 * UI 辅助函数：难度颜色、分数显示等
 */

/** 基础难度颜色 */
export function difficultyColor(diff: Difficulty): string {
  const colors: Record<Difficulty, string> = {
    auto: "#757575",
    easy: "#4caf50",
    normal: "#2196f3",
    hard: "#ff9800",
    harder: "#f44336",
    insane: "#e91e63",
    demon: "#9c27b0",
  };
  return colors[diff] || colors.auto;
}

/** Demon 子难度颜色 */
export function demonDifficultyColor(diff: DemonDifficulty): string {
  const colors: Record<DemonDifficulty, string> = {
    easy: "#66bb6a",
    medium: "#ffca28",
    hard: "#ff7043",
    insane: "#ef5350",
    extreme: "#ab47bc",
  };
  return colors[diff];
}

/** Demon 子难度标签 */
export function demonDifficultyLabel(diff: DemonDifficulty): string {
  const labels: Record<DemonDifficulty, string> = {
    easy: "Easy Demon",
    medium: "Medium Demon",
    hard: "Hard Demon",
    insane: "Insane Demon",
    extreme: "Extreme Demon",
  };
  return labels[diff];
}

/** 难度标签 */
export function difficultyLabel(diff: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    auto: "Auto",
    easy: "Easy",
    normal: "Normal",
    hard: "Hard",
    harder: "Harder",
    insane: "Insane",
    demon: "Demon",
  };
  return labels[diff];
}

/** 长度标签 */
export function lengthLabel(length: string): string {
  const labels: Record<string, string> = {
    tiny: "Tiny",
    short: "Short",
    medium: "Medium",
    long: "Long",
    xl: "XL",
    platformer: "Platformer",
  };
  return labels[length] || length;
}

/** 分数文字描述 */
export function scoreLabel(score: number): string {
  if (score >= 4.5) return "Excellent";
  if (score >= 3.5) return "Good";
  if (score >= 2.5) return "Mixed";
  return "Hard";
}

/** 分数颜色 */
export function scoreColor(score: number): string {
  if (score >= 4.5) return "#4caf50";
  if (score >= 3.5) return "#8bc34a";
  if (score >= 2.5) return "#ff9800";
  return "#f44336";
}

/** 技能标签显示名 */
export function skillTagLabel(tag: string): string {
  const labels: Record<string, string> = {
    wave: "Wave",
    ship: "Ship",
    cube: "Cube",
    timing: "Timing",
    memory: "Memory",
    dual: "Dual",
    ufo: "UFO",
    ball: "Ball",
    robot: "Robot",
    spider: "Spider",
    "mobile-friendly": "Mobile Friendly",
    "low-memory": "Low Memory",
    "first-demon": "First Demon",
    "skill-practice": "Skill Practice",
    short: "Short",
    xl: "XL",
    platformer: "Platformer",
  };
  return labels[tag] || tag;
}
