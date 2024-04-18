import { CSSProperties } from "react"

export interface TextProps {
  className?: string
  children: React.ReactNode
  variant?: 'main' | 'small'
  tag?: 'p' | 'span' | 'div' | 'li'
  color?: 'light' | 'dark' | 'gray'
  style?: CSSProperties | undefined
};
