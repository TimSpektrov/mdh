import { FC } from 'react'
import Head from 'next/head'
import { Hero } from './Hero'
import { Design } from '@/components/screens/Home/Design'
import { Services } from './Services'
import { NewFooterFeedback } from '@/components/ui/NewFooterFeedback';
import { Telegram } from './Telegram'
import { NewWorksList } from '@/components/ui/NewWorksList';

export const Home: FC<any> = ({content}) => {
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
      <Telegram title={content.telegram.title} description={content.telegram.description} />
      <NewFooterFeedback />
    </>
  );
};
