import type { Level } from "@/lib/types";

export type DemonTierSlug =
  | "easy"
  | "medium"
  | "hard"
  | "insane"
  | "mobile"
  | "free-demons";

export type DemonTierConfig = {
  slug: DemonTierSlug;
  navLabel: string;
  h1: string;
  seoTitle: string; // ≤ 43 chars so fullTitle with " | GD Level Tools" stays ≤ 60
  seoDescription: string; // ≤ 155 chars
  subtitle: string;
  accentColor: string;
  quickAnswer: string;
  guideHeading: string;
  guideParagraphs: string[];
  benchmarks: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  filter: (level: Level) => boolean;
  sort: (a: Level, b: Level) => number;
};

export const DEMON_TIERS: DemonTierConfig[] = [
  {
    slug: "easy",
    navLabel: "Easy Demons",
    h1: "Easy Demon List GD (Best Starter Demons)",
    seoTitle: "Easy Demon List GD — Best Easy Demons",
    seoDescription:
      "Browse the best Easy Demon list GD players use to pick starter demons. Compare beginner scores, mobile fit, visual clarity, and Level IDs.",
    subtitle:
      "Curated Geometry Dash Easy Demon list GD beginners rely on—sorted from easiest starter picks to upper-tier bridge levels.",
    accentColor: "#69f0ae",
    quickAnswer:
      "On our Easy Demon list GD players start with The Nightmare, The Lightning Road, Platinum Adventure, and Shiver. Most beginners clear 8–12 Easy Demons before jumping into Medium Demons like B or Mechanical Showdown.",
    guideHeading: "How to Use This Easy Demon List GD Progression Guide",
    guideParagraphs: [
      "An Easy Demon list GD beginners can actually trust needs to separate entry-level demons from upper-tier skill checks. Entry picks like The Nightmare and The Lightning Road feel closer to 7-star Harder levels, while upper Easy Demons like Clubstep, Death Moon, and Sidestep test genuine ship control, 3x speed transitions, and XL endurance.",
      "For smooth progression through this Easy Demon list GD roadmap, start with 2–3 low-frustration starter demons to build confidence in Practice Mode, then mix in modern 2.1/2.2 sync levels (Shiver, Phjork) and classic mechanical benchmarks (Speed Racer, Clubstep, Death Moon). Once you have 10 Easy Demons cleared, move to our Medium Demon List or run the Demon Progression Planner.",
    ],
    benchmarks: [
      { label: "Recommended Before Starting", value: "All RobTop Harder/Insane levels or ~500 stars" },
      { label: "Typical Attempt Count", value: "150–1,200 attempts per clear" },
      { label: "Target Clears Before Medium", value: "8–12 Easy Demons (including Clubstep or Death Moon)" },
    ],
    faqs: [
      {
        question: "What is the absolute easiest Easy Demon in Geometry Dash?",
        answer:
          "The Nightmare by Jax (ID: 13519) and The Lightning Road by Timeless Real (ID: 55520) are universally ranked as the easiest rated demons in Geometry Dash.",
      },
      {
        question: "Which modern Easy Demon is best for beginners?",
        answer:
          "Shiver by SpKale and Phjork by Cerufiffy are top modern Easy Demons because they use clean visual indicators, tight music sync, and short runtimes.",
      },
      {
        question: "Should I beat Clubstep before online Easy Demons?",
        answer:
          "No. Clubstep is actually a mid-to-upper Easy Demon with tight late mini-ship sections. Beat 2–3 easier online demons like The Nightmare and Platinum Adventure first, then return to Clubstep.",
      },
    ],
    filter: (l) => l.difficulty === "demon" && l.demonDifficulty === "easy",
    sort: (a, b) => b.beginnerScore - a.beginnerScore || b.mobileScore - a.mobileScore,
  },
  {
    slug: "medium",
    navLabel: "Medium Demons",
    h1: "Medium Demon List (Geometry Dash)",
    seoTitle: "Medium Demon List — Best GD Medium Demons",
    seoDescription:
      "Explore the best Geometry Dash Medium Demon list for progression. Compare beginner scores, mobile friendliness, and bridge picks like B and Gold Temple.",
    subtitle:
      "Best Geometry Dash Medium Demons for bridging the gap from Easy Demons into Hard Demons.",
    accentColor: "#00e5ff",
    quickAnswer:
      "The best first Medium Demons in Geometry Dash are B by Motleyorc, Mechanical Showdown, and Gold Temple. Expect faster gamemode switches, asymmetrical duals, and tighter ship/wave corridors than Easy Demons.",
    guideHeading: "Surviving the Easy-to-Medium Demon Jump",
    guideParagraphs: [
      "The jump from Easy Demon to Medium Demon is where most players hit their first real skill plateau. Unlike starter Easy Demons that can be brute-forced from 0%, Medium Demons punish unprepared runs with faster speed portals (3x–4x), dual gamemodes, and tighter ship or wave corridors.",
      "Treat your first 3–5 Medium Demons as targeted skill training: play B for fast ball and modern flow, Problematic or Nine Circles-style bridges for wave reading, Mechanical Showdown for duals and UFO, and Gold Temple for straight-fly ship control. Always practice the second half (50%–100%) before grinding from 0%.",
    ],
    benchmarks: [
      { label: "Recommended Before Starting", value: "8–12 Easy Demons cleared" },
      { label: "Typical Attempt Count", value: "600–2,500 attempts per clear" },
      { label: "Target Clears Before Hard", value: "5–8 Medium Demons across ship, wave, and duals" },
    ],
    faqs: [
      {
        question: "What is the best first Medium Demon in Geometry Dash?",
        answer:
          "B by Motleyorc is widely considered the best first Medium Demon thanks to its catchy sync, short length, and learnable 4x ball section (turn on LDM if playing on mobile).",
      },
      {
        question: "How many Easy Demons should I beat before my first Medium Demon?",
        answer:
          "Around 8–12 Easy Demons, including at least one ship-heavy clear (like Clubstep) and one endurance clear (like Death Moon), gives you the consistency needed for Medium Demons.",
      },
      {
        question: "Are Medium Demons playable on 60Hz mobile?",
        answer:
          "Yes. Most entry and mid Medium Demons—including B (with LDM) and Mechanical Showdown—are completely beatable on 60Hz mobile devices.",
      },
    ],
    filter: (l) => l.difficulty === "demon" && l.demonDifficulty === "medium",
    sort: (a, b) => b.beginnerScore - a.beginnerScore || b.mobileScore - a.mobileScore,
  },
  {
    slug: "hard",
    navLabel: "Hard Demons",
    h1: "Hard Demon List (Geometry Dash)",
    seoTitle: "Hard Demon List — Best GD Hard Demons",
    seoDescription:
      "Curated Geometry Dash Hard Demon list featuring Nine Circles, Jawbreaker, Fairydust, and top progression picks with Level IDs and tips.",
    subtitle:
      "Classic and modern Geometry Dash Hard Demons that build wave precision, consistency, and nerve control.",
    accentColor: "#ff9100",
    quickAnswer:
      "Nine Circles and Jawbreaker are the most iconic first Hard Demons in Geometry Dash, followed by Fairydust for upper-tier wave mastery. Beat 5–8 Medium Demons before grinding your first Hard Demon.",
    guideHeading: "Building Consistency in the Hard Demon Tier",
    guideParagraphs: [
      "Hard Demons mark the transition from casual demon clearing to dedicated practice routines. At this tier, Start Position copyables become mandatory—grinding from 0% without mastering 60%–100% first will double or triple your attempt count.",
      "Wave-focused players usually enter the Hard Demon list through Nine Circles or Jawbreaker, which teach fast gravity-portal wave reads that carry directly into Insane and Extreme Demons. Once you clear 3–5 Hard Demons comfortably, you are ready to step up to entry Insane Demons like Windy Landscape.",
    ],
    benchmarks: [
      { label: "Recommended Before Starting", value: "5–8 Medium Demons cleared" },
      { label: "Typical Attempt Count", value: "1,500–5,000 attempts per clear" },
      { label: "Target Clears Before Insane", value: "3–6 Hard Demons including a Nine Circles clear" },
    ],
    faqs: [
      {
        question: "Should I beat Nine Circles or Jawbreaker as my first Hard Demon?",
        answer:
          "Both are great first Hard Demons. Jawbreaker has a shorter pre-drop and calmer ending, while Nine Circles has slightly more forgiving mid-wave gravity portals but a tougher final cube.",
      },
      {
        question: "How hard is Fairydust compared to Nine Circles?",
        answer:
          "Fairydust is noticeably harder than Nine Circles and Jawbreaker due to tighter mini-wave corridors and abrupt speed transitions. Tackle it as your 2nd or 3rd Hard Demon.",
      },
    ],
    filter: (l) => l.difficulty === "demon" && l.demonDifficulty === "hard",
    sort: (a, b) => b.beginnerScore - a.beginnerScore || a.frustrationScore - b.frustrationScore,
  },
  {
    slug: "insane",
    navLabel: "Insane Demons",
    h1: "Insane Demon List (Geometry Dash)",
    seoTitle: "Insane Demon List — Best GD Insane Demons",
    seoDescription:
      "Discover the easiest and best Geometry Dash Insane Demons for progression, including Windy Landscape, Stalemate, Supersonic, and Acropolis.",
    subtitle:
      "Top entry and intermediate Insane Demons to prepare you for your first Extreme Demon.",
    accentColor: "#ff5252",
    quickAnswer:
      "The best first Insane Demons in Geometry Dash are Windy Landscape and Stalemate, followed by Supersonic for megacollab consistency and Acropolis for pure slow-timing discipline.",
    guideHeading: "Preparing for Insane Demons and Your First Extreme",
    guideParagraphs: [
      "Insane Demons are the final proving ground before Extreme Demons. They demand strict segmented practice—breaking levels into 20–30% chunks with Start Positions and running 50%–100% cleanly before investing serious attempts from 0%.",
      "Windy Landscape is widely voted the #1 entry Insane Demon thanks to its fun 1.9 flow and front-loaded 30% ship. Stalemate concentrates difficulty into a single 50%–75% drop, while Acropolis builds the exact frame-timing discipline you will need later in Acu or Cataclysm.",
    ],
    benchmarks: [
      { label: "Recommended Before Starting", value: "3–6 Hard Demons cleared" },
      { label: "Typical Attempt Count", value: "2,500–8,000 attempts per clear" },
      { label: "Target Clears Before Extreme", value: "3–5 Insane Demons across flow, ship, and timing" },
    ],
    faqs: [
      {
        question: "What is the easiest Insane Demon in Geometry Dash?",
        answer:
          "Windy Landscape by Woogi1411 and Stalemate by Nox are consistently ranked among the most accessible entry Insane Demons for players stepping up from Hard Demons.",
      },
      {
        question: "Do I need 144Hz or FPS bypass to beat Insane Demons?",
        answer:
          "Geometry Dash 2.2 standardized 240 TPS physics across devices, making entry Insane Demons much fairer on 60Hz than in 2.1—though a 120Hz+ monitor still improves visual smoothness for tight ships.",
      },
    ],
    filter: (l) => l.difficulty === "demon" && l.demonDifficulty === "insane",
    sort: (a, b) => b.beginnerScore - a.beginnerScore || a.frustrationScore - b.frustrationScore,
  },
  {
    slug: "mobile",
    navLabel: "Mobile Demons",
    h1: "Mobile Demon List (Geometry Dash)",
    seoTitle: "Mobile Demon List — Best GD Mobile Demons",
    seoDescription:
      "Playable Geometry Dash Mobile Demon list filtered for 60Hz touch controls, low lag, and high mobile scores (4/5+). Find your next phone clear.",
    subtitle:
      "Demons rated 4/5 or 5/5 for mobile play—low lag, fair 60Hz touch physics, and zero 144Hz-only straight fly.",
    accentColor: "#b388ff",
    quickAnswer:
      "The best Geometry Dash demons for mobile players are levels with low object counts, clean visual contrast, and rhythm-based clicks rather than frame-tight straight fly—such as The Nightmare, Platinum Adventure, Speed Racer, Shiver (LDM), and Phjork.",
    guideHeading: "What Makes a Demon Good on Mobile?",
    guideParagraphs: [
      "Playing Geometry Dash on iOS or Android introduces two hurdles that PC players rarely think about: touchscreen input latency and frame drops on object-heavy 2.1/2.2 levels. Levels that rely on prolonged 1-block straight fly or unoptimized glow effects feel dramatically harder on a phone.",
      "Every demon on this Mobile Demon List earned a Mobile Score of 4/5 or 5/5 in our manual review. They run smoothly on standard phones (especially with Low Detail Mode enabled), rely on fair tap timing instead of micro-straight-fly, and offer clear obstacle readability on smaller screens.",
    ],
    benchmarks: [
      { label: "Mobile Score Filter", value: "4/5 or 5/5 (Touch-Verified)" },
      { label: "Essential Setting", value: "Enable Low Detail Mode (LDM) on 2.1+ demons" },
      { label: "Best Starter Mobile Demons", value: "The Nightmare, Platinum Adventure, Speed Racer, Shiver" },
    ],
    faqs: [
      {
        question: "Can mobile players beat Hard and Insane Demons?",
        answer:
          "Yes! Many mobile players beat Nine Circles, Jawbreaker, and Windy Landscape on 60Hz–120Hz phones. Focus on low-object 1.9 levels and avoid heavy glow megacollabs that cause frame drops.",
      },
      {
        question: "Why do some Easy Demons lag on my phone?",
        answer:
          "Modern 2.1 and 2.2 levels often contain 40,000+ objects. Always enable Low Detail Mode (LDM) in the level's pause/info screen and turn off Smooth Fix if you experience audio desync.",
      },
    ],
    filter: (l) => l.difficulty === "demon" && l.mobileScore >= 4,
    sort: (a, b) => b.mobileScore - a.mobileScore || b.beginnerScore - a.beginnerScore,
  },
  {
    slug: "free-demons",
    navLabel: "Free Demons",
    h1: "Free Demons in Geometry Dash (Easiest List)",
    seoTitle: "Free Demons GD — Easiest Starter Demons",
    seoDescription:
      "Looking for free demons in Geometry Dash? Browse our curated list of the easiest rated demons (Beginner Score 4/5+) with Level IDs and tips.",
    subtitle:
      "The easiest rated 'free' demons in Geometry Dash—ideal for quick demon stats, first clears, and low-stress practice.",
    accentColor: "#ffc107",
    quickAnswer:
      "In Geometry Dash slang, 'free demons' are officially rated Easy Demons that play closer to 6–8 star Harder/Insane levels—led by The Nightmare, The Lightning Road, Platinum Adventure, Demon Mixed, and Shiver.",
    guideHeading: "What Are 'Free Demons' in Geometry Dash?",
    guideParagraphs: [
      "Geometry Dash players call the easiest rated Easy Demons 'free demons' because they award the full 10 stars, 500 orbs, and +1 Demon stat with far less grinding than modern demons. Many of them date back to 1.0–1.9 when community difficulty standards were much lower.",
      "Free demons are the smartest way to build your first 5–10 demon clears, unlock Demon-count icons and colors, and get comfortable using Practice Mode checkpoints without burning out. Once you clear the levels below, step up to Clubstep, Speed Racer, or our Demon Progression Planner.",
    ],
    benchmarks: [
      { label: "Beginner Score Filter", value: "4/5 or 5/5 (Easiest Rated Demons)" },
      { label: "Average Time to Clear", value: "15–45 minutes per level with Practice Mode" },
      { label: "Rewards Earned", value: "10 Stars + 500 Mana Orbs + 1 Demon per clear" },
    ],
    faqs: [
      {
        question: "Are free demons legit rated demons in Geometry Dash?",
        answer:
          "Yes. Every level on this list is an officially rated Easy Demon in Geometry Dash that counts toward your Demon total, stars, and icon unlocks—no hacks or secret ways required.",
      },
      {
        question: "How many free demons can a beginner beat in one day?",
        answer:
          "With basic Practice Mode discipline, a player who has beaten the official Harder/Insane RobTop levels can often clear 2 to 4 starter free demons in a single weekend.",
      },
    ],
    filter: (l) =>
      l.difficulty === "demon" &&
      l.demonDifficulty === "easy" &&
      l.beginnerScore >= 4,
    sort: (a, b) => b.beginnerScore - a.beginnerScore || a.frustrationScore - b.frustrationScore,
  },
];

export function getDemonTierBySlug(slug: string): DemonTierConfig | undefined {
  return DEMON_TIERS.find((t) => t.slug === slug);
}
