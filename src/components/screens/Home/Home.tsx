import { FC } from 'react'
import { HomeProps } from '.'
import Head from 'next/head'
import { Hero } from './Hero'
import { WorksList } from '@/components/ui/WorksList'
import { Design } from '@/components/screens/Home/Design'
import { Services } from './Services'

import style from './Home.module.scss'
import { Feedback } from '@/components/ui/Feedback'
import { Telegram } from './Telegram'

export const Home: FC<HomeProps> = ({ works, services }) => {
  const content = {
    meta: {
      title: 'Cтудия дизайна сайтов и приложений в Москве - агентство веб дизайна полного цикла MDH',
      description: 'Студия MDH предлагает услуги дизайна для сайта и приложений. Веб дизайн полного цикла с созданием уникальный стиля и удобства использования. Звоните: +7 (926) 187 25 73.',
    },
    hero: {
      title: 'Cтудия дизайна сайтов и приложений',
      description: 'Опираемся на прошлое, ощущаем настоящее, прогнозируем будущее',
    },
    workList: {
      items: [
        {
          "id": "10",
          "title": "FITSERVICE",
          "desc": "Сайт о промоакциях самой крупной сети автосервисов на территории СНГ. Формирование удобного каталога акций и понятных пользователю форм заявки на услуги",
          "tags": [
            {
              "id": "0",
              "name": "Приложение"
            }
          ],
          "image": "fit-service.webp",
          "light": true,
          "showHome": true,
          "showAbout": true,
          "showDesign": false,
          "published": true,
          "slug": "fit-service",
        },
        {
          "id": "20",
          "title": "ЦСКА АРЕНА",
          "desc": "UX-аудит и редизайн сайта одной из крупнейших спортивных площадок в России. Улучшение user flow, создание контентных страниц и системы продажи билетов. Результат — ежегодное удвоение продаж.",
          "tags": [
            {
              "id": "0",
              "name": "Сайт"
            }
          ],
          "image": "cska.webp",
          "light": true,
          "showHome": true,
          "showAbout": true,
          "showDesign": false,
          "published": true,
          "slug": "cska",
          "seoTitle": "Работы по сайту площадки «ЦСКА Арена» - проекты студии MDH",
          "seoDesc": "Ознакомьтесь с нашей работой по сайту площадки «ЦСКА Арена».",
        },
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
          "id": "40",
          "title": "Electrocars RUS",
          "desc": "Приложение для зарядки электромобилей. Удобный просмотр ближайших станций, построение маршрута по карте, бронирование и оплата через приложение.",
          "tags": [
            {
              "id": "0",
              "name": "Приложение"
            }
          ],
          "image": "electrocars-rus.webp",
          "light": false,
          "showHome": true,
          "showAbout": false,
          "showDesign": true,
          "published": false,
          "slug": "electrocars-rus"
        },
        {
          "id": "50",
          "title": "Прометей",
          "desc": "Сайт и айдентика для лингвистического клуба, который организует групповые занятия для детей и немножко для взрослых",
          "tags": [
            {
              "id": "0",
              "name": "Айдентика"
            },
            {
              "id": "1",
              "name": "No-code разработка"
            }
          ],
          "image": "prometej.webp",
          "light": false,
          "showHome": true,
          "published": false,
          "slug": "prometej"
        },
        {
          "id": "60",
          "title": "Skringo",
          "desc": "Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.",
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
          "image": "skringo.webp",
          "light": false,
          "showHome": true,
          "showAbout": true,
          "showDesign": true,
          "published": false,
          "slug": "skringo"
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
      ]
    },
    design: {
      title: 'Дизайн полного цикла',
      description: 'Проектируем и разрабатываем сайты и мобильные приложения. Сочетаем функциональность и эстетику, сложную инженерию и простое управление.',
      textButton: 'Как это работает',
    },
    services: {
      items: [
        {
          id: "1",
          title: "Дизайн продукта",
          description: "Создадим дизайн-макет для сайта или приложения. Эстетически привлекательный и понятный пользователю.",
          slug: 'design',
          isPublic: false,
        },
        {
          id: "2",
          title: "UX-аудит",
          description: "Протестируем приложение или сайт и предоставим рекомендации по улучшению пользовательского опыта.",
          slug: "ux-audit",
          isPublic: true,
        },
        {
          id: "3",
          title: "Редизайн",
          description: "Заменим устаревший интерфейс, улучшим юзабилити сайта и презентуем ваш бренд по-новому.",
          slug: "redesign",
          isPublic: true,
        },
        {
          id: "4",
          title: "NO CODE РАЗРАБОТКА",
          description: "Разработаем приложение или сайт для быстрого запуска. Без программного кода.",
          slug: "no-code",
          isPublic: true,
        },
        {
          id: "5",
          title: "Айдентика",
          description: "Разработаем лого и визуальный стиль. Поможем заявить о бренде громче и расти быстрее.",
          slug: "identity",
          isPublic: true,
        },
        {
          id: "6",
          title: "Дизайн промо-материалов",
          description: "Раскроем ценность бизнеса для ваших пользователей и партнеров. Создадим дизайн креативов, презентаций и др.",
          slug: "design-promo-materials",
          isPublic: true,
        },
        {
          id: "7",
          title: "Аутстафф дизайнеров",
          description: "Предоставим специалиста для работы над вашим проектом. Поможем сэкономить до 30% на HR-расходах.",
          slug: 'outstaff',
          isPublic: false,
        },
        {
          id: "8",
          title: "Дизайн-поддержка",
          description: "Разработаем приложение или сайт со сложной структурой и богатым функционалом.",
          slug: "design-support",
          isPublic: false,
        }
      ]
    },
    telegram: {
      title: '<span>Подпишитесь</span> и&nbsp;узнавайте о&nbsp;дизайне, который трансформирует бизнес',
      description: 'Узнайте, как использование дизайна может значительно улучшить ваши бизнес-показатели, получите доступ к&nbsp;ценным советам и&nbsp;стратегиям.',
      textButton: 'Подписаться'
    }
  }
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} />
      <WorksList works={content.workList.items} wrapClass={style.works} itemClass={style.worksItem} />
      <Design title={content.design.title} description={content.design.description} textButton={content.design.textButton}/>
      <Services services={content.services.items} />
      <Telegram title={content.telegram.title} description={content.telegram.description} textButton={content.telegram.textButton}/>
      <Feedback />
    </>
  );
};
