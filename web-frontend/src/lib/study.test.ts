import { describe, expect, it } from 'vitest';
import { buildQueue, shuffle } from './study';
import type { Card } from './cards';

const card = (id: string): Card => ({
  id,
  deckId: 'ai',
  term: id,
  gist: 'gist',
  plain: 'plain',
  heard: 'heard',
});

const deck = ['a', 'b', 'c', 'd', 'e', 'f'].map(card);

describe('shuffle', () => {
  it('keeps every item', () => {
    const shuffled = shuffle([1, 2, 3, 4, 5], () => 0.5);
    expect([...shuffled].sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('leaves the original alone', () => {
    const original = [1, 2, 3];
    shuffle(original, () => 0);
    expect(original).toEqual([1, 2, 3]);
  });
});

describe('buildQueue', () => {
  it('opens with the cards she is mid-way through', () => {
    const queue = buildQueue(deck, { c: 'learning', d: 'learning', a: 'known' });
    expect(['c', 'd']).toContain(queue[0].id);
    expect(['c', 'd']).toContain(queue[1].id);
  });

  it('puts unseen cards ahead of known ones', () => {
    const queue = buildQueue(deck, { a: 'known', b: 'known' }).map((entry) => entry.id);
    const lastUnseen = Math.max(...['c', 'd', 'e', 'f'].map((id) => queue.indexOf(id)));
    const firstKnown = Math.min(
      ...['a', 'b'].map((id) => queue.indexOf(id)).filter((index) => index >= 0),
    );
    expect(lastUnseen).toBeLessThan(firstKnown);
  });

  it('caps how many known cards come back for review', () => {
    const allKnown = Object.fromEntries(deck.map((entry) => [entry.id, 'known' as const]));
    expect(buildQueue(deck, allKnown).length).toBeLessThan(deck.length);
  });

  it('respects a limit', () => {
    expect(buildQueue(deck, {}, 3)).toHaveLength(3);
  });

  it('handles an empty deck', () => {
    expect(buildQueue([], {})).toEqual([]);
  });
});
