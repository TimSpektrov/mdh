import { StaticImageData } from "next/image"

interface Data { 
  id: number
  title: string
  description: string
}

export interface StepsProps {
  title: string
  data: Data[]
  image_url: string;
  image_alt: string;
}
