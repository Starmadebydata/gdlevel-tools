/**
 * 全站 TypeScript 类型定义
 * 对应 PRD 中的数据模型
 */

/** 基础难度 */
export type Difficulty =
  | "auto"
  | "easy"
  | "normal"
  | "hard"
  | "harder"
  | "insane"
  | "demon";

/** Demon 子难度 */
export type DemonDifficulty =
  | "easy"
  | "medium"
  | "hard"
  | "insane"
  | "extreme";

/** 关卡长度 */
export type LevelLength =
  | "tiny"
  | "short"
  | "medium"
  | "long"
  | "xl"
  | "platformer";

/** 技能标签 */
export type SkillTag =
  | "wave"
  | "ship"
  | "cube"
  | "timing"
  | "memory"
  | "dual"
  | "ufo"
  | "ball"
  | "robot"
  | "spider"
  | "mobile-friendly"
  | "low-memory"
  | "first-demon"
  | "skill-practice"
  | "short"
  | "xl"
  | "platformer";

/** 关卡数据 */
export type Level = {
  id: string;
  levelId: string;
  name: string;
  slug: string;
  creatorName: string;
  creatorSlug?: string;
  difficulty: Difficulty;
  demonDifficulty?: DemonDifficulty;
  length: LevelLength;
  skillTags: SkillTag[];
  mobileScore: number; // 1-5
  beginnerScore: number; // 1-5
  frustrationScore: number; // 1-5
  visualClarityScore: number; // 1-5
  review: string;
  tips?: string;
  whoShouldPlay?: string;
  whoShouldSkip?: string;
  hardestSections?: string;
  youtubeId?: string; // YouTube 展示视频 ID，用于详情页点击播放
  similarLevelIds: string[];
  nextLevelIds: string[];
  status: "draft" | "published";
  updatedAt: string;
};

/** 创作者 */
export type Creator = {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  styleTags: string[];
  difficultyRange?: string;
  levelIds: string[];
};

/** 指南分类 */
export type GuideCategory =
  | "codes"
  | "rewards"
  | "mods"
  | "fix"
  | "skills"
  | "demon"
  | "general";

/** 指南 */
export type Guide = {
  id: string;
  title: string;
  slug: string;
  category: GuideCategory;
  targetKeyword?: string;
  summary: string;
  body: GuideSection[];
  faq: { question: string; answer: string }[];
  relatedGuideSlugs: string[];
  updatedAt: string;
};

/** 指南正文段落 */
export type GuideSection = {
  heading: string;
  content: string;
  steps?: { title: string; detail: string }[];
};

/** Vault 代码 */
export type VaultCode = {
  code: string;
  reward: string;
  vault: "vault" | "vault-of-secrets" | "chamber-of-time" | "wraith";
};

/** Demon List 条目 */
export type DemonListEntry = {
  rank?: number;
  name: string;
  creator: string;
  levelId: string;
  demonDifficulty: DemonDifficulty;
  skillFocus: SkillTag[];
  bestFor: string;
  avoidIf: string;
  mobileFriendly: boolean;
  review: string;
  nextStep?: string;
};

/** First Demon Picker 输入 */
export type PickerInput = {
  platform: "pc" | "mobile" | "both";
  strongestSkill: string;
  weakestSkill: string;
  preferredLength: "short" | "medium" | "long" | "any";
  memoryTolerance: "low" | "medium" | "high";
  visualTolerance: "clean" | "moderate" | "any";
  goal: "first-clear" | "skill-building" | "fun" | "fast-clear";
};

/** 推荐结果 */
export type Recommendation = {
  level: Level;
  whyItFits: string;
  whatToWatchFor: string;
  practiceTip: string;
  nextDemon: string;
};

/** Demon Progression — 当前最高通关 tier */
export type ProgressionHighestTier =
  | "none"
  | "easy"
  | "medium"
  | "hard"
  | "insane"
  | "extreme";

/** Demon Progression — 技能路线偏好 */
export type ProgressionSkillFocus =
  | "any"
  | "wave"
  | "ship"
  | "timing"
  | "cube"
  | "memory";

/** Demon Progression Planner 输入 */
export type ProgressionInput = {
  completedDemons: number;
  highestTier: ProgressionHighestTier;
  platform: "pc" | "mobile" | "both";
  skillFocus: ProgressionSkillFocus;
};

/** Progression 单条关卡推荐 */
export type ProgressionLevelRec = {
  level: Level;
  whyNext: string;
  skillFocusLabel: string;
  riskNote?: string;
  role: "next" | "bridge" | "skill-path";
};

/** Progression 完整规划结果 */
export type ProgressionPlan = {
  stage: number;
  name: string;
  description: string;
  targetTierLabel: string;
  recommendations: ProgressionLevelRec[];
  bridgeRecommendations: ProgressionLevelRec[];
  skillPath: {
    skill: string;
    title: string;
    description: string;
    levels: ProgressionLevelRec[];
  } | null;
  checklist: { done: boolean; text: string }[];
  skipWarning: string | null;
  nextMilestone: string;
};

/** 面包屑 */
export type Breadcrumb = {
  name: string;
  href: string;
};
