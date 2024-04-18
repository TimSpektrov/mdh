import { FC } from 'react';
import { DesignProps } from '.';
import Head from 'next/head';
import cn from 'classnames';
import { Hero } from './Hero';
import { Mockup } from './Mockup';
import { Complex } from '@/components/ui/Complex';
import { Steps } from './Steps';
import { Proposal } from './Proposal';
import { WorksList } from '@/components/ui/WorksList';
import { Callback } from '@/components/ui/Callback';

import complexObj from '@json/complex-design.json';
import stepsObj from '@json/steps-design.json';
import proposalObj from '@json/proposal-design.json';
import stepsImg from '@img/design/design-steps.jpg';

import style from './Design.module.scss';
import { Feedback } from '@/components/ui/Feedback';

export const Design: FC<DesignProps> = ({ works }) => {
  
  return (
    <>
      <Head>
        <title>Разработка дизайна сайта в Москве — заказать веб дизайн сайта в MDH</title>
        <meta name="description" content="Разработка веб-дизайна сайта в Москве по выгодным ценам. Создание дизайна сайта по прототипам или макетам, прорисовка стиля всех страниц сайта." />
      </Head>
      <Hero />
      <Mockup />
      <div className={style.sectionGroup}>
        
        <div className={cn(style.pattern, style.patternTop)}></div>
        
        <div className={cn(style.pattern, style.patternRight)}></div>
        
        <Complex
          wrapClass={style.complex}
          columnClass={style.column}
          title={'Используем комплексный подход для достижения ваших <span>целей</span>'}
          data={complexObj}
        />
        
        <Steps
          data={stepsObj}
          title='Как создается дизайн продукта'
          image={stepsImg}
        />

      </div>
      <Proposal
        title={
          <>
            <span>Делаем всё,</span> чтобы продукт стал частью жизни пользователей
          </>
        }
        desc='Для проекта мы собираем команду специалистов на каждый этап работы. Вам не нужно тратить время и ресурсы для дополнительного поиска сотрудников. Наша команда полностью покроет весь список задач по проекту.'
        data={proposalObj}
      />
      <Callback background='light-dark'/>
      <WorksList dark works={works} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback/>
    </>
  );
};
