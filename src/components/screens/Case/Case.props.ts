export interface IImageCase {
  variant: 'light' | 'dark';
  reverse: boolean,
  full: boolean,
  image_url: string,
  image_alt: string
  number: number;
}

export interface IInfoCase {
  variant: 'light' | 'dark';
  title: string,
  number: number;
  content?: {
    title?: string;
    description?: string;
  }[];
  list?: {
    title?: string,
    description?: string
  }[];
  data?: {
    title?: string,
    description?: string
  }[];
  feedback?:               {
    name: string,
    position: string,
    text: string;
  }
}

export interface IGalleryCase {
  variant: "dark",
  direction: 'horizontal' | 'vertical',
  images: string[],
  number: number;
}

export interface ISliderCase {
  variant: "dark",
  images: string[],
  number: number;
}

export interface IBeforeAfterCase {
  firstImage: string
  secondImage: string
  number: number;
}

interface IFeedBackEntity {
  name: string
  position?: string
  text: string
}

export interface ITextBlock {
  variant: 'dark' | 'light'
  title?: string
  content?: {
    title?: string;
    description?: string;
  }[]
  feedback: {
    name: string;
    position: string;
    text: string;
  }
}
export type TCaseProps = IImageCaseItem | IInfoCaseItem | IGalleryCaseItem | ISliderCaseItem | IBeforeAfterCaseItem | ITextBlockItem

// interface ICasesFit {
//   "hero": {
//     animate_image: string; // svg
//     bg_images: string[] // до 3 картинок обязательная только первая
//   }
//   anyArrBlock: ICase[]
// }
//
// interface ICaseCSKA {
//   "hero": {
//     bg_image: string;
//     "variant": 'light' | 'dark',
//     "imageFront": string;
//     "imageBack": string;
//   }
// }


export interface CaseProps {
  blocks: TCaseProps[];
  hero: {
    html_code: string;
    video_url: string;
    poster: string;
    show_video: boolean;
  }
}

export interface IImageCaseItem {
  block: IImageCase
  blockShow: boolean;
  blockType: 'ImageBlock'
  id: number;
}

export interface IInfoCaseItem {
  block: IInfoCase
  blockShow: boolean;
  blockType: 'InfoBlock'
  id: number;
}
export interface ITextBlockItem {
  block: ITextBlock
  blockShow: boolean;
  blockType: 'TextBlock'
  id: number;
}

export interface IGalleryCaseItem {
  block: IGalleryCase
  blockShow: boolean;
  blockType: 'GalleryBlock'
  id: number;
}

export interface ISliderCaseItem {
  block: ISliderCase
  blockShow: boolean;
  blockType: 'SliderBlock'
  id: number;
}

export interface IBeforeAfterCaseItem {
  block: IBeforeAfterCase
  blockShow: boolean;
  blockType: 'BeforeAfterBlock'
  id: number;
}

