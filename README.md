# Dev Decoder
Are you a software engineer with a girlfriend who has no clue what you're talking about when she asks you about work? Welcome.

---

## What this is

**Dev Decoder** — a flashcard app for the 162 words engineers say without noticing. It's a
React site, but it's built for exactly one screen: an iPhone, added to the home screen,
where it opens with an icon and no browser chrome around it.

The idea it's built on is that most software jargon sounds impenetrable and means
something mundane. So the front of a card shows the term in the font engineers actually
write code in, and the back answers in plain English. The flip is the translation.

Every card has four parts:

| | |
|---|---|
| **term** | the word as he says it — `vibe coding` |
| **gist** | the punchline, under one highlighter stroke — *describing it and accepting whatever comes out* |
| **plain** | one or two sentences of plain English, with no jargon inside the explanation |
| **heard** | how it actually turns up in a sentence — *"Half brag, half confession. 'I vibe coded the whole thing last night.'"* |

## What's in it

162 terms across 9 decks, each with its own highlighter color:

| Deck | Covers |
|---|---|
| AI and the hype | AI, AGI, LLM, tokens, context window, hallucination, RAG, agents, MCP, vibe coding, token maxxing |
| Tools of the trade | GitHub, Git, Cursor, Claude Code, Codex, Copilot, VS Code, Docker, Jira, Figma, the terminal |
| Code, basically | functions, bugs, refactoring, tech debt, legacy code, open source, tests, edge cases |
| Data and databases | databases, SQL, queries, schemas, migrations, indexes, caching, CRUD, ETL, PII |
| How software gets built | agile, sprints, standups, tickets, pull requests, code review, deploys, CI/CD, on-call, incidents |
| Internet plumbing | API, REST, frontend, backend, servers, the cloud, AWS, latency, scaling, microservices |
| The business of software | SaaS, B2B, B2B SaaS, ARR, churn, product-market fit, runway, funding rounds, equity, OKRs |
| Locks and keys | authentication vs authorization, encryption, hashing, 2FA, OAuth, API keys, breaches, phishing |
| Pure slang | yak shaving, bikeshedding, rubber ducking, spaghetti code, heisenbug, LGTM, PEBKAC, touch grass |

## How it works

Three tabs: **Decks**, **Look up**, and **Progress**.

- **Tap a card** to turn it over.
- **Swipe right** for "got it", **left** for "still fuzzy" — or use the buttons.
- Cards she's still on come back first next session; ones she knows mostly stop appearing.
- **Look up** is the whole glossary, searchable by term *or* by definition, so she can find
  "the thing that means the app forgot" and land on `context window`.
- Progress lives in `localStorage` on her phone. No account, no server, nothing to sign into.

## Running it locally

```bash
npm --prefix web-frontend install
npm --prefix web-frontend run dev
```

The dev server binds to the local network, so the URL it prints under **Network**
(something like `http://192.168.1.x:5173`) works from a phone on the same wifi. That's
the only honest way to check how it feels.

---

# Putting it on her phone

There's no App Store step here. iOS lets any website with the right metadata be added to
the home screen as a standalone app, and this one already declares all of it
(`manifest.webmanifest`, `apple-touch-icon`, `apple-mobile-web-app-capable`). You just
need it on the public internet first.

## 1. Build it

```bash
npm --prefix web-frontend run build
```

That writes a folder of static files to `web-frontend/dist/`. No backend, no database —
it's HTML, CSS, JS, and a few icons.

## 2. Deploy it to Azure Static Web Apps

The repo is already configured for it. In the portal, create a **Static Web App**,
connect it to `Zach-Clay/dev-decoder`, and use these build details:

| Field | Value |
|---|---|
| Build preset | Custom (or React — it only prefills the fields below) |
| App location | `/web-frontend` |
| Api location | *leave blank* — there is no backend |
| Output location | `dist` |

