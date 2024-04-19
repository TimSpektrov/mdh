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
  const content = {
    "meta": {
      "title": "",
      "description": ""
    },
    "hero": {
      "title": "дизайн промо-<br>материалов",
      "description": "<span>Создадим</span>  целостный визуальный образ вашего бренда: от дизайна визиток до оформления социальных сетей.  <span>Поможем</span>  пользователям запомнить и полюбить ваш продукт."
    },
    mockup: {
      image: {
        url: 'string',
        alt: 'string',
      },
      title: 'string',
      description: 'string',
    },
    "advantages": {
      "left": 'string',
      "items": [
        {
          "id": 1,
          "title": "ПРОВОДИМ",
          "description": "интервью, изучаем ваш брендбук и требования к стилю, шрифтам, контенту"
        },
        {
          "id": 2,
          "title": "ПОДГОТВАЛИВАЕМ",
          "description": "материалы к печати, учитывая особенности продукта и требования типографии"
        },
        {
          "id": 3,
          "title": "СОЗДАЕМ",
          "description": "дизайн нужных элементов и материалов в рамках вашего корпоративного стиля"
        }
      ]
    },
    stages: {
      image: {
        url: 'string',
        alt: 'string',
      },
      "title": "Как проходит UX-аудит",
      "items": [
        {
          "id": 1,
          "title": "Брифинг",
          "description": "<ul><li>Определяем цель и задачи проекта </li><li>Изучаем рынок, внутренние процессы и возможности бизнеса</li><li>Погружаемся в проблему и ограничения продукта</li></ul>"
        },
        {
          "id": 2,
          "title": "Аналитическое исследование",
          "description": "<ul><li>Анализируем поле конкурентов и отбираем наиболее релевантных </li><li>Анализируем текущее состояние вашего продукта</li><li>Исследуем аудиторию и ключевые метрики </li><li>Анализируем почему логика продукта выстроена именно так, а не иначе</li></ul>"
        },
        {
          "id": 3,
          "title": "Аудит и формирование гипотез",
          "description": "<ul><li>Ищем узкие места в юзерфлоу </li><li>Проверяем интерфейс на соответствие запроса аудитории и бизнеса </li><li>Выстраиваем гипотезы о вариантах улучшения пользовательского опыта</li></ul>"
        },
        {
          "id": 4,
          "title": "Проектирование",
          "description": "Иллюстрируем гипотезы прототипами интерфейсов в множестве вариаций"
        },
        {
          "id": 5,
          "title": "Отчетность и презентация",
          "description": "<ul><li>Формируем документацию отчета </li><li>Презентуем отчет на встрече с вами</li></ul>"
        }
      ],
    },
    proposal: {
      title: 'string',
      description: 'string',
      items: [
        {
          image: 'string',
          title: 'string',
          description: 'string',
        },
        {
          image: 'string',
          title: 'string',
          description: 'string',
        },
      ]
    },
    works: {},

  }
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
