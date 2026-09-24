import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Flashcard from './Flashcard';
import { DECKS, type Card } from '../lib/cards';

const card: Card = {
  id: 'api',
  deckId: 'web',
  term: 'API',
  gist: 'how two programs talk',
  plain: 'A defined set of requests one program can make to another.',
  heard: 'Their API is down.',
};

const deck = DECKS.find((entry) => entry.id === 'web')!;

function setup(overrides: Partial<React.ComponentProps<typeof Flashcard>> = {}) {
  const onFlip = vi.fn();
  const onAnswer = vi.fn();
  render(
    <Flashcard
      card={card}
      deck={deck}
      flipped={false}
      onFlip={onFlip}
      onAnswer={onAnswer}
      {...overrides}
    />,
  );
  return { onFlip, onAnswer };
}

describe('Flashcard', () => {
  it('shows the term and the deck it came from', () => {
    setup();
    // Twice on purpose: large on the front, and as a reminder on the back.
    expect(screen.getAllByText('API')).toHaveLength(2);
    expect(screen.getByText(deck.name)).toBeInTheDocument();
  });

  it('renders the answer side so a flip has something to reveal', () => {
    setup();
    expect(screen.getByText(card.gist)).toBeInTheDocument();
    expect(screen.getByText(card.plain)).toBeInTheDocument();
    expect(screen.getByText(card.heard)).toBeInTheDocument();
  });

  it('flips on a tap', async () => {
    const { onFlip, onAnswer } = setup();
    await userEvent.click(screen.getAllByText('API')[0]);
    expect(onFlip).toHaveBeenCalledTimes(1);
    expect(onAnswer).not.toHaveBeenCalled();
  });

  it('keeps both verdict stamps hidden until the card is dragged', () => {
    setup();
    expect(screen.getByText('Got it')).toHaveStyle({ opacity: '0' });
    expect(screen.getByText('Still fuzzy')).toHaveStyle({ opacity: '0' });
  });
});
