import type { Card } from './cards';

export type CardStatus = 'new' | 'learning' | 'known';

export type Progress = Record<string, CardStatus>;

const STORAGE_KEY = 'skb.progress.v1';

/**
 * Progress lives in localStorage and nowhere else. There is no account, no
 * server, and nothing to sign into: she opens the app and her cards are there.
 * Every read is defensive, because Safari clears this in private browsing.
 */
export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};

    const clean: Progress = {};
    for (const [id, status] of Object.entries(parsed as Record<string, unknown>)) {
      if (status === 'learning' || status === 'known' || status === 'new') {
        clean[id] = status;
      }
    }
    return clean;
  } catch {
    return {};
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Out of quota or blocked. Studying still works, it just will not persist.
  }
}

export function statusOf(progress: Progress, cardId: string): CardStatus {
  return progress[cardId] ?? 'new';
}

export type DeckTally = {
  known: number;
  learning: number;
  unseen: number;
  total: number;
  /** 0 to 1, for the ring on the deck row. */
  fraction: number;
};

export function tally(cards: Card[], progress: Progress): DeckTally {
  let known = 0;
  let learning = 0;

  for (const card of cards) {
    const status = statusOf(progress, card.id);
    if (status === 'known') known += 1;
    else if (status === 'learning') learning += 1;
  }

  const total = cards.length;
  return {
    known,
    learning,
    unseen: total - known - learning,
    total,
    fraction: total === 0 ? 0 : known / total,
  };
}
