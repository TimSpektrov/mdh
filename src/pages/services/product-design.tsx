import { NextPage } from 'next';
import Head from 'next/head';
import { usePageDateStore } from '@/store/usePageDataStore';
import { Hero } from '@/components/servicesBlocks/Hero';
import { StagesRedesign } from '@/components/servicesBlocks/StagesRedesign';
import { ProductCards } from '@/components/servicesBlocks/ProductCards/ProductCards';
import { Team } from '@/components/servicesBlocks/Team/Team';

const ProductDesign: NextPage = () => {

  const content = {
    productDesign: {
      meta: {
        title: 'Дизайн продукта',
        description: 'Анализируем рынок и ваш бизнес.'
      },
      hero: {
        title: 'Дизайн<br>продукта',
        description: '<span>Анализируем</span> рынок и ваш бизнес. <span>Создаем</span> дизайн и <span>представляем</span> полностью готовый для использования продукт.'
      },
      product: {
        title: 'Создаем архитектуру приложений, сайтов, веб-ресурсов, чат-ботов',
        list: [
          {
            title: 'Сайт',
            description: 'От простых веб-визиток до многофункциональных онлайн систем',
            img_desktop: '/assets/images/productCard/1d.png',
            img_mob: '/assets/images/productCard/1m.png',
            alt: '',
          },
          {
            title: 'Лендинг',
            description: 'Лаконичные структура и дизайн для продажи с первого касания',
            img_desktop: '/assets/images/productCard/2d.png',
            img_mob: '/assets/images/productCard/2m.png',
            alt: '',
          },
          {
            title: 'Чат-бот',
            description: 'Только нужные функции для быстрого взаимодействия',
            img_desktop: '/assets/images/productCard/3d.png',
            img_mob: '/assets/images/productCard/3m.png',
            alt: '',
          },
          {
            title: 'Приложение',
            description: 'Удобное, эстетичное, готовое к размещению в мобильных сторах',
            img_desktop: '/assets/images/productCard/4d.png',
            img_mob: '/assets/images/productCard/4m.png',
            alt: '',
          },
        ]
      },
      stages: {
        title: '',
        stage_items: [
          {
            id: 1,
            title: 'Брифинг',
            description: 'Проводим интервью, знакомимся с брендом и узнаем детали идеи, которую вы хотите реализовать',
          },
          {
            id: 2,
            title: 'Аналитика и прототипирование',
            description: 'Изучаем специфику бизнеса, проводим глубинное исследование рынка. Проектируем интерфейс и логику взаимодействий',
          },
          {
            id: 3,
            title: 'Дизайн-концепция и создание макетов',
            description: 'Подбираем подходящие визуальные решения. Проверяем, насколько продукт понятен пользователю',
          },
          {
            id: 4,
            title: 'Разработка и тестирование',
            description: 'Создаем программный код. Тестируем функционал на эффективность и быстроту работы',
          },
          {
            id: 5,
            title: 'Сопровождение',
            description: 'Поддерживаем актуальность продукта: техническую и пользовательскую',
          },
        ]
      },
      stagesRedesign: {
        title: 'Используем комплексный подход для достижения ваших целей',
        items: [
          {
            id: 1,
            title: 'Идея',
            description: 'Совершенствуем «сырые» идеи и превращаем их в инструмент для развития бизнеса',
          },
          {
            id: 2,
            title: 'Работа в команде',
            description: 'Наши специалисты нацелены на быстрое и эффективное решение ваших задач',
          },
          {
            id: 3,
            title: 'Разработка 360',
            description: 'Вы получаете целостный продукт, готовый к использованию',
          },
          {
            id: 4,
            title: 'Развитие',
            description: 'Работаем над проектом после его запуска, проводим аудит, тестируем и улучшаем продукт',
          },
          {
            id: 5,
            title: 'Разработка 360',
            description: 'Вы получаете целостный продукт, готовый к использованию',
          },
          {
            id: 6,
            title: 'Развитие',
            description: 'Работаем над проектом после его запуска, проводим аудит, тестируем и улучшаем продукт',
          },
        ]
      },
      team: {
        title: 'Делаем все, чтобы продукт стал<br> <span>частью жизни пользователей</span>',
        items: [
          'Менеджеры',
          'Аналитики',
          'Дизайнеры',
          'Разработчики',
          'Тестировщики',
        ]
      }
    }
  }
  const {content2, fetchData, loading } = usePageDateStore(state => ({
    content2: state.content,
    fetchData: state.fetchData,
    loading: state.loading
  }))
  // useEffect(() => {
  //   fetchData(PRODUCT_DESIGN_URL, 'productDesign')
  // }, []);
  // if(!content?.productDesign) return  null

  return (
    <>
      <Head>
        <title>{content.productDesign.meta.title}</title>
        <meta name="description" content={content.productDesign.meta.description} />
      </Head>
      <Hero
        specificClass={'product-design-page'}
        title={content.productDesign.hero.title}
        description={content.productDesign.hero.description}
      />
      <StagesRedesign list={content.productDesign.stagesRedesign.items} title={content.productDesign.stagesRedesign.title} specificClass={'product-design-page'}/>
      <ProductCards list={content.productDesign.product.list} title={content.productDesign.product.title} />
      <Team title={content.productDesign.team.title} list={content.productDesign.team.items} />
    </>
  )
}

export default ProductDesign;