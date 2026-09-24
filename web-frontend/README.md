# Dev Decoder

React + TypeScript + Vite, styled with Tailwind v4 and tested with Vitest.

```bash
npm install
npm run dev        # http://localhost:5173, also served on the local network
npm test           # Vitest
npm run lint
npm run build      # tsc -b && vite build
```

## Layout

```
src/
  lib/cards/       One file per deck. This is the content; everything else serves it.
  lib/progress.ts  Reading and writing card status in localStorage.
  lib/study.ts     Building the queue for a session.
  hooks/           Shared stores for progress and theme (useSyncExternalStore).
  components/      Flashcard, tab bar, header, and the smaller pieces.
  pages/           Decks, Study, Look up, Progress.
  styles/          Theme variables, component classes, motion.
```

## Adding a term

Open the deck's file in `src/lib/cards/` and append a card:

```ts
{
  id: 'kebab-case-and-unique',
  deckId: 'ai',
  term: 'the word as he says it',
  gist: 'the punchline, six words or fewer',
  plain: 'Plain English. One or two sentences, no jargon inside the explanation.',
  heard: 'How it actually turns up in a sentence.',
  aliases: ['other spellings, for search only'],
}
```

`npm test` checks that ids stay unique, every field is filled in, and the gist is
short enough to sit under one marker stroke.

A new deck needs an entry in `DECKS` in `src/lib/cards/types.ts` (with its own
highlighter color) and its file added to `ALL_CARDS` in `src/lib/cards/index.ts`.

## Why it looks like this

- **Type carries the idea.** Terms are set in JetBrains Mono, the font the code
  itself is in. Explanations are set in Newsreader, which is built for reading.
  The register shift across the flip is the point, not decoration.
- **One highlighter per deck.** Decks are told apart by color first, which is
  also what makes the marker stroke on the back of a card feel earned.
- **It should not read as a web page.** Fixed-height screens with their own
  scroll regions, a frosted tab bar, iOS large titles that collapse on scroll,
  safe-area insets, no visible scrollbars, and no page-level rubber-banding.

## On a phone

`index.html` declares the PWA bits (`manifest.webmanifest`, `apple-touch-icon`,
`apple-mobile-web-app-capable`), so **Share → Add to Home Screen** in Safari
gives a real icon and a standalone window with no browser chrome. `InstallHint`
says so once, on iOS only, and never again after it is dismissed.
