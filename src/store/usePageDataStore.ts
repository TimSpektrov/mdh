import { create } from 'zustand';
import { api } from '@/helpers/apiRequests';

interface IUsePageDateStore {
  content: any;
  loading: boolean;
  error: null | Error;
  fetchData: (url: string, page: string) => {};
}

export const usePageDateStore = create<IUsePageDateStore>((set) => ({
  content: null,
  loading: false,
  error: null,
  fetchData: async(url: string, page: string) => {
      set({ loading: true })
      try {
        const response = await api(url)
        set({ content: { [page]: response.data }, error: null })
      } catch (error: any) {
        set({ error: error.message})
      } finally {
        set({ loading: false })
      }
    }
  })
)