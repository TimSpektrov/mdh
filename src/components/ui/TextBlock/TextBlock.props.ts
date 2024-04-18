interface List {
  title?: string,
  desc?: string
}

interface Data {
  title?: string,
  image?: string,
  content?: List[]
}

export interface TextBlockProps {
  color?: "light" | "dark",
  paddingSize?: 'small' | 'medium' | 'large',
  imagePosition?: 'left' | 'right' | 'top' | 'bottom',
  imageFilter?: 'grayscale',
  titlePosition?: 'top' | 'content',
  showButton?: boolean,
  wrapClass?: string,
  mediaClass?: string,
  textClass?: string,
  titleClass?: string,
  buttonClass?: string,
  data?: Data,
  specificClass?: string,
}
