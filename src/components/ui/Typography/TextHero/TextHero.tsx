import styles from './text-hero.module.scss';
import parse from 'html-react-parser';
import cn from 'classnames';
import { FC } from 'react';
import { addNbsp } from '@/helpers';

interface ITextHero {
  text: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  tag: 'p' | 'div' | 'h2' | 'h3' | 'h4';
  font?: 'rubik' | 'grandis' | 'grandis-extended'
}
export const TextHero: FC<ITextHero> = ({text, size = 'p', tag = 'div', font = 'rubik'}) => {
  const Tag = tag;

  return (
      // <Tag className={styles['hero__description-text']} style={{'--colorSpan':color} as Partial<IHero>}>{parse(description)}</Tag>
      <Tag
        className={cn(
          styles['TextHero'],
          styles[font],
          styles[size]
          )}
      >{parse(addNbsp(text))}</Tag>
  )
}