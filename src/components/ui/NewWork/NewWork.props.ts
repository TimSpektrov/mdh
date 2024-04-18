import { ITag } from "@/types/ITag";

export interface NewWorkProps {
  className?: string,
  light?: boolean,
  title?: string,
  desc?: string,
  image?: any,
  tags?: ITag[],
  index?: number,
  slug?: string
};
