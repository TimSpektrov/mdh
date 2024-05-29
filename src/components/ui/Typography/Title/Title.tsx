import { FC } from 'react';
import { TitleProps } from '.';
import cn from 'classnames'
import styles from './Title.module.scss';

export const Title: FC<TitleProps> = ({ className, children, variant, color = 'dark', accent , style}) => {


  const classes = cn(
    variant ? styles[`${variant}`] : styles.h2,
    color ? styles[`color-${color}`] : styles.dark,
    accent && styles[`accent-${accent}`],
    className
  )

  return (
    <div className={classes} style={style}>{children}</div>
  );
};
