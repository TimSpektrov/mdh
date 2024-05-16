import { CSSProperties } from "react";

export interface IconProps {
  className?: string,
  style?: CSSProperties | undefined
  size?: number
  name?: 'book' | 'check' | 'lock' | 'watch' | 'arrow-up' | 'arrow-down' | 'checkbox-unchecked' | 'checkbox-checked' | 'close' | 'warning' | 'success'
  onClick?: () => void
};
