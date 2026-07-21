/**
 * 一次性脚本：把整理好的新关卡数据转换成 Level[] 格式，
 * 追加到 src/lib/data/levels.ts 的 levels 数组末尾。
 *
 * 用法：node scripts/add-levels.mjs
 *
 * 跑完后会输出新的 levels.ts 内容到 stdout，并直接写入文件。
 * 交叉引用（similarLevelIds / nextLevelIds）会按同难度自动生成。
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// 现有 30 个关卡的 id 范围：lvl-001 ~ lvl-030
// 新关卡从 lvl-031 开始
const START_ID = 31;

// 难度评分基线（1-5）：根据 demon tier 推断
const scoreBaseline = {
  // non-demon
  auto:    { mobile: 5.0, beginner: 5.0, frustration: 1.0, visual: 4.5 },
  easy:    { mobile: 4.5, beginner: 4.5, frustration: 1.5, visual: 4.5 },
  normal:  { mobile: 4.5, beginner: 4.5, frustration: 1.5, visual: 4.5 },
  hard:    { mobile: 4.0, beginner: 4.0, frustration: 2.0, visual: 4.0 },
  harder:  { mobile: 3.5, beginner: 3.5, frustration: 2.5, visual: 4.0 },
  insane:  { mobile: 3.0, beginner: 3.0, frustration: 3.0, visual: 3.5 },
  // demon
  "demon-easy":    { mobile: 3.5, beginner: 4.0, frustration: 2.5, visual: 4.0 },
  "demon-medium":  { mobile: 3.0, beginner: 3.0, frustration: 3.0, visual: 3.5 },
  "demon-hard":    { mobile: 2.5, beginner: 2.0, frustration: 3.5, visual: 3.0 },
  "demon-insane":  { mobile: 2.0, beginner: 1.5, frustration: 4.0, visual: 2.5 },
  "demon-extreme": { mobile: 1.5, beginner: 1.0, frustration: 4.5, visual: 2.0 },
};

function scoreKey(level) {
  if (level.difficulty === "demon") return `demon-${level.demonDifficulty}`;
  return level.difficulty;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function creatorSlugify(creator) {
  return creator
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 整理好的新关卡数据（已去重、已过滤不可靠条目）
// 来源：3 个调研 subagent 的输出，已人工审核
const newLevels = [
  // ===== Easy Demons (14) =====
  { name: "Blue Hell", creator: "LaZye", difficulty: "demon", demonDifficulty: "easy", levelId: "11317271", youtubeId: "", length: "medium", skillTags: ["cube","ship","wave","ball","ufo"], review: "A 2.0 Easy Demon with a blue color scheme. Known as one of the easiest demons of its era but has awkward, unsynced gameplay.", tips: "Practice mode recommended due to unsynced gameplay patterns.", whoShouldPlay: "Players seeking a very easy first demon with simple visuals.", whoShouldSkip: "Players who prefer polished, synced gameplay over raw difficulty.", hardestSections: "Awkward timing transitions throughout the level" },
  { name: "Insomnia", creator: "Glittershroom", difficulty: "demon", demonDifficulty: "easy", levelId: "3332936", youtubeId: "2Ce59R5WDs8", length: "medium", skillTags: ["cube","ship","ball","wave","memory"], review: "A classic 1.9 Easy Demon with sections referencing Theory of Everything 2. Memorize a few sections and it's easier than Clubstep.", tips: "Focus on memorizing the ball section and a few memory-based parts.", whoShouldPlay: "Beginners looking for a classic 1.9 era demon to practice memory.", whoShouldSkip: "Players who dislike memory-based gameplay.", hardestSections: "Ball section and memory-based parts" },
  { name: "Demon Mixed", creator: "RealOggY", difficulty: "demon", demonDifficulty: "easy", levelId: "566659", youtubeId: "DnuDa_tktnY", length: "short", skillTags: ["cube","ship","wave","first-demon","short"], review: "A mix of various demon levels including parts from The Nightmare, Demon Park, and Crescendo. One of the easiest demons in the game.", tips: "Use practice mode once or twice to learn the old-school memory sections.", whoShouldPlay: "Absolute beginners wanting the easiest possible demon experience.", whoShouldSkip: "Players who want modern gameplay design.", hardestSections: "Old-school memory sections and blind jumps" },
  { name: "STARPUNK", creator: "Ferdefunky", difficulty: "demon", demonDifficulty: "easy", levelId: "63087691", youtubeId: "bYU55AYyM6c", length: "xl", skillTags: ["cube","ship","ufo","wave","xl"], review: "An Epic-rated Weekly Demon with stunning neon sign design and color sync. XL-length but gameplay is straightforward and intuitive.", tips: "Focus on endurance - the individual sections are 5-6 star difficulty but the length requires stamina.", whoShouldPlay: "Players who want beautiful visuals with accessible gameplay.", whoShouldSkip: "Players who dislike long levels or get bored easily.", hardestSections: "Early 7-8 star difficulty sections, cube and UFO 2-tap parts" },
  { name: "Petal Patch", creator: "Ghotstav", difficulty: "demon", demonDifficulty: "easy", levelId: "95484955", youtubeId: "IsneQSC2e88", length: "medium", skillTags: ["cube","ship","ufo","wave","spider"], review: "Forest Gauntlet level with a flower theme. Relaxing and easy to read with lots of space. Spider timing at start and 3x speed at end can be tricky.", tips: "Practice the spider timing at the beginning and the 3x speed sections at the end.", whoShouldPlay: "Players who want a relaxing, visually pleasing demon.", whoShouldSkip: "Players weak at spider mode or fast speed sections.", hardestSections: "Spider mode timing at the beginning, 3x speed sections at the end" },
  { name: "iS", creator: "Grenate", difficulty: "demon", demonDifficulty: "easy", levelId: "65765662", youtubeId: "PF1n77uwi7g", length: "medium", skillTags: ["cube","ship","spider","wave","first-demon"], review: "Epic-rated Weekly Demon with high-quality cyber design. Considered easier than The Nightmare by many. Very intuitive with no fakes.", tips: "Watch for frequent gravity reversals after drops and the 3x speed spider section.", whoShouldPlay: "Players wanting modern 2.1 design with very accessible difficulty.", whoShouldSkip: "Players who struggle with spider mode or fast wave sections.", hardestSections: "Ship with frequent gravity reversals after drop, 3x speed spider" },
  { name: "Motion", creator: "TamaN", difficulty: "demon", demonDifficulty: "easy", levelId: "15619194", youtubeId: "", length: "medium", skillTags: ["cube","ship","ufo","ball","wave"], review: "Fast-paced 2.0 level focused on gameplay like X. Requires timings and memorization. Many moving objects hence the name.", tips: "Learn the timings and mode transitions - the layout is intuitive once memorized.", whoShouldPlay: "Players who enjoy fast-paced gameplay with moving objects.", whoShouldSkip: "Players who dislike memorization or fast mode changes.", hardestSections: "Fast-paced drop with frequent mode changes" },
  { name: "Down Unda", creator: "Danzmen", difficulty: "demon", demonDifficulty: "easy", levelId: "81451870", youtubeId: "MfhQtM7gU3s", length: "long", skillTags: ["cube","ship","wave","ball"], review: "World Gauntlet boss level inspired by Australian culture and Aboriginal art. 9-star difficulty similar to Frostburn Peak.", tips: "Learn the Australian-themed patterns and maintain rhythm throughout the long level.", whoShouldPlay: "Players who want to experience World Gauntlet content.", whoShouldSkip: "Players who dislike longer levels or cultural themes.", hardestSections: "Varied sections requiring consistent rhythm" },
  { name: "Ablaze", creator: "Wav", difficulty: "demon", demonDifficulty: "easy", levelId: "68790607", youtubeId: "mFHkcnltXko", length: "medium", skillTags: ["cube","ship","ufo","ball","robot"], review: "Inferno Gauntlet level with a red theme. Fast 4x speed tempo with good readability. Considered the easiest demon in all gauntlets.", tips: "Memorize the late 4x speed cube + robot section - everything else flows naturally.", whoShouldPlay: "Players wanting the easiest gauntlet demon experience.", whoShouldSkip: "Players who struggle with very fast 4x speed gameplay.", hardestSections: "Late 4x speed cube + robot section" },
  { name: "yStep", creator: "TheRealDarnoc", difficulty: "demon", demonDifficulty: "easy", levelId: "70059", youtubeId: "xO2j6OMTiLo", length: "medium", skillTags: ["cube","memory"], review: "First level of Demon Pack 1. Mostly cube mode with many fakes and cal-timing parts. Very famous despite being an old level.", tips: "Memorize the fake and cal-timing sections - once memorized, it's easier than 8-star levels.", whoShouldPlay: "Players wanting a classic map pack demon experience.", whoShouldSkip: "Players who dislike fake paths or old-school gameplay.", hardestSections: "Fake and cal-timing parts in early/mid/late sections" },
  { name: "DeaDrop", creator: "DYSCO", difficulty: "demon", demonDifficulty: "easy", levelId: "56764573", youtubeId: "o3bB8CK9qG8", length: "long", skillTags: ["cube","ship","wave"], review: "Part of the Drop series with neon and basic style. Typical 2019 level with bright colors and good sync.", tips: "Practice the wave part specifically as noted in the level description.", whoShouldPlay: "Players who enjoy neon aesthetics and wave practice.", whoShouldSkip: "Players who dislike wave sections or 2019-style levels.", hardestSections: "Wave part" },
  { name: "phjork", creator: "cerufiffy", difficulty: "demon", demonDifficulty: "easy", levelId: "56587109", youtubeId: "7J8616w3-pE", length: "medium", skillTags: ["cube","ship","wave"], review: "Modern-style healing demon with fairy tale atmosphere. 3x speed throughout with intuitive layout. Very underrated.", tips: "The beginning wave has spam parts that can be tricky on mobile - practice that section.", whoShouldPlay: "Players wanting a modern, visually pleasing easy demon.", whoShouldSkip: "Mobile players or those weak at wave spam.", hardestSections: "Beginning wave with spam parts, 2x speed wave taps" },
  { name: "X", creator: "TriAxis", difficulty: "demon", demonDifficulty: "easy", levelId: "17235008", youtubeId: "", length: "medium", skillTags: ["cube","ship","ball","ufo","wave"], review: "Classic 2.0 collaboration focused on gameplay over design. 8th most-liked demon with intuitive transitions and great sync.", tips: "Practice all game modes - the level requires skill in everything but has fair, readable gameplay.", whoShouldPlay: "Players who want a balanced gameplay-focused classic demon.", whoShouldSkip: "Players who prefer visual-heavy levels over gameplay.", hardestSections: "Various mode transitions requiring all-around skill" },
  { name: "Touch The Orbs Bub", creator: "AtomicRest", difficulty: "demon", demonDifficulty: "easy", levelId: "128692093", youtubeId: "NqGRpPd1YAI", length: "long", skillTags: ["cube","ship","ball","ufo"], review: "Weekly Demon with orbs as the main concept and a boss fight against EBB ORBS. Humorous atmosphere with heavy auto sections.", tips: "Learn the boss fight patterns - most gameplay is auto or running-based.", whoShouldPlay: "Players who want a unique boss fight concept.", whoShouldSkip: "Players who dislike auto sections or boss levels.", hardestSections: "Boss fight against EBB ORBS" },

  // ===== Medium Demons (5) =====
  { name: "Gold Temple", creator: "Serponge", difficulty: "demon", demonDifficulty: "medium", levelId: "21337579", youtubeId: "ARL0iOLpsBU", length: "medium", skillTags: ["cube","robot","ufo","ball","wave","ship"], review: "Zelda-themed temple level and most famous of the temple series. Notoriously unbalanced - most sections are easy but the middle ship section is extremely difficult.", tips: "The middle ship/wave section is the real challenge - practice it extensively.", whoShouldPlay: "Players who want a Zelda-themed challenge or ship practice.", whoShouldSkip: "Mobile players or those who hate extremely unbalanced difficulty spikes.", hardestSections: "Middle ship/wave section (insanely difficult compared to rest of level)" },
  { name: "HeLL", creator: "Serponge", difficulty: "demon", demonDifficulty: "medium", levelId: "25706351", youtubeId: "ZRbjzf6_ZVQ", length: "medium", skillTags: ["cube","wave","ship","ufo","ball","robot"], review: "Final level of Demon Gauntlet with hell-themed red design. Hardest in the gauntlet with intense early cube and difficult wave sections.", tips: "Use Low Detail Mode to reduce lag. The early cube section (0-39%) is very difficult - practice it extensively.", whoShouldPlay: "Players wanting the hardest Demon Gauntlet challenge.", whoShouldSkip: "Players with low-end devices or those who hate intense difficulty spikes.", hardestSections: "Early cube section (0-39%), triple-speed wave, ball section" },
  { name: "Mechanical Showdown", creator: "Tongii", difficulty: "demon", demonDifficulty: "medium", levelId: "27786218", youtubeId: "IkfTGZ9W1dY", length: "medium", skillTags: ["cube","ship","ball","ufo","wave"], review: "Third level of Demon Gauntlet. Short and bold level showing medium demon difficulty. More difficult than Sidestep.", tips: "Practice the mode transitions - the level requires good versatility across all game modes.", whoShouldPlay: "Players progressing through Demon Gauntlet wanting a medium challenge.", whoShouldSkip: "Players who found Sidestep too difficult.", hardestSections: "Various sections requiring versatility across game modes" },
  { name: "Killbot", creator: "Lithifusion", difficulty: "demon", demonDifficulty: "medium", levelId: "38754426", youtubeId: "", length: "medium", skillTags: ["cube","ship","ball","ufo","wave","memory"], review: "Memory-based level with many fake objects and orbs with invisible spikes. Digital-themed with virus motif.", tips: "Memorize the fake objects and trap orbs - this is a heavy memory level.", whoShouldPlay: "Players who want to practice memory-based gameplay.", whoShouldSkip: "Players who dislike heavy memory or fake objects.", hardestSections: "Memory sections with fake objects and invisible spikes" },
  { name: "InsanitY", creator: "Serponge", difficulty: "demon", demonDifficulty: "medium", levelId: "", youtubeId: "", length: "medium", skillTags: ["cube","ship","wave","ball"], review: "Part of Serponge's temple series with solid color design and fun gameplay. A challenge as there's some quick timings.", tips: "Practice the quick timing sections - the level rewards precise execution.", whoShouldPlay: "Fans of Serponge's work or temple-themed levels.", whoShouldSkip: "Players who struggle with quick timings.", hardestSections: "Quick timing sections throughout" },

  // ===== Hard Demons (3) =====
  { name: "Fairydust", creator: "mkComic", difficulty: "demon", demonDifficulty: "hard", levelId: "5310094", youtubeId: "PmJ1DmP4Kgo", length: "short", skillTags: ["cube","ship","wave"], review: "A Nine Circles remake with purple theming that helps improve wave skills significantly. Formerly considered one of the hardest Nine Circles levels.", tips: "Practice the wave drop section extensively - it's the main challenge of this level.", whoShouldPlay: "Players looking to improve their wave skills and experience classic Nine Circles-style gameplay.", whoShouldSkip: "Players who struggle with tight wave corridors or dislike epileptic effects.", hardestSections: "The wave drop after the cube section requires precise timing and control" },
  { name: "Ditched Machine", creator: "Jeyzor", difficulty: "demon", demonDifficulty: "hard", levelId: "4192768", youtubeId: "FKEz5sEBCU4", length: "short", skillTags: ["cube","dual","ball","ufo"], review: "A pioneer in asymmetrical dual-mode gameplay and one of the first demons to feature mixed-mode duals. Famous for introducing the 'Machine' naming convention.", tips: "Focus on learning the dual sections separately - they require independent hand coordination.", whoShouldPlay: "Players wanting to learn asymmetrical dual gameplay and experience classic 1.9 demon design.", whoShouldSkip: "Players who struggle with dual modes or heavy memorization sections.", hardestSections: "The asymmetrical dual cube/ball and UFO sections" },
  { name: "pg clubstep", creator: "PG1004", difficulty: "demon", demonDifficulty: "hard", levelId: "513137", youtubeId: "m47-hnAacko", length: "short", skillTags: ["cube","ship","ufo","ball","memory"], review: "A buffed remake of the official Clubstep level requiring heavy memorization and precise ship flying. Considered the hardest Map Pack demon.", tips: "Use practice mode extensively to memorize the fake spikes and invisible platforms.", whoShouldPlay: "Players completing Demon Pack 11 or those seeking challenging memorization-based gameplay.", whoShouldSkip: "Players who dislike heavy memorization or buggy/glitchy sections.", hardestSections: "The ship section through monster mouths and the ball segment with fake ground spikes" },

  // ===== Insane Demons (4) =====
  { name: "Stalemate", creator: "Nox", difficulty: "demon", demonDifficulty: "insane", levelId: "4545425", youtubeId: "sDol6SyT8oE", length: "short", skillTags: ["cube","ufo"], review: "A 1.9 insane demon known for its unique monster-themed design using 'Tokyo blocks' for eyes. Formerly considered among the hardest levels.", tips: "The UFO section in the middle is the main challenge - practice it extensively.", whoShouldPlay: "Players interested in classic 1.9 insane demons and unique visual design.", whoShouldSkip: "Players who dislike older level aesthetics or heavy memorization.", hardestSections: "The mid-level UFO section with precise timing requirements" },
  { name: "Acropolis", creator: "Zobros", difficulty: "demon", demonDifficulty: "insane", levelId: "5155022", youtubeId: "zfKvNB9TpQ0", length: "short", skillTags: ["cube","ship","ufo"], review: "Zobros' hardest level at the time, notorious for tight spaces, 'thorn balls', small spikes, and crucial timings. One of the most popular Insane Demons.", tips: "Learn the timing-based jumps carefully - many require frame-perfect input.", whoShouldPlay: "Players seeking classic 1.9 insane demon difficulty and Zobros' level design.", whoShouldSkip: "Players who struggle with extremely tight timings and precision gameplay.", hardestSections: "The sections with thorn balls and the extremely tight cube timings" },
  { name: "Ultrachromatic", creator: "gmdmann", difficulty: "demon", demonDifficulty: "insane", levelId: "78602801", youtubeId: "", length: "short", skillTags: ["cube","ship","wave","ball"], review: "Part of the chromatic trilogy featuring rainbow-themed design and fast-paced gameplay.", tips: "The level requires good nerve control and fast-paced gameplay skills.", whoShouldPlay: "Players who enjoy rainbow-themed levels and the chromatic trilogy series.", whoShouldSkip: "Players who dislike epilepsy-inducing effects or very fast gameplay.", hardestSections: "The fast-paced sections with rapid game mode changes" },
  { name: "Cloud Nine", creator: "SoDaZ", difficulty: "demon", demonDifficulty: "insane", levelId: "84064573", youtubeId: "", length: "short", skillTags: ["cube","ship","wave","ball"], review: "A fast-paced flow insane demon with satisfying and consistent gameplay. Recommended for players seeking challenging yet fair levels.", tips: "The ball at 70% and wave at 40% can be tricky due to lag - practice these sections.", whoShouldPlay: "Players looking for fun, fast-paced insane demons with good flow.", whoShouldSkip: "Players who struggle with lag-inducing decoration or complex ball sections.", hardestSections: "The ball section at 70% and the wave section at 40%" },

  // ===== Extreme Demons (14) =====
  { name: "Acu", creator: "neigefeu", difficulty: "demon", demonDifficulty: "extreme", levelId: "61079355", youtubeId: "6wktRfWz-HM", length: "short", skillTags: ["cube","ship","wave","ball"], review: "Considered one of the first modern-style Extreme Demons and a good entry-level extreme due to its accessibility. Known for fun and consistent gameplay.", tips: "The ending (80-100%) is harder than the rest - overpractice this section before attempting full runs.", whoShouldPlay: "Players attempting their first Extreme Demon or seeking an accessible extreme.", whoShouldSkip: "Players looking for more traditional extreme demon difficulty.", hardestSections: "The 63-100% section, particularly the buffer clicking parts at 76% and 79%" },
  { name: "Sonic Wave", creator: "Cyclic", difficulty: "demon", demonDifficulty: "extreme", levelId: "26681070", youtubeId: "ZO5vQg4Bliw", length: "short", skillTags: ["cube","ship","ball","wave"], review: "A legendary blue-themed Extreme Demon remake of Nine Circles known for extremely tight wave spaces and difficult gameplay. Formerly the hardest level in the game.", tips: "The wave section is the main challenge - practice tight wave control extensively.", whoShouldPlay: "Players seeking classic extreme demon history and Nine Circles-style gameplay.", whoShouldSkip: "Players who struggle with extremely tight wave corridors or older level design.", hardestSections: "The wave section with narrow spaces and the final cube maze" },
  { name: "Yatagarasu", creator: "ViPriN", difficulty: "demon", demonDifficulty: "extreme", levelId: "28220417", youtubeId: "5MNHe-qEuGU", length: "long", skillTags: ["cube","ship","ball","dual","ufo"], review: "A hell-themed mega-collaboration depicting a three-legged crow from Japanese mythology. Former Top 1 demon that helped introduce the Extreme Demon rating.", tips: "The dual ball section with the floating mechanic is unique - learn how the blue orbs affect gameplay.", whoShouldPlay: "Players interested in GD history and classic mega-collaborations.", whoShouldSkip: "Players who dislike older level design or extremely long levels.", hardestSections: "The dual ball section and the parts with speed changes requiring memorization" },
  { name: "Bloodlust", creator: "Manix648", difficulty: "demon", demonDifficulty: "extreme", levelId: "42584142", youtubeId: "IJ3iu-0ldJ8", length: "short", skillTags: ["cube","ship","wave","dual"], review: "A buffed and extended remake of Bloodbath that reached #1 on the Demonlist upon release. Features dual modes, tight timings, and intricate patterns.", tips: "The level requires advanced mechanical skill and consistency - practice each section individually.", whoShouldPlay: "Players seeking a Bloodbath-style challenge with increased difficulty.", whoShouldSkip: "Players who haven't beaten Bloodbath or struggle with dual gameplay.", hardestSections: "The dual sections and the intricate obstacle patterns throughout the level" },
  { name: "Zodiac", creator: "Bianox", difficulty: "demon", demonDifficulty: "extreme", levelId: "52374843", youtubeId: "HCQK_y8JutU", length: "long", skillTags: ["cube","ship","wave","ball","dual"], review: "A 2.1 Extreme Demon mega-collaboration that was one of the longest-reigning #1 demons. Known for its beautiful design and over 3 minutes of gameplay.", tips: "The level's length makes it mentally exhausting - take breaks and maintain focus.", whoShouldPlay: "Players seeking a long, beautiful extreme demon with varied gameplay.", whoShouldSkip: "Players who dislike extremely long levels or heavy memorization requirements.", hardestSections: "TMNGaming's part and the final sections with many precise timing requirements" },
  { name: "Tartarus", creator: "Riot", difficulty: "demon", demonDifficulty: "extreme", levelId: "59075347", youtubeId: "9YYQBbrsV5Y", length: "short", skillTags: ["cube","ship","wave","ball"], review: "The first installment of Riot's hell-themed Top 1 trilogy, succeeded by Acheron and Aeternus. A legendary extreme demon from the early 2.1 era.", tips: "The level has many choke points - practice sections like 86%, 88%, 91%, and 98% extensively.", whoShouldPlay: "Players interested in classic extreme demons and Riot's level design.", whoShouldSkip: "Players who dislike older extreme design or levels with many choke points.", hardestSections: "The final sections with multiple potential choke points requiring extreme consistency" },
  { name: "Slaughterhouse", creator: "icedcave", difficulty: "demon", demonDifficulty: "extreme", levelId: "27690100", youtubeId: "BmyCLv1gqyo", length: "short", skillTags: ["wave","ship"], review: "Formerly a 1.9 impossible level updated to a rate-worthy Extreme Demon. Known for 4x speed wave spam and extremely tight spaces.", tips: "The wave sections require frame-perfect input - practice the spam corridors extensively.", whoShouldPlay: "Players seeking the ultimate wave spam challenge and Slaughterhouse-style gameplay.", whoShouldSkip: "Players who struggle with extreme wave spam or epilepsy-inducing effects.", hardestSections: "The 4x speed wave sections with virtually frame-perfect spacing requirements" },
  { name: "Deimos", creator: "ItsHybrid", difficulty: "demon", demonDifficulty: "extreme", levelId: "", youtubeId: "b2yHaIk5zio", length: "short", skillTags: ["cube","ship","wave","ball","dual"], review: "The official sequel to Phobos with 1.9-themed styling mixed with modern decoration. Verified by Doggie after a long verification process.", tips: "The predrop is very long and mentally draining - stay focused throughout.", whoShouldPlay: "Players who enjoyed Phobos and want to experience its official sequel.", whoShouldSkip: "Players who dislike long predrop sections or haven't beaten similar extremes.", hardestSections: "The long predrop section and the ending with tight timing requirements" },
  { name: "Silent Clubstep", creator: "Sailent", difficulty: "demon", demonDifficulty: "extreme", levelId: "4125776", youtubeId: "", length: "long", skillTags: ["cube","ship","wave","ball"], review: "A silent-level remake of the main level Clubstep and one of the most famous levels in GD history. The old version was deemed humanly impossible.", tips: "As a silent level, you must rely entirely on visual cues and memorization.", whoShouldPlay: "Players interested in silent levels and GD history.", whoShouldSkip: "Players who rely on audio cues or dislike silent level gameplay.", hardestSections: "The sections with invisible triggers and parts where visual cues are misleading" },
  { name: "Delta Interface", creator: "Platnuu", difficulty: "demon", demonDifficulty: "extreme", levelId: "45094581", youtubeId: "3ZZAEfNhkgM", length: "short", skillTags: ["cube","ship","wave"], review: "The first in Platnuu's interface trilogy, known for its unique tech-styled design and blue/orange color scheme. Often called one of the most annoying extreme demons.", tips: "The wave parts are very stressful - prepare mentally for frustrating sections.", whoShouldPlay: "Players who enjoy tech-themed levels and the interface trilogy.", whoShouldSkip: "Players who dislike annoying/stressful gameplay or frustrating wave sections.", hardestSections: "The slow ship before the drop and all the wave parts throughout the level" },
  { name: "KOCMOC", creator: "Cherry Team", difficulty: "demon", demonDifficulty: "extreme", levelId: "87665224", youtubeId: "AUOpLok85SU", length: "short", skillTags: ["wave","ship"], review: "Heavily inspired by Slaughterhouse with tight, spam-based wave segments. Features beautiful purple space-themed decoration by Cherry Team.", tips: "The final spam corridor is arguably the toughest - practice wave spam extensively.", whoShouldPlay: "Players who enjoy Slaughterhouse-style gameplay and beautiful space themes.", whoShouldSkip: "Players who struggle with extreme wave spam or dislike spam-based gameplay.", hardestSections: "The challenging wave segments with varied timings and the final spam corridor" },
  { name: "Sakupen Circles", creator: "DrCuber", difficulty: "demon", demonDifficulty: "extreme", levelId: "76962930", youtubeId: "ofG2mJi9kEA", length: "short", skillTags: ["cube","ship","wave"], review: "A remake of the 1.9 impossible level of the same name. Formerly the hardest rated Nine Circles level and the hardest level under one minute long.", tips: "The mini-wave spam section from 59% to 66% is infamous - practice this extensively.", whoShouldPlay: "Players seeking the ultimate Nine Circles-style challenge.", whoShouldSkip: "Players who haven't mastered other Nine Circles levels or struggle with mini-wave.", hardestSections: "The nearly impossible mini-wave spam section and the memory-based wave parts" },
  { name: "Phobos", creator: "GMTSean", difficulty: "demon", demonDifficulty: "extreme", levelId: "19759411", youtubeId: "wC8VJ4B2WRg", length: "short", skillTags: ["cube","ship","ufo","wave","dual"], review: "A 1.9/2.0 mega-collaboration that was considered the second hardest level in GD. The nerfed version is harder than Bloodbath.", tips: "The UFO sections and wave parts require precise control - practice these separately.", whoShouldPlay: "Players interested in early 2.0 mega-collabs and classic extreme history.", whoShouldSkip: "Players who dislike older extreme design or complex multi-mode gameplay.", hardestSections: "Sean's UFO section, Kubs0n's wave part, and Riqirez's dual maze section" },
  { name: "Erebus", creator: "Rustam", difficulty: "demon", demonDifficulty: "extreme", levelId: "31462941", youtubeId: "8csWDx6C2YI", length: "short", skillTags: ["cube","ship","wave","dual"], review: "A radioactive facility-themed extreme demon with a unique green color palette. Known for extreme instant difficulty and complex decoration.", tips: "The dark sections require memorization - learn which parts require pressing and releasing.", whoShouldPlay: "Players who enjoy unique color themes and instant difficulty challenges.", whoShouldSkip: "Players who struggle with dark sections or complex visual designs.", hardestSections: "The free drop section starting at 32% with crazy wave spacing and the dual cube section" },

  // ===== Official RobTop Levels (13) =====
  { name: "Dry Out", creator: "RobTop", difficulty: "normal", demonDifficulty: null, levelId: "", youtubeId: "i1E3u7K9Pzo", length: "long", skillTags: ["cube","ship"], review: "Fourth official level introducing gravity portals, a foundational mechanic for the game. Teaches anti-gravity cube sections in a relaxed but skill-building environment.", tips: "Practice the gravity portal transitions - the anti-gravity section requires adjusted timing but is forgiving.", whoShouldPlay: "Beginners learning core mechanics and gravity portals", whoShouldSkip: "Players who have mastered basic cube gameplay", hardestSections: "Ship sequence at 62-80% with alternating spiked obstacles" },
  { name: "Base After Base", creator: "RobTop", difficulty: "hard", demonDifficulty: null, levelId: "", youtubeId: "TZULkgQPHt0", length: "long", skillTags: ["cube"], review: "Fifth official level and first Hard difficulty, featuring gravity portals throughout. Maintains similar difficulty to Dry Out with more complex anti-gravity segments.", tips: "Focus on gravity portal timing - the level tests your ability to adapt to reversed controls while maintaining rhythm.", whoShouldPlay: "Players transitioning from Normal to Hard difficulty", whoShouldSkip: "Those who find gravity mechanics intuitive", hardestSections: "Anti-gravity cube sections with tight timing windows" },
  { name: "Can't Let Go", creator: "RobTop", difficulty: "hard", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ship","wave"], review: "Sixth official level combining gravity portals with dark backgrounds. Introduces wave mode briefly and features faster pacing than previous levels.", tips: "The wave section is short but requires practice - focus on the rhythm and don't panic during the brief wave segment.", whoShouldPlay: "Players ready for their first true Hard challenge", whoShouldSkip: "Beginners still struggling with basic mechanics", hardestSections: "Wave introduction and tight gravity cube sequences" },
  { name: "Jumper", creator: "RobTop", difficulty: "harder", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ship","ball"], review: "Seventh official level and first Harder difficulty, introducing ball mode with tighter maneuvers. Features increased anti-gravity segments and ship sequences.", tips: "Ball mode requires tapping to reverse gravity - practice the rhythm and don't spam clicks.", whoShouldPlay: "Players comfortable with Hard levels ready for Harder", whoShouldSkip: "Those struggling with ship mechanics", hardestSections: "Ship sequences at 25-37% and 62-75%" },
  { name: "Time Machine", creator: "RobTop", difficulty: "harder", demonDifficulty: null, levelId: "", youtubeId: "FSKkMSjHINA", length: "long", skillTags: ["cube","ship"], review: "Eighth official level introducing the mirror portal, which flips controls. Features frequent triple spikes and complex anti-gravity segments during ship sequences.", tips: "The mirror portal flips your controls - take time to adjust and practice each mirrored section individually.", whoShouldPlay: "Players ready to learn mirror mechanics", whoShouldSkip: "Those who struggle with spatial awareness", hardestSections: "Mirror ship sequences and triple spike arrangements" },
  { name: "Cycles", creator: "RobTop", difficulty: "harder", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ball","ship"], review: "Ninth official level with ball as the primary gamemode. Features misleading jump pads, triple spikes, and a ship section with rapidly alternating gravity.", tips: "Ball mode is dominant here - practice the tap rhythm for gravity switches and watch for misleading pads.", whoShouldPlay: "Players wanting to master ball mechanics", whoShouldSkip: "Those who dislike ball mode", hardestSections: "Ship section with rapid gravity alternation and misleading jump pads" },
  { name: "xStep", creator: "RobTop", difficulty: "insane", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ship","ball"], review: "Tenth official level and first Insane difficulty, introducing new block designs and pulsators. Features frequent gamemode changes and cyan gravity pads/rings.", tips: "Gamemode changes are frequent - memorize the pattern and practice each transition point.", whoShouldPlay: "Players ready for Insane difficulty challenges", whoShouldSkip: "Those still mastering Harder levels", hardestSections: "Sections with cyan gravity mechanics and rapid mode switches" },
  { name: "Electroman Adventures", creator: "RobTop", difficulty: "insane", demonDifficulty: null, levelId: "", youtubeId: "jxCMA-7bGv0", length: "long", skillTags: ["cube","ship","ufo","ball"], review: "Thirteenth official level with ice-themed design and breakable blocks. Features multiple gamemodes including UFO, and was upgraded from Harder to Insane in update 1.7.", tips: "The mini-ship section requires curved flight technique - practice straight and curved flying patterns.", whoShouldPlay: "Players ready for complex multi-gamemode Insane levels", whoShouldSkip: "Beginners to Insane difficulty", hardestSections: "Mini-ship section and breakable block fake obstacles" },
  { name: "Hexagon Force", creator: "RobTop", difficulty: "insane", demonDifficulty: null, levelId: "", youtubeId: "ht4nHmHhjQI", length: "long", skillTags: ["cube","ship","ball","dual"], review: "Sixteenth official level introducing sloped blocks and the dual portal. Features asymmetrical duals requiring coordination of two icons simultaneously on inverted planes.", tips: "For duals, focus primarily on the normal gravity icon in symmetrical sections - both icons usually stay safe together.", whoShouldPlay: "Players ready to master dual mechanics", whoShouldSkip: "Those who struggle with multi-tasking", hardestSections: "Asymmetrical dual cube and ball sections" },
  { name: "Blast Processing", creator: "RobTop", difficulty: "harder", demonDifficulty: null, levelId: "", youtubeId: "0KHZ1wcPRB4", length: "long", skillTags: ["cube","wave","ship","ball","ufo"], review: "Seventeenth official level introducing the wave form with zig-zag diagonal movement. Features 3D decorations and spacious wave sequences as a wave tutorial.", tips: "Wave requires tapping to change direction instantly - start with wide corridors and gradually tighten your control.", whoShouldPlay: "Players learning wave mechanics for the first time", whoShouldSkip: "Those who already have strong wave skills", hardestSections: "Wave sections requiring steady control and rhythm awareness" },
  { name: "Geometrical Dominator", creator: "RobTop", difficulty: "harder", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","robot","ship","wave","ufo","ball"], review: "Nineteenth official level introducing the robot form with variable jump heights. Features a memory section with appearing platforms and robot as the primary gamemode.", tips: "Robot jump height depends on hold duration - practice exact timing for specific gaps in the memory section.", whoShouldPlay: "Players ready to learn robot mechanics", whoShouldSkip: "Those who dislike memory-based sections", hardestSections: "Memory section with appearing platforms and robot timing" },
  { name: "Fingerdash", creator: "RobTop", difficulty: "insane", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","spider","wave","robot","ship"], review: "Twentieth official level introducing the spider form with instant gravity teleportation. Features drop orbs, dash orbs, and multiple gamemodes in a vibrant 2.1 aesthetic.", tips: "Spider teleports instantly between surfaces - tap rhythmically rather than holding for precise control.", whoShouldPlay: "Players ready for complex 2.1 mechanics", whoShouldSkip: "Those still mastering earlier gamemodes", hardestSections: "Spider sections and wave/robot combinations" },
  { name: "Dash", creator: "RobTop", difficulty: "insane", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ship","wave","robot","spider"], review: "Twenty-second official level introducing the swing gamemode with pendulum-like movement. Features spider orbs, camera controls, and is exclusive to the full version.", tips: "Swing mode has momentum - learn the pendulum timing and practice swing-to-cube transitions.", whoShouldPlay: "Players with full version ready for swing mechanics", whoShouldSkip: "Lite version players or those not ready for complex new mechanics", hardestSections: "Swing sections and fast-speed gamemode transitions" },

  // ===== Popular Community Non-Demon Levels (6) =====
  { name: "ReTraY", creator: "DiMaViKuLov26", difficulty: "easy", demonDifficulty: null, levelId: "6508283", youtubeId: "SeNQdPWY6Rg", length: "long", skillTags: ["cube","ship","wave"], review: "Most-liked level in Geometry Dash with retro green-and-black visuals and rhythmic gameplay. Ranked #51 on GDToday's 100 Greatest Levels list.", tips: "The level flows with the music - relax and follow the rhythm rather than overthinking jumps.", whoShouldPlay: "Everyone looking for the most popular community level", whoShouldSkip: "Players seeking extreme challenges", hardestSections: "Wave part and random UFO section" },
  { name: "Sonar", creator: "JerkRat", difficulty: "easy", demonDifficulty: null, levelId: "4454123", youtubeId: "b3imyEY0I1k", length: "long", skillTags: ["cube","ship","ufo"], review: "Second most-liked user level inspired by Stereo Madness with vibrant rhythm-based gameplay. Features loose timings and smooth decoration synchronization.", tips: "The timings are very forgiving - focus on enjoying the flow and music sync rather than precision.", whoShouldPlay: "Beginners wanting accessible popular levels", whoShouldSkip: "Those seeking tight gameplay challenges", hardestSections: "None significant - designed to be beginner-friendly" },
  { name: "Level Easy", creator: "Cody", difficulty: "normal", demonDifficulty: null, levelId: "", youtubeId: "", length: "long", skillTags: ["cube","ship"], review: "Fifth most-downloaded user level and first Map Pack level ever implemented. Despite the name, it's rated Normal and was the first to surpass 40 million downloads.", tips: "Don't let the name fool you - it's Normal difficulty with straightforward cube jumps and early ship mechanics.", whoShouldPlay: "Beginners wanting historically significant levels", whoShouldSkip: "Those expecting actual Easy difficulty", hardestSections: "Ship sequence requiring basic flying skills" },
  { name: "OuterSpace", creator: "Nicki1202", difficulty: "hard", demonDifficulty: null, levelId: "27732941", youtubeId: "u8fta3iLsO4", length: "long", skillTags: ["cube","ship"], review: "Second most-downloaded user level and first in Fire Gauntlet. Features exemplary 2.0 design with a boss fight at the end requiring reaction speed.", tips: "The boss fight at the end requires quick reactions - practice this section separately from the main level.", whoShouldPlay: "Players wanting to experience classic 2.0 design", whoShouldSkip: "Those who dislike boss sections", hardestSections: "Boss fight requiring reaction speed" },
  { name: "Sunshine", creator: "Unzor", difficulty: "harder", demonDifficulty: null, levelId: "56199846", youtubeId: "CnuFQMWIQQg", length: "long", skillTags: ["cube","ship","spider","ball"], review: "Fourth most-downloaded Harder level with cutesy summertime theming and pastel colors. Most popular Harder level not in a Gauntlet.", tips: "The level feels like a rhythmic dance - relax and let the music guide your timing rather than forcing precision.", whoShouldPlay: "Players wanting a colorful, uplifting Harder experience", whoShouldSkip: "Those seeking dark or intense themes", hardestSections: "Ship part reminiscent of Cycles and gravity portal setups" },
  { name: "Auto Play Area", creator: "Jax", difficulty: "auto", demonDifficulty: null, levelId: "3150", youtubeId: "", length: "long", skillTags: ["cube","ship"], review: "Oldest Featured Auto level and most downloaded/liked Auto level. Built in version 1.1 before Start Pos existed, requiring manual timing sync.", tips: "Simply watch and enjoy - no input required, making it perfect for relaxation or appreciating level design.", whoShouldPlay: "Anyone wanting to relax or appreciate auto level design", whoShouldSkip: "Players seeking active gameplay challenges", hardestSections: "None - requires no player input" },
];

// 生成 Level 对象
function buildLevel(raw, index, allNewLevels) {
  const idNum = START_ID + index;
  const id = `lvl-${String(idNum).padStart(3, "0")}`;
  const slug = slugify(raw.name);
  const creatorSlug = creatorSlugify(raw.creator);
  const baseline = scoreBaseline[scoreKey(raw)];

  // 同难度的新关卡（用于交叉引用），排除自己
  const sameTier = allNewLevels
    .filter((l, i) => i !== index && l.difficulty === raw.difficulty && l.demonDifficulty === raw.demonDifficulty)
    .map((_, i) => `lvl-${String(START_ID + i).padStart(3, "0")}`)
    .slice(0, 3);

  // 下一难度的新关卡（升级路径）
  const tierOrder = raw.difficulty === "demon"
    ? ["easy", "medium", "hard", "insane", "extreme"]
    : ["auto", "easy", "normal", "hard", "harder", "insane"];
  const currentTier = raw.demonDifficulty || raw.difficulty;
  const nextTierIndex = tierOrder.indexOf(currentTier) + 1;
  const nextTier = tierOrder[nextTierIndex];

  const nextLevels = nextTier
    ? allNewLevels
        .filter((l) => {
          if (raw.difficulty === "demon") {
            return l.difficulty === "demon" && l.demonDifficulty === nextTier;
          }
          return l.difficulty === nextTier;
        })
        .slice(0, 2)
        .map((item) => {
          const idx = allNewLevels.indexOf(item);
          return `lvl-${String(START_ID + idx).padStart(3, "0")}`;
        })
    : [];

  return {
    id,
    levelId: raw.levelId || "",
    name: raw.name,
    slug,
    creatorName: raw.creator,
    creatorSlug,
    difficulty: raw.difficulty,
    demonDifficulty: raw.demonDifficulty || undefined,
    length: raw.length,
    skillTags: raw.skillTags,
    mobileScore: baseline.mobile,
    beginnerScore: baseline.beginner,
    frustrationScore: baseline.frustration,
    visualClarityScore: baseline.visual,
    review: raw.review,
    tips: raw.tips,
    whoShouldPlay: raw.whoShouldPlay,
    whoShouldSkip: raw.whoShouldSkip,
    hardestSections: raw.hardestSections,
    youtubeId: raw.youtubeId || undefined,
    similarLevelIds: sameTier,
    nextLevelIds: nextLevels,
    status: "published",
    updatedAt: "2026-07-21",
  };
}

// 生成 TS 代码
function levelToTS(l) {
  const lines = [];
  lines.push(`  {`);
  lines.push(`    id: "${l.id}",`);
  lines.push(`    levelId: "${l.levelId}",`);
  lines.push(`    name: "${l.name}",`);
  lines.push(`    slug: "${l.slug}",`);
  lines.push(`    creatorName: "${l.creatorName}",`);
  lines.push(`    creatorSlug: "${l.creatorSlug}",`);
  lines.push(`    difficulty: "${l.difficulty}",`);
  if (l.demonDifficulty) lines.push(`    demonDifficulty: "${l.demonDifficulty}",`);
  lines.push(`    length: "${l.length}",`);
  lines.push(`    skillTags: [${l.skillTags.map((t) => `"${t}"`).join(", ")}],`);
  lines.push(`    mobileScore: ${l.mobileScore},`);
  lines.push(`    beginnerScore: ${l.beginnerScore},`);
  lines.push(`    frustrationScore: ${l.frustrationScore},`);
  lines.push(`    visualClarityScore: ${l.visualClarityScore},`);
  lines.push(`    review: "${l.review.replace(/"/g, '\\"')}",`);
  lines.push(`    tips: "${l.tips.replace(/"/g, '\\"')}",`);
  lines.push(`    whoShouldPlay: "${l.whoShouldPlay.replace(/"/g, '\\"')}",`);
  lines.push(`    whoShouldSkip: "${l.whoShouldSkip.replace(/"/g, '\\"')}",`);
  lines.push(`    hardestSections: "${l.hardestSections.replace(/"/g, '\\"')}",`);
  if (l.youtubeId) lines.push(`    youtubeId: "${l.youtubeId}",`);
  lines.push(`    similarLevelIds: [${l.similarLevelIds.map((s) => `"${s}"`).join(", ")}],`);
  lines.push(`    nextLevelIds: [${l.nextLevelIds.map((s) => `"${s}"`).join(", ")}],`);
  lines.push(`    status: "published",`);
  lines.push(`    updatedAt: "2026-07-21",`);
  lines.push(`  },`);
  return lines.join("\n");
}

function main() {
  const builtLevels = newLevels.map((raw, i) => buildLevel(raw, i, newLevels));

  // 读取现有 levels.ts
  const filePath = resolve(root, "src/lib/data/levels.ts");
  const content = readFileSync(filePath, "utf-8");

  // 找到 levels 数组的结束位置（最后一个 } 后的 ];）
  const closingIdx = content.lastIndexOf("];");
  if (closingIdx === -1) {
    throw new Error("Could not find levels array closing ];");
  }

  // 在 ]; 之前插入新关卡
  const before = content.slice(0, closingIdx);
  const after = content.slice(closingIdx);

  const newEntries = builtLevels.map(levelToTS).join("\n");
  const newContent = before + "\n  // ===== 新增关卡（2026-07-21 扩充） =====\n" + newEntries + "\n" + after;

  writeFileSync(filePath, newContent, "utf-8");

  console.log(`✓ Added ${builtLevels.length} new levels to ${filePath}`);
  console.log(`  IDs: ${builtLevels[0].id} ~ ${builtLevels[builtLevels.length - 1].id}`);

  // 统计
  const byTier = {};
  builtLevels.forEach((l) => {
    const key = l.difficulty === "demon" ? `demon-${l.demonDifficulty}` : l.difficulty;
    byTier[key] = (byTier[key] || 0) + 1;
  });
  console.log("  By tier:", JSON.stringify(byTier));
}

main();
