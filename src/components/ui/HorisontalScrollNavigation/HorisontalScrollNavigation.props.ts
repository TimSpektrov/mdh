interface Data {
  id: number;
  title: string;
  url: string;
  isActive: boolean;
}

interface INavigation {
  id: number | string;
  name: string;
  slug: string;
  published: boolean;
}
export interface HorisontalScrollNavigationProps {
  navigation?: INavigation[];
  className?: string;
  variant?: 'light' | 'dark';
  position: 'top' | 'bottom';
}
