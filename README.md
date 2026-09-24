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

**Live at [nice-island-02eb7fd0f.3.azurestaticapps.net](https://nice-island-02eb7fd0f.3.azurestaticapps.net).**

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

# Getting it onto a phone

It is already on the internet at **[nice-island-02eb7fd0f.3.azurestaticapps.net](https://nice-island-02eb7fd0f.3.azurestaticapps.net)** — just send
the link. There is no App Store step: iOS turns any site carrying the right metadata into
a home-screen app, and this one declares all of it (`manifest.webmanifest`,
`apple-touch-icon`, `apple-mobile-web-app-capable`).

**In Safari** — this does not work from Chrome, or from a link preview inside Instagram
or Messages:

1. Open the link.
2. Tap **Share** (the square with the arrow, in the bottom bar).
3. Scroll down and tap **Add to Home Screen**.
4. The name defaults to **Dev Decoder**, and can be changed here.
5. Tap **Add**.

The icon lands on the home screen, and opening it launches full-screen with no address
bar, no tabs, and no Safari toolbar. It gets its own card in the app switcher. It looks
and behaves like something that was installed.

**Open it from the icon after that.** iOS can treat a home-screen app as a separate
browser from Safari, so studying done in Safari beforehand may not carry across into the
installed app, or the other way round.

## What that does and does not get you

**It does:** a real icon, a full-screen app with no browser chrome, its own app-switcher
card, light and dark following the phone, and progress that persists between sessions.

**It does not:** work offline. There is no service worker yet, so it needs a connection to
load. Once open, studying never touches the network again — but a cold start on airplane
mode will not work. Worth adding if she wants to study on a flight.

**Also worth knowing:** progress lives only on that phone, in that app. Clearing website
data, or moving to a new phone, starts it over. There is no account to sync it, by design.

---

## How it is hosted

Azure Static Web Apps, free tier, deployed from `main`. Every push runs lint, a
typechecked build, and the unit tests, and only deploys if all three pass — the workflow
is in [`.github/workflows/`](.github/workflows).

[`web-frontend/public/staticwebapp.config.json`](web-frontend/public/staticwebapp.config.json)
is copied into the build output and covers what a React SPA needs from a static host:

- **SPA fallback.** This app uses `BrowserRouter`, so the server has to return
  `index.html` for any path. Without it `/browse` and `/study/ai` are hard 404s — the
  home-screen icon opens `/` so it would still launch, but the first pull-to-refresh on
  any other screen would kill the app.
- **MIME types**, so `manifest.webmanifest` is served as `application/manifest+json`.
  iOS is picky here, and the wrong type is a quiet way to break Add to Home Screen.
- **Cache headers.** Vite content-hashes everything under `/assets`, so those are
  immutable for a year, while `index.html` is `no-cache` — that pairing is what makes a
  redeploy actually reach the phone instead of sitting behind a stale cache.
- **`X-Content-Type-Options`** and a referrer policy.

That config can be exercised locally against Azure's own emulator:

```bash
cd web-frontend && npm run build
npx @azure/static-web-apps-cli start dist   # http://localhost:4280
```

Deep links like `/study/ai` should come back as the app rather than a 404.

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
