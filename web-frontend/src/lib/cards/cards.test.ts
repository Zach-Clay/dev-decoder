import { describe, expect, it } from 'vitest';
import { ALL_CARDS, DECKS, alphabetical, cardsInDeck, getCard, searchCards } from './index';

describe('card data', () => {
  it('gives every card a unique id', () => {
    const ids = ALL_CARDS.map((card) => card.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('files every card under a real deck', () => {
    const deckIds = new Set(DECKS.map((deck) => deck.id));
    const orphans = ALL_CARDS.filter((card) => !deckIds.has(card.deckId));
    expect(orphans).toEqual([]);
  });

  it('leaves no deck empty', () => {
    for (const deck of DECKS) {
      expect(cardsInDeck(deck.id).length).toBeGreaterThan(0);
    }
  });

  it('fills in every side of every card', () => {
    const incomplete = ALL_CARDS.filter(
      (card) => !card.term.trim() || !card.gist.trim() || !card.plain.trim() || !card.heard.trim(),
    );
    expect(incomplete).toEqual([]);
  });

  it('keeps the gist short enough for one marker stroke', () => {
    const tooLong = ALL_CARDS.filter((card) => card.gist.length > 46).map((card) => card.term);
    expect(tooLong).toEqual([]);
  });
});

describe('searchCards', () => {
  it('returns nothing for an empty query', () => {
    expect(searchCards('   ')).toEqual([]);
  });

  it('puts an exact term first', () => {
    expect(searchCards('api')[0].term).toBe('API');
  });

  it('matches aliases', () => {
    const terms = searchCards('large language model').map((card) => card.term);
    expect(terms).toContain('LLM');
  });

  it('matches the explanation, not just the term', () => {
    const results = searchCards('rubber duck');
    expect(results.length).toBeGreaterThan(0);
  });

  it('ignores case', () => {
    expect(searchCards('GITHUB').map((card) => card.id)).toContain('github');
  });
});

describe('alphabetical', () => {
  it('sorts without regard to case', () => {
    const sorted = alphabetical(ALL_CARDS).map((card) => card.term.toLowerCase());
    expect(sorted).toEqual([...sorted].sort());
  });
});

describe('getCard', () => {
  it('finds a card by id', () => {
    expect(getCard('vibe-coding')?.term).toBe('vibe coding');
  });

  it('returns undefined for an unknown id', () => {
    expect(getCard('nope')).toBeUndefined();
  });
});
