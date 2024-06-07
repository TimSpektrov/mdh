import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type SelectOption = {
  id: number;
  title: string;
  selected: boolean;
  service?: string
};

export interface SelectState {
  items: SelectOption[];
  selectItem: (id: number) => void;
  unselectItem: () => void;
}

export const projectsList = [
  { id: 0, title: 'Мобильное приложение', selected: false },
  { id: 1, title: 'Веб-сайт', selected: false },
  { id: 2, title: 'Айдентика', selected: false },
  { id: 3, title: 'Печатная продукция', selected: false },
  { id: 4, title: 'Презентация', selected: false },
  { id: 5, title: 'Другое', selected: false },
  { id: 6, title: 'Экспресс UX-аудит', selected: false, service: 'ux-audit' },
  { id: 7, title: 'Комплексный UX-аудит', selected: false, service: 'ux-audit' },
  { id: 8, title: 'Другое', selected: false, service: 'ux-audit' },
  { id: 9, title: 'Айдентика Лайт', selected: false, service: 'identity' },
  { id: 10, title: 'Айдентика Стандарт', selected: false, service: 'identity' },
  { id: 11, title: 'Айдентика Премиум', selected: false, service: 'identity' },
  { id: 12, title: 'Другое', selected: false, service: 'identity' },
];

export const useSelectStore = create<SelectState>()(
  devtools((set) => ({
    items: projectsList,
    selectItem: (id) => {
      set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? ({ ...item, selected: !item.selected } as SelectOption) : { ...item }
          )
        }),
        false,
        'TOGGLE_OPTION'
      );
    },
    unselectItem: () => {
      set((state) => (
        {
          items: state.items.map((item) => (
            { ...item, selected: false }
          ))
        }
      ))
    }
  }))
);
