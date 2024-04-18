import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Title } from '@/components/ui/Typography';
import { Hero } from './Hero';
import { Tasks } from './Tasks';
import { Goal } from './Goal';
import { WorksList } from '@/components/ui/WorksList';
import { Feedback } from '@/components/ui/Feedback';

import patternImg from '@img/about/pattern.svg'
import logoImg from '@img/logo.svg'
import style from './About.module.scss';
import { TextImageBlock } from '@/components/blocks/TextImageBlock';
import { OurTarget } from '@/components/blocks/sections/OurTarget';
import parse from 'html-react-parser';
import { NewTypography } from '@/components/ui/NewTypography';

export const About: FC<any> = ({ content, works }) => {

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
        left={content['proposal-first'].left}
        right={content['proposal-first'].right}
        specificClass={'about-first-page'}
        buttonModal
      />
      <div className={style['pattern-bg']}></div>
      <TextImageBlock
        left={content['proposal-second'].left}
        right={content['proposal-second'].right}
        specificClass={'about-second-page'}
      />

      <Tasks title={content.tasks.title} list={content.tasks.items} />

      <OurTarget title={content['our-target'].title} />

      <Goal title={content.goal.title} list={content.goal.list} />
      
      <section className={style.logo}>
        <NewTypography text={content.works_title} variant={'h2'} tag={'h2'} />
        <div className={style.img}>
          <Image src={logoImg} alt='' width={logoImg.width} height={logoImg.height} />
        </div>
      </section>
      <WorksList dark works={works} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback/>
    </>
  );
};
