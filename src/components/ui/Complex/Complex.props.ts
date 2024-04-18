interface Data {
  id: number
  name: string
  desc: string
  column: number
}

export interface ComplexProps {
  columnClass?: string
  data: Data[]
  title: string
  wrapClass?: string
  innerClass?: string
};
