import { FC } from 'react';
import styles from './new-typography.module.scss'
import { addNbspParse } from '@/helpers';

interface INewTypography {
  text: string;
  tag?: 'h1' |'h2' |'h3' |'h4' |'h5' |'h6' |'p' | 'span' | 'div';
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h4-alt' | 'p' | 'big-p' | 'p2';
}
export const NewTypography: FC<INewTypography> = ({ text, tag = 'p', variant = 'h2' }) => {
  const Tag = tag;

  return (
    <Tag className={styles[variant]}>{addNbspParse(text)}</Tag>
  )
}