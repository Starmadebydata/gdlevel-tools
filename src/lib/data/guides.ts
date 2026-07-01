import type { Guide } from "@/lib/types";

/**
 * 指南数据
 * 基于游戏研究整理，覆盖奖励、Mod、修复、技能等分类
 */

export const guides: Guide[] = [
  // ===== Rewards =====
  {
    id: "guide-diamonds",
    title: "How to Get Diamonds in Geometry Dash",
    slug: "diamonds",
    category: "rewards",
    targetKeyword: "how to get diamonds in geometry dash",
    summary:
      "You can get diamonds by completing daily quests, daily levels, weekly demons, opening chests, and completing gauntlets.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Diamonds are earned through regular in-game activities: daily quests, daily levels, weekly demons, treasure room chests, and gauntlet completions. Rated user levels also give diamonds equal to their star rating plus 2.",
      },
      {
        heading: "Fastest Methods",
        content:
          "The most reliable diamond sources, ranked by speed:",
        steps: [
          { title: "Daily Quests", detail: "Three quests refresh daily, each rewarding 2-5 diamonds. This is the most consistent source." },
          { title: "Daily Level", detail: "Completing the daily level rewards diamonds based on its star rating plus 2." },
          { title: "Weekly Demon", detail: "A demon-level daily challenge that rewards more diamonds than regular daily levels." },
          { title: "Treasure Room Chests", detail: "Open chests with keys for a chance at diamonds. 5x and 10x key chests give more." },
          { title: "Gauntlet Completion", detail: "Finishing all levels in a gauntlet rewards diamonds and shards." },
        ],
      },
      {
        heading: "Step by Step Guide",
        content:
          "To maximize diamond income: 1) Check and complete all three daily quests every day. 2) Play the daily level. 3) Attempt the weekly demon. 4) Open any chests you have keys for. 5) Work through gauntlets for bonus rewards.",
      },
      {
        heading: "Common Mistakes",
        content:
          "Many players forget that rated user levels give diamonds. If a level has a star rating, completing it gives diamonds equal to stars + 2. Also, don't waste keys on 1x chests — save for 5x or 10x chests for better diamond returns.",
      },
      {
        heading: "Related Unlocks",
        content:
          "Diamonds are required to unlock the Vault of Secrets (50 diamonds), the Chamber of Time (700 diamonds for Master Emblem), and various shop items. They are also visible on your profile, so they serve as a status symbol.",
      },
    ],
    faq: [
      {
        question: "What is the fastest way to get diamonds in Geometry Dash?",
        answer: "Daily quests and regular in-game rewards are usually the most reliable methods. Completing all three daily quests every day gives a steady stream of diamonds.",
      },
      {
        question: "Do user levels give diamonds?",
        answer: "Yes. Rated user levels (levels with a star rating) give diamonds equal to their star rating plus 2. So a 10-star demon level gives 12 diamonds.",
      },
      {
        question: "How many diamonds do I need for the Vault of Secrets?",
        answer: "You need 50 diamonds to unlock the Vault of Secrets.",
      },
      {
        question: "Can I buy diamonds with real money?",
        answer: "No. Geometry Dash has no microtransactions. All diamonds must be earned through gameplay.",
      },
    ],
    relatedGuideSlugs: ["gold-keys", "demon-keys", "user-coins", "master-emblem"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-gold-keys",
    title: "How to Get Gold Keys in Geometry Dash",
    slug: "gold-keys",
    category: "rewards",
    targetKeyword: "how to get gold keys in geometry dash",
    summary:
      "Gold keys can be obtained from Demon Event levels, chests (including event and Wraith chests), and specific vault codes.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Gold keys are primarily obtained from Demon Event levels and from opening chests, including event chests and Wraith Vault chests. Some vault codes also reward keys.",
      },
      {
        heading: "Fastest Methods",
        content: "Here are the most reliable ways to get gold keys:",
        steps: [
          { title: "Demon Event Levels", detail: "Playing and completing Demon Event levels has a chance to reward gold keys." },
          { title: "Chests", detail: "Opening chests in the Treasure Room, including event chests and Wraith chests, can give gold keys." },
          { title: "Vault Codes", detail: "Some Wraith Vault codes like 'checksteam' and 'key' reward Demon Keys. The code 'gd2025' rewards a Yellow Key." },
        ],
      },
      {
        heading: "Common Mistakes",
        content:
          "Players often confuse Demon Keys with Gold Keys. Demon Keys come from completing demon-difficulty levels, while Gold Keys are rarer and come from events and specific chests.",
      },
      {
        heading: "Related Unlocks",
        content:
          "Keys are used to open chests in the Treasure Room. Different chest types cost different amounts of keys, with higher-cost chests giving better rewards.",
      },
    ],
    faq: [
      {
        question: "How do you get gold keys in Geometry Dash?",
        answer: "Gold keys can be obtained from Demon Event levels, from opening chests (including event and Wraith chests), and from specific vault codes.",
      },
      {
        question: "What is the difference between Demon Keys and Gold Keys?",
        answer: "Demon Keys are earned by completing demon-difficulty levels. Gold Keys are rarer and come from events and specific chests. They are used to open different types of chests.",
      },
      {
        question: "Can I get keys from vault codes?",
        answer: "Yes. Some Wraith Vault codes like 'checksteam' and 'key' give Demon Keys. The code 'gd2025' gives a Yellow Key.",
      },
    ],
    relatedGuideSlugs: ["diamonds", "demon-keys", "user-coins"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-demon-keys",
    title: "How to Get Demon Keys in Geometry Dash",
    slug: "demon-keys",
    category: "rewards",
    targetKeyword: "how to get demon keys in geometry dash",
    summary:
      "Demon Keys are earned by completing Demon-difficulty levels, opening Demon chests, and through specific vault codes.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Demon Keys are obtained by completing any level rated as Demon difficulty. You can also get them from Demon chests and specific vault codes.",
      },
      {
        heading: "Methods",
        content: "Ways to earn Demon Keys:",
        steps: [
          { title: "Complete Demon Levels", detail: "Every demon-difficulty level you complete gives 1-3 Demon Keys." },
          { title: "Weekly Demon Chest", detail: "Opening the weekly demon chest can reward Demon Keys." },
          { title: "Vault Codes", detail: "Wraith Vault codes 'checksteam' and 'key' each give 1 Demon Key." },
          { title: "Event Chests", detail: "Special event chests may contain Demon Keys." },
        ],
      },
      {
        heading: "Common Mistakes",
        content:
          "You must actually complete (100%) the demon level to get keys. Dying at 98% does not count. Use practice mode to learn the level first, then go for the normal mode completion.",
      },
      {
        heading: "Related Unlocks",
        content:
          "Demon Keys are used to open Demon chests in the Treasure Room. The Purple Key, obtained from the Basement, is used to unlock the Demon Gauntlet.",
      },
    ],
    faq: [
      {
        question: "How do you get Demon Keys in Geometry Dash?",
        answer: "Complete any demon-difficulty level to earn 1-3 Demon Keys. You can also get them from Demon chests and specific vault codes.",
      },
      {
        question: "Do I get Demon Keys from practice mode?",
        answer: "No. You must complete the level in normal mode (not practice mode) to earn Demon Keys.",
      },
      {
        question: "What are Demon Keys used for?",
        answer: "Demon Keys are used to open Demon chests in the Treasure Room, which can contain diamonds, shards, and icons.",
      },
    ],
    relatedGuideSlugs: ["diamonds", "gold-keys", "user-coins"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-user-coins",
    title: "How to Get User Coins in Geometry Dash",
    slug: "user-coins",
    category: "rewards",
    targetKeyword: "how to get user coins geometry dash",
    summary:
      "User coins are collected inside user-created levels. Silver coins are verified by RobTop, while bronze coins are unverified.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "User coins are found inside user-created levels. They appear as collectible items during gameplay. Silver coins are from verified levels (approved by RobTop), while bronze coins are from unverified levels. Only silver coins count toward your total.",
      },
      {
        heading: "How to Collect",
        content: "To collect user coins:",
        steps: [
          { title: "Find a level with user coins", detail: "Look for levels that show coin icons in the level info screen." },
          { title: "Play in normal mode", detail: "User coins cannot be collected in practice mode." },
          { title: "Reach the coin during gameplay", detail: "Coins are often in hard-to-reach places, requiring detours or risky moves." },
          { title: "Complete the level", detail: "If you die before finishing, any coins you collected in that attempt are lost." },
        ],
      },
      {
        heading: "Silver vs Bronze",
        content:
          "Silver coins are from levels where the creator has verified the coins with RobTop. These count toward your profile total. Bronze coins are from unverified levels and do not count. To get silver coins, play Featured, Epic, Legendary, or Mythic rated levels.",
      },
      {
        heading: "Common Mistakes",
        content:
          "The biggest mistake is dying after collecting a coin. You must complete the level for the coin to count. Also, you cannot collect coins in practice mode — only normal mode counts.",
      },
    ],
    faq: [
      {
        question: "How do I get user coins in Geometry Dash?",
        answer: "Play user-created levels that have coins, collect them during normal mode gameplay, and complete the level without dying after collecting them.",
      },
      {
        question: "What is the difference between silver and bronze user coins?",
        answer: "Silver coins are from verified levels and count toward your total. Bronze coins are from unverified levels and do not count.",
      },
      {
        question: "Can I collect user coins in practice mode?",
        answer: "No. User coins can only be collected in normal mode, not practice mode.",
      },
      {
        question: "How many silver user coins do I need for The Vault?",
        answer: "You need 10 silver user coins to unlock The Vault.",
      },
    ],
    relatedGuideSlugs: ["diamonds", "gold-keys", "master-emblem"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-master-emblem",
    title: "How to Get the Master Emblem in Geometry Dash",
    slug: "master-emblem",
    category: "rewards",
    targetKeyword: "how to get the master emblem in geometry dash",
    summary:
      "The Master Emblem costs 700 Diamonds and 1000 Mana Orbs, purchased from the shop after completing The Challenge. It unlocks the Chamber of Time.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "The Master Emblem is purchased from the shop for 700 Diamonds and 1000 Mana Orbs. It becomes available after you complete 'The Challenge' — a secret level unlocked by entering the code 'The Challenge' in the Vault of Secrets.",
      },
      {
        heading: "Step by Step",
        content: "Here is the complete process to get the Master Emblem:",
        steps: [
          { title: "Get 50 Diamonds", detail: "Unlock the Vault of Secrets by collecting 50 diamonds through daily quests, daily levels, and chests." },
          { title: "Enter the code", detail: "In the Vault of Secrets, type 'The Challenge' to unlock a secret level." },
          { title: "Beat The Challenge", detail: "Complete the Vault Keeper's secret level. This is a demon-difficulty challenge level." },
          { title: "Go to the Basement", detail: "After beating The Challenge, go to the Basement and select the orange lock." },
          { title: "Buy the Master Emblem", detail: "Purchase the Master Emblem from the shop for 700 Diamonds and 1000 Mana Orbs." },
          { title: "Open the Chamber of Time", detail: "With the Master Emblem, open the hidden door in the Coming Soon section to access the Chamber of Time." },
        ],
      },
      {
        heading: "Common Mistakes",
        content:
          "Many players try to buy the Master Emblem before completing The Challenge. It will not appear in the shop until you have beaten it. Also, make sure you have enough diamonds AND mana orbs — you need both.",
      },
      {
        heading: "What It Unlocks",
        content:
          "The Master Emblem unlocks the Chamber of Time, the third secret vault. Inside, you can enter more codes for additional icons and rewards.",
      },
    ],
    faq: [
      {
        question: "How do I get the Master Emblem in Geometry Dash?",
        answer: "Complete 'The Challenge' from the Vault of Secrets, then buy the Master Emblem from the shop for 700 Diamonds and 1000 Mana Orbs.",
      },
      {
        question: "What does the Master Emblem do?",
        answer: "It unlocks the Chamber of Time, the third secret vault in the game, which contains additional codes and rewards.",
      },
      {
        question: "Can I buy the Master Emblem without beating The Challenge?",
        answer: "No. The Master Emblem will not appear in the shop until you have completed The Challenge.",
      },
    ],
    relatedGuideSlugs: ["diamonds", "user-coins"],
    updatedAt: "2026-06-30",
  },

  // ===== Mods =====
  {
    id: "guide-geode",
    title: "Geode for Geometry Dash: What It Is and How to Install It",
    slug: "geode",
    category: "mods",
    targetKeyword: "geode geometry dash",
    summary:
      "Geode is a free, community-made mod loader for Geometry Dash that lets you install, update, and manage mods from an in-game menu.",
    body: [
      {
        heading: "What Is Geode?",
        content:
          "Geode is the most popular modding framework for Geometry Dash. It is free, open-source, and actively maintained by the community. It integrates directly into the game and provides a built-in mod browser, so you can install mods without leaving Geometry Dash.",
      },
      {
        heading: "How to Install Geode",
        content: "Installation steps for each platform:",
        steps: [
          { title: "Download", detail: "Go to geode-sdk.org and download the installer for your platform (Windows, macOS, or Linux)." },
          { title: "Windows Install", detail: "Run the .exe installer. If Windows SmartScreen appears, click 'More info' then 'Run anyway'. Follow the setup wizard." },
          { title: "macOS Install", detail: "Open the installer and allow it in Security & Privacy if macOS blocks it. Follow the on-screen steps." },
          { title: "Linux Install", detail: "Geometry Dash doesn't natively support Linux. Use Wine to run the Windows installer. Set DLL overrides: WINEDLLOVERRIDES=\"xinput1_4=n,b\" %command% in Steam launch options." },
          { title: "Verify", detail: "Launch Geometry Dash and look for a new Geode icon on the main menu. Click it to open the mod browser." },
        ],
      },
      {
        heading: "How to Install Mods",
        content:
          "Once Geode is installed, click the Geode button on the main menu. Go to the Download tab to browse and search for mods. Click View on any mod to see its page, then click Download to install. Mods can be enabled, disabled, and updated from the same menu.",
      },
      {
        heading: "Risk Warning",
        content:
          "Geode is a third-party tool and is not affiliated with RobTop Games. Use it at your own risk. Always download from the official website (geode-sdk.org). Mods may cause crashes or compatibility issues, especially after game updates. Check that mods are compatible with your version of Geometry Dash before installing.",
      },
    ],
    faq: [
      {
        question: "Is Geode safe to use?",
        answer: "Geode is widely used and actively maintained by the community. However, it is a third-party tool not affiliated with RobTop. Download only from geode-sdk.org and check mod compatibility with your game version.",
      },
      {
        question: "Will I get banned for using Geode?",
        answer: "Geode itself is generally considered safe. However, certain mods (like cheat tools) may violate game rules. Use common sense and avoid mods that give unfair advantages in multiplayer or leaderboards.",
      },
      {
        question: "Why won't Geode work after a game update?",
        answer: "When Geometry Dash updates, Geode needs to release a compatible version. Check the Geode website or Discord for updates. Using an incompatible version will cause Geode to not load or show warnings.",
      },
    ],
    relatedGuideSlugs: ["geode-not-working", "fps-unlock-guide", "tps-explained"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-geode-not-working",
    title: "Why Won't Geode Work on Geometry Dash? Fixes and Solutions",
    slug: "geode-not-working",
    category: "mods",
    targetKeyword: "why wont geode work on geometry dash",
    summary:
      "Geode not loading? The most common cause is a Geometry Dash version update that Geode hasn't caught up with yet. Here are all the fixes.",
    body: [
      {
        heading: "Symptom Summary",
        content:
          "Geode button doesn't appear on the main menu, or Geode doesn't load at all after launching the game. This is one of the most common issues players encounter.",
      },
      {
        heading: "Likely Causes",
        content: "The most common causes, in order of frequency:",
        steps: [
          { title: "Game Version Mismatch", detail: "Geometry Dash updated to a new version that Geode doesn't support yet. This is the #1 cause. Check the Geode version — e.g., Geode v4.10.1 supports GD 2.2074, not 2.208." },
          { title: "Antivirus Quarantine", detail: "Your antivirus may have quarantined Geode files. This is a false positive. Add an exception for Geode." },
          { title: "Missing Files", detail: "On Windows, check that Geode.dll, GeodeUninstaller.exe, the geode folder, and xinput1_4.dll exist in your Geometry Dash folder." },
          { title: "Steam Display Bug", detail: "Sometimes Steam shows the game as installed but it's not properly registered. Try uninstalling and reinstalling both GD and Geode." },
          { title: "Linux DLL Overrides", detail: "On Linux, you must set WINEDLLOVERRIDES=\"xinput1_4=n,b\" %command% in Steam launch options." },
        ],
      },
      {
        heading: "Quick Fixes",
        content: "Try these in order:",
        steps: [
          { title: "Check versions", detail: "Compare your GD version with the Geode version's supported version. If they don't match, wait for a Geode update." },
          { title: "Check antivirus", detail: "Look in your antivirus quarantine. If Geode files are there, restore them and add an exception." },
          { title: "Verify files", detail: "Check your Geometry Dash folder for the required Geode files listed above." },
          { title: "Reinstall", detail: "If nothing works, save your progress to your GD account, uninstall both GD and Geode, then reinstall both." },
        ],
      },
      {
        heading: "Platform Notes",
        content:
          "Windows: Check Program Files or Steam folder for GD. macOS: Check Applications and Security & Privacy settings. Linux: Ensure Wine DLL overrides are set correctly in Steam launch options.",
      },
      {
        heading: "Risk Warning",
        content:
          "Use third-party tools at your own risk. Always download from official project pages and check compatibility with your game version.",
      },
    ],
    faq: [
      {
        question: "Why won't Geode work after updating Geometry Dash?",
        answer: "When GD updates, Geode needs to release a compatible version. Check geode-sdk.org or the Geode Discord for the latest version that supports your GD version.",
      },
      {
        question: "I can't see the Geode button. What should I do?",
        answer: "Check that Geode installed properly — look for Geode.dll and xinput1_4.dll in your GD folder. Also check if your antivirus quarantined any files.",
      },
      {
        question: "How do I fix Geode on Linux?",
        answer: "Set WINEDLLOVERRIDES=\"xinput1_4=n,b\" %command% in Steam launch options for Geometry Dash. This allows Geode to load properly through Wine.",
      },
    ],
    relatedGuideSlugs: ["geode", "fps-unlock-guide"],
    updatedAt: "2026-06-30",
  },

  // ===== Tools =====
  {
    id: "guide-fps-unlock",
    title: "How to Unlock FPS in Geometry Dash (2.2 Built-in Guide)",
    slug: "fps-unlock-guide",
    category: "mods",
    targetKeyword: "how to unlock fps in geometry dash",
    summary:
      "Update 2.2 added a built-in FPS unlock option. Go to Settings > Graphics, turn off V-Sync, enable Unlock FPS, and set your target frame rate.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "In Geometry Dash 2.2 and later, FPS unlock is a built-in feature. Go to Settings > Graphics, turn off V-Sync, enable 'Unlock FPS', and type your target frame rate (up to 9999). The physics engine is capped at 240 TPS regardless of your FPS setting.",
      },
      {
        heading: "Step by Step",
        content: "How to unlock FPS in Geometry Dash 2.2+:",
        steps: [
          { title: "Open Settings", detail: "Launch Geometry Dash and open the Settings menu." },
          { title: "Go to Graphics", detail: "Navigate to the Graphics section in Settings." },
          { title: "Turn off V-Sync", detail: "Under Advanced, make sure Vertical Sync is turned OFF. The FPS unlock will not work with V-Sync enabled." },
          { title: "Enable Unlock FPS", detail: "Toggle the 'Unlock FPS' option on." },
          { title: "Set target FPS", detail: "Type your desired frame rate into the FPS field. Common values: 120, 144, 240, 360." },
          { title: "Apply and restart", detail: "Hit Apply, then restart the game if the change doesn't take effect immediately." },
        ],
      },
      {
        heading: "Recommended FPS Values",
        content: "Choosing the right FPS depends on your monitor and skill level:",
        steps: [
          { title: "60 FPS", detail: "Default. Fine for 60Hz monitors. The game was originally designed for this." },
          { title: "120-144 FPS", detail: "Matches 120Hz/144Hz monitors. Noticeable improvement in smoothness and control." },
          { title: "240 FPS", detail: "The sweet spot for competitive players. This is where the 2.2 physics cap (240 TPS) sits." },
          { title: "360+ FPS", detail: "For high-end monitors. Rendering is smoother but physics won't exceed 240 TPS." },
        ],
      },
      {
        heading: "Important Notes",
        content:
          "The 2.2 built-in option caps the physics engine at 240 TPS (ticks per second) even if you set FPS higher. For most players, this is perfectly fine. If you want to bypass the TPS cap, you need a TPS Bypass mod through Geode. Also, screen tearing may occur if your FPS doesn't match your monitor's refresh rate — match them or use your GPU control panel's V-Sync (not GD's).",
      },
      {
        heading: "Before 2.2",
        content:
          "Before update 2.2, the game was hard-locked to 60 FPS. Players used external tools like Mega Hack or standalone FPS bypass tools. These are still available and offer more control, but the built-in option is sufficient for most players now.",
      },
    ],
    faq: [
      {
        question: "How do I unlock FPS in Geometry Dash 2.2?",
        answer: "Go to Settings > Graphics, turn off V-Sync, enable Unlock FPS, and enter your target frame rate. Restart the game if needed.",
      },
      {
        question: "What is the max FPS in Geometry Dash?",
        answer: "The built-in 2.2 option allows up to 9999 FPS for rendering. However, the physics engine is capped at 240 TPS regardless of your FPS setting.",
      },
      {
        question: "Should I turn off V-Sync to unlock FPS?",
        answer: "Yes. V-Sync will cap your FPS to your monitor's refresh rate. Turn it off in GD's settings. If you get screen tearing, manage V-Sync in your GPU control panel instead.",
      },
      {
        question: "Is FPS unlock allowed by the Demon List?",
        answer: "Since FPS unlock is now a built-in game feature in 2.2, the Demon List permits any frame rate. However, there are still requirements — check the latest Pointercrate rules.",
      },
    ],
    relatedGuideSlugs: ["tps-explained", "geode", "screen-tearing"],
    updatedAt: "2026-06-30",
  },
  {
    id: "guide-tps-explained",
    title: "What Is TPS in Geometry Dash? Ticks Per Second Explained",
    slug: "tps-explained",
    category: "mods",
    targetKeyword: "what is tps geometry dash",
    summary:
      "TPS (Ticks Per Second) is how many times the physics engine updates per second. In 2.2, it's capped at 240 TPS, separate from your rendering FPS.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "TPS stands for Ticks Per Second. It measures how many times the game's physics engine updates per second. In Geometry Dash 2.2, the physics engine runs at a fixed 240 TPS, separate from your rendering FPS. Before 2.2, TPS was always equal to your FPS.",
      },
      {
        heading: "FPS vs TPS",
        content:
          "FPS (Frames Per Second) is how many frames your screen renders. TPS (Ticks Per Second) is how many times the physics engine calculates updates. In 2.2, these are decoupled: you can render at 360 FPS while physics runs at 240 TPS. Before 2.2, they were locked together — 60 FPS meant 60 TPS.",
      },
      {
        heading: "Why TPS Matters",
        content:
          "Higher TPS means smoother physics calculations, which gives you more precise control over your icon. This is especially important for tight wave corridors and precise timing sections. The jump from 60 TPS to 240 TPS is very noticeable — inputs feel more responsive and hitboxes feel more forgiving.",
      },
      {
        heading: "TPS Bypass",
        content:
          "If you want to exceed the 240 TPS cap in 2.2, you can use a TPS Bypass mod through Geode (such as OpenHack). This allows you to set TPS higher than 240. However, be aware that the Pointercrate Demon List has specific rules about allowed TPS values for record submissions.",
      },
    ],
    faq: [
      {
        question: "What does TPS mean in Geometry Dash?",
        answer: "TPS stands for Ticks Per Second — the number of times the physics engine updates per second. In 2.2, it's capped at 240 TPS.",
      },
      {
        question: "What is the difference between FPS and TPS?",
        answer: "FPS is how many frames your screen shows. TPS is how many times the physics engine calculates updates. In 2.2, they are separate — you can have 360 FPS with 240 TPS.",
      },
      {
        question: "Can I change TPS in Geometry Dash?",
        answer: "The 2.2 built-in option caps at 240 TPS. To go higher, you need a TPS Bypass mod through Geode. Check Demon List rules before using it for record attempts.",
      },
    ],
    relatedGuideSlugs: ["fps-unlock-guide", "geode"],
    updatedAt: "2026-06-30",
  },

  // ===== Fix Guides =====
  {
    id: "fix-screen-dark",
    title: "How to Fix Screen Going Dark in Geometry Dash",
    slug: "screen-dark",
    category: "fix",
    targetKeyword: "why does my geometry dash make my screen dark",
    summary:
      "If your screen goes dark in Geometry Dash, try switching to windowed fullscreen, disabling HDR, or updating your graphics drivers.",
    body: [
      {
        heading: "Symptom Summary",
        content:
          "The game screen turns black or very dark, often after changing settings, exiting daily levels, or on startup. Common after the 2.2 update.",
      },
      {
        heading: "Likely Causes",
        content: "Common causes of the dark screen issue:",
        steps: [
          { title: "HDR Incompatibility", detail: "HDR monitors can conflict with Geometry Dash's rendering, causing the screen to dim or go dark." },
          { title: "Fullscreen Mode Bug", detail: "The fullscreen mode in some versions has a bug that causes black screens, especially after 2.2." },
          { title: "Resolution/Hz Changes", detail: "Changing your monitor's refresh rate or resolution while the game is running can trigger a black screen." },
          { title: "Graphics Driver Issues", detail: "Outdated or corrupted graphics drivers can cause rendering problems." },
        ],
      },
      {
        heading: "Quick Fixes",
        content: "Try these fixes in order:",
        steps: [
          { title: "Switch display mode", detail: "Switch from Fullscreen to Windowed Fullscreen (or vice versa). This is the most common fix." },
          { title: "Disable HDR", detail: "If you have an HDR monitor, turn off HDR in your Windows/macOS display settings while playing GD." },
          { title: "Restart the game", detail: "Sometimes a simple restart fixes the issue, especially if it was triggered by exiting a daily level." },
          { title: "Update graphics drivers", detail: "Update to the latest NVIDIA, AMD, or Intel graphics drivers." },
          { title: "Verify game files", detail: "On Steam, right-click GD > Properties > Installed Files > Verify integrity of game files." },
        ],
      },
      {
        heading: "Platform Notes",
        content:
          "Windows: Most reports come from Windows users with HDR monitors. macOS: Try changing the display profile. Linux: Check Wine configuration and DLL overrides.",
      },
    ],
    faq: [
      {
        question: "Why does my Geometry Dash screen go dark?",
        answer: "The most common cause is HDR monitor incompatibility or a fullscreen mode bug. Try switching to windowed fullscreen or disabling HDR.",
      },
      {
        question: "How do I fix the black screen in Geometry Dash 2.2?",
        answer: "Switch from fullscreen to windowed fullscreen, disable HDR, and update your graphics drivers. If that doesn't work, verify your game files on Steam.",
      },
      {
        question: "Is the dark screen a bug in 2.2?",
        answer: "Yes, many players reported this issue after the 2.2 update. It is often related to HDR and fullscreen mode. Switching display modes usually fixes it.",
      },
    ],
    relatedGuideSlugs: ["screen-tearing", "cant-play-levels"],
    updatedAt: "2026-06-30",
  },
  {
    id: "fix-screen-tearing",
    title: "How to Fix Screen Tearing in Geometry Dash",
    slug: "screen-tearing",
    category: "fix",
    targetKeyword: "how to fix screen tearing on geometry dash",
    summary:
      "Screen tearing happens when your FPS doesn't match your monitor's refresh rate. Match your FPS bypass to your monitor, or use GPU control panel V-Sync.",
    body: [
      {
        heading: "Symptom Summary",
        content:
          "Horizontal lines or tears appear across the screen during gameplay, where the image looks misaligned. This is distracting and can affect gameplay precision.",
      },
      {
        heading: "Likely Causes",
        content: "Screen tearing occurs when:",
        steps: [
          { title: "FPS Mismatch", detail: "Your game's FPS doesn't match your monitor's refresh rate. This is the most common cause." },
          { title: "V-Sync Off", detail: "Having V-Sync off gives you lower input lag but can cause tearing if FPS and refresh rate don't align." },
          { title: "Borderless Mode Bug", detail: "In version 2.206, a bug caused screen tearing even with V-Sync on in borderless mode." },
        ],
      },
      {
        heading: "Quick Fixes",
        content: "Try these solutions:",
        steps: [
          { title: "Match FPS to monitor", detail: "Set your FPS bypass to match your monitor's refresh rate (60, 120, 144, or 240). This is the cleanest fix." },
          { title: "GPU Control Panel V-Sync", detail: "Enable V-Sync in your NVIDIA or AMD control panel — NOT in GD's settings. GD's V-Sync will re-cap your FPS." },
          { title: "Use Fast Sync (NVIDIA)", detail: "NVIDIA users can use 'Fast Sync' or 'Adaptive Sync' in the NVIDIA Control Panel for a balance of no tearing and low input lag." },
          { title: "Turn off borderless", detail: "If you're on 2.206+, try turning off borderless mode and using fullscreen instead." },
          { title: "Enable FreeSync/G-Sync", detail: "If your monitor supports FreeSync or G-Sync, enable it in your GPU control panel for variable refresh rate." },
        ],
      },
      {
        heading: "Platform Notes",
        content:
          "NVIDIA: Use NVIDIA Control Panel > Manage 3D Settings > Program Settings > Geometry Dash. Set Vertical Sync to 'Fast' or 'Adaptive'. AMD: Use Radeon Settings > Graphics > Wait for Vertical Refresh. Intel: Use Intel Graphics Command Center.",
      },
    ],
    faq: [
      {
        question: "How do I fix screen tearing in Geometry Dash?",
        answer: "Match your FPS bypass setting to your monitor's refresh rate, or enable V-Sync in your GPU control panel (not in GD's settings).",
      },
      {
        question: "Should I use V-Sync in Geometry Dash?",
        answer: "Don't use GD's built-in V-Sync if you want FPS unlock — it will re-cap your FPS. Instead, manage V-Sync in your GPU control panel.",
      },
      {
        question: "Why does screen tearing happen with FPS bypass?",
        answer: "When your FPS doesn't match your monitor's refresh rate, the screen shows partial frames from different moments, causing visible tearing lines.",
      },
    ],
    relatedGuideSlugs: ["screen-dark", "fps-unlock-guide", "vsync"],
    updatedAt: "2026-06-30",
  },
  {
    id: "fix-cant-play-levels",
    title: "Can't Play Levels in Geometry Dash? Here's How to Fix It",
    slug: "cant-play-levels",
    category: "fix",
    targetKeyword: "why cant i play levels on geometry dash",
    summary:
      "If you can't load online levels, the most common cause is antivirus software blocking the game. Try disabling browsing protection or switching DNS.",
    body: [
      {
        heading: "Symptom Summary",
        content:
          "Online levels won't load, search results are empty, or you can only play daily and weekly levels. Map packs may also fail to load.",
      },
      {
        heading: "Likely Causes",
        content: "Common causes:",
        steps: [
          { title: "Antivirus Blocking", detail: "This is the #1 cause. Antivirus software (especially browsing protection features) can block Geometry Dash from connecting to servers." },
          { title: "DNS Issues", detail: "Your DNS server may be blocking or failing to resolve GD's server addresses." },
          { title: "Server Downtime", detail: "Geometry Dash servers may be temporarily down. This affects all players." },
          { title: "Internet Connection", detail: "Poor or unstable internet can prevent level loading." },
        ],
      },
      {
        heading: "Quick Fixes",
        content: "Try these in order:",
        steps: [
          { title: "Disable antivirus browsing protection", detail: "Turn off 'Browsing Protection' or 'Web Shield' in your antivirus. You can also temporarily disable the entire antivirus to test." },
          { title: "Switch DNS", detail: "Change your DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google). Guide: https://1.1.1.1/dns/" },
          { title: "Refresh login", detail: "In Geometry Dash, go to Settings > Account > Refresh Login. This re-authenticates with the servers." },
          { title: "Check server status", detail: "Check Reddit (r/geometrydash) or the GD Discord to see if other players are experiencing the same issue." },
          { title: "Restart router", detail: "Sometimes a simple router restart fixes connectivity issues." },
        ],
      },
      {
        heading: "Platform Notes",
        content:
          "Windows: Most antivirus issues occur on Windows with third-party security software. macOS: Check the firewall settings in System Preferences. Linux: Check Wine network configuration.",
      },
    ],
    faq: [
      {
        question: "Why can't I play online levels in Geometry Dash?",
        answer: "The most common cause is antivirus software blocking the game. Try disabling browsing protection in your antivirus, or switch your DNS to 1.1.1.1.",
      },
      {
        question: "How do I fix Geometry Dash online levels not loading?",
        answer: "Disable antivirus browsing protection, switch DNS, refresh your in-game login, and check if GD servers are down.",
      },
      {
        question: "Can I still play daily levels if online levels don't work?",
        answer: "Sometimes daily and weekly levels still load when search doesn't. This suggests a partial connectivity issue. Try refreshing your login.",
      },
    ],
    relatedGuideSlugs: ["screen-dark", "screen-tearing"],
    updatedAt: "2026-06-30",
  },
  {
    id: "fix-vsync",
    title: "How to Turn Off V-Sync in Geometry Dash",
    slug: "vsync",
    category: "fix",
    targetKeyword: "how to turn off vsync geometry dash",
    summary:
      "To turn off V-Sync in Geometry Dash, go to Settings > Graphics and toggle V-Sync off. If it keeps re-enabling, manage it in your GPU control panel instead.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Go to Settings > Graphics in Geometry Dash and toggle V-Sync off. This is necessary for FPS unlock to work. If V-Sync keeps turning back on, disable it in your GPU control panel (NVIDIA/AMD/Intel) instead.",
      },
      {
        heading: "Step by Step",
        content: "How to turn off V-Sync:",
        steps: [
          { title: "Open GD Settings", detail: "Launch Geometry Dash and open the Settings menu." },
          { title: "Go to Graphics", detail: "Navigate to the Graphics section." },
          { title: "Toggle V-Sync off", detail: "Find the V-Sync / Vertical Sync option and turn it off." },
          { title: "Apply changes", detail: "The change should take effect immediately. If not, restart the game." },
        ],
      },
      {
        heading: "Why Turn Off V-Sync?",
        content:
          "V-Sync caps your FPS to your monitor's refresh rate. If you want to use FPS unlock (especially for 240+ FPS), you must turn V-Sync off in GD. However, turning it off may cause screen tearing. The solution is to manage V-Sync in your GPU control panel instead — this lets you prevent tearing without GD's V-Sync capping your FPS.",
      },
      {
        heading: "GPU Control Panel Method",
        content: "If GD's V-Sync keeps re-enabling or you want to prevent tearing:",
        steps: [
          { title: "NVIDIA", detail: "NVIDIA Control Panel > Manage 3D Settings > Program Settings > Geometry Dash. Set 'Vertical sync' to 'Off', 'Fast', or 'Adaptive'." },
          { title: "AMD", detail: "Radeon Settings > Graphics > Wait for Vertical Refresh > set to 'Always Off' or 'Enhanced Sync'." },
          { title: "Intel", detail: "Intel Graphics Command Center > Display > set V-Sync preference for Geometry Dash." },
        ],
      },
    ],
    faq: [
      {
        question: "How do I turn off V-Sync in Geometry Dash?",
        answer: "Go to Settings > Graphics and toggle V-Sync off. If it keeps re-enabling, manage it in your GPU control panel instead.",
      },
      {
        question: "Should V-Sync be on or off in Geometry Dash?",
        answer: "Turn it off in GD if you want FPS unlock. V-Sync will cap your FPS to your monitor's refresh rate. To prevent screen tearing without capping FPS, use your GPU control panel's V-Sync instead.",
      },
      {
        question: "Why does V-Sync cap my FPS?",
        answer: "V-Sync synchronizes your game's frame rate with your monitor's refresh rate to prevent screen tearing. This means your FPS cannot exceed your monitor's Hz rating.",
      },
    ],
    relatedGuideSlugs: ["screen-tearing", "fps-unlock-guide"],
    updatedAt: "2026-06-30",
  },
];

/** 获取已发布指南 */
export function getGuides(): Guide[] {
  return guides;
}

/** 按 slug 获取指南 */
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** 按分类获取指南 */
export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return guides.filter((g) => g.category === category);
}

/** 获取修复指南 */
export function getFixGuides(): Guide[] {
  return getGuidesByCategory("fix");
}
