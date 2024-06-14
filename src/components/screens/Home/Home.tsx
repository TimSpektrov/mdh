import { FC } from 'react'
import Head from 'next/head'
import { Hero } from './Hero'
import { Design } from '@/components/screens/Home/Design'
import { Services } from './Services'
import { Telegram } from './Telegram'
import { Feedback} from '@/components/oldComponents/Feedback'
import style from './Home.module.scss'
import {WorksList} from "@/components/oldComponents/WorksList";

export const Home: FC<any> = ({content}) => {
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} />
      {/*<NewWorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'home-page'}*/}
      {/*  writeBtn*/}
      {/*/>*/}
      <WorksList works={content.works} wrapClass={style.works} itemClass={style.worksItem} />
      <Design title={content.design.title} description={content.design.description} />
      <Services services={content.services} />
      {/*<Telegram title={content.telegram.title} description={content.telegram.description} />*/}
      <Feedback />

    </>
  );
};
