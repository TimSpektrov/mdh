import { ITag } from "./ITag"
import { HeroCskaBlockProps, HeroFitServiceBlockProps } from "@/components/screens/Case/HeroBlock"
import { InfoBlockProps } from "@/components/blocks/InfoBlock"
import { TextBlockProps } from "@/components/blocks/TextBlock"
import { ImageBlockProps } from "@/components/blocks/ImageBlock"
import { SliderBlockProps } from "@/components/blocks/SliderBlock"
import { GalleryBlockProps } from "@/components/blocks/GalleryBlock"

type BlockType =
  'InfoBlock' |
  'TextBlock' |
  'BeforeAfterBlock' |
  'SliderBlock' |
  'ImageBlock' |
  'GalleryBlock'

interface IBlocks {
  blockType: BlockType
  blockShow: boolean
  block: InfoBlockProps & TextBlockProps & SliderBlockProps & ImageBlockProps & GalleryBlockProps & {
    firstImage: string,
    secondImage: string
  }
}

interface HeroEntity extends HeroCskaBlockProps, HeroFitServiceBlockProps {
  blockShow: boolean
}

export interface IWork {
  id?: string,
  title?: string,
  desc?: string,
  tags?: ITag[],
  image?: any,
  light?: boolean,
  showHome?: boolean,
  showAbout?: boolean,
  showDesign?: boolean,
  showIdentity?: boolean,
  published?: boolean,
  slug?: string
  seoTitle?: string,
  seoDesc?: string,
  className?: string,
  index?: number,

  pageContent?: IBlocks[],
  pageHero?: HeroEntity,
  seoHeading?: string
}
