import { StaticImageData } from "next/image"

interface Data { 
  id: number
  name: string
  desc: string
}

export interface StepsProps {
  title: string
  data: Data[]
  image: StaticImageData
};
