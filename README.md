# GD Level Tools

A fan-made Geometry Dash tools website built with Next.js, TypeScript, and Tailwind CSS. Helps players find levels, choose demons, unlock rewards, fix issues, and plan progression.

> **Disclaimer:** This is an independent fan site, not affiliated with RobTop Games. All content is created by fans, for fans.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables (dark neon game theme)
- **Font:** Inter (Google Fonts)
- **Deployment:** Cloudflare Workers (via `@opennextjs/cloudflare`)

## Features

### Tools
- **Level Finder** — Filter levels by difficulty, demon tier, skill, length, platform, with sort options
- **First Demon Picker** — Interactive questionnaire that recommends personalized first demons
- **Demon Progression Planner** — Enter your demon count to get stage-based recommendations and a full roadmap
- **Vault Codes** — Searchable list of in-game secret codes (The Vault, Vault of Secrets, Chamber of Time, Wraith Vault)
- **Submit Level** — Community level submission form

### Content
- **Demon List** — Demons grouped by tier (Easy → Extreme), with Pointercrate reference
- **Guides** — Rewards, mods, skills, and general guides with step-by-step instructions
- **Fix Guides** — Screen dark, screen tearing, can't play online levels, V-Sync issues
- **Mods Guides** — Geode installation, FPS unlock, TPS explained
- **Level Detail Pages** — Reviews, scores, skill tags, tips, similar levels, next steps, FAQ

### SEO
- Per-page metadata (title, description, Open Graph, Twitter Cards)
- JSON-LD structured data: WebSite, BreadcrumbList, FAQPage, Article, ItemList
- Dynamic `sitemap.xml` and `robots.txt`
- Semantic HTML, accessible ARIA labels

### Legal & Compliance
- About, Contact, Privacy Policy, Terms of Service, DMCA pages
- Fan site disclaimer in footer and key pages
- Vault codes labeled as "in-game secret codes, not cheats"
- Mods labeled as "third-party tools, not affiliated with RobTop"

## Project Structure

```
├── wrangler.jsonc            # Cloudflare Worker config
├── open-next.config.ts       # OpenNext adapter config
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout (Header + Footer + global styles)
│   ├── page.tsx              # Home page
│   ├── level-finder/         # Level Finder tool
│   ├── demon-list/           # Demon List (grouped by tier)
│   ├── first-demon-picker/   # First Demon Picker (interactive)
│   ├── demon-progression/    # Progression Planner
│   ├── vault-codes/          # Vault Codes (searchable)
│   ├── guides/               # Guides list + [slug] detail
│   ├── fix/                  # Fix guides list + [slug] detail
│   ├── mods/                 # Mods guides list + [slug] detail
│   ├── levels/[slug]/        # Level detail pages
│   ├── submit-level/         # Level submission form
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── privacy/              # Privacy Policy
│   ├── terms/                # Terms of Service
│   ├── dmca/                 # DMCA Policy
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # robots.txt
│   ├── not-found.tsx         # Custom 404
│   └── globals.css           # Global styles + design system
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header (responsive)
│   │   └── Footer.tsx        # Footer with fan site disclaimer
│   ├── LevelCard.tsx         # Level card component
│   ├── LevelFinderClient.tsx # Level Finder (client-side filtering)
│   ├── FirstDemonPickerClient.tsx  # First Demon Picker (interactive)
│   ├── DemonProgressionClient.tsx  # Progression Planner (interactive)
│   ├── VaultCodesClient.tsx  # Vault Codes (client-side search)
│   ├── SubmitLevelClient.tsx # Submit Level form
│   ├── GuideView.tsx         # Shared guide detail view
│   ├── Breadcrumb.tsx        # Breadcrumb navigation
│   └── SectionHeading.tsx    # Section heading with accent bar
├── lib/
│   ├── site-config.ts        # Site configuration (name, domain, nav, disclaimer)
│   ├── types.ts              # TypeScript type definitions
│   ├── seo.ts                # SEO helpers (metadata, JSON-LD schemas)
│   ├── ui.ts                 # UI helpers (labels, colors, score formatting)
│   ├── recommendations.ts    # Recommendation algorithms
│   └── data/
│       ├── levels.ts         # Seed level data + query functions
│       ├── vault-codes.ts    # Vault codes data + vault info
│       └── guides.ts         # Guide data + query functions
```

## Design System

The site uses a dark neon game-style theme defined in `globals.css`:

