import { useSyncExternalStore } from 'react';
import { loadProgress, saveProgress, type CardStatus, type Progress } from '../lib/progress';

/**
 * One module-level store rather than context, so any screen can read progress
 * without the whole tree being wrapped and re-rendered by a provider.
 */
let snapshot: Progress | null = null;
const listeners = new Set<() => void>();

function current(): Progress {
  if (snapshot === null) snapshot = loadProgress();
  return snapshot;
}

function emit(next: Progress) {
  snapshot = next;
  saveProgress(next);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, current, current);
}

export function markCard(cardId: string, status: CardStatus): void {
  emit({ ...current(), [cardId]: status });
}

export function resetAllProgress(): void {
  emit({});
}

/** Test-only: drop the cached snapshot so the next read hits storage again. */
export function __resetProgressStore(): void {
  snapshot = null;
  listeners.forEach((listener) => listener());
}
