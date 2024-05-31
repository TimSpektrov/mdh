import { NextPage } from 'next';
import { Hero } from 'src/components/blocks/sections/Hero';
import { Advantages } from 'src/components/servicesBlocks/Advantages';
import { Stages } from '@/components/blocks/sections/Stages/Stages';
import { CardRates } from '@/components/servicesBlocks/CardRates';
import Head from 'next/head';
import { useEffect } from 'react';
import { usePageDateStore } from '@/store/usePageDataStore';
import { AUDIT_URL } from '@/helpers/apiRequests';
import { Feedback } from '@/components/newDesign/Feedback';
import { WorksList } from '@/components/newDesign/WorksList';

const UxAuditPage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
      content: state.content,
      fetchData: state.fetchData,
    }))
    useEffect(() => {
      fetchData(AUDIT_URL, 'audit')
    }, [fetchData]);
  if(!content?.audit) return  null

  return (
    <>
      <Head>
        <title>{content.audit.meta.title}</title>
        <meta name="description" content={content.audit.meta.description} />
      </Head>

      <Hero
        specificClass={'audit-page'}
        title={content.audit.hero.title}
        description={content.audit.hero.description}
      />
      <Advantages
        specificClass={'audit-page'}
        left={{
          type: 'image',
          text: content.audit.advantage_image.url,
          alt: content.audit.advantage_image.alt
        }
          // <Image
          //   className={styles['audit-page-img']}
          //   src={content.audit.advantage_image.url}
          //   alt={content.audit.advantage_image.alt}
          //   width={1920}
          //   height={1080}
          // />
          }
        right={content.audit.advantage_list}
      />
      <Stages specificClass={'audit-page'} list={content.audit.stages.stage_items} title={content.audit.stages.title}/>
      {/*<Stages specificClass={'audit-page'} list={test} title={content.audit.stages.title}/>*/}
      <CardRates content={content.audit.card_rates.reverse()} />
      {/*<NewWorksList*/}
      {/*  works={content.audit.works}*/}
      {/*  specificClass={'audit-page'}*/}
      {/*  writeBtn*/}
      {/*  moreBtn*/}
      {/*/>*/}
      <WorksList works={content.audit.works} dark moreBtn writeBtn />
      <Feedback />
    </>
  );
}

export default UxAuditPage;
