// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* C'est ici que les pages s'injectent */}
      </main>
      <Footer />
    </div>
  );
}
