export interface HeroCskaBlockProps {
  background?: string;
  imageFront?: string;
  imageBack?: string;
  variant?: 'light' | 'dark';
}

interface ImageEntity {
  image: string,
  alt?: string
}

export interface HeroFitServiceBlockProps {
  images?: ImageEntity[]
  autoImage?: string
}
