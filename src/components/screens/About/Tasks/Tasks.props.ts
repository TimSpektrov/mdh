interface ITasksItemProps {
  "id": string | number;
  "title": string;
  "desc": string;
  "image": string;
}
export interface TasksProps {
  title?: string;
  list: ITasksItemProps[];
}
