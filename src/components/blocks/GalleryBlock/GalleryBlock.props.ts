interface ImageEntity {
  image: string
  alt?: string
}

export interface GalleryBlockProps {
  direction: 'vertical' | 'horizontal'
  variant: 'dark' | 'light'
  images: ImageEntity[]
}
