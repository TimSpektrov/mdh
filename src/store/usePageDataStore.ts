import { create } from 'zustand';
import { api } from '@/helpers/apiRequests';

interface IUsePageDateStore {
  content: any;
  loading: boolean;
  isLoadContent: boolean;
  error: null | Error;
  setIsLoadContent: () => void;
  fetchData: (url: string, page: string) => {};
}

export const usePageDateStore = create<IUsePageDateStore>((set) => ({
  content: null,
  loading: false,
  error: null,
  isLoadContent: false,
  setIsLoadContent: () => {
    set({ isLoadContent: true })
  },
  fetchData: async(url: string, page: string) => {
      set({ loading: true })

      try {
        const response = await api(url)
        set({ content: { [page]: response.data }, error: null })
      } catch (error: any) {

        set({ error: error.message})
      } finally {
        set({ loading: false })
        set({ isLoadContent: false })
      }
    }
  })
)