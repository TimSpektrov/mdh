interface ImageEntity {
  image: string
  alt?: string
}

export interface ImageBlockProps {
  variant: "dark" | "light"
  full?: boolean
  images: ImageEntity[]
}
