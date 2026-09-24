import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScreenHeader from '../components/ScreenHeader';
import ProgressRing from '../components/ProgressRing';
import { ChevronIcon } from '../components/Icons';
import { ALL_CARDS, DECKS, cardsInDeck } from '../lib/cards';
import { tally } from '../lib/progress';
import { resetAllProgress, useProgress } from '../hooks/useProgress';
import { setThemePreference, useThemePreference, type ThemePreference } from '../hooks/useTheme';

const THEMES: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'Auto' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export default function ProgressPage() {
  const progress = useProgress();
  const preference = useThemePreference();
  const [confirming, setConfirming] = useState(false);

  const overall = tally(ALL_CARDS, progress);
  const percent = Math.round(overall.fraction * 100);

  return (
    <>
      <ScreenHeader title="Progress" subtitle="What has stuck so far." />

      <div
        className="shadow-soft flex items-center gap-5 rounded-3xl p-5"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <ProgressRing value={overall.fraction} color="var(--color-accent)" size={72} />
        <div className="min-w-0">
          <p className="font-mono text-[30px] leading-none font-medium tracking-tight">
            {percent}%
          </p>
          <p className="mt-1.5 text-[14px] leading-snug text-(--color-text-soft)">
            {overall.known} known · {overall.learning} fuzzy · {overall.unseen} not seen yet
          </p>
        </div>
      </div>

      <p className="eyebrow mt-7 mb-2 px-1">By deck</p>
      <div className="inset-list">
        {DECKS.map((deck) => {
          const counts = tally(cardsInDeck(deck.id), progress);
          return (
            <Link key={deck.id} to={`/study/${deck.id}`} className="inset-row">
              <span className="min-w-0 flex-1">
                <span className="mb-1.5 flex items-baseline justify-between gap-3">
                  <span className="truncate text-[15px] font-medium">{deck.name}</span>
                  <span className="shrink-0 font-mono text-[12px] text-(--color-text-faint)">
                    {counts.known}/{counts.total}
                  </span>
                </span>
                <span
                  className="block h-1.5 overflow-hidden rounded-full"
                  style={{ backgroundColor: 'var(--color-rule)' }}
                >
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${counts.fraction * 100}%`,
                      backgroundColor: deck.marker,
                      transition: 'width 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </span>
              </span>
              <ChevronIcon className="h-4 w-4 shrink-0 text-(--color-text-faint)" />
            </Link>
          );
        })}
      </div>

      <p className="eyebrow mt-7 mb-2 px-1">Appearance</p>
      <div
        className="flex gap-1 rounded-xl p-1"
        style={{ backgroundColor: 'var(--color-surface-sunk)' }}
      >
        {THEMES.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setThemePreference(theme.value)}
            className="flex-1 rounded-lg py-2 text-[14px] font-medium transition-colors"
            style={
              preference === theme.value
                ? { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)' }
                : { color: 'var(--color-text-faint)' }
            }
          >
            {theme.label}
          </button>
        ))}
      </div>

      <p className="eyebrow mt-7 mb-2 px-1">Start over</p>
      <div className="inset-list">
        {confirming ? (
          <div className="px-4 py-3">
            <p className="text-[14px] text-(--color-text-soft)">
              This forgets every card you have marked. The terms stay put.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setConfirming(false)}
                className="flex-1 rounded-xl py-2.5 text-[15px] font-semibold"
                style={{ backgroundColor: 'var(--color-surface-sunk)' }}
              >
                Keep it
              </button>
              <button
                onClick={() => {
                  resetAllProgress();
                  setConfirming(false);
                }}
                className="flex-1 rounded-xl py-2.5 text-[15px] font-semibold text-white"
                style={{ backgroundColor: '#ff6b5a' }}
              >
                Reset progress
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirming(true)} className="inset-row">
            <span className="flex-1 text-[16px]" style={{ color: '#ff6b5a' }}>
              Reset progress
            </span>
          </button>
        )}
      </div>
    </>
  );
}
