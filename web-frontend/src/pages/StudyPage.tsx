import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Flashcard from '../components/Flashcard';
import { CloseIcon, RotateIcon } from '../components/Icons';
import { ALL_CARDS, DECKS, cardsInDeck, getDeck, type Card } from '../lib/cards';
import { QUICK_STUDY_SIZE, buildQueue } from '../lib/study';
import { markCard } from '../hooks/useProgress';
import { loadProgress } from '../lib/progress';

export default function StudyPage() {
  const { deckId } = useParams();
  const navigate = useNavigate();

  const deck = deckId ? getDeck(deckId) : undefined;
  const source = deck ? cardsInDeck(deck.id) : ALL_CARDS;

  // The queue is fixed when the session opens. Reordering it underneath her as
  // she answers would make the "3 of 12" counter meaningless.
  const [queue, setQueue] = useState<Card[]>(() =>
    buildQueue(source, loadProgress(), deck ? undefined : QUICK_STUDY_SIZE),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [gotIt, setGotIt] = useState(0);

  const card = queue[index];
  const cardDeck = useMemo(
    () => (card ? DECKS.find((entry) => entry.id === card.deckId) : undefined),
    [card],
  );

  if (deckId && !deck) {
    return <NotFound />;
  }

  function answer(status: 'known' | 'learning') {
    if (!card) return;
    markCard(card.id, status);
    if (status === 'known') setGotIt((count) => count + 1);
    setFlipped(false);
    setIndex((current) => current + 1);
  }

  function restart() {
    setQueue(buildQueue(source, loadProgress(), deck ? undefined : QUICK_STUDY_SIZE));
    setIndex(0);
    setFlipped(false);
    setGotIt(0);
  }

  const title = deck ? deck.name : 'Quick study';
  const done = !card;
  const progressFraction = queue.length === 0 ? 1 : index / queue.length;

  return (
    <div className="screen">
      <header
        className="shrink-0 px-4"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)' }}
      >
        <div className="flex h-11 items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="-ml-2 p-2 text-(--color-text-soft)"
            aria-label="Close session"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <span className="min-w-0 flex-1 truncate text-center text-[15px] font-semibold">
            {title}
          </span>
          <span className="w-9 shrink-0 text-right font-mono text-[13px] text-(--color-text-faint)">
            {done ? queue.length : index + 1}/{queue.length}
          </span>
        </div>

        <div
          className="h-1 overflow-hidden rounded-full"
          style={{ backgroundColor: 'var(--color-rule)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progressFraction * 100}%`,
              backgroundColor: deck?.marker ?? 'var(--color-accent)',
              transition: 'width 320ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>
      </header>

      {done ? (
        <SessionDone total={queue.length} gotIt={gotIt} onRestart={restart} />
      ) : (
        <>
          {/* The card is capped and centred rather than stretched: a tall
              phone should not turn one word into a mostly empty page. */}
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-5">
            <div className="h-full max-h-[34rem] w-full">
              {card && cardDeck ? (
                <Flashcard
                  key={card.id}
                  card={card}
                  deck={cardDeck}
                  flipped={flipped}
                  onFlip={() => setFlipped((value) => !value)}
                  onAnswer={answer}
                />
              ) : null}
            </div>
          </div>

          <div
            className="shrink-0 px-4 pt-1 pb-4"
            style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}
          >
            <div className="flex gap-3">
              <button onClick={() => answer('learning')} className="btn btn-quiet flex-1">
                Still fuzzy
              </button>
              <button onClick={() => answer('known')} className="btn btn-primary flex-1">
                Got it
              </button>
            </div>
            <p className="mt-3 text-center font-mono text-[11px] tracking-[0.08em] text-(--color-text-faint) uppercase">
              Or swipe the card
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function SessionDone({
  total,
  gotIt,
  onRestart,
}: {
  total: number;
  gotIt: number;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
      <div className="rise">
        <p className="font-mono text-[56px] leading-none font-medium tracking-tight">
          {gotIt}
          <span className="text-(--color-text-faint)">/{total}</span>
        </p>
        <p className="mt-3 text-[17px] text-(--color-text-soft)">
          {gotIt === total
            ? 'Every one. Go tell him.'
            : gotIt === 0
              ? 'All of them go back in the pile. That is what the pile is for.'
              : `${total - gotIt} went back in the pile for next time.`}
        </p>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <button onClick={onRestart} className="btn btn-primary">
          <RotateIcon className="h-4 w-4" />
          Go again
        </button>
        <Link to="/" className="btn btn-quiet">
          Back to decks
        </Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="screen items-center justify-center gap-4 px-8 text-center">
      <p className="text-[17px] text-(--color-text-soft)">That deck does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to decks
      </Link>
    </div>
  );
}
