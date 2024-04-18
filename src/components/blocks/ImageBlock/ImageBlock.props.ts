interface ImageEntity {
  image: string
  alt?: string
}

export interface ImageBlockProps {
  variant: 'dark' | 'light'
  reverse: boolean
  full?: boolean
  images: ImageEntity[]
}
