import { useSyncExternalStore } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'skb.theme.v1';

function read(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    // Blocked storage. Following the phone is a fine default.
  }
  return 'system';
}

let preference: ThemePreference | null = null;
const listeners = new Set<() => void>();

function current(): ThemePreference {
  if (preference === null) preference = read();
  return preference;
}

function prefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

/** Toggling the class on <html> is what every dark-mode style keys off. */
function apply(): void {
  const value = current();
  const dark = value === 'dark' || (value === 'system' && prefersDark());
  document.documentElement.classList.toggle('dark', dark);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? '#0e0d13' : '#f2f1f7');
}

export function setThemePreference(next: ThemePreference): void {
  preference = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // It just will not stick between visits.
  }
  apply();
  listeners.forEach((listener) => listener());
}

/**
 * Applies the theme once on load and keeps following the phone while the
 * preference is "system", which is what iOS users expect after sundown.
 */
export function startTheme(): void {
  apply();
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', apply);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useThemePreference(): ThemePreference {
  return useSyncExternalStore(subscribe, current, current);
}
