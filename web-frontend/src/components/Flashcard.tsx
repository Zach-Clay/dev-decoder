import { useEffect, useRef, useState } from 'react';
import type { Card, Deck } from '../lib/cards';
import CardDetail from './CardDetail';

type FlashcardProps = {
  card: Card;
  deck: Deck;
  flipped: boolean;
  onFlip: () => void;
  onAnswer: (status: 'known' | 'learning') => void;
};

/**
 * "AI" and "environment variable" cannot share a type size. Step it down by
 * length so the longest terms still fit the card without breaking mid-word.
 */
function termSize(term: string): string {
  if (term.length <= 6) return 'clamp(2.75rem, 15vw, 4rem)';
  if (term.length <= 11) return 'clamp(2.25rem, 11vw, 3rem)';
  if (term.length <= 17) return 'clamp(1.75rem, 8.5vw, 2.4rem)';
  return 'clamp(1.5rem, 7vw, 2rem)';
}

/** How far a drag has to travel before letting go counts as an answer. */
const COMMIT_DISTANCE = 96;
/** Below this, the gesture was a tap. */
const TAP_SLOP = 8;

export default function Flashcard({ card, deck, flipped, onFlip, onAnswer }: FlashcardProps) {
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState<'known' | 'learning' | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const axisRef = useRef<'undecided' | 'horizontal' | 'vertical'>('undecided');

  // A new card arrives in a clean state, however the last one left.
  useEffect(() => {
    setDragX(0);
    setDragging(false);
    setLeaving(null);
  }, [card.id]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (leaving) return;
    startRef.current = { x: event.clientX, y: event.clientY };
    axisRef.current = 'undecided';
    setDragging(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    if (!start || leaving) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    // Decide once whether this is a swipe or a scroll, then stay committed, so
    // a slightly diagonal drag does not fight the scroll underneath it.
    if (axisRef.current === 'undecided') {
      if (Math.abs(dx) < TAP_SLOP && Math.abs(dy) < TAP_SLOP) return;
      axisRef.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
      if (axisRef.current === 'horizontal') event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (axisRef.current === 'horizontal') setDragX(dx);
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    startRef.current = null;
    setDragging(false);
    if (!start || leaving) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (axisRef.current !== 'horizontal' && Math.abs(dx) < TAP_SLOP && Math.abs(dy) < TAP_SLOP) {
      setDragX(0);
      onFlip();
      return;
    }

    if (Math.abs(dx) > COMMIT_DISTANCE) {
      commit(dx > 0 ? 'known' : 'learning');
      return;
    }

    setDragX(0);
  }

  function commit(status: 'known' | 'learning') {
    setLeaving(status);
    setDragX(status === 'known' ? 600 : -600);
    window.setTimeout(() => onAnswer(status), 220);
  }

  const intent = Math.abs(dragX) > 36 ? (dragX > 0 ? 'known' : 'learning') : null;
  const tilt = dragX / 26;

  return (
    <div className="deal relative h-full w-full select-none">
      {/* Perspective has to sit on the element the card is a direct child of,
          or the drag wrapper flattens the rotation and the flip never shows. */}
      <div
        className="flip-scene h-full w-full"
        style={{
          transform: `translateX(${dragX}px) rotate(${tilt}deg)`,
          transition: dragging ? 'none' : 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1)',
          opacity: leaving ? 0 : 1,
          touchAction: 'pan-y',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className={`flip-inner ${flipped ? 'flip-inner-back' : ''}`}>
          {/* Front: the word as he sees it, in the font he sees it in. */}
          <div
            className="flip-face shadow-lift flex flex-col justify-between rounded-3xl p-6"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: deck.marker }}
              />
              <span className="eyebrow">{deck.name}</span>
            </div>

            <p
              className="font-mono leading-[1.06] font-medium tracking-tight text-balance hyphens-auto"
              style={{ fontSize: termSize(card.term) }}
            >
              {card.term}
            </p>

            <p className="font-mono text-[11px] tracking-[0.1em] text-(--color-text-faint) uppercase">
              Tap to turn over
            </p>
          </div>

          {/* Back: plain English, in something built for reading. */}
          <div
            className="flip-face flip-face-back shadow-lift flex flex-col gap-5 overflow-y-auto rounded-3xl p-6"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: deck.marker }}
              />
              <span className="eyebrow">{card.term}</span>
            </div>
            <CardDetail card={card} revealed={flipped} />
          </div>
        </div>
      </div>

      {/* Verdict stamps. They fade in under your thumb as you drag. */}
      <span
        className="pointer-events-none absolute top-6 left-6 rounded-xl border-2 px-3 py-1 font-mono text-[12px] font-semibold tracking-[0.12em] uppercase transition-opacity duration-150"
        style={{
          color: '#16b894',
          borderColor: '#16b894',
          transform: 'rotate(-8deg)',
          opacity: intent === 'known' ? 1 : 0,
        }}
      >
        Got it
      </span>
      <span
        className="pointer-events-none absolute top-6 right-6 rounded-xl border-2 px-3 py-1 font-mono text-[12px] font-semibold tracking-[0.12em] uppercase transition-opacity duration-150"
        style={{
          color: '#ff6b5a',
          borderColor: '#ff6b5a',
          transform: 'rotate(8deg)',
          opacity: intent === 'learning' ? 1 : 0,
        }}
      >
        Still fuzzy
      </span>
    </div>
  );
}
