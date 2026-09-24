import { useEffect, useRef, useState, type ReactNode } from 'react';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

/**
 * iOS large-title behaviour: the big title sits in the content and scrolls
 * away, at which point the compact title fades into the bar above it. It is
 * the single clearest signal that this is an app and not a web page.
 */
export default function ScreenHeader({ title, subtitle, action }: ScreenHeaderProps) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => setCollapsed(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="bar sticky top-0 z-20 -mx-4 px-4"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex h-11 items-center justify-between gap-3">
          <span
            className="truncate text-[17px] font-semibold transition-opacity duration-200"
            style={{ opacity: collapsed ? 1 : 0 }}
          >
            {title}
          </span>
          <span className="shrink-0">{action}</span>
        </div>
        <div
          className="h-px transition-opacity duration-200"
          style={{ backgroundColor: 'var(--color-rule)', opacity: collapsed ? 1 : 0 }}
        />
      </div>

      <div className="pt-3 pb-4">
        <h1 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em]">{title}</h1>
        {subtitle ? (
          <p className="mt-1.5 text-[15px] text-(--color-text-soft)">{subtitle}</p>
        ) : null}
      </div>
      <div ref={sentinel} className="h-px" />
    </>
  );
}