> **Output location is relative to app location**, so it is `dist`, not
> `web-frontend/dist`. Getting this wrong is the usual reason a first deploy
> succeeds but serves nothing.

Azure commits a GitHub Actions workflow to the repo when you finish the wizard
(`.github/workflows/azure-static-web-apps-*.yml`) and adds the deployment token as a
repo secret. Every push to `main` redeploys from then on. Free tier gives you HTTPS, two
custom domains, and 100 GB/month — far more than one person studying flashcards will use.

### What is already handled for you

[`web-frontend/public/staticwebapp.config.json`](web-frontend/public/staticwebapp.config.json)
ships in the build output and does four things:

- **SPA fallback.** This app uses `BrowserRouter`, so the server has to return
  `index.html` for any path and let React Router sort it out. Without it `/browse` and
  `/study/ai` are hard 404s — the home-screen icon opens `/` so it would launch fine, but
  the first pull-to-refresh on any other screen would kill the app.
- **MIME types**, so `manifest.webmanifest` is served as `application/manifest+json`.
  iOS is picky about this, and a wrong type is a quiet way to break Add to Home Screen.
- **Cache headers.** Vite content-hashes everything in `/assets`, so those are immutable
  for a year, while `index.html` is `no-cache` — that combination is what makes a
  redeploy actually reach her phone instead of sitting behind a stale cache.
- **`X-Content-Type-Options`** and a referrer policy.

Verified against Azure's own emulator (`npx @azure/static-web-apps-cli start dist`)
rather than assumed:

```
/              -> 200  <title>Dev Decoder</title>
/browse        -> 200  <title>Dev Decoder</title>
/study/ai      -> 200  <title>Dev Decoder</title>
/manifest.webmanifest  -> 200  application/manifest+json
/assets/index-*.js     -> cache-control: public, max-age=31536000, immutable
/index.html            -> cache-control: no-cache
```

You can run that yourself any time after a build, from `web-frontend/`.

`package.json` also pins `engines.node` to `>=20.19`, because Vite 7 needs it and
Azure's Oryx builder reads that field to pick a Node version.

## 3. Add it to her home screen

On her iPhone, **in Safari** — this doesn't work from Chrome or from a link preview
inside Instagram or Messages:

1. Open the URL you deployed to.
2. Tap the **Share** button (the square with the arrow, in the bottom bar).
3. Scroll down and tap **Add to Home Screen**.
4. The name defaults to **Dev Decoder**. She can rename it here.
5. Tap **Add**.

The icon lands on her home screen, and opening it launches the app full-screen with no
address bar, no tabs, and no Safari toolbar. It gets its own entry in the app switcher.
It looks and behaves like something she installed.

**Have her start from the icon after that.** iOS can treat a home-screen app as a
separate browser from Safari, so studying she did in Safari beforehand may not carry over
into the installed app — and vice versa.

## What this does and doesn't get you

**It does:** a real icon, a full-screen app with no browser chrome, its own app-switcher
card, light and dark mode following her phone, and progress that persists between
sessions.

**It doesn't:** work offline. There's no service worker yet, so it needs a connection to
load. Once it's open, studying doesn't hit the network again — but a cold start on
airplane mode won't work. Worth adding if she wants to study on a flight.

**Also worth knowing:** her progress lives only on that phone, in that app. Clearing
website data, or switching to a new phone, starts her over. There's no account to sync
it, by design.

---

## Where the code lives

See [web-frontend/README.md](web-frontend/README.md) for the project layout, how to add a
term or a whole deck, and why the design makes the choices it does.

```
web-frontend/src/
  lib/cards/       One file per deck. This is the content; everything else serves it.
  lib/progress.ts  Reading and writing card status in localStorage.
  lib/study.ts     Building the queue for a session.
  hooks/           Shared stores for progress and theme.
  components/      Flashcard, tab bar, header, and the smaller pieces.
  pages/           Decks, Study, Look up, Progress.
  styles/          Theme variables, component classes, motion.
```
