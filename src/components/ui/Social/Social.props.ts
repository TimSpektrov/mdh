interface SocialItem {
  // id: number
  name: string
  url: string
  // showHeader: boolean
  // showFeedback: boolean
  // showFooter: boolean
}

export interface SocialProps {
  className?: string
  links: SocialItem[]
  color: 'dark'|'light'
}
