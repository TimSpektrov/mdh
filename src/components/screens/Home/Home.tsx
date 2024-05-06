import { FC } from 'react'
import Head from 'next/head'
import { Hero } from './Hero'
import { WorksList } from '@/components/ui/WorksList'
import { Design } from '@/components/screens/Home/Design'
import { Services } from './Services'

import style from './Home.module.scss'
import { NewFooterFeedback } from '@/components/ui/NewFooterFeedback';
import { Telegram } from './Telegram'
import { NewWorksList } from '@/components/ui/NewWorksList';

export const Home: FC<any> = ({content}) => {

    const data =  {
      telegram: {
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
      <NewWorksList
        works={content.works}
        specificClass={'home-page'}
        writeBtn
      />
      <Design title={content.design.title} description={content.design.description} />
      <Services services={content.services} />
      <Telegram title={content.telegram.title} description={data.telegram.description} />
      <NewFooterFeedback />
    </>
  );
};
