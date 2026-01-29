import { create } from 'zustand';

interface AppState {
  // Navigation mobile
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Scroll actif (pour highlight nav)
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation mobile
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Section active
  activeSection: '',
  setActiveSection: (section) => set({ activeSection: section }),
}));
