import { create } from 'zustand';
import { api, CONTACTS_URL } from '@/helpers/apiRequests';

interface IUseContactsDateStore {
  contacts: any;
  loading: boolean;
  error: null | Error;
  fetchContacts: () => {};
}

export const useContactsDateStore = create<IUseContactsDateStore>((set) => ({
    contacts: null,
    loading: false,
    error: null,
    fetchContacts: async() => {
      set({ loading: true })
      try {
        const response = await api(CONTACTS_URL)
        set({ contacts:response.data, error: null })
      } catch (error: any) {
        set({ error: error.message})
      } finally {
        set({ loading: false })
      }
    }
  })

)