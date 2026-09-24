import type { Card } from './cards';
import { statusOf, type Progress } from './progress';

/** Fisher-Yates, so a session does not open with the same card every time. */
export function shuffle<T>(items: T[], random: () => number = Math.random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Order a session so it opens with what she is mid-way through, then what she
 * has never seen, then a few she already knows to close on a win. Cards marked
 * known are capped, because re-reading things you know is how studying stops
 * being fun.
 */
export function buildQueue(cards: Card[], progress: Progress, limit?: number): Card[] {
  const learning: Card[] = [];
  const unseen: Card[] = [];
  const known: Card[] = [];

  for (const card of cards) {
    const status = statusOf(progress, card.id);
    if (status === 'learning') learning.push(card);
    else if (status === 'known') known.push(card);
    else unseen.push(card);
  }

  const reviewCount = Math.max(2, Math.ceil((learning.length + unseen.length) * 0.15));
  const queue = [...shuffle(learning), ...shuffle(unseen), ...shuffle(known).slice(0, reviewCount)];

  return limit ? queue.slice(0, limit) : queue;
}

/** How many cards a "quick study" mixes in. Short enough to finish in a queue. */
export const QUICK_STUDY_SIZE = 10;
