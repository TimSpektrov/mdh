interface ContentEntity { 
  title?: string
  desc?: string
}

interface FeedBackEntity {
  name: string
  position?: string
  text: string
}

export interface TextBlockProps {
  variant: 'dark' | 'light'
  title?: string
  content?: ContentEntity[]
  feedback?: FeedBackEntity[]
}
