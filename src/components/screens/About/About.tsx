import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Hero } from './Hero';
import { Tasks } from './Tasks';
import { Goal } from './Goal';
import logoImg from '@img/logo.svg'
import style from './About.module.scss';
import { TextImageBlock } from '@/components/blocks/TextImageBlock';
import { OurTarget } from '@/components/blocks/sections/OurTarget';
import { NewTypography } from '@/components/ui/NewTypography';
import { Feedback } from '@/components/oldComponents/Feedback';
import { WorksList } from '@/components/oldComponents/WorksList';
import patternImg from '@img/about/pattern.svg'

export const About: FC<any> = ({ content }) => {
  const list = [
    {
      "id": 1,
      "title": "Освобождающий время",
      "description": "Веб-сервисы и мобильные продукты упрощают и берут на себя выполнение почти любых рабочих и личных задач"
    },
    {
      "id": 2,
      "title": "Решающий проблемы",
      "description": "У каждого из вас есть ресурсы, которыми вы пользуетесь каждый день и без которых не представляете вашу реальность"
    },
    {
      "id": 3,
      "title": "меняющий мир",
      "description": "Мы понимаем, что продукты и сервисы, которые придумываются и воплощаются сегодня значительным образом меняют повседневность"
    }
  ]

  // костыль для proposal
  const proposal2text = content['proposal-second'].text.split('\r\n');
  const proposal2 = {
    title: proposal2text[0],
    text: proposal2text.slice(1),
  }

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
        list={list}
      />
      <div className={style.proposal}>
      <TextImageBlock
        text={content['proposal-first'].text.split('\r\n')}
        url={content['proposal-first'].url}
        alt={content['proposal-first'].alt}
        specificClass={'about-first-page'}
        buttonModal
      />
          <div className={style.proposalPattern}></div>
      </div>
      <TextImageBlock
        title={proposal2.title}
        text={proposal2.text}
        url={content['proposal-second'].url}
        alt={content['proposal-second'].alt}
        specificClass={'about-second-page'}
        buttonModal
      />

      <Tasks title={content.tasks.title} list={content.tasks.items} />

      <OurTarget title={content['our_target'].title} />

      <Goal title={content.goal.title} list={content.goal.list} />

      <section className={style.logo}>
          <div className={style.pattern}>
              <Image src={patternImg} width={patternImg.width} height={patternImg.height} alt='' quality={100} />
          </div>
        <NewTypography text={content.works_title} variant={'h2'} tag={'h2'} />
        <div className={style.img}>
          <Image src={logoImg} alt='' width={logoImg.width} height={logoImg.height} />
        </div>
      </section>
      {/*<NewWorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'about-page'}*/}
      {/*  writeBtn*/}
      {/*/>*/}
      <WorksList dark works={content.works} wrapClass={style.works} itemClass={style.worksItem} />
      <Feedback />
    </>
  );
};
