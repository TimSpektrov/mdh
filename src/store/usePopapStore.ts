import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface PopapState {
  showPopup: boolean
  successPopup: boolean
  sendingPopup: boolean
  warningPopup: boolean
  closePopup: () => void
  isSending: () => void
  isSuccess: () => void
  isWarning: () => void
}

export const usePopupStore = create<PopapState>()(
  devtools(
    (set) => ({
      showPopup: false,
      sendingPopup: false,
      successPopup: false,
      warningPopup: false,
      isSending: () => set(() => ({
        sendingPopup: true,
        successPopup: false,
        warningPopup: false,
        showPopup: true,
      })),
      isSuccess: () => set(() => ({
        sendingPopup: false,
        successPopup: true,
        warningPopup: false,
        showPopup: true,
      })),
      isWarning: () => set(() => ({
        sendingPopup: false,
        successPopup: false,
        warningPopup: true,
        showPopup: true,
      })),
      closePopup: () => set(() => ({
        showPopup: false,
        successPopup: false,
        warningPopup: false,
        sendingPopup: false
      }))
    })
  )
)
