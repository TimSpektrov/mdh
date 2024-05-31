import { FC } from 'react';
import style from './Identity.module.scss'
import Head from 'next/head';
// import { Hero } from './Hero';
import { Hero } from '@/components/servicesBlocks/Hero'
// import { Structure } from "./Structure";
import { WorksListSection as WorkListSection } from '@/components/servicesBlocks/WorksListSection';
// import { Complex } from '@/components/ui/Complex';
import { Advantages } from '@/components/servicesBlocks/Advantages';
// import { Tariff } from './Tariff';
// import { IRate } from '@/types/type';
import { Tariff } from '@/components/servicesBlocks/Tariff';
import { Callback } from '@/components/oldComponents/Callback';
import { WorksList } from '@/components/newDesign/WorksList';
import { Feedback } from '@/components/newDesign/Feedback';
import { NewCallback } from '@/components/ui/NewCallback';


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
    },
    advantages: {
      left: {
        type: 'text',
        text: 'Используем комплексный подход для достижения  <span>ваших целей</span>'
      },
      right: [
        {
          title: 'АКТУАЛЬНАЯ',
          description: 'красивая и коммерчески успешная айдентика',
          id: 1,
        },
        {
          title: '100% УНИКАЛЬНОСТЬ',
          description: 'разработанных элементов айдентики',
          id: 2,
        },
        {
          title: 'ПОКАЗЫВАЕМ НА ПРИМЕРАХ',
          description: 'как использовать и сочетать все элементы',
          id: 3,
        },

      ]
    },
    tariff: {
      title: 'Делаем всё, чтобы продукт стал частью жизни пользователей',
      description: 'Для проекта мы собираем команду специалистов на каждый этап работы. Вам не нужно тратить время и ресурсы для дополнительного поиска сотрудников. Наша команда полностью покроет весь список задач по проекту.',
      rates: []
    }
  }
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.title} />
      </Head>
      {/*<Hero title={content.hero.title} description={content.hero.description} itemList={content.hero.items.split('\r\n')} />*/}
      <Hero title={localContent.hero.title} description={localContent.hero.description}  specificClass={'identity-page'}/>
      {/*<Structure title={content.structure.title} image={content.structure.image} items={content.structure.items} />*/}
      <WorkListSection
        title={localContent.workListSection.title}
        list={localContent.workListSection.list}
        specificClass={'identity-page'}
      />
      {/*<Complex*/}
      {/*  title={content.advantages.text}*/}
      {/*    data={content.advantages.items}*/}
      {/*  innerClass={style.complexInner}*/}
      {/*/>*/}
      <Advantages
        left={{type: 'text', text: localContent.advantages.left.text, alt: '' }
          // <NewTypography text={localContent.advantages.left} variant={'h1'} />
        }
        right={localContent.advantages.right}
      />

      {/*<Tariff title={content.tariff.title} rates={content.tariff.rates.sort((a: IRate, b: IRate) => a.uniqueId - b.uniqueId)} description={content.tariff.description} />*/}
      <Tariff rates={content.tariff.rates} title={content.tariff.title} description={content.tariff.description} />
      {/*<Callback background={'light'} className={style.callback} />*/}
      {/*<WorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'identity-page'}*/}
      {/*  writeBtn*/}
      {/*/>*/}
      {/*<WorksList dark works={content.works} wrapClass={style.works} itemClass={style.worksItem} />*/}
      {/*<Feedback />*/}
      <NewCallback
        specificClass={'identity-page'}
      />
      <WorksList works={content.works} dark moreBtn writeBtn />
      <Feedback />
    </>
  );
};
