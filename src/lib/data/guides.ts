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

  // ===== Skills / General =====
  {
    id: "guide-unlock-all-icons",
    title: "How to Unlock All Icons in Geometry Dash: Complete Guide",
    slug: "unlock-all-icons",
    category: "general",
    targetKeyword: "how to unlock all icons in geometry dash",
    summary:
      "Geometry Dash has 9 icon form types and hundreds of unlockable designs. Here is every unlock method, ranked by effort, with milestone thresholds for stars, demons, coins, and vault codes.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Icons in Geometry Dash unlock through 7 main channels: completing official levels, hitting star milestones, beating demon levels, collecting secret coins and user coins, entering vault codes, finishing map packs and gauntlets, and earning creator points. There is no single shortcut. The fastest path is to grind demons early, collect all secret coins from main levels, and check vault codes regularly. Most players who unlock everything report 6 to 8 months of consistent play.",
      },
      {
        heading: "How the Icon System Works",
        content:
          "Geometry Dash has 9 icon form types, each with its own independent set of unlockable designs: Cube, Ship, Ball, UFO, Wave, Robot, Spider, Swing, and Jetpack. You also get a primary color, secondary color, optional glow, and a trail. Colors unlock separately from icons and are shared across all forms. Many players do not realize that unlocking a ship design at 500 stars does not also unlock a cube design. Each form has its own milestone gates.",
      },
      {
        heading: "Star Milestone Unlocks",
        content:
          "Stars are the primary progression currency for icons. You earn them by completing any rated level in normal mode. Here are the key milestone thresholds where new icon designs open up:",
        steps: [
          { title: "100 Stars", detail: "Basic cube variations start unlocking. This is your first month of regular play." },
          { title: "500 Stars", detail: "Ship designs begin opening up. Most players hit this around month 2 to 3." },
          { title: "1,000 Stars", detail: "Ball form designs become available. You are now firmly intermediate." },
          { title: "2,500 Stars", detail: "UFO designs drop. This is where casual players start slowing down." },
          { title: "5,000 Stars", detail: "Wave forms unlock. Requires dedicated daily play for several months." },
          { title: "10,000 Stars", detail: "Robot designs show up. This is serious dedication territory." },
          { title: "15,000+ Stars", detail: "The rare spider and swing copter forms finally appear. Less than 1 percent of players reach this." },
        ],
      },
      {
        heading: "Demon Completion Unlocks",
        content:
          "Beating demon-rated levels unlocks icons you cannot get any other way. These are the flex icons that other players instantly recognize. The community knows exactly what these milestones mean:",
        steps: [
          { title: "1 Demon", detail: "Your first exclusive demon icon. A milestone moment for every player." },
          { title: "5 Demons", detail: "Another cube design unlocks." },
          { title: "10 Demons", detail: "Ship unlock. You are now a consistent demon player." },
          { title: "25 Demons", detail: "Ball form unlock." },
          { title: "50 Demons", detail: "UFO design. Halfway to the rare unlocks." },
          { title: "100 Demons", detail: "Rare wave form that turns heads in multiplayer." },
          { title: "200+ Demons", detail: "Legendary status icons. Players with these are instantly recognizable in the community." },
        ],
      },
      {
        heading: "Secret Coins and User Coins",
        content:
          "Each official level has 3 hidden secret coins. Collecting all of them across all main levels unlocks several icons and colors that are not available through any other method. Some of these coins are deviously hidden. The one in Clubstep behind the fake wall is a classic example that still catches experienced players. User coins are a separate system. They are found in community-created levels that RobTop has rated and verified. User coins feed a separate counter and unlock icons you literally cannot get any other way. The robot design at the 500 user coin threshold is one of the most underrated unlocks in the game.",
      },
      {
        heading: "Vault Codes",
        content:
          "Geometry Dash has four vaults, each with unique codes that unlock icons, colors, and other rewards. The Vault is in the settings menu. The Vault of Secrets requires 50 diamonds. The Chamber of Time requires the Master Emblem. The Wraith Vault is the newest. Many vault code rewards are exclusive icons you cannot get through any other method. Check our complete vault codes page for every working code across all four vaults.",
      },
      {
        heading: "Map Packs and Gauntlets",
        content:
          "Map packs are bundles of 3 community levels grouped by theme or difficulty. Beat all 3 levels in a pack to get bonus stars and usually a specific icon or color tied to that pack. Gauntlets are the same idea but typically harder and themed. Fire, Ice, Shadow, Chaos, and Monster gauntlets each give an exclusive icon matching that theme. The Shadow Gauntlet icon is widely considered one of the best designs in the game.",
      },
      {
        heading: "Creator Points",
        content:
          "Creator points are earned by publishing levels that get rated or featured. Some of the rarest icons in GD belong to prolific creators. You can spot them instantly on a player profile. If you want these icons, you need to actually build and publish levels. There is no way around it. The creator point thresholds for icon unlocks start low but scale up quickly.",
      },
      {
        heading: "Glow Effects and Trails",
        content:
          "Glow outlines your icon and trails follow your movement. They unlock through high star counts, demon completions, vault discoveries, and special achievements. A glowing icon with a matching trail immediately looks more polished than a default cube. These are finishing touches, not core unlocks, but they matter for players who care about visual identity.",
      },
      {
        heading: "The Fastest Path to Unlocking Everything",
        content:
          "Based on community experience and our own analysis, here is the most efficient order to pursue unlocks:",
        steps: [
          { title: "Grind demons early", detail: "The exclusive demon icons are worth more visual prestige per hour than any other grind. You will also improve faster than you think." },
          { title: "Collect all secret coins from main levels", detail: "Required for many unlocks and they teach you how level design actually works. Do this before moving to user levels." },
          { title: "Check vault codes regularly", detail: "The community finds new codes periodically. Bookmark our vault codes page and check after every game update." },
          { title: "Clear map packs and gauntlets", detail: "Guaranteed rewards with no RNG. Each completed pack gives a specific icon or color." },
          { title: "Hunt user coins in rated levels", detail: "The icon unlocks here are unique and most players skip them. 500 user coins gives a robot design nobody else has." },
          { title: "Do daily and weekly levels consistently", detail: "These feed stars and diamonds into your achievement progress. Knock out the daily level every day." },
        ],
      },
      {
        heading: "Unobtainable Icons",
        content:
          "Some icons are no longer obtainable because they were tied to previous game versions or limited-time events. These are marked as Unobtainable in most community lists. If you see an icon you want that is listed as Unobtainable, there is no way to get it now. Focus on the hundreds of icons that are still available.",
      },
    ],
    faq: [
      {
        question: "How many icons are in Geometry Dash?",
        answer: "There are hundreds of icons across 9 form types (Cube, Ship, Ball, UFO, Wave, Robot, Spider, Swing, Jetpack). The exact count grows with each update. Version 2.2 alone added over 100 new icon designs.",
      },
      {
        question: "What is the fastest way to unlock icons in Geometry Dash?",
        answer: "The fastest path is to grind demon levels early for exclusive icons, collect all secret coins from main levels, and use vault codes. Star milestones unlock the bulk of icons, so consistent daily play matters more than any single trick.",
      },
      {
        question: "Do you need stars to unlock icons?",
        answer: "Yes. Stars are the primary unlock currency. Key milestones are 100, 500, 1000, 2500, 5000, 10000, and 15000 stars. Each milestone opens new icon designs for different form types.",
      },
      {
        question: "Can you buy icons in Geometry Dash?",
        answer: "Some icons can be purchased from the in-game shops using mana orbs and diamonds. However, most icons are unlocked through achievements, not purchases. There are no real-money microtransactions in Geometry Dash.",
      },
      {
        question: "Are some icons no longer obtainable?",
        answer: "Yes. Some icons were only available in previous game versions or during limited-time events. These are marked as Unobtainable in community lists and cannot be unlocked now.",
      },
    ],
    relatedGuideSlugs: ["diamonds", "get-stars-fast", "practice-mode-guide", "master-emblem", "user-coins"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-get-stars-fast",
    title: "How to Get Stars in Geometry Dash Fast: Star Grinding Guide",
    slug: "get-stars-fast",
    category: "general",
    targetKeyword: "how to get stars in geometry dash fast",
    summary:
      "Stars unlock icons, colors, and leaderboard rank. Here is how to grind stars efficiently: which difficulty to target, how to find sightreadable levels, and why most players waste time on the wrong levels.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Stars are earned by completing rated levels in normal mode. Harder levels give more stars: Auto gives 1, Easy gives 2, Normal gives 3, Hard gives 4 to 5, Harder gives 6 to 7, Insane gives 8 to 9, and Demon gives 10. The fastest way to gain stars is to find the highest difficulty you can sightread (beat first try) at least half the time, and grind that difficulty using the recent and awarded tabs instead of the most liked tab. Map packs give bonus stars when you complete all 3 levels. Daily and weekly levels can be beaten twice for double stars.",
      },
      {
        heading: "How Stars Work",
        content:
          "Stars were introduced in Update 1.3 and are earned by completing any rated level in normal mode. Unrated user levels give 0 stars. A total of 2,838 stars can be earned from official content alone: 199 from main levels, plus stars from Geometry Dash SubZero, World, Meltdown, and Lite. Beyond official content, the star supply is effectively unlimited because new user levels are rated every day. The theoretical maximum is 16,777,215 stars, but in practice the highest real star counts are around 350,000.",
      },
      {
        heading: "Star Rewards by Difficulty",
        content:
          "Here is exactly how many stars each difficulty tier gives. Main levels give slightly more than user levels at the same difficulty:",
        steps: [
          { title: "Auto (1 star)", detail: "Plays itself. No input needed. Free star but only 1. Good for absolute beginners." },
          { title: "Easy (2 stars)", detail: "User levels give 2 stars. Main levels give 1 to 2. Genuinely easy, you will beat these quickly." },
          { title: "Normal (3 stars)", detail: "User levels give 3 stars. Main levels give 2 to 4. Basic challenge, nothing threatening." },
          { title: "Hard (4 to 5 stars)", detail: "User levels give 4 to 5. Main levels give 3 to 6. Requires decent timing. First taste of real difficulty." },
          { title: "Harder (6 to 7 stars)", detail: "User levels give 6 to 7. Main levels give 7 to 10. Where intermediates start sweating." },
          { title: "Insane (8 to 9 stars)", detail: "User levels give 8 to 9. Main levels give 10 to 12. Legitimately difficult. Requires real skill." },
          { title: "Demon (10 stars)", detail: "User levels give 10 stars regardless of sub-difficulty. Main levels give 14 to 15. The big leagues." },
        ],
      },
      {
        heading: "Which Difficulty to Grind",
        content:
          "The most common mistake is grinding the highest difficulty you can barely beat. This is slow because you die constantly and each attempt takes minutes. Instead, find the highest difficulty where you can sightread (beat first try) at least half the time. For most intermediate players, this is 4 to 6 star levels. You earn fewer stars per level, but you complete them in 1 to 2 minutes instead of 30 minutes. The star-per-hour rate is dramatically higher. As your skill improves, gradually move up. The gap between 4 and 5 stars is real. 5 star levels are often rated 5 instead of 4 because of something that prevents first tries. The same gap exists between 6 and 7 stars, and between 8 and 9 stars in a smaller way.",
      },
      {
        heading: "How to Find Good Levels for Star Grinding",
        content:
          "Most players sort by most liked. This is a mistake. The most liked levels are usually from older updates when the game was more active. They are often less sightreadable than modern levels. Here is what to do instead:",
        steps: [
          { title: "Use the Recent tab", detail: "Filter by difficulty and star count, then go to the Recent tab. Recently rated levels have better sightreadability because level design standards have improved." },
          { title: "Use the Awarded tab", detail: "Even better than Recent. The Awarded tab shows recently rated levels ordered by quality. This is the best source of sightreadable levels." },
          { title: "Check former daily levels", detail: "If you have the BetterInfo mod (via Geode), you can search through former daily levels. Daily levels are usually higher quality and more sightreadable." },
          { title: "Check comments before playing", detail: "Spend 5 seconds reading comments. If multiple people mention a blind transition at 69 percent or a triple spike at 98 percent, skip that level. Comments save you from frustrating deaths." },
        ],
      },
      {
        heading: "Map Pack Bonus Stars",
        content:
          "Map packs are bundles of 3 community levels grouped by theme or difficulty. When you complete all 3 levels in a pack, you get bonus stars on top of the stars from each individual level. The easier map packs are highly efficient for star grinding because the levels are usually sightreadable and the bonus stars add up quickly. Work through the easier packs first, then move to harder ones as your skill grows.",
      },
      {
        heading: "Double Stars from Daily and Weekly Levels",
        content:
          "This is a trick most players do not know. When you complete the daily level, you get stars. But the level on the servers is a separate copy from the one you completed. You can beat the same daily level again from the search tab and get stars a second time. This also works for weekly demons. Since you already know the level from your first completion, the second run is much easier. This effectively doubles your star income from daily and weekly content.",
      },
      {
        heading: "Levels to Avoid While Star Grinding",
        content:
          "Not all rated levels are worth your time. Two types to skip:",
        steps: [
          { title: "Epic rated levels", detail: "These have fire around the difficulty face. They prioritize visuals over gameplay visibility. They look amazing but are often not sightreadable. Save them for when you want a challenge, not for star grinding." },
          { title: "XL length levels", detail: "Extra-long levels may be sightreadable, but if you die near the end, you lose 5 to 10 minutes getting back. The star-per-hour rate is worse than medium-length levels." },
        ],
      },
      {
        heading: "Setting Goals and Avoiding Burnout",
        content:
          "Star grinding is a marathon, not a sprint. Set reasonable daily goals. For example, 75 stars per day is achievable in about 1 hour of focused play and adds up to 27,000 stars per year. Looking at a 10,000 star gap is overwhelming. Looking at 75 stars today is not. The brightest stars burn out the fastest. If you feel frustration building, stop for the day. Your brain consolidates muscle memory during rest, so breaks actually make you better. Many players report their biggest breakthroughs the day after a tough session.",
      },
      {
        heading: "Save Your Data",
        content:
          "Data loss is a real risk in Geometry Dash. Save your account data to the cloud regularly, and keep local backups of your save files. If your data fails to save, try un-downloading all your downloaded levels and deleting scrapped levels or start position copies. Losing 30,000 stars to data corruption is devastating and entirely preventable.",
      },
    ],
    faq: [
      {
        question: "How do you get stars in Geometry Dash?",
        answer: "Complete any rated level in normal mode. The harder the level, the more stars you get. Auto gives 1, Easy gives 2, Normal gives 3, Hard gives 4 to 5, Harder gives 6 to 7, Insane gives 8 to 9, and Demon gives 10.",
      },
      {
        question: "What is the fastest way to get stars in Geometry Dash?",
        answer: "Find the highest difficulty you can sightread (beat first try) at least half the time, and grind that difficulty using the Awarded tab. Complete map packs for bonus stars. Beat daily and weekly levels twice for double stars. Avoid epic and XL levels.",
      },
      {
        question: "Do you get stars from practice mode?",
        answer: "No. You only get stars from completing levels in normal mode. Practice mode is for learning, not for earning stars.",
      },
      {
        question: "How many stars are in Geometry Dash?",
        answer: "Official content gives 2,838 stars total. Beyond that, user levels provide an effectively unlimited supply since new levels are rated daily. The theoretical maximum is 16,777,215, but the highest real counts are around 350,000.",
      },
      {
        question: "Can you get stars from user levels?",
        answer: "Yes, but only from rated user levels. Unrated user levels give 0 stars. A rated user level gives stars based on its difficulty, same as official levels.",
      },
    ],
    relatedGuideSlugs: ["unlock-all-icons", "diamonds", "practice-mode-guide", "demon-keys", "user-coins"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-practice-mode",
    title: "Geometry Dash Practice Mode: How to Actually Improve",
    slug: "practice-mode-guide",
    category: "skills",
    targetKeyword: "geometry dash practice mode tips",
    summary:
      "Most players use Practice Mode as a panic room. Here is how to use it as a training system: checkpoint placement, music sync, the 5-step practice loop, and why you should return to normal mode earlier than you think.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Practice Mode is not there to help you crawl to 100 percent. It is there to make a hard level feel smaller. The best way to use it is to unlock Practice Music Sync first, place checkpoints by gameplay segment instead of random panic taps, repeat each section until it feels boring, link two sections together, and return to Normal Mode earlier than most players think. If you can pass every section in practice but die at 87 percent in normal mode, that is not a skill problem. That is a Practice Mode problem.",
      },
      {
        heading: "What Practice Mode Is Actually For",
        content:
          "The biggest mistake newer players make is using Practice Mode as if the goal is to place enough checkpoints to reach the ending. But one lucky pass through a hard section teaches you almost nothing. What actually matters is whether you can repeat that section cleanly enough that it starts to feel boring. The moment a hard level stops feeling like one giant wall and starts feeling like 5 or 6 manageable sections, your progress becomes real instead of emotional. Practice Mode is for identifying real chokepoints, repeating short sections until they become stable, connecting two difficult sections together, and learning the back half of a level before your nerves make it feel impossible.",
      },
      {
        heading: "Get Practice Music Sync First",
        content:
          "If there is one upgrade that instantly makes Practice Mode feel less miserable, it is Practice Music Sync. Without synced music, a level can feel mechanically familiar but rhythmically wrong. You know the clicks, but the song no longer supports your timing the way it does in Normal Mode. This creates fake confidence. With Practice Music Sync enabled, your practice runs feel much closer to the real thing. This matters most in levels where transitions, fake-outs, and muscle memory are strongly tied to audio pacing. If Practice Music Sync is grayed out, you need the Music Unlocker before normal level music can play in Practice Mode.",
      },
      {
        heading: "How to Place Checkpoints Correctly",
        content:
          "Bad checkpoint placement is the silent killer of Practice Mode. A lot of players drop checkpoints almost randomly, especially after every death. That feels productive because it creates constant forward motion, but it usually destroys consistency. You end up learning isolated actions without learning how they connect. A better rule is to place checkpoints by gameplay segment, not by frustration. If a section takes about 3 to 8 seconds and represents one clear mechanic or transition, that is usually a good checkpoint zone. For an especially brutal chokepoint, you can temporarily shorten it. But once you start passing it, stretch the checkpoint farther back so you relearn the lead-in as well. The rule: if your checkpoint is so close that you can brute-force one click without learning the approach, it is probably too close.",
      },
      {
        heading: "The 5-Step Practice Loop",
        content:
          "There is a clean 5-step loop that works for almost any hard Geometry Dash level, whether it is an official Demon, a custom insane level, or a harder platformer section:",
        steps: [
          { title: "Step 1: Find the real chokepoints", detail: "Do not just mark the parts you hate. Mark the parts that actually stop runs. Sometimes the ugliest section is not the true wall. The real wall is the transition right before it." },
          { title: "Step 2: Split the level into segments", detail: "Think in chunks: opening stability, first hard transition, mid-level control section, back-half pressure section, ending. Once the level is divided like that, Practice Mode stops feeling chaotic." },
          { title: "Step 3: Repeat until the section feels boring", detail: "If a section still feels dramatic every time you enter it, you do not own it yet. A learned section feels almost dull. Dull means stable. That is the standard." },
          { title: "Step 4: Link two sections together", detail: "Being able to pass section A and section B separately does not mean you can pass A into B. Linking sections is where fake progress gets exposed. Train the bridge, not just the islands." },
          { title: "Step 5: Return to Normal Mode earlier than you think", detail: "Practice Mode is for learning. Normal Mode is for execution under pressure. Once the hardest parts stop being mysterious, go back to real attempts. Too many players overstay in Practice Mode." },
        ],
      },
      {
        heading: "Why You Keep Dying in Normal Mode After Practicing",
        content:
          "This is the most common frustration. You can pass every section in practice, but you die at 87 percent in normal mode. The reason is that practicing sections in isolation does not prepare you for the real thing. Your nerves at 80 percent are completely different depending on whether you started at 0 percent or at 75 percent. The transition between sections feels different in a full run. Stamina and focus over the full level length must be trained. The fix: once you can pass every section individually, spend 70 percent of your practice time doing full attempts from 0 percent. This is the most important tip most players ignore.",
      },
      {
        heading: "Learn the Music",
        content:
          "Geometry Dash is a rhythm game at its core. Every obstacle is synced to the music. If you learn the song, you learn the level. Listen to the level's song outside the game (most are on Newgrounds or YouTube). Identify the beats where you need to click or jump. Tap along with the music before playing the level. Many top players say they hear the level more than they see it. This is why Practice Music Sync matters so much. Without it, you are training your fingers but not your rhythm.",
      },
      {
        heading: "Slow Down Your Click Speed",
        content:
          "Many deaths happen because players click too fast, not too slow. Panic-clicking through a difficult section leads to sloppy timing and inconsistent results. Focus on clicking deliberately, not frantically. Each click should be intentional and timed to the music. In wave and ship sections, smoother inputs produce smoother movement. Record yourself playing and watch your hand. Are you tensing up and spamming? That is what is killing you, not the level.",
      },
      {
        heading: "Take Breaks Seriously",
        content:
          "Your brain consolidates muscle memory during rest, not during practice. Playing the same section for 3 hours straight produces diminishing returns after about 30 to 45 minutes. The optimal structure is 30 to 45 minutes of focused practice, a 10 to 15 minute break, then another session. Stop for the day when you notice increasing frustration or decreasing performance. Sleep is the ultimate practice tool. Many players report breakthroughs the day after a tough session. This is not coincidence. Your brain was still learning while you slept.",
      },
      {
        heading: "Identify Your Weak Game Mode",
        content:
          "Every player has a weakest game mode. For most, it is either the wave or the ship at high speeds. Identify yours and dedicate practice time specifically to that mode. Search for levels that focus on your weak mode. Play Nine Circles-style levels for wave practice. Play auto-scroll levels for ship control. The more comfortable you are with your weakest mode, the more levels become accessible to you. Do not skip difficulty tiers. Complete 10 or more Easy Demons before attempting Medium Demons. Each tier teaches patterns and skills that the next tier assumes you already have.",
      },
      {
        heading: "Track Your Progress",
        content:
          "Keep a simple log of your practice. Date, level, best run percentage, what section killed you most, and how long you practiced. This does two things: it shows you tangible improvement over time, which is motivating, and it helps you identify patterns in what is holding you back. Example: Mar 22, best 67 percent, died 4 times at 54 percent wave, 40 minutes. Mar 23, best 72 percent, passed 54 percent 3 times, new choke at 68 percent, 35 minutes. Mar 24, best 89 percent, 68 percent consistent now, nerves at 80 percent plus, 45 minutes. That log tells a story of real improvement that your brain will not register without writing it down.",
      },
    ],
    faq: [
      {
        question: "How do I use Practice Mode effectively in Geometry Dash?",
        answer: "Place checkpoints by gameplay segment (3 to 8 seconds each), not randomly. Repeat each section until it feels boring, then link two sections together. Return to Normal Mode earlier than you think. Enable Practice Music Sync so your timing matches the real song.",
      },
      {
        question: "Why do I die in Normal Mode after practicing everything in Practice Mode?",
        answer: "Practicing sections in isolation does not train nerves, stamina, or section transitions. Once you can pass every section individually, spend 70 percent of your practice time doing full attempts from 0 percent. This trains the real pressure of a complete run.",
      },
      {
        question: "How do I unlock Practice Music Sync in Geometry Dash?",
        answer: "Practice Music Sync requires the Music Unlocker. Once unlocked, enable it in settings so the level's actual song plays during practice instead of the default practice music. This makes practice runs feel much closer to real attempts.",
      },
      {
        question: "Should I use Practice Mode or just play Normal Mode?",
        answer: "Use both. Practice Mode is for learning sections and building consistency. Normal Mode is for execution under pressure. A good ratio is 30 percent practice for new sections, 70 percent normal mode for full runs once you understand the level.",
      },
      {
        question: "How long should I practice a level before taking a break?",
        answer: "30 to 45 minutes of focused practice, then a 10 to 15 minute break. Playing for 3 hours straight produces diminishing returns. Your brain consolidates muscle memory during rest, so breaks and sleep are when improvement actually happens.",
      },
    ],
    relatedGuideSlugs: ["unlock-all-icons", "get-stars-fast", "tps-explained", "fps-unlock-guide", "diamonds"],
    updatedAt: "2026-07-03",
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
