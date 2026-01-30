import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import {
  HomePage,
  Conception3DPage,
  ReparabilitePage,
  FlashcardsPage,
  FichesPage,
  QuizPage,
  TinkercadPage,
  CorrectionsFichesPage,
  CorrectionsQuizPage,
  CorrectionsEvaluationsPage,
  NotFoundPage,
} from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Le Layout enveloppe toutes les pages pour garder Header/Footer fixes */}
        <Route path="/" element={<Layout />}>
          {/* REDIRECTION / ACCUEIL : Affiche HomePage par défaut sur "/" */}
          <Route index element={<HomePage />} />

          {/* Routes des Cours */}
          <Route path="cours/conception-3d" element={<Conception3DPage />} />
          <Route path="cours/reparabilite" element={<ReparabilitePage />} />

          {/* Routes des Révisions */}
          <Route path="revisions/flashcards" element={<FlashcardsPage />} />
          <Route path="revisions/fiches" element={<FichesPage />} />
          <Route path="revisions/quiz" element={<QuizPage />} />

          {/* Outils */}
          <Route path="outils/tinkercad" element={<TinkercadPage />} />

          {/* Corrections */}
          <Route
            path="corrections/fiches-activites"
            element={<CorrectionsFichesPage />}
          />
          <Route path="corrections/quiz" element={<CorrectionsQuizPage />} />
          <Route
            path="corrections/evaluations"
            element={<CorrectionsEvaluationsPage />}
          />
          {/* 404 - Page non trouvée */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
