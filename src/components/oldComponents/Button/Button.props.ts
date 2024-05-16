export interface ButtonProps {
  children?: React.ReactNode;
	onClick?: () => void;
	className?: string;
	large?: boolean,
  secondary?: boolean,
	color?: 'white'|'orange',
  disabled?: boolean,
	active?: boolean,
  href?: string,
  target?: string
};
