import { FC } from "react";
import { NoCodeProps } from "./NoCode.props";
import Head from "next/head";
import { Hero } from 'src/components/blocks/sections/Hero';
import img11 from '@/components/blocks/sections/WorksList/assets/img/no-code/1-1.jpg'
import img12 from '@/components/blocks/sections/WorksList/assets/img/no-code/1-2.jpg'
import img21 from '@/components/blocks/sections/WorksList/assets/img/no-code/2-1.jpg'
import img22 from '@/components/blocks/sections/WorksList/assets/img/no-code/2-2.jpg'
import img31 from '@/components/blocks/sections/WorksList/assets/img/no-code/3-1.jpg'
import img32 from '@/components/blocks/sections/WorksList/assets/img/no-code/3-2.jpg'
import img41 from '@/components/blocks/sections/WorksList/assets/img/no-code/4-1.jpg'
import img42 from '@/components/blocks/sections/WorksList/assets/img/no-code/4-2.jpg'
import style from './NoCode.module.scss';
import { WorksList } from '@/components/blocks/sections/WorksList/WorksList';
import { Stages } from '@/components/blocks/sections/Stages';
import { StagesRedesign } from '@/components/blocks/StagesRedisign';
import { Callback } from '@/components/ui/Callback';
import { NewWorksList} from '@/components/ui/NewWorksList';
import { NewFooterFeedback } from 'src/components/ui/NewFooterFeedback';

