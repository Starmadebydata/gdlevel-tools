import type { VaultCode } from "@/lib/types";

/**
 * Vault Codes 数据
 * 来源：GameRant、Dexerto、Steam 社区指南（2026年6月更新）
 * 注意：这些是游戏内合法 secret codes，不是作弊码
 */

export const vaultCodes: VaultCode[] = [
  // ===== The Vault（基础密码库，需 10 Silver User Coins）=====
  { code: "Lenny", reward: "Lenny icon", vault: "vault" },
  { code: "Blockbite", reward: "UFO icon", vault: "vault" },
  { code: "Spooky", reward: "Shy Guy icon", vault: "vault" },
  { code: "Neverending", reward: "UFO icon", vault: "vault" },
  { code: "Mule", reward: "Ship icon", vault: "vault" },
  { code: "Ahead", reward: "Wave icon", vault: "vault" },
  { code: "Gandalfpotter", reward: "Trail", vault: "vault" },
  { code: "Sparky", reward: "Secret Coin", vault: "vault" },
  { code: "Robotop", reward: "Robot icon", vault: "vault" },
  { code: "8-16-30-32-46-84", reward: "Illuminati Wave", vault: "vault" },

  // ===== Vault of Secrets（需 50 Diamonds）=====
  { code: "Robotop", reward: "Robot icon", vault: "vault-of-secrets" },
  { code: "Octocube", reward: "Octopus-shaped icon", vault: "vault-of-secrets" },
  { code: "Brain Power", reward: "Brain-shaped icon", vault: "vault-of-secrets" },
  { code: "Seven", reward: "Finn (Adventure Time) icon", vault: "vault-of-secrets" },
  { code: "thechickenisonfire", reward: "Swamp Green color", vault: "vault-of-secrets" },
  { code: "The Challenge", reward: "Vault Keeper's secret level", vault: "vault-of-secrets" },
  { code: "Gimmiethecolor", reward: "Dark Red color", vault: "vault-of-secrets" },
  { code: "It's a Puzzle", reward: "Icon", vault: "vault-of-secrets" },
  { code: "Glubfub", reward: "Secret Coin", vault: "vault-of-secrets" },

  // ===== Chamber of Time（需 Master Emblem）=====
  { code: "Volcano", reward: "Wave icon", vault: "chamber-of-time" },
  { code: "River", reward: "Dark Green color", vault: "chamber-of-time" },
  { code: "Silence", reward: "Silence icon", vault: "chamber-of-time" },
  { code: "Darkness", reward: "Darkness icon", vault: "chamber-of-time" },
  { code: "Hunger", reward: "Hunger icon", vault: "chamber-of-time" },
  { code: "Back on track", reward: "Icon", vault: "chamber-of-time" },

  // ===== The Wraith Vault（2.2 新增，The Tower 内）=====
  { code: "thickofit", reward: "1 Mana Orb", vault: "wraith" },
  { code: "skibidi", reward: "1 Mana Orb", vault: "wraith" },
  { code: "fireinthehole", reward: "1 Fire Shard", vault: "wraith" },
  { code: "robtopisnice", reward: "10 Mana Orbs", vault: "wraith" },
  { code: "bussin", reward: "69 Mana Orbs", vault: "wraith" },
  { code: "wellmet", reward: "5 Diamonds", vault: "wraith" },
  { code: "checksteam", reward: "1 Demon Key", vault: "wraith" },
  { code: "touchgrass", reward: "1 Earth Shard", vault: "wraith" },
  { code: "wateronthehill", reward: "1 Ice Shard", vault: "wraith" },
  { code: "backondash", reward: "Cube 409", vault: "wraith" },
  { code: "key", reward: "1 Demon Key", vault: "wraith" },
  { code: "geometry", reward: "Ball 90", vault: "wraith" },
  { code: "citadel", reward: "Cube 231", vault: "wraith" },
  { code: "retrospective", reward: "Ship 121", vault: "wraith" },
  { code: "iaminpain", reward: "10 Diamonds + 100 Mana Orbs", vault: "wraith" },
  { code: "ruins", reward: "Ball 91", vault: "wraith" },
  { code: "spacegauntlet", reward: "20 Diamonds + 1 Demon Key + 2 Metal Shards", vault: "wraith" },
  { code: "cheatcodes", reward: "UFO 138", vault: "wraith" },
  { code: "backstreetboy", reward: "Robot 37", vault: "wraith" },
  { code: "noelelectra", reward: "Swing 17", vault: "wraith" },
  { code: "gd2025", reward: "1 Yellow Key + 25 Diamonds + 25 Mana Orbs", vault: "wraith" },
  { code: "duckstep", reward: "Ship 146", vault: "wraith" },
  { code: "skylinept2", reward: "Cube 309", vault: "wraith" },
  { code: "boogie", reward: "Wave 92", vault: "wraith" },
  { code: "buttonmasher", reward: "UFO 63", vault: "wraith" },
  { code: "gdawards", reward: "Cube 485", vault: "wraith" },
  { code: "ncsalbum", reward: "Jetpack 8", vault: "wraith" },
  { code: "gullible", reward: "1 Mana Orb", vault: "wraith" },
  { code: "putyahandsup", reward: "UFO 71", vault: "wraith" },
];

/** Vault 信息 */
export const vaultInfo = {
  vault: {
    name: "The Vault",
    unlockRequirement: "Collect 10 Silver User Coins",
    location: "Settings page, top-right lock icon",
  },
  "vault-of-secrets": {
    name: "The Vault of Secrets",
    unlockRequirement: "Collect 50 Diamonds",
    location: "Main menu, top-right lock icon (second vault)",
  },
  "chamber-of-time": {
    name: "The Chamber of Time",
    unlockRequirement:
      "Complete 'The Challenge' from Vault of Secrets, then buy the Master Emblem (700 Diamonds + 1000 Mana Orbs), then open the hidden door in the Coming Soon section",
    location: "Coming Soon screen, hidden door behind orange lock in Basement",
  },
  wraith: {
    name: "The Wraith Vault",
    unlockRequirement: "Access The Tower level, find the face icon in the bottom-right corner",
    location: "Inside The Tower level (2.2 content)",
  },
} as const;

/** 获取指定 vault 的代码 */
export function getCodesByVault(vault: VaultCode["vault"]): VaultCode[] {
  return vaultCodes.filter((c) => c.vault === vault);
}
