import { FC } from 'react';
import styles from './new-typography.module.scss'
import parse from 'html-react-parser';
import { addNbsp } from '@/helpers';

interface INewTypography {
  text: string;
  tag?: 'h1' |'h2' |'h3' |'h4' |'h5' |'h6' |'p' | 'span' | 'div';
  variant: 'h2' | 'h3' | 'h4' | 'p';
}
export const NewTypography: FC<INewTypography> = ({ text, tag = 'p', variant = 'h2' }) => {
  const Tag = tag;

  return (
    <Tag className={styles[variant]}>{parse(addNbsp(text))}</Tag>
  )
}