export const NoCode: FC<any> = ({content}) => {
  // const content = {
  //   meta: {
  //     title: 'No code разработка приложений и сайтов - заказать приложение без написания кода в  MDH',
  //     description: 'Разработаем приложение или сайт для быстрого запуска с помощью No-code инструментов. Закажите разработку сайтов и приложений без программного кода. Звоните: +7 (926) 187 25 73.',
  //   },
  //   hero: {
  //     title: 'no-code<br>Разработка',
  //     description: '<span>Создадим</span>  сайт в сжатые сроки без программного кода, используя инструменты no-code разработки.  <span>Идеальное</span>  решение  для запуска MVP или полноценного продукта с базовым функционалом. ',
  //   },
  //   workList: {
  //     title: 'Создаем сайты различной сложности',
  //     items: [
  //       {
  //         id: 1,
  //         title: 'Лендинги',
  //         img1: img11.src,
  //         img2: img12.src,
  //       },
  //       {
  //         id: 2,
  //         title: 'Корпоративные сайты',
  //         img1: img21.src,
  //         img2: img22.src,
  //       },
  //       {
  //         id: 3,
  //         title: 'Многостраничные сайты',
  //         img1: img31.src,
  //         img2: img32.src,
  //       },
  //       {
  //         id: 4,
  //         title: 'Магазины',
  //         img1: img41.src,
  //         img2: img42.src,
  //       },
  //     ]
  //   },
  //   stages: {
  //     title: '4 шага — и ваш сайт готов',
  //     items: [
  //       {
  //         id: 1,
  //         title: 'Брифинг',
  //         description: 'Проводим интервью, знакомимся с брендом, собираем технические требования',
  //       },
  //       {
  //         id: 2,
  //         title: 'Получение макетов',
  //         description: 'Получаем дизайн-макеты и верстаем сайт на no-code площадке',
  //       },
  //       {
  //         id: 3,
  //         title: 'Создание сайта',
  //         description: 'Верстаем сайт на no-code площадке. Добавляем разделы и другие базовые функции',
  //       },
  //       {
  //         id: 4,
  //         title: 'Презентация сайта',
  //         description: 'Вносим финальные коррективы по собранному сайту и сдаем готовую работу в оговоренный срок',
  //       },
  //     ]
  //   },
  //   stagesRedesign: {
  //     title: 'Как устроена no-code разработка в MDH:',
  //     items: [
  //       {
  //         id: 1,
  //         title: 'Быстро',
  //         description: 'Вместо 4-6 месяцев, вы получите сайт с базовым функционалом за 2 недели-месяц',
  //       },
  //       {
  //         id: 2,
  //         title: 'Недорого',
  //         description: 'За счет привлечения только одного специалиста, который создает дизайн и контролирует верстку',
  //       },
  //       {
  //         id: 3,
  //         title: 'Удобно',
  //         description: 'Вы сможете сами корректировать контент на сайте, добавлять разделы и другие базовые функции',
  //       },
  //       {
  //         id: 4,
  //         title: 'поддержка',
  //         description: 'По мере развития вашего продукта наш специалист сможет оптимизировать работу сайта и добавлять новые функции',
  //       },
  //     ]
  //   },
  //   works: [
  //       {
  //         id: '30',
  //         title: 'PaySwap',
  //         desc: 'Криптовалютный кошелёк для проведения любых операций с криптовалютой. Один кошелёк для всего: хранение, обмен, покупка, продажа — актуальность курсов валют гарантируется.',
  //         tags: [
  //           {
  //             id: '0',
  //             name: 'Приложение'
  //           },
  //           {
  //             id: '1',
  //             name: 'Сайт'
  //           },
  //           {
  //             id: '2',
  //             name: 'Айдентика'
  //           }
  //         ],
  //         image: 'payswap-2.png',
  //         light: true,
  //         showHome: true,
  //         showAbout: true,
  //         showIdentity: true,
  //         showDesign: true,
  //         published: false,
  //         slug: 'payswap'
  //       },
  //       {
  //         id: '80',
  //         title: 'Профсоюз работников АДА',
  //         desc: 'Спектакль внутри мобильного приложения. По задумке режиссёра слушатель спектакля должен перемещаться между локациями и делать отметки об их посещении в профсоюзном билете.',
  //         tags: [
  //           {
  //             id: '0',
  //             name: 'Приложение'
  //           },
  //           {
  //             id: '1',
  //             name: 'Айдентика'
  //           }
  //         ],
  //         image: 'profsoyuz-rabotnikov-ada.png',
  //         light: false,
  //         showHome: true,
  //         showIdentity: true,
  //         published: true,
  //         slug: 'profsoyuz-rabotnikov-ada'
  //       },
  //       {
  //         id: '60',
  //         title: 'Skringo',
  //         desc: 'Российский стартап, который связывает продавцов и покупателей на рынке товаров премиального сегмента.',
  //         tags: [
  //           {
  //             id: '0',
  //             name: 'Приложение'
  //           },
  //           {
  //             id: '1',
  //             name: 'Айдентика'
  //           }
  //         ],
  //         image: 'skringo.png',
  //         light: false,
  //         showHome: true,
  //         showAbout: true,
  //         showDesign: true,
  //         published: false,
  //         slug: 'skringo'
  //       },
  //       {
  //         id: '70',
  //         title: 'Open Teleport',
  //         desc: 'Первый в мире крупный маркетплейс, специализирующийся на аренде и продаже спутников и телепортов.',
  //         tags: [
  //           {
  //             id: '0',
  //             name: 'Сайт'
  //           }
  //         ],
  //         image: 'open-teleport.jpg',
  //         light: true,
  //         published: false,
  //         slug: 'open-teleport'
  //       },
  //     ]
  // }

  console.log(content);

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>

      <Hero
        specificClass={'no-code-page'}
        title={content.hero.title}
        description={content.hero.description}
      />
      <WorksList
        title={content.type_site.title}
        list={content.type_site.items}
      />
      <Stages
        list={content.stages.stage_items}
        title={content.stages.title}
        specificClass={'no-code-page'}
      />
      <StagesRedesign
        list={content.stages_development.stage_items}
        specificClass={'no-code-page'}
        title={content.stages_development.title}
      />
      <Callback
        className={style.callback}
        specificClass={'no-code-page'}
      />
      <NewWorksList
        works={content.works}
        specificClass={'no-code-page'}
        writeBtn
        moreBtn
      />
      <NewFooterFeedback />
    </>
  );
}
