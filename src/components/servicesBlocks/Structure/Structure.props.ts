interface StructurePropsItem {
  id: string | number;
  title: string;
  description: string;
}
export interface StructureProps {
  title: string;
  image: string;
  items: StructurePropsItem[]
}
