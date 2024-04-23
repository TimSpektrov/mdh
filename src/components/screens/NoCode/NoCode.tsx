import { FC } from "react";
import Head from "next/head";
import { Hero } from 'src/components/blocks/sections/Hero';
import style from './NoCode.module.scss';
import { WorksList } from '@/components/blocks/sections/WorksList/WorksList';
import { Stages } from '@/components/blocks/sections/Stages';
import { StagesRedesign } from '@/components/blocks/StagesRedisign';
import { Callback } from '@/components/ui/Callback';
import { NewWorksList} from '@/components/ui/NewWorksList';
import { NewFooterFeedback } from 'src/components/ui/NewFooterFeedback';

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
      <WorksList
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
      <Callback
        className={style.callback}
        specificClass={'no-code-page'}
      />
      <NewWorksList
        works={content.works}
        specificClass={'no-code-page'}
        writeBtn
        moreBtn
      />
      <NewFooterFeedback />
    </>
  );
}
