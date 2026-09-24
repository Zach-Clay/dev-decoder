import { beforeEach, describe, expect, it } from 'vitest';
import { loadProgress, saveProgress, statusOf, tally } from './progress';
import type { Card } from './cards';

const cards: Card[] = ['a', 'b', 'c', 'd'].map((id) => ({
  id,
  deckId: 'ai',
  term: id,
  gist: 'gist',
  plain: 'plain',
  heard: 'heard',
}));

describe('loadProgress', () => {
  beforeEach(() => localStorage.clear());

  it('starts empty', () => {
    expect(loadProgress()).toEqual({});
  });

  it('round-trips what was saved', () => {
    saveProgress({ a: 'known', b: 'learning' });
    expect(loadProgress()).toEqual({ a: 'known', b: 'learning' });
  });

  it('survives corrupted storage', () => {
    localStorage.setItem('skb.progress.v1', 'not json');
    expect(loadProgress()).toEqual({});
  });

  it('drops values that are not a real status', () => {
    localStorage.setItem('skb.progress.v1', JSON.stringify({ a: 'known', b: 'banana' }));
    expect(loadProgress()).toEqual({ a: 'known' });
  });
});

describe('statusOf', () => {
  it('treats an unrecorded card as new', () => {
    expect(statusOf({}, 'a')).toBe('new');
  });
});

describe('tally', () => {
  it('counts each status', () => {
    const counts = tally(cards, { a: 'known', b: 'known', c: 'learning' });
    expect(counts).toMatchObject({ known: 2, learning: 1, unseen: 1, total: 4 });
    expect(counts.fraction).toBe(0.5);
  });

  it('does not divide by zero on an empty deck', () => {
    expect(tally([], {}).fraction).toBe(0);
  });
});
