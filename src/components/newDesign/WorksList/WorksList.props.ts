import { IWork } from '@/types/IWork'

export interface WorksListProps {
  works: IWork[];
  wrapClass?: string;
  itemClass?: string;
  dark?: boolean;
  writeBtn?: boolean;
  moreBtn?: boolean;
}
