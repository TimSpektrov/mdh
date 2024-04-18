import { FC } from 'react';
import { IdentityProps } from '.';
import Head from 'next/head';
import { Hero } from './Hero';
import { Structure } from "./Structure";
import { Complex } from '@/components/ui/Complex';
import { WorksList } from '@/components/ui/WorksList';
import { Tariff } from './Tariff';
import { Callback } from '@/components/ui/Callback';
import { Feedback } from '@/components/ui/Feedback';

import complexObj from '@json/complex-identity.json'
import style from './Identity.module.scss'
import structureImg from '@img/identity/structure.png';

export const Identity: FC = () => {
  const content = {
    meta: {
      title: 'Разработка логотипа и фирменного стиля - заказать создание брендбука, цены студии MDH',
      description: 'Создадим целостный визуальный образ вашей компании от логотипа до полноценного брендбука. Разрабатываем фирменный стиль, логотип и другие элементы айдентики. Повышаем узнаваемость бренда.',
    },
    hero: {
      title: 'Айдентика',
      description: 'Транслируем ваши ценности через <span>визуальный стиль</span>',
      items: [
        'Исследуем рынок, конкурентов, специфику бизнеса.',
        'Создаем целостный визуальный образ вашей компании.',
        'Разрабатываем фирменный стиль, логотип и другие элементы айдентики.',
        'Повышаем узнаваемость бренда.',
      ]
    },
    structure: {
      title: 'Что входит в <span>айдентику</span>',
      image: structureImg.src,
      items: [
        {
          id: 1,
          title: 'Логотип',
          description: 'Сформируем яркий имидж бренда в глазах вашей аудитории'
        },
        {
          id: 2,
          title: 'Фирменный стиль',
          description: 'Поможем вашему бренду выделиться среди конкурентов'
        },
        {
          id: 3,
          title: 'Руководство по использованию',
          description: 'Создадим подробную инструкцию, как правильно использовать логотип, сочетать фирменные цвета, шрифты и другие элементы стиля'
        },
      ],
    },
    complex: {
      text: 'Используем комплексный подход для достижения ваших <span>целей</span>',
      items: [
        {
          id: 1,
          name: 'АКТУАЛЬНАЯ',
          desc: 'красивая и коммерчески успешная айдентика',
          column: 1,
        },
        {
          id: 2,
          name: '100% уникальность',
          desc: 'разработанных элементов айдентики',
          column: 2
        },
        {
          id: 3,
          name: 'Показываем на примерах',
          desc: 'как использовать и сочетать все элементы',
          column: 1
        },
      ]
    },
    tariff: {
      title: '<span>Делаем всё,</span> чтобы продукт стал частью жизни пользователей',
      description: 'Для проекта мы собираем команду специалистов на каждый этап работы. Вам не нужно тратить время и ресурсы для дополнительного поиска сотрудников. Наша команда полностью покроет весь список задач по проекту.',
      rates: [
        {
          id: 0,
          uniqueId: '9',
          name: 'Лайт',
          desc: 'Для тех, кому нужно быстрое решение',
          price: 60000,
          popular: false,
          term: '5 дней',
          volume: '10-15 страниц брендбука',
          structure: [
            {
              id: '0',
              name: 'Логотип (1 вариант)',
              locked: false
            },
            {
              id: '1',
              name: 'Фирменный цвет',
              locked: false
            },
            {
              id: '2',
              name: 'Фирменный шрифт',
              locked: false
            },
            {
              id: '3',
              name: 'Примеры использования на носителях',
              locked: false
            },
            {
              id: '4',
              name: 'Фирменная графика',
              locked: true
            },
            {
              id: '5',
              name: 'Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.',
              locked: true
            }
          ]
        },
        {
          id: 1,
          uniqueId: '10',
          name: 'Стандарт',
          desc: 'Разработка фирменной айдентики',
          price: 120000,
          popular: true,
          term: '14 дней',
          volume: '25-30 страниц брендбука',
          structure: [
            {
              id: '0',
              name: 'Логотип (до 3- х вариантов)',
              locked: false
            },
            {
              id: '1',
              name: 'Фирменная цветовая палитра',
              locked: false
            },
            {
              id: '2',
              name: 'Набор фирменных шрифтов',
              locked: false
            },
            {
              id: '3',
              name: 'Примеры использования на носителях',
              locked: false
            },
            {
              id: '4',
              name: 'Фирменная графика',
              locked: true
            },
            {
              id: '5',
              name: 'Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.',
              locked: true
            }
          ]
        },
        {
          id: 2,
          uniqueId: "11",
          name: "Премиум",
          desc: "Целостный визуальный образ бренда",
          price: 200000,
          popular: false,
          term: "35 дней",
          volume: "50-60 страниц брендбука",
          structure: [
            {
              id: "0",
              name: "Логотип (до 3- х вариантов + комментарии)",
              locked: false
            },
            {
              id: "1",
              name: "Фирменная цветовая палитра",
              locked: false
            },
            {
              id: "2",
              name: "Набор фирменных шрифтов",
              locked: false
            },
            {
              id: "3",
              name: "Примеры использования на носителях",
              locked: false
            },
            {
              id: "4",
              name: "Фирменная графика",
              locked: false
            },
            {
              id: "5",
              name: "Индивидуальное руководство по использованию фирменного стиля и элементов айдентики.",
              locked: false
            }
          ]
        }
      ],
    },
    workList: {
      dark: true,
      items: [
        {
          "id": "30",
          "title": "PaySwap",
          "desc": "Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.",
          "tags": [
            {
              "id": "0",
              "name": "Приложение"
            },
            {
              "id": "1",
              "name": "Сайт"
            },
            {
              "id": "2",
              "name": "Айдентика"
            }
          ],
          "image": "payswap-new.webp",
          "light": true,
          "showHome": true,
          "showAbout": false,
          "showIdentity": true,
          "showDesign": true,
          "published": false,
          "slug": "payswap"
        },
        {
          "id": "80",
          "title": "Профсоюз работников АДА",
          "desc": "Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.",
          "tags": [
            {
              "id": "0",
              "name": "Приложение"
            },
            {
              "id": "1",
              "name": "Айдентика"
            }
          ],
          "image": "profsoyuz-rabotnikov-ada.webp",
          "light": false,
          "showHome": true,
          "showIdentity": true,
          "published": false,
          "slug": "profsoyuz-rabotnikov-ada"
        },
        {
          "id": "100",
          "title": "ERP-система социальной службы",
          "desc": "Система, которая позволяет хранить данные о сотрудниках и клиентах, планировать трудовой график и учитывать отработанное время.",
          "tags": [
            {
              "id": "0",
              "name": "Приложение"
            },
            {
              "id": "1",
              "name": "Айдентика"
            }
          ],
          "image": "epr-sistema-socialnoj-sluzhby.webp",
          "light": false,
          "showAbout": true,
          "showIdentity": true,
          "showDesign": true,
          "published": false,
          "slug": "erp-sistema-socialnoj-sluzhby"
        }
      ],
    }
  }
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.title} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} itemList={content.hero.items} />
      <Structure title={content.structure.title} image={content.structure.image} items={content.structure.items} />
      <Complex
        title={content.complex.text}
        data={content.complex.items}
        innerClass={style.complexInner}
      />
      <Tariff title={content.tariff.title} rates={content.tariff.rates} description={content.tariff.description} />
      <Callback background='light' className={style.callback} />
      <WorksList dark={true} works={content.workList.items} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback/>
    </>
  );
};
