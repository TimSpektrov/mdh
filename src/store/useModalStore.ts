import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ModalState {
  showModal: boolean,
  toggleModal: () => void
}

export const useModalStore = create<ModalState>() (
  devtools(
    (set) => ({
      showModal: false,
      toggleModal: () => set((state) => ({ showModal: !state.showModal}))
    })
  )
)