- **Background:** Deep dark (`#0a0e1a`) with geometric grid overlay
- **Primary:** Cyan (`#00e5ff`) — main accents, links, primary buttons
- **Secondary:** Purple (`#b388ff`) — demon tier, secondary actions
- **Accent:** Gold (`#ffc107`) — rewards, highlights
- **Difficulty colors:** Easy (green), Normal (lime), Hard (orange), Insane (red), Demon (purple)
- **Effects:** Glow text, pulse animations, gradient text, geometric decorations

### CSS Custom Properties
All colors and spacing are defined as CSS variables (`--color-*`, `--space-*`) for easy theming.

## Development

```bash
# Install dependencies
npm install

# Run dev server (Next.js, Node.js runtime)
npm run dev

# Build for production (Next.js only)
npm run build

# Run lint
npm run lint

# Build for Cloudflare Workers
npm run cf-build

# Preview in Cloudflare Workers runtime (workerd)
npm run preview

# Deploy to Cloudflare Workers (single command: build + deploy)
npm run deploy

# Or split into two commands (for CI/CD like Workers Builds)
# Build: npm run cf-build
# Deploy: npx wrangler deploy
```

## Seed Data

The site includes seed data for:
- **20 levels** across all difficulties (Easy Demon to Extreme Demon)
- **5 fix guides** (screen dark, screen tearing, can't play levels, V-Sync, Geode not working)
- **4 mod guides** (Geode, FPS unlock, TPS explained, Geode not working)
- **5 reward/skill guides** (diamonds, gold keys, demon keys, user coins, Master Emblem)
- **30+ vault codes** across 4 vaults

## Adding New Content

### Add a Level
Edit `src/lib/data/levels.ts` and add a new object to the `levels` array. Use the `Level` type from `src/lib/types.ts`.

### Add a Guide
Edit `src/lib/data/guides.ts` and add a new object with `category` set to `"fix"`, `"mods"`, `"rewards"`, `"skills"`, `"demon"`, or `"general"`.

### Add Vault Codes
Edit `src/lib/data/vault-codes.ts` and add codes to the `vaultCodes` array.

## AdSense Readiness

The site is structured for Google AdSense approval:
- Original, helpful content (not auto-generated)
- Clear site purpose and navigation
- Privacy Policy with ad cookie disclosure
- Terms of Service
- DMCA policy
- Fan site disclaimer (not impersonating the official brand)
- No cheats, hacks, or copyrighted game files
- Mobile-responsive design

## Deployment

### Cloudflare Workers

The site is configured for Cloudflare Workers deployment via `@opennextjs/cloudflare`.

**Prerequisites:**
- Cloudflare account
- Wrangler CLI authenticated (`npx wrangler login`)

**One-time deploy:**
```bash
npm run deploy
```

This runs `opennextjs-cloudflare build` (builds Next.js + bundles for Workers) then `opennextjs-cloudflare deploy` (deploys to Cloudflare).

**Workers Builds (CI/CD) recommended split:**
- **Build command:** `npm run cf-build`
- **Deploy command:** `npx wrangler deploy`

This avoids double-building. Cloudflare Workers Builds will run the build command first, then the deploy command in the same workspace.

**Preview locally in Workers runtime:**
```bash
npm run preview
```

This builds and runs the app in `workerd` (Cloudflare's runtime) locally on port 8787, more accurate to production than `npm run dev`.

**Configuration files:**
- `wrangler.jsonc` — Cloudflare Worker config (name, compatibility flags, assets)
- `open-next.config.ts` — OpenNext adapter config

**Worker size:** ~1.25 MiB compressed (well under the 3 MiB free plan limit)

### Custom Domain

After deploying, configure a custom domain in the Cloudflare dashboard:
1. Go to Workers & Pages → your Worker → Settings → Triggers
2. Add a custom domain (e.g., `gdleveltools.com`)
3. Update `siteConfig.domain` in `src/lib/site-config.ts` to match

### Workers Builds (CI/CD)

To use Cloudflare's built-in CI/CD:
1. Go to Workers & Pages → Select `gd-level-tools` → Settings → Builds
2. Click **Connect** and choose your GitHub account
3. Select the repository `Starmadebydata/gdlevel-tools`
4. Set the production branch to `main`
5. Configure build settings:
   - **Build command:** `npm run cf-build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/`
6. Configure any environment variables in "Build Variables and secrets"
7. Save and push a test commit to trigger the first build

> **Note:** Do not use `npm run deploy` as the build command. It already includes both build and deploy, which is meant for manual use. In Workers Builds, you need to split them.

## License

This is a fan project. Geometry Dash and all related names are property of RobTop Games. All content on this site is original, created by the site authors.
