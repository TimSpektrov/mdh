interface Data {
  id: number
  title: string
  description: string
  column?: number
}

export interface ComplexProps {
  columnClass?: string
  data: Data[]
  title: string
  wrapClass?: string
  innerClass?: string
};
