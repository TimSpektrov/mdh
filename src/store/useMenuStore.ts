import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface MenuState {
  showMenu: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<MenuState>()(
  devtools((set) => ({
    showMenu: false,
    toggleMenu: () => set((state) => ({ showMenu: !state.showMenu })),
    closeMenu: () => set(() => ({ showMenu: false }))
  }))
);
