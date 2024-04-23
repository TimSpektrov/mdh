interface DataType {
  title: string
  description: string
  image: string
}

export interface ProposalProps {
  title: string
  description: string
  data: DataType[]
};
