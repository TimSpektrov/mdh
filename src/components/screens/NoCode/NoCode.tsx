import { FC } from "react";
import Head from "next/head";
import { Hero } from 'src/components/blocks/sections/Hero';
import { WorksListSection as WorkListSection } from '@/components/servicesBlocks/WorksListSection/WorksListSection';
import { Stages } from '@/components/blocks/sections/Stages';
import { StagesRedesign } from '@/components/blocks/StagesRedisign';
import { NewCallback } from '@/components/ui/NewCallback';
import { Feedback } from '@/components/newDesign/Feedback';
import { WorksList } from '@/components/newDesign/WorksList';

export const NoCode: FC<any> = ({content}) => {
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>

      <Hero
        specificClass={'no-code-page'}
        title={content.hero.title}
        description={content.hero.description}
      />
      <WorkListSection
        title={content.type_site.title}
        list={content.type_site.items}
      />
      <Stages
        list={content.stages.stage_items}
        title={content.stages.title}
        specificClass={'no-code-page'}
      />
      <StagesRedesign
        list={content.stages_development.stage_items}
        specificClass={'no-code-page'}
        title={content.stages_development.title}
      />
      <NewCallback
        specificClass={'no-code-page'}
      />
      <WorksList works={content.works} dark moreBtn writeBtn />
      <Feedback />
    </>
  );
}
