import { FC } from 'react';
import { TextProps } from '.';
import cn from 'classnames'
import styles from './Text.module.scss';

export const Text: FC<TextProps> = ({
  children, className, color, tag, variant, style
}) => {
  const classes = cn(
    variant ? styles[`${variant}`] : styles.main,
    color ? styles[`${color}`] : styles.dark,
    className,
  )
  const Tag = tag ? tag : 'p'
  return (
    <Tag className={classes} style={style}>{children}</Tag>
  );
};
