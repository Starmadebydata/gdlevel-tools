import type { Level } from "@/lib/types";

/**
 * 28 个高搜索量、高价值核心关卡（保持 index, follow 并收录进 sitemap.xml）
 * 其余 61 个长尾关卡保持可访问，但设为 noindex, follow，避免薄模板页拖累整站 Google 质量分与 AdSense 审核。
 */
export const INDEXED_LEVEL_SLUGS = new Set<string>([
  // Easy Demons (10)
  "the-nightmare",
  "the-lightning-road",
  "platinum-adventure",
  "shiver",
  "demon-park",
  "phjork",
  "speed-racer",
  "crescendo",
  "death-moon",
  "clubstep",
  // Medium Demons (4)
  "b",
  "problematic",
  "gold-temple",
  "mechanical-showdown",
  // Hard Demons (3)
  "nine-circles",
  "jawbreaker",
  "fairydust",
  // Insane Demons (4)
  "supersonic",
  "windy-landscape",
  "stalemate",
  "acropolis",
  // Extreme Demons (6)
  "acu",
  "cataclysm",
  "bloodbath",
  "silent-clubstep",
  "slaughterhouse",
  "sonic-wave",
  // Iconic Official 2.2 Level (1)
  "dash",
]);

export function isIndexedLevel(slug: string): boolean {
  return INDEXED_LEVEL_SLUGS.has(slug);
}

export type LevelDeepDive = {
  auditedAt: string;
  attemptEstimate: string;
  sectionWalkthrough: {
    range: string;
    gamemode: string;
    notes: string;
  }[];
  practicePlan: string;
  deviceNotes: string;
  peerComparison: string;
  scoreRationales: {
    mobile: string;
    beginner: string;
    visual: string;
    forgiving: string;
  };
};

