import { useState } from 'react';
import { ShareIcon } from './Icons';

const STORAGE_KEY = 'skb.installHint.dismissed.v1';

function shouldShow(): boolean {
  if (typeof navigator === 'undefined') return false;

  // Already added to the home screen, so there is nothing to suggest.
  const standalone =
    window.matchMedia?.('(display-mode: standalone)').matches ||
    (navigator as { standalone?: boolean }).standalone === true;
  if (standalone) return false;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (!isIOS) return false;

  try {
    return localStorage.getItem(STORAGE_KEY) !== '1';
  } catch {
    return true;
  }
}

/**
 * Safari on iOS gives no install prompt of its own, so the only way this ends
 * up on her home screen with an icon is if someone says how. Shown once.
 */
export default function InstallHint() {
  const [visible, setVisible] = useState(shouldShow);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // It will offer again next time. Not the end of the world.
    }
    setVisible(false);
  }

  return (
    <div className="mt-6 rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface-sunk)' }}>
      <p className="text-[14px] leading-relaxed text-(--color-text-soft)">
        Keep this on your home screen: tap <ShareIcon className="inline h-4 w-4 -translate-y-px" />{' '}
        in Safari, then <span className="font-medium text-(--color-text)">Add to Home Screen</span>.
      </p>
      <button onClick={dismiss} className="mt-3 text-[14px] font-semibold text-(--color-accent)">
        Got it
      </button>
    </div>
  );
}
