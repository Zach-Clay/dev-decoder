import type { Card } from '../lib/cards';

type CardDetailProps = {
  card: Card;
  /** Drives the highlighter stroke. Off until the card is actually visible. */
  revealed?: boolean;
  compact?: boolean;
};

/**
 * The answer side of a term. The type shifts register on purpose: the word is
 * set in the font he writes code in, the explanation is set in something meant
 * for reading. The flip is the translation.
 */
export default function CardDetail({ card, revealed = true, compact = false }: CardDetailProps) {
  return (
    <div className={compact ? 'space-y-3' : 'space-y-4'}>
      <p className={`font-mono font-medium tracking-tight ${compact ? 'text-[15px]' : 'text-lg'}`}>
        <span className={`highlight ${revealed ? 'highlight-on' : ''}`}>{card.gist}</span>
      </p>

      <p
        className={`font-read ${
          compact ? 'text-[16px] leading-[1.55]' : 'text-[19px] leading-[1.5]'
        }`}
      >
        {card.plain}
      </p>

      <p
        className={`font-read border-l-2 pl-3 text-(--color-text-soft) italic ${
          compact ? 'text-[14px]' : 'text-[15px]'
        }`}
        style={{ borderColor: 'var(--color-rule)' }}
      >
        {card.heard}
      </p>
    </div>
  );
}
