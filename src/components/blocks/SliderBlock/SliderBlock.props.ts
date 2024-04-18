interface ImageEntity {
  image: string
  alt?: string
}

export interface SliderBlockProps {
  variant: 'dark' | 'light'
  images: ImageEntity[]
}
