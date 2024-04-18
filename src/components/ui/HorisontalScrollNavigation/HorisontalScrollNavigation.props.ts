interface Data {
  id: number;
  title: string;
  url: string;
  isActive: boolean;
}

export interface HorisontalScrollNavigationProps {
  navigation?: Data[];
  className?: string;
  variant?: 'light' | 'dark';
  position: 'top' | 'bottom';
}
