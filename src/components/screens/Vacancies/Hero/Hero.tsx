import { Title } from '@/components/ui/Typography';
import { FC } from 'react';
import { HeroProps } from '.';
import style from './Hero.module.scss';
import { addNbspParse } from '@/helpers';

export const Hero: FC<HeroProps> = ({title, description}) => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1 className='invisible'>Вакансии</h1>
        <Title variant='h1' color='light' accent='orange' className={style.title}>{addNbspParse(title)}</Title>
        <Title variant='subline' color='light' className={style.subtitle}>{addNbspParse(description)}</Title>
      </div>
    </section>
  );
};


