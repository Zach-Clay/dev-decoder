export type DeckId =
  'ai' | 'tools' | 'code' | 'data' | 'process' | 'web' | 'business' | 'security' | 'slang';

export type Deck = {
  id: DeckId;
  name: string;
  blurb: string;
  /** Hex for this deck's highlighter. Decks are told apart by color first. */
  marker: string;
};

export type Card = {
  id: string;
  deckId: DeckId;
  term: string;
  /** The punchline translation. Short enough to sit under one marker stroke. */
  gist: string;
  /** Plain English, one or two sentences. No jargon allowed in here. */
  plain: string;
  /** How it actually shows up in a sentence. */
  heard: string;
  /** Other spellings and nicknames, for search only. */
  aliases?: string[];
};

export const DECKS: Deck[] = [
  {
    id: 'ai',
    name: 'AI and the hype',
    blurb: 'Everything he says that sounds like science fiction.',
    marker: '#6c4ce0',
  },
  {
    id: 'tools',
    name: 'Tools of the trade',
    blurb: 'The apps open on his second monitor all day.',
    marker: '#3b9bff',
  },
  {
    id: 'code',
    name: 'Code, basically',
    blurb: 'What the actual writing-software part involves.',
    marker: '#16b894',
  },
  {
    id: 'data',
    name: 'Data and databases',
    blurb: 'Where all the information lives and how you ask it questions.',
    marker: '#ff9f2e',
  },
  {
    id: 'process',
    name: 'How software gets built',
    blurb: 'Meetings, tickets, and the ceremony around shipping.',
    marker: '#ff6b5a',
  },
  {
    id: 'web',
    name: 'Internet plumbing',
    blurb: 'What happens between tapping a button and something showing up.',
    marker: '#e2569f',
  },
  {
    id: 'business',
    name: 'The business of software',
    blurb: 'Why anyone pays for any of this.',
    marker: '#8ec63f',
  },
  {
    id: 'security',
    name: 'Locks and keys',
    blurb: 'Passwords, breaches, and who is allowed to see what.',
    marker: '#7c8aa5',
  },
  {
    id: 'slang',
    name: 'Pure slang',
    blurb: 'Words engineers made up to amuse themselves.',
    marker: '#ffd83d',
  },
];
