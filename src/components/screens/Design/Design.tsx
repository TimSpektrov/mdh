import { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import { Hero } from './Hero';
import { Mockup } from './Mockup';
import { Complex } from '@/components/ui/Complex';
import { Steps } from './Steps';
import { Proposal } from './Proposal';
import { Callback } from '@/components/oldComponents/Callback';
import style from './Design.module.scss';
import { NewWorksList } from '@/components/ui/NewWorksList';
import { Feedback } from '@/components/oldComponents/Feedback';
import { WorksList } from '@/components/oldComponents/WorksList';

export const Design: FC<any> = ({ content }) => {

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} />
      <Mockup props={content.mockup} />

      <div className={style.sectionGroup}>

        <div className={cn(style.pattern, style.patternTop)}></div>

        <div className={cn(style.pattern, style.patternRight)}></div>

        <Complex
          wrapClass={style.complex}
          columnClass={style.column}
          title={content.advantages.left}
          data={content.advantages.items.reverse()}
        />

        <Steps
          data={content.stages.items.reverse()}
          title={content.stages.title}
          image_url={content.stages.image_url}
          image_alt={content.stages.image_alt}
        />

      </div>
      <Proposal
        title={content.proposal.title}
        description={content.proposal.description}
        data={content.proposal.items.reverse()}
      />
      <Callback background='light-dark'/>
      {/*<NewWorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'full-design-page'}*/}
      {/*  writeBtn*/}
      {/*/>*/}
      <WorksList works={content.works} wrapClass={style.works} itemClass={style.worksItem} dark />
      <Feedback/>
    </>
  );
};
