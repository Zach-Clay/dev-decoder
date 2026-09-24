import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import StudyPage from './StudyPage';
import { cardsInDeck } from '../lib/cards';
import { loadProgress } from '../lib/progress';
import { __resetProgressStore } from '../hooks/useProgress';

function renderSession(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/study/:deckId" element={<StudyPage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/" element={<p>Decks</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('StudyPage', () => {
  beforeEach(() => {
    localStorage.clear();
    __resetProgressStore();
  });

  it('counts the whole deck in the session', () => {
    renderSession('/study/security');
    const total = cardsInDeck('security').length;
    expect(screen.getByText(`1/${total}`)).toBeInTheDocument();
  });

  it('records a card as known and moves on', async () => {
    renderSession('/study/security');
    await userEvent.click(screen.getByRole('button', { name: 'Got it' }));

    expect(screen.getByText(`2/${cardsInDeck('security').length}`)).toBeInTheDocument();
    expect(Object.values(loadProgress())).toContain('known');
  });

  it('records a card as still fuzzy', async () => {
    renderSession('/study/security');
    await userEvent.click(screen.getByRole('button', { name: 'Still fuzzy' }));
    expect(Object.values(loadProgress())).toContain('learning');
  });

  it('caps a quick study at ten cards', () => {
    renderSession('/study');
    expect(screen.getByText('1/10')).toBeInTheDocument();
  });

  it('sums up the session at the end', async () => {
    renderSession('/study/security');
    const total = cardsInDeck('security').length;
    for (let i = 0; i < total; i += 1) {
      await userEvent.click(screen.getByRole('button', { name: 'Got it' }));
    }

    expect(screen.getByRole('button', { name: /go again/i })).toBeInTheDocument();
    expect(screen.getByText(`/${total}`)).toBeInTheDocument();
  });

  it('explains itself when the deck does not exist', () => {
    renderSession('/study/not-a-deck');
    expect(screen.getByText(/that deck does not exist/i)).toBeInTheDocument();
  });
});

describe('session header', () => {
  beforeEach(() => {
    localStorage.clear();
    __resetProgressStore();
  });

  it('names the deck being studied', () => {
    renderSession('/study/slang');
    // Once in the header, once as the card's own label.
    expect(screen.getAllByText('Pure slang').length).toBeGreaterThan(0);
  });

  it('leaves the session when the close button is used', async () => {
    renderSession('/study/slang');
    await userEvent.click(screen.getByRole('button', { name: /close session/i }));
    expect(screen.getByText('Decks')).toBeInTheDocument();
  });
});
