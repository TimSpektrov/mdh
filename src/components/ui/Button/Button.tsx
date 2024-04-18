import { FC } from 'react';
import { ButtonProps } from '.';
import cn from 'classnames';
import style from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  children = 'Кнопка',
  onClick,
  disabled = false,
  active = false,
  large = false,
  color,
  secondary,
  href,
  className,
  ...attrs
}) => {

  const classes = cn(
    style.btn,
    secondary && style['btn--secondary'],
    color ? style[`btn--${color}`] : '',
    large && style['btn--large'],
    disabled && style['btn--disabled'],
    className,
    { active },
  );

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClick}
      href={href}
      {...attrs}
    >{children}</Tag>
  );
}
