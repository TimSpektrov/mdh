import { FC } from 'react';
import Head from 'next/head';
import { Hero } from './Hero';
import { Structure } from "./Structure";
import { Complex } from '@/components/ui/Complex';
import { Tariff } from './Tariff';
import { Callback } from '@/components/ui/Callback';
import style from './Identity.module.scss'
import { IRate } from '@/types/type';
import { NewFooterFeedback } from '@/components/ui/NewFooterFeedback';
import { NewWorksList } from '@/components/ui/NewWorksList';

export const Identity: FC<any> = ({content}) => {
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.title} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} itemList={content.hero.items.split('\r\n')} />
      <Structure title={content.structure.title} image={content.structure.image} items={content.structure.items} />
      <Complex
        title={content.advantages.text}
          data={content.advantages.items}
        innerClass={style.complexInner}
      />
      <Tariff title={content.tariff.title} rates={content.tariff.rates.sort((a: IRate, b: IRate) => a.uniqueId - b.uniqueId)} description={content.tariff.description} />
      <Callback background='light' className={style.callback} />
      <NewWorksList
        works={content.works}
        specificClass={'identity-page'}
        writeBtn
      />
      <NewFooterFeedback />
    </>
  );
};
