interface ContentEntity {
  title?: string
  desc?: string
}

interface ListEntity {
  title?: string
  desc?: string
}

interface DataEntity {
  title?: string
  desc?: string
}

export interface InfoBlockProps {
  variant: 'dark' | 'light'
  title?: string
  content?: ContentEntity[]
  list?: ListEntity[]
  data?: DataEntity[]
}
