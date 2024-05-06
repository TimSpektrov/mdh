import { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import { Hero } from './Hero';
import { Mockup } from './Mockup';
import { Complex } from '@/components/ui/Complex';
import { Steps } from './Steps';
import { Proposal } from './Proposal';
import { WorksList } from '@/components/ui/WorksList';
import { Callback } from '@/components/ui/Callback';
import style from './Design.module.scss';
import { NewFooterFeedback } from '@/components/ui/NewFooterFeedback';

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
          data={content.advantages.items}
        />

        <Steps
          data={content.stages.items}
          title={content.stages.title}
          image_url={content.stages.image_url}
          image_alt={content.stages.image_alt}
        />

      </div>
      <Proposal
        title={content.proposal.title}
        description={content.proposal.description}
        data={content.proposal.items}
      />
      <Callback background='light-dark'/>
      <WorksList dark works={content.works} wrapClass={style.works} itemClass={style.worksItem} />
      <NewFooterFeedback/>
    </>
  );
};
