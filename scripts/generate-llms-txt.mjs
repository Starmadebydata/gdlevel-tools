/**
 * llms.txt 生成脚本
 *
 * llms.txt 是一个新兴标准（https://llmstxt.org），类似 robots.txt，
 * 但专门给 AI/LLM 搜索引擎（ChatGPT、Perplexity、Gemini、Claude 等）用的。
 * 它告诉 AI 这个网站有什么内容、怎么理解，从而提高被 AI 引用的概率。
 *
 * 本脚本从数据源（levels.ts / guides.ts / vault-codes.ts）自动生成，
 * 每次新增关卡或指南后跑一次即可：
 *   node scripts/generate-llms-txt.mjs
 *
 * 输出：public/llms.txt
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// 站点配置（与 src/lib/site-config.ts 保持一致）
const DOMAIN = "https://geometrydashlevel.com";
const SITE_NAME = "GD Level Tools";

// 动态导入数据源（TypeScript 文件，用 tsx 跑）
async function loadData() {
  // 用 tsx 子进程加载 ts 数据文件
  const { execSync } = await import("node:child_process");
  const out = execSync(
    `npx tsx -e "
import { getPublishedLevels } from '${resolve(root, "src/lib/data/levels.ts")}';
import { getGuides } from '${resolve(root, "src/lib/data/guides.ts")}';
import { vaultCodes, vaultInfo } from '${resolve(root, "src/lib/data/vault-codes.ts")}';
const levels = getPublishedLevels();
const guides = getGuides();
const vaults = Object.entries(vaultInfo).map(([id, info]) => ({ id, name: info.name, unlockRequirement: info.unlockRequirement, location: info.location }));
const out = {
  levels: levels.map(l => ({ slug: l.slug, name: l.name, difficulty: l.difficulty, demonDifficulty: l.demonDifficulty, creatorName: l.creatorName, review: l.review })),
  guides: guides.map(g => ({ slug: g.slug, title: g.title, category: g.category, summary: g.summary })),
  vaults,
  vaultCodes: vaultCodes.map(c => ({ code: c.code, reward: c.reward, vault: c.vault })),
};
process.stdout.write(JSON.stringify(out));
"`,
    { cwd: root, encoding: "utf-8" }
  );
  return JSON.parse(out);
}

const difficultyLabel = (d, dd) => {
  if (d === "demon") {
    const tier = dd || "easy";
    return `Demon (${tier})`;
  }
  return d.charAt(0).toUpperCase() + d.slice(1);
};

const guidePath = (category) =>
  category === "fix" ? "/fix" : category === "mods" ? "/mods" : "/guides";

const guideCategoryLabel = (c) => {
  const map = {
    rewards: "Rewards Guides",
    mods: "Mods Guides",
    fix: "Fix Guides",
    skills: "Skill Guides",
    demon: "Demon Guides",
    general: "General Guides",
  };
  return map[c] || "Guides";
};

async function main() {
  const { levels, guides, vaults, vaultCodes } = await loadData();

  const lines = [];

  // === 头部 ===
  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(
    `> Independent fan-made tools and guides for Geometry Dash. Find levels by difficulty, pick your first demon, plan your demon progression, look up vault codes, and follow step-by-step fix and mod guides. Not affiliated with RobTop Games.`
  );
  lines.push("");
  lines.push(
    `All content is original, written by fans for fans. Geometry Dash and all related names belong to RobTop Games.`
  );
  lines.push("");

  // === Tools ===
  lines.push("## Tools");
  lines.push("");
  lines.push(
    `- [Level Finder](${DOMAIN}/level-finder/): Filter levels by difficulty, demon tier, skill, length, and platform. The main discovery tool.`
  );
  lines.push(
    `- [Demon List](${DOMAIN}/demon-list/): All demons grouped by tier (Easy → Extreme), with Pointercrate reference.`
  );
  lines.push(
    `- [First Demon Picker](${DOMAIN}/first-demon-picker/): Interactive questionnaire that recommends a personalized first demon based on your skills and platform.`
  );
  lines.push(
    `- [Demon Progression Planner](${DOMAIN}/demon-progression/): Enter your current demon count and get a stage-based roadmap of which demons to play next.`
  );
  lines.push(
    `- [Vault Codes](${DOMAIN}/vault-codes/): Searchable list of in-game secret codes for The Vault, Vault of Secrets, Chamber of Time, and Wraith Vault.`
  );
  lines.push(
    `- [Submit a Level](${DOMAIN}/submit-level/): Community level submission form.`
  );
  lines.push("");

  // === Vault Codes ===
  lines.push("## Vault Codes");
  lines.push("");
  lines.push(
    `A full list of the ${vaultCodes.length} active in-game secret codes from [the Vault Codes page](${DOMAIN}/vault-codes/). Codes are entered inside the game to unlock icons, colors, orbs, keys, and other rewards. These are not cheats — they are official RobTop secrets hidden in the game.`
  );
  lines.push("");
  for (const vault of vaults) {
    const inVault = vaultCodes.filter((c) => c.vault === vault.id);
    if (inVault.length === 0) continue;
    lines.push(`### ${vault.name}`);
    if (vault.unlockRequirement) {
      lines.push(`> Unlock requirement: ${vault.unlockRequirement}`);
    }
    lines.push("");
    for (const c of inVault) {
      lines.push(`- **${c.code}** — ${c.reward}`);
    }
    lines.push("");
  }

  // === Levels (按难度分组) ===
  lines.push("## Level Detail Pages");
  lines.push("");
  lines.push(
    "Each level page includes a review, skill tags, gameplay tips, similar levels, next-step recommendations, and FAQ."
  );
  lines.push("");

  const order = ["easy", "normal", "harder", "insane", "demon"];
  const demonOrder = ["easy", "medium", "hard", "insane", "extreme"];
  const sortByDiff = (a, b) => {
    const ai = order.indexOf(a.difficulty);
    const bi = order.indexOf(b.difficulty);
    if (ai !== bi) return ai - bi;
    if (a.difficulty === "demon") {
      return demonOrder.indexOf(a.demonDifficulty) - demonOrder.indexOf(b.demonDifficulty);
    }
    return a.name.localeCompare(b.name);
  };

  const sortedLevels = [...levels].sort(sortByDiff);
  for (const l of sortedLevels) {
    const diff = difficultyLabel(l.difficulty, l.demonDifficulty);
    const review = (l.review || "").replace(/\s+/g, " ").trim();
    const shortReview = review.length > 120 ? review.slice(0, 117) + "..." : review;
    lines.push(
      `- [${l.name}](${DOMAIN}/levels/${l.slug}/): ${diff} by ${l.creatorName}. ${shortReview}`
    );
  }
  lines.push("");

  // === Guides (按类别分组) ===
  lines.push("## Guides");
  lines.push("");
  lines.push(
    "In-depth how-to guides organized by category: rewards, mods, fixes, skills, demons, and general."
  );
  lines.push("");

  const categories = ["rewards", "mods", "fix", "skills", "demon", "general"];
  for (const cat of categories) {
    const inCat = guides.filter((g) => g.category === cat);
    if (inCat.length === 0) continue;
    lines.push(`### ${guideCategoryLabel(cat)}`);
    lines.push("");
    for (const g of inCat) {
      const excerpt = (g.summary || "").replace(/\s+/g, " ").trim();
      const shortExcerpt = excerpt.length > 140 ? excerpt.slice(0, 137) + "..." : excerpt;
      lines.push(`- [${g.title}](${DOMAIN}${guidePath(cat)}/${g.slug}/): ${shortExcerpt}`);
    }
    lines.push("");
  }

  // === Legal / About ===
  lines.push("## About and Legal");
  lines.push("");
  lines.push(`- [About](${DOMAIN}/about/): What GD Level Tools is and who it's for.`);
  lines.push(`- [Contact](${DOMAIN}/contact/): How to reach the site maintainers.`);
  lines.push(`- [Privacy Policy](${DOMAIN}/privacy/): Privacy practices and ad cookie disclosure.`);
  lines.push(`- [Terms of Service](${DOMAIN}/terms/): Terms of use.`);
  lines.push(`- [DMCA](${DOMAIN}/dmca/): DMCA takedown procedure.`);
  lines.push("");

  const content = lines.join("\n");
  const outPath = resolve(root, "public/llms.txt");
  writeFileSync(outPath, content, "utf-8");

  console.log(`✓ Generated ${outPath}`);
  console.log(`  ${levels.length} levels, ${guides.length} guides, ~${content.length} chars`);
}

main().catch((err) => {
  console.error("Failed to generate llms.txt:", err);
  process.exit(1);
});
