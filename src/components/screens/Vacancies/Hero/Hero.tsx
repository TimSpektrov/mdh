import { Title } from '@/components/ui/Typography';
import { FC } from 'react';
import { HeroProps } from '.';
import style from './Hero.module.scss';

export const Hero: FC<HeroProps> = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1 className='invisible'>Вакансии</h1>
        <Title variant='h1' color='light' accent='orange' className={style.title}>Нам важно, чтобы каждый специалист чувствовал себя <span>на&nbsp;своём месте</span></Title>
        <Title variant='subline' color='light' className={style.subtitle}>Мы создаём условия для&nbsp;развития, совершенствования и&nbsp;реализации творческого и&nbsp;профессионального потенциала.</Title>
      </div>
    </section>
  );
};
