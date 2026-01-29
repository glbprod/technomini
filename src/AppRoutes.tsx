import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
// Importe les autres pages au fur et à mesure de leur création
// import Conception3DPage from './pages/Conception3DPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'cours/conception-3d',
        element: <div className="p-20">Page Conception 3D (Placeholder)</div>,
      },
      {
        path: 'cours/reparabilite',
        element: <div className="p-20">Page Réparabilité (Placeholder)</div>,
      },
      {
        path: 'revisions/flashcards',
        element: <div className="p-20">Page Flashcards (Placeholder)</div>,
      },
      {
        path: 'outils/tinkercad',
        element: <div className="p-20">Page Tinkercad (Placeholder)</div>,
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
