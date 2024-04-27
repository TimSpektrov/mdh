import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Title } from '@/components/ui/Typography';
import { Hero } from './Hero';
import { Tasks } from './Tasks';
import { Goal } from './Goal';
import { WorksList } from '@/components/ui/WorksList';
import { Feedback } from '@/components/ui/Feedback';

import logoImg from '@img/logo.svg'
import style from './About.module.scss';
import { TextImageBlock } from '@/components/blocks/TextImageBlock';
import { OurTarget } from '@/components/blocks/sections/OurTarget';
import { NewTypography } from '@/components/ui/NewTypography';

export const About: FC<any> = ({ content }) => {

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <Hero
        specificClass={'about-page'}
        title={content.hero.title}
        description={content.hero.description}
        list={content.hero.list}
      />
      <TextImageBlock
        text={content['proposal-first'].text.split('\r\n')}
        url={content['proposal-first'].url}
        alt={content['proposal-first'].alt}
        specificClass={'about-first-page'}
        buttonModal
      />
      <div className={style['pattern-bg']}></div>
      <TextImageBlock
        text={content['proposal-second'].text.split('\r\n')}
        url={content['proposal-second'].url}
        alt={content['proposal-second'].alt}
        specificClass={'about-second-page'}
      />

      <Tasks title={content.tasks.title} list={content.tasks.items} />

      <OurTarget title={content['our_target'].title} />

      <Goal title={content.goal.title} list={content.goal.list} />
      
      <section className={style.logo}>
        <NewTypography text={content.works_title} variant={'h2'} tag={'h2'} />
        <div className={style.img}>
          <Image src={logoImg} alt='' width={logoImg.width} height={logoImg.height} />
        </div>
      </section>
      <WorksList dark works={content.works} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback/>
    </>
  );
};
