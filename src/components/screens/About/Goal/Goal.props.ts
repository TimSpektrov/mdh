interface IGoalItem {
  id: number;
  title: string;
  description: string;
}
export interface GoalProps {
  title?: string;
  list: IGoalItem[];
}
