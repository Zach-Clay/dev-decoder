import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './layouts/AppShell';
import DecksPage from './pages/DecksPage';
import BrowsePage from './pages/BrowsePage';
import ProgressPage from './pages/ProgressPage';
import StudyPage from './pages/StudyPage';
import { startTheme } from './hooks/useTheme';
import './styles/index.css';

startTheme();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Tabbed screens. */}
      <Route path="/" element={<AppShell />}>
        <Route index element={<DecksPage />} />
        <Route path="browse" element={<BrowsePage />} />
        <Route path="progress" element={<ProgressPage />} />
      </Route>

      {/* A session takes the whole screen, with no tab bar to escape to. */}
      <Route path="/study" element={<StudyPage />} />
      <Route path="/study/:deckId" element={<StudyPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
);