const BESPOKE_GUIDES: Record<string, LevelDeepDive> = {
  "the-nightmare": {
    auditedAt: "2026-11-19",
    attemptEstimate: "150–400 attempts for a first-time demon player",
    sectionWalkthrough: [
      {
        range: "0%–32%",
        gamemode: "Cube & Intro Ship",
        notes:
          "Opens with straightforward cube jumps and a short upside-down ship corridor. Watch the blue jump pads at 18%—do not tap early or you will clip the ceiling spikes.",
      },
      {
        range: "33%–68%",
        gamemode: "Ball, Reverse Cube & Ship Maze",
        notes:
          "The iconic 1.0-style ball section at 35%–52% relies on rhythm rather than tight timings. Keep your taps spaced cleanly on the green-lit platforms, then hold steady through the wide ship gap around 60%.",
      },
      {
        range: "69%–100%",
        gamemode: "Memory Pads & Final Ship",
        notes:
          "The fake-orb and jump-pad sequence at 72%–82% is the main choke point for new players. Memorize which blue pads to skip, then stay centered through the slow final ship corridor to the finish.",
      },
    ],
    practicePlan:
      "Do one full Practice Mode run to mark the fake orbs around 75%, then place a manual checkpoint at 68% and clear 68%–100% three times in a row before playing from 0%. Most nerves hit at the final ship corridor.",
    deviceNotes:
      "Plays identically on 60Hz mobile and high-refresh PC. Because there is no wave gamemode or tight straight fly, touchscreen players have zero disadvantage here.",
    peerComparison:
      "Slightly easier to sight-read than The Lightning Road (which has more blind portal transitions) and noticeably shorter and less punishing than Clubstep.",
    scoreRationales: {
      mobile: "Wide ship corridors and zero wave spam make touchscreen control comfortable.",
      beginner: "Widely considered the easiest rated Demon in Geometry Dash, comparable to a 7-star Harder level.",
      visual: "Classic 1.0 block style has zero distracting glow or foreground clutter.",
      forgiving: "Generous hitboxes and slow speed keep deaths low-stress once the 75% fake orbs are learned.",
    },
  },
  "the-lightning-road": {
    auditedAt: "2026-11-19",
    attemptEstimate: "200–450 attempts for a first-time demon player",
    sectionWalkthrough: [
      {
        range: "0%–30%",
        gamemode: "Cube & Early Ball",
        notes:
          "Features old-school memory jumps and early mirror portals. Avoid buffering every yellow orb; several pads launch you into spikes if you hold.",
      },
      {
        range: "31%–67%",
        gamemode: "Ship & Gravity Portals",
        notes:
          "The mid-level ship sections are wide but include sudden gravity flips. Keep small controlled taps rather than long holds so you can react immediately after each blue portal.",
      },
      {
        range: "68%–100%",
        gamemode: "Mirror Cube & Final Ball",
        notes:
          "A brief mirror-portal section catches first-time players off guard around 70%. Once you memorize the two fake jump rings in the final ball sequence, the ending is very consistent.",
      },
    ],
    practicePlan:
      "Disable auto-checkpoints in Practice Mode and practice 65%–100% until the mirror portal feels automatic. That single 10-second segment causes over half of all normal-mode deaths.",
    deviceNotes:
      "Completely fair on mobile 60Hz. The only hurdle on small screens is the horizontal mirror flip, which becomes pure muscle memory after 10–15 practice runs.",
    peerComparison:
      "Comparable in overall difficulty to The Nightmare, with slightly trickier memory portals but even looser ship gaps.",
    scoreRationales: {
      mobile: "No tight timings or fast wave; easy to tap cleanly on phones and tablets.",
      beginner: "One of the top two starter demons in GD history, requiring memory rather than raw mechanics.",
      visual: "Old 1.0 layout is clean, though sudden mirror portals briefly disrupt sight-reading.",
      forgiving: "Short learning curve with very few punishing chokepoints after 75%.",
    },
  },
  "platinum-adventure": {
    auditedAt: "2026-11-19",
    attemptEstimate: "200–500 attempts for new demon players",
    sectionWalkthrough: [
      {
        range: "0%–33%",
        gamemode: "Cube, Ship & Early Ball",
        notes:
          "Clean, readable cube jumps lead into an easy ship and ball segment. Almost every orb is clearly marked, making the opening a great warm-up.",
      },
      {
        range: "34%–69%",
        gamemode: "UFO, Slow Wave & Gravity Transitions",
        notes:
          "Introduces a gentle UFO section and one of the easiest wave corridors in any Easy Demon. Tap lightly on the UFO to avoid over-jumping into ceiling blocks.",
      },
      {
        range: "70%–100%",
        gamemode: "Speed-Up Ship & Final Cube",
        notes:
          "The ship around 74%–83% is the real test of the level, with tighter vertical alignment than the first half. Stay calm on the final cube jumps—there is one late timing near 92%.",
      },
    ],
    practicePlan:
      "Practice 70%–100% five times before going from 0%. Pay close attention to the ship transition out of the 70% portal so you enter with level momentum.",
    deviceNotes:
      "Excellent on mobile and PC alike. Unlike older 1.0 demons, it teaches modern gamemode variety (UFO and wave) without punishing 60Hz touch delay.",
    peerComparison:
      "Slightly more modern and mechanically varied than The Nightmare, making it an ideal 2nd or 3rd Easy Demon right before Shiver or Speed Racer.",
    scoreRationales: {
      mobile: "Smooth transitions and spacious UFO/wave paths work reliably on 60Hz touchscreens.",
      beginner: "Gentle difficulty curve that introduces every core pre-2.0 gamemode safely.",
      visual: "High contrast between background and spikes makes sight-reading effortless.",
      forgiving: "Only one late ship spike in difficulty; minimal fake-out traps.",
    },
  },
  shiver: {
    auditedAt: "2026-11-19",
    attemptEstimate: "250–600 attempts for newer demon players",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Cube, Ship & Fast Ball",
        notes:
          "Modern 2.1 sync-heavy opening with clear jump indicators. Follow the beat of the song rather than reacting late to incoming spikes.",
      },
      {
        range: "36%–71%",
        gamemode: "Drop Wave, Spider & UFO",
        notes:
          "The drop shifts into brisk spider and mini-wave clicks that look faster than they actually are. Every click aligns tightly to the melody, so audio cues help tremendously.",
      },
      {
        range: "72%–100%",
        gamemode: "Final Ball, Ship & Ending Cube",
        notes:
          "The ball section around 78%–86% is the #1 nerve test because one mistimed click sends you off-sync. Keep your eyes slightly ahead of the icon through the final ship.",
      },
    ],
    practicePlan:
      "Turn game music on (not muted) and grind 70%–100% in Practice Mode until you can clear the late ball section consistently. Then run 40%–100% twice before normal attempts.",
    deviceNotes:
      "Strong mobile pick, though older phones should enable Low Detail Mode (LDM) in the level menu to prevent frame drops during the pulsing drop effects.",
    peerComparison:
      "Much more modern and music-synced than The Nightmare or Platinum Adventure, and a fantastic warm-up for modern Easy Demons like Phjork.",
    scoreRationales: {
      mobile: "Sync-based clicks feel snappy on touchscreens once Low Detail Mode is toggled on.",
      beginner: "Fair modern Easy Demon with clear jump indicators and short length.",
      visual: "Clean icy theme with readable jump markers, though bright pulses benefit from LDM.",
      forgiving: "Consistent sync means once you learn the drop, attempts from 0% progress rapidly.",
    },
  },
  "demon-park": {
    auditedAt: "2026-11-19",
    attemptEstimate: "300–700 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Classic Cube & Early Ship",
        notes:
          "The very first Demon ever created in Geometry Dash. Early cube jumps rely on crisp 1.0 timing and several triple-spike-style gaps.",
      },
      {
        range: "36%–70%",
        gamemode: "Reverse Gravity & Mirror Portals",
        notes:
          "Heavy use of upside-down cube and mirror portals makes sight-reading difficult on your first few runs. Learn the exact jump cues right after each gravity switch.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Ship & Memory Cube",
        notes:
          "The closing cube sequence mixes rapid jump pads with tight ceiling clearance. Avoid spamming jumps on the last stairs.",
      },
    ],
    practicePlan:
      "Focus your Practice Mode sessions on the upside-down mirror segment (45%–70%). Once that section clicks, the rest of the level is straightforward 1.0 platforming.",
    deviceNotes:
      "Totally playable on 60Hz mobile, as there is no wave or high-FPS ship physics—just pure cube timing and mirror-portal memory.",
    peerComparison:
      "Harder and less forgiving than The Nightmare due to mirror portals and tighter cube jumps, sitting squarely in the lower-mid Easy Demon range.",
    scoreRationales: {
      mobile: "Classic 1.0 cube and ship physics require no high refresh rate.",
      beginner: "Approachable historical Demon, though mirror portals require extra practice.",
      visual: "Minimalist 1.0 blocks are clear, offset slightly by mirror-portal disorientation.",
      forgiving: "A few awkward blind transitions can cause frustrating mid-run deaths.",
    },
  },
  phjork: {
    auditedAt: "2026-11-19",
    attemptEstimate: "250–600 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Fast Cube, Robot & Ship",
        notes:
          "High-energy 2.1 gameplay at 2x–3x speed. Even though the screen moves quickly, the click patterns are very forgiving and follow obvious indicators.",
      },
      {
        range: "36%–70%",
        gamemode: "Drop Wave, Spider & UFO",
        notes:
          "Short, punchy gamemode switches keep every section under 5 seconds. The mini-wave corridors look intimidating at 3x speed but have wide tolerances.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Ship & Dash Orb Finish",
        notes:
          "The final 25% eases off slightly compared to the drop. Hold the late dash orbs cleanly until the release marker so you do not undershoot the final platform.",
      },
    ],
    practicePlan:
      "Because Phjork is short and fast, run 50%–100% until the drop transitions feel automatic. You will rack up attempts quickly, which actually speeds up muscle memory.",
    deviceNotes:
      "Great on both PC and modern phones; toggle LDM if your mobile device drops frames during the fast color shifts.",
    peerComparison:
      "Similar in difficulty to Shiver, faster than Platinum Adventure, and much more enjoyable than old memory demons if you like modern flow gameplay.",
    scoreRationales: {
      mobile: "Fast flow gameplay plays smoothly on touch devices with LDM enabled.",
      beginner: "One of the best modern Easy Demons for players transitioning out of 1.0 starter demons.",
      visual: "Bright modern decoration with clear orb markers and readable pathways.",
      forgiving: "Short runtime keeps every attempt snappy and minimizes tilt.",
    },
  },
  "speed-racer": {
    auditedAt: "2026-11-19",
    attemptEstimate: "350–800 attempts",
    sectionWalkthrough: [
      {
        range: "0%–34%",
        gamemode: "Speed-Change Cube & Ship",
        notes:
          "Lives up to its name by introducing 2x and 3x speed portals early. Focus on smooth ship alignment right before speed portals so you don't crash into the ceiling.",
      },
      {
        range: "35%–70%",
        gamemode: "Fast Wave, Ball & UFO",
        notes:
          "The fast wave around 45%–55% is a classic beginner skill check. Keep your wave taps short and rhythmic rather than panicking at 3x speed.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Ship & Cube Sprint",
        notes:
          "The last 25% blends fast cube jumps with a final ship squeeze. Stay centered on the final portals and avoid over-clicking the closing orbs.",
      },
    ],
    practicePlan:
      "Drill the 3x speed wave and UFO transitions in Practice Mode until you pass them 5 times cleanly. Speed Racer rewards calm rhythm over raw reaction speed.",
    deviceNotes:
      "Very friendly on mobile 60Hz—an ideal level for mobile players learning how to handle 3x speed portals without heavy decoration lag.",
    peerComparison:
      "A clear step above The Nightmare and Platinum Adventure, and a great bridge right before Clubstep or Death Moon.",
    scoreRationales: {
      mobile: "Low object count guarantees locked 60fps even on older phones.",
      beginner: "Teaches essential speed-portal control without unfair timings.",
      visual: "Clean 1.9 neon aesthetic with high contrast between blocks and hazards.",
      forgiving: "Fair pacing with balanced difficulty from start to finish.",
    },
  },
  crescendo: {
    auditedAt: "2026-11-19",
    attemptEstimate: "300–700 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Cube & Early Ship",
        notes:
          "Classic 1.6/1.7 pacing with predictable cube jumps and an upside-down ship section that tests steady altitude control.",
      },
      {
        range: "36%–70%",
        gamemode: "Ball & UFO Rhythm",
        notes:
          "Contains a couple of awkward 1.x UFO gravity switches where tapping too early sends you into the roof. Learn the exact tap count for each corridor.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Ship & Cube Finish",
        notes:
          "The ending speeds up slightly with a few blind jump-pad chains. Keep calm through the final ship tunnel.",
      },
    ],
    practicePlan:
      "Practice the mid-level UFO and upside-down ship corridors back-to-back until you know the exact rhythm of every gravity portal.",
    deviceNotes:
      "Zero lag on mobile and completely fair on 60Hz. Good old-school Demon for building UFO and upside-down ship fundamentals.",
    peerComparison:
      "Sits between The Lightning Road and Clubstep—more mechanical than 1.0 memory demons, but easier than Clubstep's late ship sections.",
    scoreRationales: {
      mobile: "Lightweight 1.x object count runs smoothly on every device.",
      beginner: "Solid early Easy Demon that builds real ship and UFO control.",
      visual: "Simple classic blocks are easy to read despite a few older blind transitions.",
      forgiving: "Mostly fair, with only one or two awkward mid-level UFO portals.",
    },
  },
  "death-moon": {
    auditedAt: "2026-11-19",
    attemptEstimate: "600–1,400 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "XL Cube, Ship & Fast Wave",
        notes:
          "An iconic 1.9 XL Easy Demon (~2.5 minutes long). The opening cube and first fast wave establish the intense red-and-black atmosphere—do not rush the early double-speed wave slopes.",
      },
      {
        range: "36%–70%",
        gamemode: "Duals, Mini-Wave & Ship Chases",
        notes:
          "The 3x mini-wave around 45%–55% and the brief dual cube/ship segments are where most players drop runs. Focus on the bottom icon during the duals to keep your rhythm grounded.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Wave, UFO & Ending Ship",
        notes:
          "Nerve control is the true boss of Death Moon. The 75%–90% UFO and ship sections aren't individually extreme, but dying past the 2-minute mark hurts—breathe and trust your practice muscle memory.",
      },
    ],
    practicePlan:
      "Because Death Moon is XL, NEVER grind from 0% until you can beat 60%–100% consistently. Split practice into three chunks: 70%–100%, 40%–75%, and 0%–45%.",
    deviceNotes:
      "Playable on mobile, though the fast mini-wave and 2.5-minute length make it significantly tougher on touchscreens than shorter Easy Demons.",
    peerComparison:
      "Upper-tier Easy Demon—harder than Clubstep in endurance and wave speed, and one of the best final Easy Demons before jumping to Medium Demons like B.",
    scoreRationales: {
      mobile: "Fast 3x mini-wave and long runtime demand steady touchscreen endurance.",
      beginner: "Upper-end Easy Demon; better as your 8th–12th demon rather than your first.",
      visual: "Legendary 1.9 art direction, though dense red-on-black spikes take a few runs to read.",
      forgiving: "XL length amplifies late-level nerves and makes 85%+ deaths sting.",
    },
  },
  clubstep: {
    auditedAt: "2026-11-19",
    attemptEstimate: "800–2,000 attempts for newer players",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Fake-Block Cube & First Ship",
        notes:
          "RobTop's first official Demon teaches invisible/fake blocks and tight gravity-portal ship entries. Memorize the fake spikes in the opening cube so 0%–25% becomes automatic.",
      },
      {
        range: "36%–69%",
        gamemode: "UFO Corridor & Upside-Down Ship",
        notes:
          "The UFO around 52%–64% requires crisp, spaced clicks to weave between monster mouths. Right after, the gravity-flip ship at 66% tests whether you can stabilize immediately upon entering portals.",
      },
      {
        range: "70%–100%",
        gamemode: "Mini-Ship Gauntlet & Final Monsters",
        notes:
          "78%–95% is the legendary choke point of Clubstep: tight mini-ship and upside-down ship gaps through monster teeth. Use micro-taps instead of holding to keep the ship flat.",
      },
    ],
    practicePlan:
      "Do not brute-force from 0%. Master 70%–100% first in Practice Mode until you can clear the mini-ship monsters three times in a row, then work backwards to 50%–100%.",
    deviceNotes:
      "100% beatable on 60Hz mobile, though the 80%–95% mini-ship feels noticeably tighter on touchscreens than on a 144Hz+ PC monitor.",
    peerComparison:
      "Harder than The Nightmare, Platinum Adventure, and Shiver, and a mandatory skill milestone before tackling Medium Demons—every ship skill you learn here carries forward forever.",
    scoreRationales: {
      mobile: "Tight late mini-ship sections are playable on mobile but require steady micro-taps.",
      beginner: "Mid-to-high Easy Demon; best tackled after 3–5 easier online Demons.",
      visual: "Clean RobTop 1.6 style, with intentional fake blocks that require memorization.",
      forgiving: "Heavily back-loaded difficulty makes 80%–96% deaths the main source of frustration.",
    },
  },
  b: {
    auditedAt: "2026-11-19",
    attemptEstimate: "600–1,500 attempts for first Medium Demon",
    sectionWalkthrough: [
      {
        range: "0%–33%",
        gamemode: "Bee-Themed Cube, Ship & Ball",
        notes:
          "Charming, high-speed opening with bouncy cube orbs and a lively ball segment. Most clicks sync cleanly to the upbeat soundtrack.",
      },
      {
        range: "34%–68%",
        gamemode: "Fast Ball, Spider & Wave",
        notes:
          "The 4x-speed ball around 55%–64% is the signature difficulty spike. Don't spam—learn the exact 6–7 rhythmic clicks so you don't clip the honeycomb slopes.",
      },
      {
        range: "69%–100%",
        gamemode: "Final Wave, Spider & Ending Cube",
        notes:
          "The tight spider and mini-wave around 75%–88% demand focused practice, followed by a brief, nerve-wracking final green-orb cube sequence at 92%–97%.",
      },
    ],
    practicePlan:
      "Use Practice Mode or a copyable with Start Pos at 55% and 75%. Mastering the fast ball (55%–64%) and final orbs (90%–98%) cuts total attempts in half.",
    deviceNotes:
      "Very popular on PC; mobile players MUST toggle Low Detail Mode (LDM) because B's dense bee/honeycomb art causes noticeable frame drops on mid-range phones.",
    peerComparison:
      "Widely regarded as the #1 first Medium Demon in Geometry Dash—easier than Mechanical Showdown and far more approachable than old 1.9 Medium Demons.",
    scoreRationales: {
      mobile: "Gameplay is touch-friendly, but heavy object count requires LDM on mobile.",
      beginner: "Top-tier entry Medium Demon once you have 8–10 Easy Demons under your belt.",
      visual: "Gorgeously decorated, though busy foreground elements slightly reduce contrast.",
      forgiving: "Consistent sync and short length keep the grind fun, despite the tricky 95% orbs.",
    },
  },
  problematic: {
    auditedAt: "2026-11-19",
    attemptEstimate: "700–1,600 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Infamous Pre-Drop Cube & Ship",
        notes:
          "The first 15% cube timings are notoriously awkward—several tight jumps and early orb clicks catch players repeatedly before the actual wave even begins.",
      },
      {
        range: "36%–75%",
        gamemode: "Nine Circles Wave Drop",
        notes:
          "Your gateway into Nine Circles wave gameplay! The flashing green slopes look chaotic at first, but the corridors are much wider than Hard Demon NC levels.",
      },
      {
        range: "76%–100%",
        gamemode: "Slow Wave & Final Cube",
        notes:
          "The final mini-wave transitions and closing cube jumps are forgiving compared to the mid-drop, though nerves can make you clip the last sawblades.",
      },
    ],
    practicePlan:
      "Get a Start Pos copyable at the wave drop (~35%) and grind 35%–100% until you can pass the entire wave in 1–2 tries. Only then go back to suffer through the 0%–15% cube.",
    deviceNotes:
      "Runs at locked FPS on mobile due to low 1.9 object count, making it the best introductory Nine Circles wave trainer for both PC and mobile players.",
    peerComparison:
      "Essential stepping stone between Easy Demons and Nine Circles / Jawbreaker. If you can beat Problematic cleanly, you are ready for harder wave challenges.",
    scoreRationales: {
      mobile: "Zero lag and manageable wave spaces make it a great mobile wave trainer.",
      beginner: "High-end Easy / entry Medium bridge; ideal as your very first Nine Circles level.",
      visual: "Flashing Nine Circles strobe effect takes adjustment for new eyes.",
      forgiving: "The clunky 0%–15% cube opening causes repetitive early deaths.",
    },
  },
  "gold-temple": {
    auditedAt: "2026-11-19",
    attemptEstimate: "1,000–2,200 attempts",
    sectionWalkthrough: [
      {
        range: "0%–34%",
        gamemode: "Cube & Early Ship",
        notes:
          "Classic Michigun-style temple aesthetics with clean cube timings and a relatively calm opening that lulls players before the mid-level ship.",
      },
      {
        range: "35%–68%",
        gamemode: "Notorious Straight-Fly Ship & UFO",
        notes:
          "The mini-ship corridor around 40%–55% is famously tighter than the rest of the level and serves as the main difficulty wall. Focus on micro-adjustments rather than big arcs.",
      },
      {
        range: "69%–100%",
        gamemode: "Wave, Ball & Final Cube",
        notes:
          "Once you escape the mid-level ship, the back third is much calmer—just stay disciplined on the final triple-spike-style cube jumps.",
      },
    ],
    practicePlan:
      "Camp in Practice Mode on the 38%–58% ship section until you can clear it repeatedly. Treat the rest of the level as consistency maintenance.",
    deviceNotes:
      "Noticeably harder on 60Hz mobile because the mid-level ship corridor favors high-refresh-rate PC ship physics.",
    peerComparison:
      "Significantly more ship-heavy and unbalanced than B, making it a strong targeted ship-training Medium Demon.",
    scoreRationales: {
      mobile: "Tight 40%–55% ship corridor is tough on 60Hz touch controls.",
      beginner: "Mid-tier Medium Demon; best played after clearing B and at least 2–3 other Mediums.",
      visual: "Clean 1.9 golden temple blocks with zero visual clutter.",
      forgiving: "Heavy difficulty spike in the middle ship creates noticeable chokepoint frustration.",
    },
  },
  "mechanical-showdown": {
    auditedAt: "2026-11-19",
    attemptEstimate: "900–2,000 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Cube, Robot & Fast Ship",
        notes:
          "Iconic Demon Gauntlet Medium Demon with punchy boss-style energy. The early robot jumps and fast ship transitions reward crisp timing.",
      },
      {
        range: "36%–72%",
        gamemode: "Duals, UFO & Fast Wave",
        notes:
          "The duals and UFO around 45%–65% are the mechanical core of the level. Learn the exact click pattern for the brief asymmetrical dual so it becomes pure muscle memory.",
      },
      {
        range: "73%–100%",
        gamemode: "Boss-Style Ship & Final Wave",
        notes:
          "The closing UFO and final ship require steady nerves; watch the moving laser/obstacle cues carefully rather than hugging the floor.",
      },
    ],
    practicePlan:
      "Drill the dual section and the 70%–100% ending in Practice Mode before committing to full runs from 0%. Consistency in the dual unlocks the whole level.",
    deviceNotes:
      "Plays well on both PC and modern phones; toggle LDM if moving objects cause micro-stutters on older devices.",
    peerComparison:
      "Harder and more mechanically demanding than B, sitting in the classic mid-to-upper Medium Demon tier—completing it means you are close to Hard Demon readiness.",
    scoreRationales: {
      mobile: "Fast duals and UFO clicks are doable on mobile with practice and LDM.",
      beginner: "Solid intermediate Medium Demon—tackle after 2–3 easier Mediums like B.",
      visual: "Clear mechanical theme with well-telegraphed moving obstacles.",
      forgiving: "Balanced difficulty across the whole runtime with fair checkpoints to learn.",
    },
  },
  "nine-circles": {
    auditedAt: "2026-11-19",
    attemptEstimate: "1,500–4,000 attempts for first Hard Demon",
    sectionWalkthrough: [
      {
        range: "0%–39%",
        gamemode: "Pre-Drop Cube, Ship & Ball",
        notes:
          "The opening cube has tricky jump-orb timings, followed by an upside-down ship and a rhythmic 1.9 ball section. Getting 0%–39% to 80%+ consistency is essential so you get lots of wave attempts.",
      },
      {
        range: "40%–79%",
        gamemode: "Iconic Nine Circles Wave & Mini-Wave",
        notes:
          "The level that invented the Nine Circles genre. The 40%–65% normal wave teaches rapid gravity-portal reads, while the 65%–79% mini-wave (especially the reverse-gravity transitions) is the true skill wall.",
      },
      {
        range: "80%–100%",
        gamemode: "Final Cube",
        notes:
          "A slow, nerve-shredding closing cube with fake blocks and a famous 94% jump. Never celebrate early—practice 80%–100% until you can beat it blindfolded.",
      },
    ],
    practicePlan:
      "Use a Start Pos copyable at 40% (wave drop), 60% (mini-wave), and 80% (ending cube). Do 60%–100% and 40%–100% runs before grinding from 0%.",
    deviceNotes:
      "Playable on mobile (thousands of mobile players have beaten it), though high-refresh PC monitors make the fast mini-wave transitions dramatically cleaner.",
    peerComparison:
      "The gold-standard rite-of-passage Hard Demon—slightly easier in raw wave tightness than Fairydust, with a longer pre-drop than Jawbreaker.",
    scoreRationales: {
      mobile: "Zero lag, though fast upside-down mini-wave is demanding on 60Hz touchscreens.",
      beginner: "Top-recommended first Hard Demon after beating Problematic and 5+ Medium Demons.",
      visual: "Signature flashing red strobe requires eye adjustment during the wave drop.",
      forgiving: "The brutal 80%–95% ending cube punishes nerves, but the wave gets super consistent.",
    },
  },
  jawbreaker: {
    auditedAt: "2026-11-19",
    attemptEstimate: "1,500–3,500 attempts",
    sectionWalkthrough: [
      {
        range: "0%–28%",
        gamemode: "Short Pre-Drop Cube & Ship",
        notes:
          "Much shorter and easier pre-drop than Nine Circles, letting you reach the wave drop rapidly on almost every attempt.",
      },
      {
        range: "29%–85%",
        gamemode: "Blue Nine Circles Wave Gauntlet",
        notes:
          "Packed with rapid gravity portals and tight diagonal spam corridors. The 68%–84% gravity-flip mini-wave is the hardest stretch and requires exact click timing.",
      },
      {
        range: "86%–100%",
        gamemode: "Slow Wave & Short Ending",
        notes:
          "Ends with a much calmer slow wave and short cube finish—far less stressful than Nine Circles' final cube.",
      },
    ],
    practicePlan:
      "Start Pos at 65% to drill the rapid gravity-flip wave until it becomes muscle memory, then connect 29%–100%.",
    deviceNotes:
      "Slightly easier to grind on mobile than Nine Circles because the pre-drop is shorter, though the gravity-portal wave still favors PC refresh rates.",
    peerComparison:
      "Right alongside Nine Circles as a premier first Hard Demon—harder wave portals, but easier pre-drop and ending.",
    scoreRationales: {
      mobile: "Clean performance, though rapid gravity-portal wave clicks challenge 60Hz touch.",
      beginner: "Classic first or second Hard Demon for wave-focused players.",
      visual: "Blue Nine Circles strobe is slightly easier on the eyes than red, still flashy.",
      forgiving: "Fast pre-drop means less wasted time between wave attempts.",
    },
  },
  fairydust: {
    auditedAt: "2026-11-19",
    attemptEstimate: "2,000–5,000 attempts",
    sectionWalkthrough: [
      {
        range: "0%–30%",
        gamemode: "Pre-Drop Cube & Ship",
        notes:
          "Moderately tricky 1.9 cube and ship opening; watch the awkward blue-orb timing right before the drop.",
      },
      {
        range: "31%–72%",
        gamemode: "Tight Purple Nine Circles Wave",
        notes:
          "Noticeably tighter wave spaces than Nine Circles and Jawbreaker, especially the sudden speed changes and narrow mini-wave corridors around 45%–62%.",
      },
      {
        range: "73%–100%",
        gamemode: "Slow Wave & Final Cube",
        notes:
          "After surviving the main drop, the final 25% eases off—just stay focused on the closing sawblade gaps.",
      },
    ],
    practicePlan:
      "Grind 31%–75% heavily with Start Positions before attempting full runs. Do not jump here before beating both Nine Circles and Jawbreaker.",
    deviceNotes:
      "Strongly favors 120Hz+ PC play due to narrow mini-wave hitboxes.",
    peerComparison:
      "A clear step above Nine Circles and Jawbreaker in raw wave difficulty—serves as the upper Hard Demon bridge toward Insane Demon wave levels.",
    scoreRationales: {
      mobile: "Tight mini-wave spaces are very punishing on 60Hz touchscreens.",
      beginner: "Upper Hard Demon; only recommended after clearing Nine Circles or Jawbreaker.",
      visual: "High-contrast purple NC strobe effect; takes patience to learn the sawblade layouts.",
      forgiving: "Tight wave hitboxes and awkward speed transitions can trigger long slump streaks.",
    },
  },
  supersonic: {
    auditedAt: "2026-11-19",
    attemptEstimate: "3,000–7,000 attempts",
    sectionWalkthrough: [
      {
        range: "0%–38%",
        gamemode: "Fast Cube, Wave & Memory Ball",
        notes:
          "Iconic 1.9 megacollab with varied creator styles. The early speed-up wave and memory ball become very consistent once memorized.",
      },
      {
        range: "39%–72%",
        gamemode: "Dual Ball, Gboy Transition & Ship",
        notes:
          "Home to two legendary choke points: the asymmetrical dual ball around 50% and the infamous blind ship transition into Gboy's part around 65%.",
      },
      {
        range: "73%–100%",
        gamemode: "Final Ship, Cube & Ending",
        notes:
          "The last 25% mixes tight ship corridors with late cube timings. Staying calm after passing the 65% transition is half the battle.",
      },
    ],
    practicePlan:
      "Spend 60% of your practice time on the dual ball (48%–56%) and the 64%–100% stretch. Never go from 0% until 65%–100% is locked down.",
    deviceNotes:
      "Low 1.9 object count ensures smooth FPS, but the ship transitions and dual timings strongly favor PC.",
    peerComparison:
      "Classic entry-to-mid Insane Demon alongside Windy Landscape, though Supersonic is notoriously more buggy/chokepoint-heavy at 65%.",
    scoreRationales: {
      mobile: "Possible on mobile, but the 65% transition and tight ships favor PC inputs.",
      beginner: "Not for beginners—aim for 5+ Hard Demons before starting Supersonic.",
      visual: "Clean 1.9 megacollab blocks, though abrupt style shifts require memorization.",
      forgiving: "The notorious 65% transition makes it more frustrating than Windy Landscape.",
    },
  },
  "windy-landscape": {
    auditedAt: "2026-11-19",
    attemptEstimate: "2,500–6,000 attempts for first Insane Demon",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Slow Cube & Infamous 27%–33% Ship",
        notes:
          "The tight, fast ship around 27%–33% is widely considered the hardest mechanical segment in the entire level. Once you master it, you will reach the drop constantly.",
      },
      {
        range: "36%–72%",
        gamemode: "Flow Drop, Duals & Ball",
        notes:
          "Fast, super-fun 1.9 flow gameplay synced to the iconic Woogi soundtrack. The asymmetrical dual around 45%–52% looks scary but becomes 100% consistent with a fixed click pattern.",
      },
      {
        range: "73%–100%",
        gamemode: "Final Ship, UFO & Last Jump",
        notes:
          "Clean closing ship and UFO segments lead to a famous final slope/jump around 92%–97%. Practice 70%–100% thoroughly so nerves don't rob you at the finish line.",
      },
    ],
    practicePlan:
      "Practice 70%–100% first, then master the dual (42%–65%), and finally drill the 27%–35% ship until you pass it smoothly from 0%.",
    deviceNotes:
      "One of the most popular first Insane Demons on both PC and mobile—smooth 1.9 performance with no lag.",
    peerComparison:
      "Widely voted the #1 best first Insane Demon in GD history: far more enjoyable and consistent than Supersonic or Stalemate.",
    scoreRationales: {
      mobile: "Lightweight 1.9 level; demanding 30% ship is still very doable on mobile.",
      beginner: "Best entry Insane Demon once you have beaten 3–5 Hard Demons.",
      visual: "Crisp, iconic 1.9 visuals with unmistakable pathways and zero clutter.",
      forgiving: "Front-loaded ship difficulty means late-level deaths are rarer once learned.",
    },
  },
  stalemate: {
    auditedAt: "2026-11-19",
    attemptEstimate: "2,500–5,500 attempts",
    sectionWalkthrough: [
      {
        range: "0%–45%",
        gamemode: "Slow Memory Cube & Ball",
        notes:
          "Very easy, slow-paced opening that serves as a calm buildup. Learn the few fake spikes so you can pass 0%–45% effortlessly.",
      },
      {
        range: "46%–78%",
        gamemode: "Drop UFO & Tight Ship",
        notes:
          "The entire difficulty of Stalemate lives in the 50%–75% drop: a famously strict UFO click pattern followed by a narrow straight-fly ship corridor.",
      },
      {
        range: "79%–100%",
        gamemode: "Final Wave & Ending Cube",
        notes:
          "The closing wave and cube are short and manageable, though nerves run high right after surviving the ship.",
      },
    ],
    practicePlan:
      "Do NOT waste time grinding 0%–45% early. Put a Start Pos at 48% and master the UFO + ship combo until you can run 48%–100% consistently.",
    deviceNotes:
      "The 60%–70% ship corridor favors 120Hz+ PC, though the slow opening makes it an approachable Insane Demon on any platform.",
    peerComparison:
      "Easier overall than Supersonic and comparable in difficulty to Windy Landscape, but much more concentrated into a single 25-second drop.",
    scoreRationales: {
      mobile: "The tight mid-level ship is challenging on 60Hz touchscreens.",
      beginner: "Entry-level Insane Demon—best tackled after Windy Landscape or 4+ Hard Demons.",
      visual: "Minimalist, dark 1.9 aesthetic that stays completely readable.",
      forgiving: "Long, easy first half makes repeated deaths at the 65% UFO/ship tedious.",
    },
  },
  acropolis: {
    auditedAt: "2026-11-19",
    attemptEstimate: "3,500–8,000 attempts",
    sectionWalkthrough: [
      {
        range: "0%–33%",
        gamemode: "Brutal Slow Cube Timings",
        notes:
          "The hardest section of Acropolis is right at the start! Frame-tight slow cube jumps from 0%–33% will eat the majority of your attempts.",
      },
      {
        range: "34%–72%",
        gamemode: "Tight Ball, UFO & Ship",
        notes:
          "Relentless, methodical slow timings across ball and UFO, followed by a tight mid-level ship tunnel.",
      },
      {
        range: "73%–100%",
        gamemode: "Fast Wave & Final Cube",
        notes:
          "The final wave is much faster than the rest of the level, testing whether you can switch gears under extreme nerves.",
      },
    ],
    practicePlan:
      "Practice backwards: master 70%–100% first, then 33%–100%. Because 0%–33% is so front-loaded, you want every run that escapes 33% to have a real shot at 100%.",
    deviceNotes:
      "Pure timing precision works well on 60Hz+ devices, though PC keyboard/mouse input consistency gives a clear edge on the opening cube.",
    peerComparison:
      "Harder and far more timing-heavy than Windy Landscape—the ultimate timing trainer before entry Extreme Demons.",
    scoreRationales: {
      mobile: "Strict frame timings in the opening cube are tough on touchscreen input.",
      beginner: "Mid-to-high Insane Demon; strictly for experienced timing players.",
      visual: "Clean 1.9 stone-temple aesthetic with zero visual distractions.",
      forgiving: "Extremely front-loaded—brutal early deaths, but deeply rewarding once you pass 33%.",
    },
  },
  acu: {
    auditedAt: "2026-11-19",
    attemptEstimate: "6,000–15,000 attempts for first Extreme Demon",
    sectionWalkthrough: [
      {
        range: "0%–26%",
        gamemode: "Sync-Heavy Pre-Drop Cube & Robot",
        notes:
          "The pre-drop is famously the hardest section to get consistent at, featuring tight orb timings and awkward transitions that act as the gatekeeper to the drop.",
      },
      {
        range: "27%–71%",
        gamemode: "Fast Flow Drop (Wave, Ship, UFO, Cube)",
        notes:
          "Lightning-fast modern flow gameplay synced to the song. Once your hands learn the click rhythm, 27%–71% becomes one of the most enjoyable drops in Extreme Demon history.",
      },
      {
        range: "72%–100%",
        gamemode: "Final Wave & Infamous Ending Cube",
        notes:
          "The 72%–85% wave and the tight closing cube clicks at 85%–98% are the ultimate nerve test—expect several heartbreaking 85%+ deaths before your clear.",
      },
    ],
    practicePlan:
      "Use Start Positions at 71%, 45%, and 26%. Do 71%–100% and 26%–100% runs before grinding from 0% so you don't burn out on the pre-drop.",
    deviceNotes:
      "Strongly recommended on 144Hz–240Hz PC (or 2.2 native FPS bypass). Mobile clears exist, but the fast flow timings are much fairer on PC.",
    peerComparison:
      "The #1 most popular first Extreme Demon in modern Geometry Dash—far more consistent and modern than Cataclysm, with a much higher skill-ceiling flow style.",
    scoreRationales: {
      mobile: "Fast Extreme-tier timings strongly favor high-refresh PC play.",
      beginner: "Entry-level Extreme Demon—only attempt after clearing 3–5 Insane Demons.",
      visual: "Vibrant 2.1 art style with clear indicators once you memorize the fast transitions.",
      forgiving: "The 0%–26% pre-drop and 85%–98% ending test patience, though the drop is super consistent.",
    },
  },
  cataclysm: {
    auditedAt: "2026-11-19",
    attemptEstimate: "8,000–20,000 attempts for first Extreme Demon",
    sectionWalkthrough: [
      {
        range: "0%–20%",
        gamemode: "Cube & Infamous First Wave",
        notes:
          "The 10%–19% mini-wave is the hardest single section in the entire level—tight diagonal corridors that will swallow 70% of your attempts from 0%.",
      },
      {
        range: "21%–63%",
        gamemode: "UFO, Ship & Dual Ball",
        notes:
          "The 40%–51% straight-fly ship is the second major chokepoint, demanding rock-solid horizontal control.",
      },
      {
        range: "64%–100%",
        gamemode: "Slow Wave, Final Ship & Ending",
        notes:
          "The final slow ship around 64%–75% is deceptively tight under nerves; the last 20% eases up slightly to the finish.",
      },
    ],
    practicePlan:
      "Master 63%–100% and 40%–100% first, then pour focused sessions into the 10%–19% first wave until you can survive it regularly.",
    deviceNotes:
      "Heavily PC-oriented (144Hz–240Hz+) due to the 40% straight-fly ship and 10% mini-wave.",
    peerComparison:
      "Classic entry Extreme Demon alongside Acu—less balanced and more ship/wave-heavy than Acu, and the direct prequel to Bloodbath.",
    scoreRationales: {
      mobile: "Straight fly and tight mini-wave make 60Hz mobile clears extremely difficult.",
      beginner: "Entry Extreme Demon for ship/wave specialists after multiple Insane Demons.",
      visual: "Clean 1.9 hell-themed blocks with sharp visibility.",
      forgiving: "Unbalanced difficulty spikes at 10% and 40% make the grind mentally taxing.",
    },
  },
  bloodbath: {
    auditedAt: "2026-11-19",
    attemptEstimate: "15,000–40,000+ attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "Vermillion, Michigun & Evasium",
        notes:
          "Opens with iconic straight-fly ship sections before hitting Michigun's notoriously tight 24%–33% UFO, wave, and triple-spike cube—the biggest early wall in the level.",
      },
      {
        range: "36%–72%",
        gamemode: "Crack, Asonicmen & Etzer",
        notes:
          "Crack's 42%–52% ship is one of the most famous straight-fly tests in GD history, followed by Etzer's tight UFO and ship chokepoints.",
      },
      {
        range: "73%–100%",
        gamemode: "Havok, Giron & Gboy Ending",
        notes:
          "Nerve-shredding closing ships and the infamous 95%–98% final cube triple spikes. Practice 70%–100% relentlessly before going from 0%.",
      },
    ],
    practicePlan:
      "Break Bloodbath into creator parts using Start Positions (Michigun, Crack, Etzer, Gboy). Aim for 42%–100% before grinding full attempts.",
    deviceNotes:
      "Requires high-refresh-rate PC (240Hz / 2.2 FPS unlock) for consistent straight fly. Not realistic for casual mobile play.",
    peerComparison:
      "A huge step up from Cataclysm and Acu—sits well above entry Extremes and remains the most famous Extreme Demon milestone in Geometry Dash.",
    scoreRationales: {
      mobile: "Relentless straight-fly ship segments make mobile play brutally punishing.",
      beginner: "Mid-tier legacy Extreme Demon—only attempt after beating 2–3 entry Extremes.",
      visual: "Classic 1.9 red-and-black style is crisp and easy to read.",
      forgiving: "Michigun's part, Crack's ship, and 95%+ deaths make it an intense mental marathon.",
    },
  },
  "silent-clubstep": {
    auditedAt: "2026-11-19",
    attemptEstimate: "100,000+ attempts (Top Demonlist tier)",
    sectionWalkthrough: [
      {
        range: "0%–30%",
        gamemode: "Frame-Perfect Cube & Ship",
        notes:
          "Opens with multiple 60Hz-equivalent frame-perfect cube jumps and brutal ship corridors right out of the gate.",
      },
      {
        range: "31%–70%",
        gamemode: "Eight Jumps of Hell & Duals",
        notes:
          "Features the legendary 8 Jumps of Hell, tight asymmetrical duals, and unforgiving orb timings.",
      },
      {
        range: "71%–100%",
        gamemode: "Memory Maze & Final Ship",
        notes:
          "A punishing memory maze under maximum nerves followed by an extremely tight closing corridor.",
      },
    ],
    practicePlan:
      "Strictly for top-level Extreme Demon grinders. Requires months of segmented Start Position practice and high-FPS/CBF precision.",
    deviceNotes:
      "High-end PC with 240Hz+ monitor and low-latency input hardware is mandatory.",
    peerComparison:
      "Orders of magnitude harder than Bloodbath and Cataclysm; belongs to the elite Pointercrate Demonlist tier alongside Slaughterhouse.",
    scoreRationales: {
      mobile: "Top-level frame-perfect timings are virtually unplayable on standard mobile.",
      beginner: "One of the hardest levels in Geometry Dash history—strictly for elite players.",
      visual: "Old 1.6 style with heavy invisible/memory traps.",
      forgiving: "Unforgiving frame-perfect chokepoints from start to finish.",
    },
  },
  slaughterhouse: {
    auditedAt: "2026-11-19",
    attemptEstimate: "100,000+ attempts (Top Demonlist tier)",
    sectionWalkthrough: [
      {
        range: "0%–25%",
        gamemode: "Slow Pre-Drop Cube & Ship",
        notes:
          "Deceptively eerie, slow pre-drop with tight cube timings and narrow ship alignment leading into the drop.",
      },
      {
        range: "26%–75%",
        gamemode: "Extreme 4x Wave & Straight Fly",
        notes:
          "Relentless, pixel-tight high-speed mini-wave corridors and straight-fly transitions that define modern top-tier GD difficulty.",
      },
      {
        range: "76%–100%",
        gamemode: "Final Wave & Closing Ship",
        notes:
          "Zero relief until the final wall—every single wave click past 75% is list-tier precision.",
      },
    ],
    practicePlan:
      "Only for players who have already beaten multiple top-150 Extreme Demons. Grind individual wave segments with Start Pos.",
    deviceNotes:
      "Requires high-refresh PC (240Hz–360Hz) and crisp mechanical keyboard or SayoDevice input.",
    peerComparison:
      "Former #1 hardest level in Geometry Dash; vastly harder than Bloodbath or Sonic Wave.",
    scoreRationales: {
      mobile: "List-tier 4x mini-wave is not viable for standard touchscreen play.",
      beginner: "Elite Demonlist Extreme Demon—not intended for beginners or intermediate players.",
      visual: "Intense dark crimson atmosphere; requires memorization to read at 4x speed.",
      forgiving: "Near-zero margin for error across the entire drop.",
    },
  },
  "sonic-wave": {
    auditedAt: "2026-11-19",
    attemptEstimate: "30,000–80,000+ attempts",
    sectionWalkthrough: [
      {
        range: "0%–28%",
        gamemode: "Pre-Drop Cube, Ship & Ball",
        notes:
          "Includes a notoriously tricky pre-drop ball and ship sequence before launching into the iconic blue wave.",
      },
      {
        range: "29%–75%",
        gamemode: "Three Extreme Nine Circles Waves",
        notes:
          "The most famous wave endurance test in Geometry Dash—three prolonged, razor-thin Nine Circles wave segments with rapid gravity portals.",
      },
      {
        range: "76%–100%",
        gamemode: "Final Wave & Ending Cube",
        notes:
          "The final wave after the brief cube breather is a massive nerve check, ending with a tense closing jump.",
      },
    ],
    practicePlan:
      "Practice each of the three wave segments independently with Start Pos until you can chain Wave 2 → 100% consistently.",
    deviceNotes:
      "High-refresh PC (240Hz+) strongly recommended for wave precision.",
    peerComparison:
      "Significantly harder than Bloodbath and the ultimate evolution of the Nine Circles genre.",
    scoreRationales: {
      mobile: "Extreme Nine Circles wave corridors demand PC-grade input precision.",
      beginner: "High-end Extreme Demon—only for veterans with multiple Extremes beaten.",
      visual: "Classic blue Nine Circles strobe; clean layout once learned.",
      forgiving: "Long, relentless wave sections make 80%+ deaths brutally stressful.",
    },
  },
  dash: {
    auditedAt: "2026-11-19",
    attemptEstimate: "150–400 attempts",
    sectionWalkthrough: [
      {
        range: "0%–35%",
        gamemode: "2.2 Camera Showcase & Swing Intro",
        notes:
          "RobTop's flagship Geometry Dash 2.2 official level introduces reverse camera triggers, zoom effects, and the brand-new Swing gamemode.",
      },
      {
        range: "36%–70%",
        gamemode: "Spider Part, Swing & Free-Fly",
        notes:
          "Contains the famous 2.2 Spider section (which became a community meme for sight-readability) and a spacious Swing corridor. Tap rhythmically with the beat on the Swing rather than spamming.",
      },
      {
        range: "71%–100%",
        gamemode: "Final Cube, Ship & 3-2-1 Countdown",
        notes:
          "Ends with a cinematic 3-2-1-GEOMETRY DASH countdown and final spider/cube jumps. Watch the last ceiling transition so you don't clip at 95%.",
      },
    ],
    practicePlan:
      "Do 2–3 Practice Mode runs to learn the 2.2 camera turns and the spider section at ~42%. Once you know where the camera shifts, Dash is one of the most fun official Insane levels.",
    deviceNotes:
      "Runs smoothly on both mobile and PC—designed by RobTop as the universal 2.2 showcase.",
    peerComparison:
      "Easier than Electrodynamix and Clubstep, sitting comfortably as a great warm-up before your first Easy Demon.",
    scoreRationales: {
      mobile: "Official RobTop optimization guarantees smooth touchscreen play.",
      beginner: "Approachable 2.2 Insane level that teaches Swing and camera triggers safely.",
      visual: "Rich 2.2 effects with clear jump indicators, though camera shifts take 2–3 runs to learn.",
      forgiving: "Generous hitboxes and fun music sync keep attempts stress-free.",
    },
  },
};

export function getLevelDeepDive(level: Level): LevelDeepDive | null {
  return BESPOKE_GUIDES[level.slug] ?? null;
}
