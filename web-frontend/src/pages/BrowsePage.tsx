import { useMemo, useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import CardDetail from '../components/CardDetail';
import { CloseIcon, SearchIcon } from '../components/Icons';
import { ALL_CARDS, DECKS, alphabetical, searchCards, type Card } from '../lib/cards';
import { statusOf } from '../lib/progress';
import { useProgress } from '../hooks/useProgress';

const markerOf = new Map(DECKS.map((deck) => [deck.id, deck.marker]));

export default function BrowsePage() {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const progress = useProgress();

  const results = useMemo(() => (query ? searchCards(query) : null), [query]);
  const groups = useMemo(() => groupByLetter(alphabetical(ALL_CARDS)), []);

  return (
    <>
      <ScreenHeader title="Look up" subtitle="Every term, in one list." />

      <div className="sticky top-[calc(env(safe-area-inset-top)+2.75rem)] z-10 -mx-4 bg-(--color-bg) px-4 pb-3">
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: 'var(--color-surface-sunk)' }}
        >
          <SearchIcon className="h-4 w-4 shrink-0 text-(--color-text-faint)" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search terms or definitions"
            type="search"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-[16px] placeholder:text-(--color-text-faint) focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="shrink-0 text-(--color-text-faint)"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {results ? (
        results.length === 0 ? (
          <p className="px-1 py-8 text-center text-[15px] text-(--color-text-soft)">
            Nothing matches “{query}”. Try a word from the explanation instead.
          </p>
        ) : (
          <div className="inset-list">
            {results.map((card) => (
              <TermRow
                key={card.id}
                card={card}
                open={openId === card.id}
                known={statusOf(progress, card.id) === 'known'}
                onToggle={() => setOpenId(openId === card.id ? null : card.id)}
              />
            ))}
          </div>
        )
      ) : (
        groups.map(([letter, cards]) => (
          <section key={letter} className="mb-5">
            <p className="eyebrow mb-2 px-1">{letter}</p>
            <div className="inset-list">
              {cards.map((card) => (
                <TermRow
                  key={card.id}
                  card={card}
                  open={openId === card.id}
                  known={statusOf(progress, card.id) === 'known'}
                  onToggle={() => setOpenId(openId === card.id ? null : card.id)}
                />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}

function TermRow({
  card,
  open,
  known,
  onToggle,
}: {
  card: Card;
  open: boolean;
  known: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="inset-row !block !px-0 !py-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{
            backgroundColor: markerOf.get(card.deckId),
            opacity: known ? 1 : 0.32,
          }}
        />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-mono text-[15px] font-medium">{card.term}</span>
          {!open ? (
            <span className="block truncate text-[13px] text-(--color-text-faint)">
              {card.gist}
            </span>
          ) : null}
        </span>
      </button>

      {open ? (
        <div className="rise px-4 pt-1 pb-4">
          <CardDetail card={card} compact />
        </div>
      ) : null}
    </div>
  );
}

function groupByLetter(cards: Card[]): [string, Card[]][] {
  const groups = new Map<string, Card[]>();
  for (const card of cards) {
    const letter = card.term[0].toUpperCase();
    const key = /[A-Z]/.test(letter) ? letter : '#';
    const bucket = groups.get(key);
    if (bucket) bucket.push(card);
    else groups.set(key, [card]);
  }
  return [...groups.entries()];
}
