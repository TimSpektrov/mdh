import { FC, useState } from 'react';
import { BurgerProps } from '.';
import cn from 'classnames'
import style from './Burger.module.scss';

export const Burger: FC<BurgerProps> = ({ className, active, onClick }) => {

  const classes = cn(
    style.burger,
    className,
    active ? style.active : ''
  )
  return (
    <button className={classes} onClick={onClick}></button>
  );
};
