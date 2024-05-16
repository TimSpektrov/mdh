interface dataItem {
  id: number,
  value: string
  selected: boolean
}

export interface SelectProps {
  data?: dataItem[]
  textError?: string
};
