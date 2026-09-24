import { DECKS, type Card, type Deck, type DeckId } from './types';
import { aiCards } from './ai';
import { toolsCards } from './tools';
import { codeCards } from './code';
import { dataCards } from './data';
import { processCards } from './process';
import { webCards } from './web';
import { businessCards } from './business';
import { securityCards } from './security';
import { slangCards } from './slang';

export { DECKS };
export type { Card, Deck, DeckId };

export const ALL_CARDS: Card[] = [
  ...aiCards,
  ...toolsCards,
  ...codeCards,
  ...dataCards,
  ...processCards,
  ...webCards,
  ...businessCards,
  ...securityCards,
  ...slangCards,
];

const cardsById = new Map(ALL_CARDS.map((card) => [card.id, card]));
const decksById = new Map(DECKS.map((deck) => [deck.id, deck]));

export function getCard(id: string): Card | undefined {
  return cardsById.get(id);
}

export function getDeck(id: string): Deck | undefined {
  return decksById.get(id as DeckId);
}

export function cardsInDeck(deckId: DeckId): Card[] {
  return ALL_CARDS.filter((card) => card.deckId === deckId);
}

/**
 * Search over terms, aliases, and the plain-English side. Matching the
 * definition matters: she will often remember what something does long before
 * she remembers what it is called.
 */
export function searchCards(query: string): Card[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = ALL_CARDS.map((card) => {
    const term = card.term.toLowerCase();
    const aliases = (card.aliases ?? []).join(' ').toLowerCase();

    let score = 0;
    if (term === q) score = 100;
    else if (term.startsWith(q)) score = 80;
    else if (term.includes(q)) score = 60;
    else if (aliases.includes(q)) score = 50;
    else if (card.gist.toLowerCase().includes(q)) score = 30;
    else if (card.plain.toLowerCase().includes(q)) score = 20;

    return { card, score };
  }).filter((entry) => entry.score > 0);

  scored.sort((a, b) => b.score - a.score || a.card.term.localeCompare(b.card.term));
  return scored.map((entry) => entry.card);
}

export function alphabetical(cards: Card[] = ALL_CARDS): Card[] {
  return [...cards].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
}
