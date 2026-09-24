# Dev Decoder
Are you a software engineer with a girlfriend who has no clue what you're talking about when she asks you about work? Welcome.

---

## What this is

**Decoder** — a flashcard app for the 162 words engineers say without noticing. It's a
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

## 2. Deploy it

Any static host works. Vercel, Netlify, and Cloudflare Pages all have free tiers, deploy
straight from the GitHub repo, redeploy on every push, and give you HTTPS automatically.

Whichever you pick, the settings are the same:

| Setting | Value |
|---|---|
| Root / base directory | `web-frontend` |
| Build command | `npm run build` |
| Output directory | `dist` |

### The one thing you have to configure

This is a single-page app using `BrowserRouter`, so the server has to hand `index.html`
back for *any* path and let React Router sort it out. Without that, `/browse` and
`/study/ai` are 404s — I checked against a plain static server:

```
/            -> 200
/study/ai    -> 404
/browse      -> 404
```

The home-screen icon itself opens `/`, so it'd survive — but the first time she pulls to
refresh on any other screen, the app dies. Add the fallback.

**Netlify or Cloudflare Pages** — create `web-frontend/public/_redirects` (anything in
`public/` gets copied into `dist/` at build time):

```
/*    /index.html   200
```

**Vercel** — create `vercel.json` at the repo root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

> **A note on GitHub Pages:** it works, but a project site serves from
> `yourname.github.io/se-girlfriend-knowledge-base/`, and this app assumes it lives at the
> root — `start_url`, `scope`, and the icon paths in `manifest.webmanifest` are all
> absolute. You'd need to set `base` in `vite.config.ts` and make those paths relative.
> A host that serves at the root is less work.

## 3. Add it to her home screen

On her iPhone, **in Safari** — this doesn't work from Chrome or from a link preview
inside Instagram or Messages:

1. Open the URL you deployed to.
2. Tap the **Share** button (the square with the arrow, in the bottom bar).
3. Scroll down and tap **Add to Home Screen**.
4. The name defaults to **Decoder**. She can rename it here.
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
