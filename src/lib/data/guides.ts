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
    title: "Master Emblem GD: How to Get It (6 Steps, 2026)",
    slug: "master-emblem",
    category: "rewards",
    targetKeyword: "how to get the master emblem in geometry dash",
    summary:
      "The Master Emblem costs 700 Diamonds and 1,000 Mana Orbs — but the shop stays hidden until you beat The Challenge. Full 6-step path, including the vault code you need.",
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
    title: "Geometry Dash FPS Unlock: Up to 9999 FPS, No Download (2026)",
    slug: "fps-unlock-guide",
    category: "mods",
    targetKeyword: "how to unlock fps in geometry dash",
    summary:
      "GD 2.2 has a built-in FPS unlock — no third-party download needed. Turn off V-Sync, set up to 9999 FPS in 6 steps, and learn what the 240 TPS physics cap means.",
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
    title: "What Is TPS in Geometry Dash? The 240 Cap Explained (2026)",
    slug: "tps-explained",
    category: "mods",
    targetKeyword: "what is tps geometry dash",
    summary:
      "TPS = how often GD's physics engine updates per second, capped at 240 in 2.2. Why the cap changes how the game feels, TPS vs FPS, and what TPS bypass actually does.",
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
    title: "Geometry Dash Icons: How to Unlock Every Icon (2026)",
    slug: "unlock-all-icons",
    category: "general",
    targetKeyword: "how to unlock all icons in geometry dash",
    summary:
      "All 9 forms covered: star milestones up to 15,000+, demon completions, secret coins, vault codes, and gauntlets — ordered so you grab the easiest icons first.",
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
    title: "Get Stars Fast in Geometry Dash: 7 Methods, Ranked (2026)",
    slug: "get-stars-fast",
    category: "general",
    targetKeyword: "how to get stars in geometry dash fast",
    summary:
      "Ranked by stars per hour: the sightread rule for picking levels, the overlooked Awarded tab, map pack bonuses, and the daily level double-dip.",
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

  // ===== General: High-traffic SEO content =====
  {
    id: "guide-gd-2-2-update",
    title: "Geometry Dash 2.2 Update: Everything You Need to Know",
    slug: "gd-2-2-update",
    category: "general",
    targetKeyword: "geometry dash 2.2 update",
    summary:
      "Update 2.2 is the biggest update in Geometry Dash history. After nearly 7 years of development, it added the Swing form, Platformer Mode, Moons, over 700 new icons, 100 new achievements, camera triggers, shader effects, and 5 new main levels.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Geometry Dash 2.2 was released on December 19, 2023 for Steam and December 20, 2023 for iOS and Android. It is the twelfth major update and the most significant in the game's history. The update added the Swing game mode, Platformer Mode with 4 new levels, Moons as a new collectible, over 700 new icons, over 100 new achievements, camera control triggers, shader effects, a new SFX Library, a Music Library with over 1500 NCS songs, two new shops, the Paths system, Lists, and 5 new main levels including Dash, The Tower, The Sewers, The Cellar, and The Secret Hollow. The update has since been refined through 12 minor updates, with the latest being 2.2081.",
      },
      {
        heading: "Release Timeline",
        content:
          "Geometry Dash 2.2 was announced in 2016 and took nearly 7 years to develop. During that time, the community followed every teaser, every preview, and every cryptic tweet from RobTop. The update was finally released on December 19, 2023 on Steam, and December 20, 2023 on Android and iOS. Since the initial release, 12 minor updates have been pushed: 2.201, 2.202, 2.203, 2.204, 2.206, 2.207, 2.2071, 2.2072, 2.2073, 2.2074, 2.208, and 2.2081. Each minor update fixed bugs, added quality-of-life features, and refined the new systems.",
      },
      {
        heading: "New Game Mode: Swing",
        content:
          "The Swing is the first new game mode since the Robot was added in Update 2.0. The Swing copter moves similarly to the original swing copter from the early Geometry Dash era but with refined physics. It taps to switch gravity direction, similar to the ball but with different momentum and timing characteristics. The Swing appears in the new main level Dash and is used in many 2.2-era community levels. Mastering the Swing is essential for completing the hardest 2.2 content.",
      },
      {
        heading: "Platformer Mode and New Levels",
        content:
          "Platformer Mode is the most groundbreaking addition in 2.2. It allows unrestricted left and right movement instead of the automatic rightward scroll of classic mode. Four new official levels use Platformer Mode: The Tower, The Sewers, The Cellar, and The Secret Hollow. These levels reward Moons instead of Stars. Platformer levels feel like a completely different game within Geometry Dash, and the community has embraced them with custom platformer levels that push the boundaries of what the editor can do.",
        steps: [
          { title: "The Tower", detail: "The first platformer level. Introduces the basic mechanics of left-right movement and jumping in platformer context." },
          { title: "The Sewers", detail: "Second platformer level. Adds more complex platforming and introduces water mechanics." },
          { title: "The Cellar", detail: "Third platformer level. Increases difficulty with tighter platforming sections." },
          { title: "The Secret Hollow", detail: "The hardest of the four. Requires precise movement and rewards the most moons." },
        ],
      },
      {
        heading: "New Collectible: Moons",
        content:
          "Moons are the platformer mode equivalent of Stars. You earn them by completing rated platformer levels in normal mode. A total of 25 moons can be earned from official Tower levels, with each level rewarding 5 to 7 moons. User platformer levels also reward moons based on difficulty, same as stars: Auto gives 1, Easy gives 2, up to Demon giving 10. Moons contribute towards unlocking icons and achievements, and progressing through Paths. They are visible on your profile alongside stars.",
      },
      {
        heading: "Over 700 New Icons",
        content:
          "Update 2.2 added the largest batch of icons in Geometry Dash history. The exact counts from the official wiki: 484 cubes, 100+ ships, 76 balls, 100+ UFOs, 51 waves, 27 robots, 7 trails, and 100+ colors. Many of these icons reference popular games, movies, and internet culture. Community researchers found over 100 references in the new icons alone, including references to Hollow Knight, Binding of Isaac, Sonic Colors, Terraria, Doom, and many more. Unlocking all new icons requires hitting star milestones, completing demons, collecting moons, entering vault codes, and finishing gauntlets.",
      },
      {
        heading: "New Triggers and Editor Features",
        content:
          "The 2.2 editor update gave creators powerful new tools. Camera control triggers allow dynamic camera movement, zoom, and rotation during gameplay. Post-processing shader effects enable visual styles never before possible in GD. New movement triggers, particle effects, and a SFX Library let creators add sound effects to levels. The Music Library provides over 1500 NCS songs that can be used without copyright issues. The group limit was raised to 9999 groups, giving creators far more organizational capacity. These tools collectively enabled a new generation of visually stunning and mechanically complex levels.",
      },
      {
        heading: "Two New Shops",
        content:
          "Update 2.2 added two new shops alongside the existing ones. The Mechanic shop and the Diamond Shop, which takes diamond shards as currency. Diamond shards are earned alongside diamonds, giving players a secondary currency to spend. The shops sell icons, colors, and other customization items that cannot be obtained through achievements alone.",
      },
      {
        heading: "The Paths System",
        content:
          "Paths are a new progression system introduced in 2.2. They provide structured goals and rewards for consistent play. Progressing through Paths unlocks icons, colors, and other rewards. The system encourages daily engagement and gives players clear short-term goals alongside the long-term star and demon milestones.",
      },
      {
        heading: "Lists",
        content:
          "Lists are curated collections of user levels organized by theme or difficulty. They replaced the old map pack system as the primary way the community discovers quality levels. Lists are incredibly helpful for finding sightreadable levels for star grinding or for discovering levels that focus on specific skills. The community has embraced Lists as a way to organize the massive catalog of user-created content.",
      },
      {
        heading: "Versus Mode (Delayed to 2.21)",
        content:
          "Versus Mode was announced for 2.2 but has been delayed. It will allow players to race to complete a level, though they cannot see each other. RobTop has stated it is likely to come in Update 2.21. This is one of several features initially planned for 2.2 that were pushed to the next update due to bugs and development time.",
      },
      {
        heading: "FPS and Physics Changes",
        content:
          "Update 2.2 added an FPS option for Steam (up to 9999 FPS) and fixed mechanics so they are consistent regardless of FPS. Previously, different FPS values could change the game's physics, creating an unfair advantage or disadvantage. The 2.2 update standardized physics across all frame rates. The TPS (ticks per second) system was also refined, with a cap at 240 TPS. For details, see our TPS explained guide.",
      },
      {
        heading: "What Is Coming in 2.21?",
        content:
          "Update 2.21 is the next planned update. It will include many delayed features initially intended for 2.2. Confirmed features include: Explorers, a new Demon-rated main level using a song by Hinkik. The Map, which will contain user-created Platformer levels, Demon Towers, unlockable Icon Kit rewards, and secrets. Versus Mode with improved functionality. New creator menu features that are visible but inaccessible in 2.2.",
      },
    ],
    faq: [
      {
        question: "When did Geometry Dash 2.2 come out?",
        answer: "Geometry Dash 2.2 was released on December 19, 2023 for Steam, and December 20, 2023 for Android and iOS. It took nearly 7 years to develop, making it the longest development cycle in the game's history.",
      },
      {
        question: "What is new in Geometry Dash 2.2?",
        answer: "2.2 added the Swing game mode, Platformer Mode with 4 new levels, Moons as a new collectible, over 700 new icons, over 100 new achievements, camera triggers, shader effects, SFX Library, Music Library, two new shops, the Paths system, Lists, and 5 new main levels.",
      },
      {
        question: "What are Moons in Geometry Dash?",
        answer: "Moons are a new collectible introduced in 2.2. They are the platformer mode equivalent of Stars. You earn them by completing rated platformer levels. A total of 25 moons can be earned from official Tower levels.",
      },
      {
        question: "What is Platformer Mode in Geometry Dash?",
        answer: "Platformer Mode allows unrestricted left and right movement instead of the automatic rightward scroll of classic mode. Four official levels use this mode: The Tower, The Sewers, The Cellar, and The Secret Hollow.",
      },
      {
        question: "Is Geometry Dash 2.21 coming out?",
        answer: "Yes. Update 2.21 is the next planned update. It will include delayed features from 2.2 such as the Explorers main level, The Map system, and Versus Mode. No release date has been announced.",
      },
    ],
    relatedGuideSlugs: ["unlock-all-icons", "get-moons", "tps-explained", "fps-unlock-guide", "practice-mode-guide"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-best-easy-demons",
    title: "Best Easy Demons for Beginners: Top 10 First Demon Picks",
    slug: "best-easy-demons",
    category: "demon",
    targetKeyword: "best easy demons geometry dash beginners",
    summary:
      "Your first demon matters more than you think. Here are the 10 best easy demons in Geometry Dash, ranked by difficulty, with what makes each one hard and how to beat it.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "The best first demon in Geometry Dash is The Nightmare by Jax. It is arguably the easiest demon in the game at about 30 seconds long. After that, The Lightning Road, Platinum Adventure, and Speed Racer are the natural next steps. The full top 10 in order: The Nightmare, The Lightning Road, Platinum Adventure, Demon Mixed, Speed Racer, Insomnia, Crescendo, Death Moon, Problematic, and Blue Hell. If you prefer a structured progression, use our First Demon Picker tool for a personalized recommendation based on your skills.",
      },
      {
        heading: "Are You Actually Ready for Your First Demon?",
        content:
          "Before attempting any demon, be honest with yourself. You should be able to: complete Insane-rated levels (8 to 9 stars) without wanting to throw your phone, beat Electrodynamix and Hexagon Force from the official levels, control all basic game modes reasonably well, use practice mode effectively, and handle dual sections where two icons move simultaneously. If Insane-rated levels still give you major trouble, spend more time there first. Jumping to demons too early leads to frustration and bad habits that are hard to unlearn.",
      },
      {
        heading: "The Top 10 Easy Demons in Order",
        content:
          "Here are the 10 best entry-level demons, ranked from easiest to slightly harder. Each one teaches specific skills that prepare you for the next tier.",
        steps: [
          { title: "The Nightmare (Jax)", detail: "The classic first demon. About 30 seconds long with simple cube jumping and a basic ship corridor. The ship section around 60 percent is the hardest part. If you can beat Electrodynamix, you can beat this. The community universally agrees this is the easiest demon in the game." },
          { title: "The Lightning Road (Timeless)", detail: "Another short classic with consistent difficulty throughout. No crazy spikes, no unfair tricks. Many players beat this right after The Nightmare. The level syncs well with its music, so learn the beat and let it guide your taps." },
          { title: "Platinum Adventure (Serponge)", detail: "Slightly harder than the top two but worth it because the decoration is gorgeous. Serponge is a respected community creator. The level rewards rhythm and flow. Do not overthink individual obstacles, find the natural pace and ride it." },
          { title: "Demon Mixed (Oggy)", detail: "Throws multiple game modes at you without being overwhelming. Great practice for mode transitions, which becomes crucial at higher difficulties. Figure out which mode gives you the most trouble and drill those sections." },
          { title: "Speed Racer (ZenthicAlpha)", detail: "Fast, fun, and energetic. Teaches quick reactions and proves that demons can be exciting rather than just punishing. The constant pace keeps you engaged. Tip: relax your grip. Tension makes fast sections way harder than they need to be." },
          { title: "Insomnia (Glittershroom)", detail: "Atmospheric with consistent difficulty and no frustrating spikes. The music sync is so good that audio cues practically tell you when to tap. Great for players who perform better with strong rhythm cues." },
          { title: "Crescendo (MasK463)", detail: "Designed around its soundtrack. The gameplay follows the beat intuitively, teaching rhythm-based playing that becomes critical at higher levels. Listen to the song a few times before playing." },
          { title: "Death Moon (Caustic)", detail: "A rite of passage that has been challenging the community for years. Longer than the others on this list, which means you need consistency, not just bursts of skill. Slightly harder but the satisfaction of beating it is proportionally bigger." },
          { title: "Problematic (Dhafin)", detail: "Short and focused. Packs its challenge into a brief runtime, making it perfect for quick sessions or warmups. You reach the end frequently during practice, which keeps motivation high." },
          { title: "Blue Hell (Lazye)", detail: "Clean visual design with highly readable gameplay. No unfair tricks, no hidden obstacles, no misleading decoration. What you see is what you get. If you have been frustrated by levels that feel cheap, Blue Hell plays fair from start to finish." },
        ],
      },
      {
        heading: "How to Actually Beat Your First Demon",
        content:
          "Practice mode is not optional. Never attempt full runs before learning the level. The correct approach: play through once in practice mode, noting every death location. Place checkpoints at the start of difficult sections, not in the middle. Practice each hard section until you can pass it 5 times consecutively. Gradually remove checkpoints and practice longer segments. Only attempt full runs when you can consistently reach 70 percent or higher in practice. For a complete practice methodology, see our Practice Mode guide.",
      },
      {
        heading: "Your Mental State Matters",
        content:
          "Demon levels test who you are as much as how fast your fingers move. Accept failure as normal. Everyone dies hundreds of times on their first demon. One player documented 347 deaths on The Nightmare before beating it. Take breaks when frustration builds, because playing angry makes you actively worse. Celebrate progress, not just completion. Going from dying at 30 percent to dying at 80 percent is real improvement even though it does not feel like it. Sleep on it. Many players report beating their first demon the day after a frustrating session, because the brain consolidates muscle memory during sleep.",
      },
      {
        heading: "What Comes After Your First Demon?",
        content:
          "Once you beat your first demon, do not jump straight to Hard Demons. The recommended progression is: complete 3 to 5 Easy Demons before attempting Medium Demons. Complete 10 or more Easy Demons before moving to Medium consistently. After 10 Medium Demons, try Hard Demons like Nine Circles or Jawbreaker. After 5 Hard Demons, move to Insane Demons like Supersonic or Windy Landscape. After 5 Insane Demons, you can consider Extreme Demons. Each tier teaches patterns and skills that the next tier assumes you already have. Use our Demon Progression tool to plan your route.",
      },
      {
        heading: "Levels to Avoid as a Beginner",
        content:
          "Not all easy demons are good first demons. Avoid new 2.2-era easy demons that rely on confusing camera triggers and visual effects. These levels often look easy on paper but are much harder to sightread because the visual language is unfamiliar. Stick to the legacy tiers listed above. They teach you the fundamental physics of the cube and ship without overwhelming you with visual effects. Once you are comfortable with classic demon gameplay, then explore newer 2.2-style demons.",
      },
    ],
    faq: [
      {
        question: "What is the easiest demon in Geometry Dash?",
        answer: "The Nightmare by Jax is widely considered the easiest demon in Geometry Dash. It is about 30 seconds long with simple cube jumping and a basic ship corridor. Most players who can beat Insane-rated levels can beat The Nightmare with some practice.",
      },
      {
        question: "How many demons should I beat before moving to Medium Demon?",
        answer: "Complete at least 3 to 5 Easy Demons before attempting your first Medium Demon. Complete 10 or more Easy Demons before consistently playing Medium Demons. Each tier teaches patterns and skills that the next tier assumes you already have.",
      },
      {
        question: "What should I play after The Nightmare?",
        answer: "The Lightning Road is the natural next step after The Nightmare. It is similarly short and consistent in difficulty. After that, try Platinum Adventure and Speed Racer to build your skills before moving to longer demons like Death Moon.",
      },
      {
        question: "Can I beat a demon on mobile?",
        answer: "Yes. All the demons on this list are mobile-friendly. However, mobile play is harder due to smaller screen size and touch input latency. If you play on mobile, choose shorter demons like The Nightmare or The Lightning Road first.",
      },
      {
        question: "How long does it take to beat your first demon?",
        answer: "Most players spend 2 to 8 hours on their first demon, spread across multiple sessions. The Nightmare can be beaten in 1 to 3 hours for players who are properly prepared. Do not rush it. Consistent short sessions are more effective than marathon grinding.",
      },
    ],
    relatedGuideSlugs: ["practice-mode-guide", "gd-2-2-update", "get-stars-fast", "unlock-all-icons", "demon-keys"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-get-moons",
    title: "How to Get Moons in Geometry Dash: The 2.2 Collectible Guide",
    slug: "get-moons",
    category: "rewards",
    targetKeyword: "how to get moons in geometry dash",
    summary:
      "Moons are the new collectible from Update 2.2, earned by completing platformer levels. Here is every way to get them, what they unlock, and why they matter for your profile.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "Moons were introduced in Update 2.2 and are the platformer mode equivalent of Stars. You earn them by completing rated platformer levels in normal mode. A total of 25 moons can be earned from official Tower levels (The Tower, The Sewers, The Cellar, The Secret Hollow), with each level rewarding 5 to 7 moons. Beyond official content, user platformer levels reward moons based on difficulty, same as stars: Auto gives 1, Easy gives 2, Normal gives 3, up to Demon giving 10. Moons contribute towards unlocking icons and achievements, and progressing through Paths.",
      },
      {
        heading: "What Are Moons?",
        content:
          "Moons are a collectible introduced in Update 2.2. They are present in Geometry Dash, Geometry Dash Lite, and Geometry Dash World. Unlike Stars which are earned from classic mode levels, Moons are earned exclusively from Platformer Mode levels. They appear on your profile alongside Stars, Diamonds, and other collectibles. Moons contribute towards unlocking icons and achievements, and progressing through the Paths system introduced in 2.2.",
      },
      {
        heading: "Moon Rewards by Difficulty",
        content:
          "Platformer levels reward moons based on their difficulty rating, following the same structure as stars:",
        steps: [
          { title: "Auto (1 moon)", detail: "Plays itself. Free moon but only 1." },
          { title: "Easy (2 moons)", detail: "User levels give 2 moons. Main levels give 2." },
          { title: "Normal (3 moons)", detail: "User levels give 3 moons. Main levels give 5." },
          { title: "Hard (4 to 5 moons)", detail: "User levels give 4 to 5. Main levels give 6." },
          { title: "Harder (6 to 7 moons)", detail: "User levels give 6 to 7. Main levels give 7." },
          { title: "Insane (8 to 9 moons)", detail: "User levels give 8 to 9. No main platformer levels at this tier yet." },
          { title: "Demon (10 moons)", detail: "10 moons regardless of demon sub-difficulty. No main platformer demon levels yet." },
        ],
      },
      {
        heading: "Official Moons: The Tower Levels",
        content:
          "The 25 official moons come from the four Tower platformer levels. Each level rewards 5 to 7 moons. These levels also contain 12 secret coins total (3 per level), so you should aim to collect all coins and moons in one pass if possible. The levels are: The Tower (the introduction to platformer mechanics), The Sewers (adds water mechanics), The Cellar (tighter platforming), and The Secret Hollow (the hardest, rewards the most moons). Complete all four to get all 25 official moons.",
      },
      {
        heading: "User Platformer Levels",
        content:
          "Beyond the official content, the community has created thousands of platformer levels. RobTop rates the best ones, and rated platformer levels reward moons just like official levels. To find good platformer levels, use the Lists feature introduced in 2.2. Many Lists are curated specifically for platformer content. Look for lists tagged as platformer or exploration. The quality of user platformer levels varies wildly, so check comments and like-to-download ratios before committing time.",
      },
      {
        heading: "What Moons Unlock",
        content:
          "Moons contribute to several unlock systems. First, they count towards achievements that unlock icons and colors. The moon achievement thresholds start low and scale up, similar to star milestones. Second, they contribute to Paths progression, which gives structured rewards for consistent play. Third, they are visible on your profile, serving as a status symbol for players who engage with platformer content. Some icons can only be unlocked through moon achievements, making them exclusive to players who explore platformer mode.",
      },
      {
        heading: "Moons vs Stars: What Is the Difference?",
        content:
          "Moons and Stars are completely separate counters. Stars come from classic mode levels. Moons come from platformer mode levels. You cannot earn stars from platformer levels or moons from classic levels. Both contribute to your profile and unlock icons, but through different achievement trees. If you want to maximize your unlock progress, you need to play both modes. Many players focus exclusively on classic mode and miss out on the unique icon unlocks that only moons can provide.",
      },
      {
        heading: "Tips for Platformer Mode",
        content:
          "Platformer Mode plays very differently from classic mode. You control your movement direction, which means you can go back and retry sections. This makes platformer levels more forgiving in some ways but also requires different skills. Key tips: learn the level layout since you can explore, do not rush since there is no auto-scroll pressure, collect all coins in one run if possible since you can backtrack, and watch completion videos to find optimal paths through exploration sections.",
      },
    ],
    faq: [
      {
        question: "How do you get moons in Geometry Dash?",
        answer: "Complete rated platformer levels in normal mode. Official Tower levels give 25 moons total. User platformer levels give moons based on difficulty, from 1 for Auto to 10 for Demon.",
      },
      {
        question: "What are moons for in Geometry Dash?",
        answer: "Moons contribute towards unlocking icons, achievements, and progressing through Paths. Some icons can only be unlocked through moon achievements. They are also visible on your profile as a status indicator.",
      },
      {
        question: "Can you get moons from regular levels?",
        answer: "No. Moons only come from Platformer Mode levels. Stars come from classic mode levels. The two systems are completely separate.",
      },
      {
        question: "How many moons are in Geometry Dash?",
        answer: "Official content gives 25 moons from the four Tower platformer levels. Beyond that, user platformer levels provide an unlimited supply since new platformer levels are rated regularly.",
      },
      {
        question: "Do you need moons to unlock all icons?",
        answer: "Some icons require moon achievements to unlock. If you only play classic mode, you will miss these unlocks. To get every icon in the game, you need to play both classic and platformer modes.",
      },
    ],
    relatedGuideSlugs: ["gd-2-2-update", "unlock-all-icons", "diamonds", "get-stars-fast", "user-coins"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-hardest-levels",
    title: "Hardest Geometry Dash Levels: Extreme Demon List 2026",
    slug: "hardest-levels-2026",
    category: "demon",
    targetKeyword: "hardest geometry dash levels 2026",
    summary:
      "The hardest levels in Geometry Dash as of 2026, ranked by the official Demonlist. From Acheron to Bloodbath, here is what makes each Extreme Demon brutal and who verified them.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "The hardest Geometry Dash levels are tracked by the official Demonlist at pointercrate.com, which ranks the 75 hardest demons based on verified completions, player feedback, and list moderator judgment. As of June 2026, the top levels include Acheron, Silent Clubstep, and the newest additions to the Extreme Demon tier. These levels require thousands of attempts, months of practice, and near-perfect execution. Less than 1 percent of Geometry Dash players will ever beat a single Extreme Demon.",
      },
      {
        heading: "How the Demonlist Works",
        content:
          "The official Demonlist is maintained by the community at pointercrate.com. It ranks the 75 hardest demons in Geometry Dash. To be ranked, a level must be verified, meaning at least one player has completed it with video proof. The list is updated regularly as new levels are verified and as community consensus shifts on difficulty. Levels can move up or down the list based on new completions and player feedback. The list also tracks which players have completed the most demons and which creators have made the most listed levels.",
      },
      {
        heading: "What Makes an Extreme Demon",
        content:
          "Extreme Demons are the highest difficulty tier in Geometry Dash. They are not just hard. They represent the absolute limit of what is possible within the game's engine. Common characteristics of Extreme Demons include: extremely tight timing windows where a single frame error means death, complex wave and ship sections at maximum speed, heavy memory requirements where you must memorize hundreds of obstacles, visual complexity that obscures the gameplay path, and length that demands consistency over 2 to 5 minutes of perfect play. Most Extreme Demons take top players 20,000 to 100,000 attempts to beat.",
      },
      {
        heading: "Top Extreme Demons in 2026",
        content:
          "The Demonlist shifts frequently, but here are some of the levels that have defined the top of the list in 2026. These are the levels that the best players in the world are currently grinding:",
        steps: [
          { title: "Acheron", detail: "One of the hardest verified levels. Features extreme wave gameplay and brutal timing sections. Represents the current ceiling of what is possible in GD." },
          { title: "Silent Clubstep", detail: "A legendary level that spent years at the top of the list. Known for its brutal combination of memory and timing. A historic milestone in GD difficulty." },
          { title: "Bloodbath", detail: "One of the most famous Extreme Demons. Verified by Riot. Was the hardest level in the game for years and remains a benchmark for top players." },
          { title: "Prismatic Haze", detail: "A newer addition to the top of the list. Features visually stunning but gameplay-brutal sections that push the boundaries of 2.2-era design." },
          { title: "KINGSLAYER", detail: "Another recent top-tier level. Combines extreme timing with complex visual effects made possible by 2.2 triggers." },
          { title: "Glide", detail: "Known for its relentless pace and demanding wave sections. A level that separates the best from the rest." },
          { title: "Acu", detail: "One of the most common first Extreme Demon choices for top players. Teaches fast flow, rhythm stability, and muscle memory under pressure." },
        ],
      },
      {
        heading: "The Path to Extreme Demon",
        content:
          "No player starts with Extreme Demons. The path takes years for most players and follows a clear progression. Complete 10 or more Easy Demons first. Then 10 or more Medium Demons. Then 5 or more Hard Demons like Nine Circles or Jawbreaker. Then 5 or more Insane Demons like Supersonic or Windy Landscape. Only then should you consider Extreme Demons. Most players who reach Extreme Demon level have been playing for 2 to 5 years and have completed 100 to 500 demons of varying difficulties. Use our Demon Progression tool to plan your route from where you are now to where you want to be.",
      },
      {
        heading: "What It Takes to Beat an Extreme Demon",
        content:
          "Beating an Extreme Demon is not just about skill. It requires: months of dedicated practice on a single level, a practice schedule with regular breaks to avoid burnout, a healthy physical setup with a high refresh rate monitor and stable FPS, mental resilience to handle thousands of deaths without tilting, and community support through forums, Discord, and YouTube completions to study. Most top players document their journey, and the community celebrates each new Extreme Demon completion as a significant event.",
      },
      {
        heading: "Notable Verifications in GD History",
        content:
          "Some verifications have become legendary moments in the Geometry Dash community. Riot's verification of Bloodbath was a watershed moment. The verification of Acheron pushed the boundaries of what was considered possible. Each time a new level is verified at the top of the list, it redefines the ceiling of GD difficulty. These verifications are celebrated with community events, YouTube videos, and sometimes even news coverage outside the GD community.",
      },
    ],
    faq: [
      {
        question: "What is the hardest level in Geometry Dash?",
        answer: "The hardest level changes as new levels are verified. As of 2026, levels like Acheron, Silent Clubstep, and Prismatic Haze are at or near the top of the official Demonlist at pointercrate.com. The list is updated regularly based on new completions and community consensus.",
      },
      {
        question: "How many Extreme Demons are there?",
        answer: "The official Demonlist tracks the 75 hardest demons. The All Rated Extreme Demons List (AREDL) at aredl.net tracks all rated Extreme Demons, which number in the hundreds. New Extreme Demons are verified regularly as the community pushes the boundaries of difficulty.",
      },
      {
        question: "How long does it take to beat an Extreme Demon?",
        answer: "Most Extreme Demons take top players 20,000 to 100,000 attempts over several months. Some of the hardest levels have taken over a year of dedicated practice to beat. It is not uncommon for players to spend 6 to 12 months on a single level.",
      },
      {
        question: "Who verifies the hardest Geometry Dash levels?",
        answer: "Levels are verified by the players who create them or by top players who take on the challenge. Verification requires video proof of completion. The official Demonlist at pointercrate.com tracks all verified completions.",
      },
      {
        question: "Can a normal player beat an Extreme Demon?",
        answer: "It is possible but requires years of dedicated practice. Most players who beat Extreme Demons have been playing Geometry Dash for 2 to 5 years and have completed hundreds of demons at lower difficulties first. Less than 1 percent of GD players will ever beat an Extreme Demon.",
      },
    ],
    relatedGuideSlugs: ["best-easy-demons", "practice-mode-guide", "gd-2-2-update", "tps-explained", "fps-unlock-guide"],
    updatedAt: "2026-07-03",
  },

  {
    id: "guide-create-level",
    title: "How to Create a Level in Geometry Dash 2.2: Editor Guide",
    slug: "create-level-guide",
    category: "general",
    targetKeyword: "how to create a level in geometry dash",
    summary:
      "The 2.2 editor is the most powerful version yet. Here is how to build your first level, from basic block placement to triggers, groups, and getting your level rated.",
    body: [
      {
        heading: "Quick Answer",
        content:
          "To create a level in Geometry Dash 2.2, open the Level Editor from the main menu, create a new level, build your gameplay using blocks and portals, use triggers for dynamic effects, test your level with the play button, publish it to the servers, and then promote it to get downloads and ratings. Getting rated by RobTop requires quality gameplay, good decoration, and community engagement. The 2.2 editor added camera triggers, shader effects, a SFX Library, a Music Library with over 1500 NCS songs, and raised the group limit to 9999.",
      },
      {
        heading: "Opening the Editor",
        content:
          "From the main menu, tap the create button. This opens the level selection screen where you can create new levels or edit existing ones. Tap the new level button to create a blank level. You will be asked to name your level and set basic parameters. Once created, tap the edit button to enter the editor. The editor screen shows your level from a side view with a toolbar at the bottom and a build menu accessible by tapping the build button.",
      },
      {
        heading: "Basic Building",
        content:
          "The foundation of every level is blocks. Select the build menu to access blocks, portals, orbs, pads, and other gameplay objects. Place blocks by tapping the grid. Delete blocks by selecting the delete tool and tapping them. The basic gameplay loop is: place obstacles, test with the play button, adjust, repeat. Start simple. Your first level should have basic cube jumping with a few spikes and platforms. Do not try to use every feature at once.",
        steps: [
          { title: "Place blocks", detail: "Select the block tab in the build menu. Tap the grid to place blocks. Use different block types for variety: solid blocks, spikes, portals, orbs." },
          { title: "Add portals", detail: "Portals change the game mode (cube, ship, ball, UFO, wave, robot, spider, swing), speed, gravity, and size. Place them to create variety in your level." },
          { title: "Add orbs and pads", detail: "Yellow orbs jump, pink orbs change gravity, blue orbs flip gravity temporarily. Pads provide similar effects on contact. Use them to create gameplay variety." },
          { title: "Test constantly", detail: "Tap the play button after every few placements. Play through your level to make sure it is possible. If you cannot beat your own level, nobody else can either." },
        ],
      },
      {
        heading: "Understanding Triggers",
        content:
          "Triggers are the most powerful tools in the editor. They manipulate objects during gameplay. The 2.2 update added many new triggers. Here are the most important ones:",
        steps: [
          { title: "Move Trigger", detail: "Moves objects or groups during gameplay. Use it for moving platforms, approaching obstacles, and dynamic environments." },
          { title: "Alpha Trigger", detail: "Fades objects in and out. Great for surprises, transitions, and appearing or disappearing platforms." },
          { title: "Toggle Trigger", detail: "Enables or disables groups. Create appearing and disappearing platforms, conditional obstacles, and branching paths." },
          { title: "Color Trigger", detail: "Changes background and object colors during gameplay. Essential for visual variety and atmosphere." },
          { title: "Camera Triggers (2.2)", detail: "New in 2.2. Control camera zoom, position, and rotation. Create cinematic moments and dramatic shifts in perspective." },
          { title: "Shader Effects (2.2)", detail: "New in 2.2. Post-processing effects like blur, chromatic aberration, and color grading. Use sparingly for maximum impact." },
        ],
      },
      {
        heading: "Groups and Organization",
        content:
          "Groups are how you organize objects so triggers can control them. Assign a group ID to one or more objects, then use triggers to manipulate that group. The 2.2 update raised the group limit to 9999, giving you far more organizational capacity than ever before. Use groups logically: group all moving platforms together, group decorative elements separately from gameplay objects, and use consistent naming conventions for your group IDs. Good organization makes complex levels manageable. Bad organization makes even simple levels impossible to edit later.",
      },
      {
        heading: "Music and SFX",
        content:
          "The 2.2 update added a Music Library with over 1500 NCS songs that can be used without copyright issues. Select your level's song from the music tab. The song determines the rhythm and pacing of your level. Good level design syncs obstacles to the beat. The SFX Library, also new in 2.2, lets you add sound effects to specific events. Use SFX sparingly. Too many sound effects create audio clutter that detracts from the music.",
      },
      {
        heading: "Testing and Polish",
        content:
          "Test your level obsessively. Play it in normal mode and practice mode. Have friends playtest it. Watch how they react to different sections. If a section feels unfair, it probably is. Common polish steps: ensure every death feels fair (the player should understand why they died), sync obstacles to the music beat, add visual decoration that does not obscure gameplay, verify that the level is possible without practice mode, and check that the difficulty is consistent (no sudden spikes that feel unfair).",
      },
      {
        heading: "Publishing Your Level",
        content:
          "Once your level is polished, publish it to the servers. Set a difficulty rating that matches your level. Write a clear description. Add tags that help players find your level. Publishing is just the beginning. To get downloads and ratings, you need to promote your level. Share it in GD communities, Discord servers, and forums. Ask friends to play and rate it. The more downloads and likes your level gets, the more likely it is to be noticed by RobTop and rated.",
      },
      {
        heading: "Getting Your Level Rated",
        content:
          "Getting rated by RobTop is the goal for most creators. Rated levels give stars, appear in the rated tab, and are eligible for daily and weekly selection. To get rated, your level needs: quality gameplay that is fun and fair, good decoration that enhances without obscuring, community engagement (downloads, likes, positive comments), and visibility (shared in communities, played by known players). There is no guaranteed path to getting rated, but consistently publishing quality levels builds your reputation as a creator. Earning creator points unlocks exclusive icons that non-creators cannot get.",
      },
    ],
    faq: [
      {
        question: "How do I create a level in Geometry Dash?",
        answer: "Open the Level Editor from the main menu, create a new level, build gameplay using blocks and portals, use triggers for dynamic effects, test constantly with the play button, and publish to the servers. Start simple and add complexity as you learn the tools.",
      },
      {
        question: "What are triggers in Geometry Dash?",
        answer: "Triggers are editor tools that manipulate objects during gameplay. Common triggers include Move (moves objects), Alpha (fades objects), Toggle (shows or hides groups), Color (changes colors), and Camera (controls camera position and zoom, new in 2.2).",
      },
      {
        question: "How do I get my level rated in Geometry Dash?",
        answer: "Getting rated requires quality gameplay, good decoration, community engagement, and visibility. Publish your level, promote it in GD communities, and consistently produce quality content. RobTop rates levels that meet the community's quality standards.",
      },
      {
        question: "How many groups can you use in Geometry Dash 2.2?",
        answer: "Update 2.2 raised the group limit to 9999 groups. This gives creators far more organizational capacity than previous versions, enabling more complex levels with more dynamic elements.",
      },
      {
        question: "Can I use copyrighted music in my Geometry Dash level?",
        answer: "The 2.2 update added a Music Library with over 1500 NCS (NoCopyrightSounds) tracks that can be used freely. For other music, you need to use songs that are available on Newgrounds and approved for use in Geometry Dash.",
      },
    ],
    relatedGuideSlugs: ["gd-2-2-update", "unlock-all-icons", "get-stars-fast", "practice-mode-guide", "tps-explained"],
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
