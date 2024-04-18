import { CSSProperties } from "react"

export interface TitleProps {
  className?: string
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subline'
  color?: 'light' | 'dark' | 'white' | 'orange'
  accent?: 'orange' | 'mint'
  style?: CSSProperties | undefined
};
