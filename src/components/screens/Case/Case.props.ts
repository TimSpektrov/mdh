import { IWork } from "@/types/IWork";
import { ReactNode } from 'react';
import { bool } from 'yup';

export interface CaseProps {
  data: IWork
}

interface IImageCase {
  "variant": 'light' | 'dark';
  "reverse": boolean,
  "full": boolean,
  "image_url": string,
  "image_alt": string
}

interface ITextCase {
  "variant": 'light' | 'dark';
  "title": string,
  content?: {
    title?: ReactNode;
    description?: ReactNode;
  }[];
  "list"?: {
    "title?": ReactNode,
    "description"?: ReactNode
  }[];
  "data"?: {
    "title"?: string,
    "description"?: string
  }[];
  feedback:               {
    "name": string,
    "position": string,
    "text": ReactNode;
  }
}

interface IGalleryCase {
  "variant": "dark",
  "direction": 'horizontal' | 'vertical',
  images: string[],
}

interface ISliderCase {
  "variant": "dark",
  images: string[],
}

interface IBeforeAfterCase {
  "firstImage": string
  "secondImage": string
}

type ICase = IImageCase | ITextCase | IGalleryCase | ISliderCase | IBeforeAfterCase

interface ICasesFit {
  "hero": {
    animate_image: string; // svg
    bg_images: string[] // до 3 картинок обязательная только первая
  }
  anyArrBlock: ICase[]
}

interface ICaseCSKA {
  "hero": {
    bg_image: string;
    "variant": 'light' | 'dark',
    "imageFront": string;
    "imageBack": string;
  }
}