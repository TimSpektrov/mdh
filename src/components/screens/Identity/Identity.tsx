import { FC } from 'react';
import Head from 'next/head';
import { Hero } from './Hero';
import { Hero as NewHero } from '@/components/servicesBlocks/Hero'

import { Structure } from "./Structure";
import { Complex } from '@/components/ui/Complex';
import { Tariff } from './Tariff';
import { Callback } from '@/components/oldComponents/Callback';
import style from './Identity.module.scss'
import { IRate } from '@/types/type';
import { WorksList } from '@/components/oldComponents/WorksList';
import { Feedback } from '@/components/oldComponents/Feedback';
import { WorksListSection as WorkListSection } from '@/components/servicesBlocks/WorksListSection';

export const Identity: FC<any> = ({content}) => {
  console.log(content);
  const localContent = {
    hero: {
      title: 'Айдентика',
      description: '<span>Исследуем</span>  рынок, конкурентов, специфику бизнеса.  <span>Создаем</span> целостный визуальный образ вашей компании.  <span>Разрабатываем</span> фирменный стиль, логотип и другие элементы айдентики.  <span>Повышаем</span> узнаваемость бренда.'
    },
    workListSection: {
      title: 'Транслируем ваши ценности через визуальный стиль',
      list: [
        {
          id: 1,
          title: 'Логотип',
          description: 'Сформируем яркий имидж бренда в глазах вашей аудитории',
          image1: '/assets/images/identity/workListSection/1.jpg',
          image2: '/assets/images/identity/workListSection/2.jpg',
        },
        {
          id: 2,
          title: 'Фирменный стиль',
          description: 'Поможем вашему бренду выделиться среди конкурентов',
          image1: '/assets/images/identity/workListSection/3.jpg',
          image2: '/assets/images/identity/workListSection/4.jpg',
        },
        {
          id: 3,
          title: 'Руководство по использованию',
          description: 'Создадим подробную инструкцию, как правильно использовать логотип, сочетать фирменные цвета, шрифты и другие элементы стиля',
          image1: '',
          image2: '/assets/images/identity/workListSection/6.jpg',
        },

      ]
    }
  }
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.title} />
      </Head>
      {/*<Hero title={content.hero.title} description={content.hero.description} itemList={content.hero.items.split('\r\n')} />*/}
      <NewHero title={localContent.hero.title} description={localContent.hero.description}  specificClass={'identity-page'}/>
      <Structure title={content.structure.title} image={content.structure.image} items={content.structure.items} />
      <WorkListSection
        title={localContent.workListSection.title}
        list={localContent.workListSection.list}
      />
      <Complex
        title={content.advantages.text}
          data={content.advantages.items}
        innerClass={style.complexInner}
      />

      <Tariff title={content.tariff.title} rates={content.tariff.rates.sort((a: IRate, b: IRate) => a.uniqueId - b.uniqueId)} description={content.tariff.description} />
      <Callback background='light' className={style.callback} />
      {/*<WorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'identity-page'}*/}
      {/*  writeBtn*/}
      {/*/>*/}
      <WorksList dark works={content.works} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback />
    </>
  );
};
