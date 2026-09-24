import { Link } from 'react-router-dom';
import ScreenHeader from '../components/ScreenHeader';
import ProgressRing from '../components/ProgressRing';
import { ChevronIcon, ShuffleIcon } from '../components/Icons';
import { ALL_CARDS, DECKS, cardsInDeck } from '../lib/cards';
import { statusOf, tally } from '../lib/progress';
import { useProgress } from '../hooks/useProgress';

export default function DecksPage() {
  const progress = useProgress();
  const overall = tally(ALL_CARDS, progress);
  const stillOn = ALL_CARDS.filter((card) => statusOf(progress, card.id) === 'learning').length;

  return (
    <>
      <ScreenHeader
        title="Decks"
        subtitle={`${ALL_CARDS.length} terms, sorted into ${DECKS.length} piles.`}
      />

      <Link
        to="/study"
        className="deal shadow-soft relative block overflow-hidden rounded-3xl p-5"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <span
          className="absolute inset-y-0 left-0 w-1.5"
          style={{ backgroundColor: 'var(--color-highlight)' }}
        />
        <div className="flex items-center gap-4 pl-2">
          <div className="min-w-0 flex-1">
            <p className="eyebrow">Quick study</p>
            <p className="mt-1.5 text-[19px] font-semibold tracking-tight">Ten cards, mixed</p>
            <p className="mt-1 text-[14px] text-(--color-text-soft)">
              {stillOn > 0
                ? `Starts with the ${stillOn} you’re still on.`
                : 'A little of everything. Two minutes.'}
            </p>
          </div>
          <ShuffleIcon className="h-6 w-6 shrink-0 text-(--color-accent)" />
        </div>
      </Link>

      <p className="eyebrow mt-7 mb-2 px-1">Every deck</p>

      <div className="inset-list">
        {DECKS.map((deck) => {
          const counts = tally(cardsInDeck(deck.id), progress);
          return (
            <Link key={deck.id} to={`/study/${deck.id}`} className="inset-row">
              <ProgressRing
                value={counts.fraction}
                color={deck.marker}
                size={38}
                label={`${counts.total}`}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[16px] font-medium">{deck.name}</span>
                <span className="block text-[13px] leading-snug text-balance text-(--color-text-faint)">
                  {counts.known === 0 ? deck.blurb : `${counts.known} of ${counts.total} known`}
                </span>
              </span>
              <ChevronIcon className="h-4 w-4 shrink-0 text-(--color-text-faint)" />
            </Link>
          );
        })}
      </div>

      <p className="mt-4 px-1 text-[13px] text-(--color-text-faint)">
        {overall.known} of {overall.total} terms marked known.
      </p>
    </>
  );
}
