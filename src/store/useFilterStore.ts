import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FilterState {
  showFilter: boolean;
  openFilter: () => void;
  closeFilter: () => void;
  filterPosition: number
  setFilterPosition: (num: number) => void
}

export const useFilterStore = create<FilterState>()(
  devtools((set) => ({
    showFilter: false,
    filterPosition: 0,
    openFilter: () => set(() => ({ showFilter: true })),
    closeFilter: () => set(() => ({ showFilter: false })),
    setFilterPosition: (num) => set(() => ({filterPosition: num}))
  }))
);
