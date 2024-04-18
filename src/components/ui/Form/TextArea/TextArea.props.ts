import { TextareaHTMLAttributes } from 'react'

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textError?: string
  textLength?: number
}
