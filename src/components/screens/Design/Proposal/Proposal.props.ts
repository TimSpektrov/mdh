import { ImageLoader, ImageProps, StaticImageData } from "next/image"

interface DataType {
  id: number
  name: string
  desc: string
  image: StaticImageData | string
}

export interface ProposalProps {
  title: React.ReactNode
  desc: string
  data: DataType[]
};
