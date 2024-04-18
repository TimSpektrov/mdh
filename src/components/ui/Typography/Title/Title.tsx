import { FC } from 'react';
import { TitleProps } from '.';
import cn from 'classnames'
import styles from './Title.module.scss';

export const Title: FC<TitleProps> = ({ className, children, variant, color, accent , style}) => {


  const classes = cn(
    variant ? styles[`${variant}`] : styles.h2,
    color ? styles[`${color}`] : styles.dark,
    accent && styles[`${accent}`],
    className
  )

  return (
    <div className={classes} style={style}>{children}</div>
  );
};
