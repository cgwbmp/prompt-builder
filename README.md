# Prompt Builder

Compose AI-ready prompts for coding assistants (Claude, Cursor, Copilot, Codex, and others) from prebuilt building blocks. Filter by category, search, multi-select, star favorites, and copy the joined result. Selection and favorites persist in the browser.

The catalog has three groups. Development: agent working rules, code style, languages, testing, review, security, architecture, git, DevOps, docs, AI integration. Visual design, for interfaces, slides, graphics, or brand: visual style, mood, color, typography, layout, motion. General: writing, summarizing, analysis, brainstorming, business, marketing, teaching, translation, image generation. Cross-cutting: how the assistant should reason, talk, and format output.

Stack: React 19, TypeScript, Vite 8, Tailwind CSS 4. Deployed to GitHub Pages from `main`.

## Scripts

```sh
npm install
npm run dev        # local dev server
npm run check      # validate the prompt catalog (ids, categories, empty fields)
npm run typecheck  # tsc
npm run lint       # oxlint
npm run build      # check + build into dist/
```

## Adding prompts

Prompts live in `src/data/<category>.ts`, one file per category.

1. If the category is new, add it to `src/data/categories.ts`. Order there defines chip order and section order in the output.
2. Copy `src/data/_template.ts` to `src/data/<category-id>.ts` and rename the export.
3. Add prompts. Each is `{ id, title, prompt, category }`:
   - `id` must be `<category-id>.<kebab-slug>` and unique. Never renumber or rename ids.
   - `title` is a short human-friendly name shown on the card.
   - `prompt` is the AI-facing text, imperative mood, self-contained.
4. Import and spread the array into `PROMPTS` in `src/data/index.ts`.
5. Run `npm run check`. CI runs it before every deploy.

## Output format

Selected prompts are grouped by category in registry order, each under a Markdown `## <Category>` header, separated by blank lines. Free text from the "Your task" box is appended last under `## Task`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which validates, builds, and publishes `dist/` to GitHub Pages. In the repository settings, set Pages → Source to "GitHub Actions" once.
