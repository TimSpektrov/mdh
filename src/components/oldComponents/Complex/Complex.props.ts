interface Data {
  id: number
  name: string
  desc: string
  column: string
}

export interface ComplexProps {
  columnClass?: string
  data: Data[]
  title: React.ReactNode
  wrapClass?: string
  innerClass?: string
};
