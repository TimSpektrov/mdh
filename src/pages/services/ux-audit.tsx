import { NextPage } from 'next';
import { Hero } from 'src/components/blocks/sections/Hero';
import { Advantages } from 'src/components/blocks/sections/Advantages';
import Image from 'next/image';
import { Stages } from '@/components/blocks/sections/Stages/Stages';
import { CardRates } from '@/components/blocks/CardRates';
import styles from '@/components/blocks/sections/Advantages/advantages.module.scss'
import Head from 'next/head';
import { NewFooterFeedback } from 'src/components/ui/NewFooterFeedback';
import { NewWorksList } from '@/components/ui/NewWorksList';
import { useEffect } from 'react';
import { usePageDateStore } from '@/store/usePageDataStore';
import { AUDIT_URL } from '@/helpers/apiRequests';

const UxAuditPage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
      content: state.content,
      fetchData: state.fetchData,
    }))
    useEffect(() => {
      fetchData(AUDIT_URL)
    }, []);

  if(!content) return  null
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>

      <Hero
        specificClass={'audit-page'}
        title={content.hero.title}
        description={content.hero.description}
      />
      <Advantages
        specificClass={'audit-page'}
        left={(
          <Image
            className={styles['audit-page-img']}
            src={content.advantage_image.url}
            alt={content.advantage_image.alt}
            width={1920}
            height={1080}
          />)}
        right={content.advantage_list}
      />
      <Stages specificClass={'audit-page'} list={content.stages.stage_items} title={content.stages.title}/>
      <CardRates content={content.card_rates} />
      <NewWorksList
        works={content.works}
        specificClass={'audit-page'}
        writeBtn
        moreBtn
      />
      <NewFooterFeedback />
    </> 
  );
}

export default UxAuditPage;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       content: data.services_pages['design-promo-materials']
//     },
//   }
// }
