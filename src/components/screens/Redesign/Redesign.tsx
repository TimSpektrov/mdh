import { FC } from 'react';
import Head from 'next/head';
import { Hero } from '@/components/blocks/sections/Hero';
import { Advantages } from '@/components/servicesBlocks/Advantages';
import { StagesRedesign } from '@/components/blocks/StagesRedisign';
import { NewFeedback } from '@/components/blocks/NewFeedback';
import { setUppercase } from '@/helpers';
import { Feedback } from '@/components/newDesign/Feedback';
import { WorksList } from '@/components/newDesign/WorksList';

export const Redesign: FC<any> = ({content}) => {
  const secondColor = '#fbe06a'

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>

      <Hero
        specificClass={'redesign-page'}
        title={content.hero.title}
        description={content.hero.description}
      />
      <Advantages
        specificClass={'redesign-page'}
        left={{
          type: 'video',
          text: content.advantage_video.url,
          alt: content.advantage_video.poster_url
        }}
        right={content.advantage_list}
      />
      <StagesRedesign list={content.stages.items} specificClass={'redesign-page'} />
      <NewFeedback title={setUppercase(content.feedback.title)} color={secondColor} />
      {/*<NewWorksList*/}
      {/*  works={content.works}*/}
      {/*  specificClass={'redesign-page'}*/}
      {/*  writeBtn*/}
      {/*  moreBtn*/}
      {/*/>*/}
      <WorksList works={content.works} dark moreBtn writeBtn />
      <Feedback />
    </>
  )
}