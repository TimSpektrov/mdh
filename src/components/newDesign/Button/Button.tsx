import { addNbspParse } from '@/helpers';
import { FC } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

interface IButton {
  text: string;
  variant: 'orange' |
    'transparent-orange' |
    'yellow' |
    'transparent-yellow' |
    'blue' |
    'transparent-blue' |
    'black' |
    'transparent-black';
}
export const Button:FC<IButton >= ({text, variant}) => {
  return (
    <button
      className={cn(
        styles.btn,
        styles[variant]
      )}
    >{addNbspParse(text)}</button>
  )
}