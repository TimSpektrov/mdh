import { NextPage } from 'next';
import { Hero } from 'src/components/blocks/sections/Hero';
import { WorksList } from '@/components/blocks/sections/WorksList/WorksList';
import style from '@/components/screens/NoCode/NoCode.module.scss';
import { Callback } from '@/components/ui/Callback';
import { Advantages } from '@/components/blocks/sections/Advantages';
import Image from 'next/image';
import styles from '@/components/blocks/sections/Advantages/advantages.module.scss';
import Head from 'next/head';
import { NewFooterFeedback } from 'src/components/ui/NewFooterFeedback';
import { NewWorksList } from '@/components/ui/NewWorksList';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { DESIGN_PROMO_MATERIALS_URL } from '@/helpers/apiRequests';

const DesignPromoMaterials: NextPage<any> = () => {
  // const content = data.services_pages['design-promo-materials']
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(DESIGN_PROMO_MATERIALS_URL, 'design-promo-materials')
  }, []);

  console.log(content);
  if(!content || !content['design-promo-materials']) return  null
  return (
    <>
      <Head>
        <title>{content['design-promo-materials'].meta.title}</title>
        <meta name="description" content={content['design-promo-materials'].meta.description} />
      </Head>
      <Hero title={content['design-promo-materials'].hero.title} description={content['design-promo-materials'].hero.description} specificClass={'promo-materials-page'} />
      <Advantages
        left={(
          <Image
            width={1920}
            height={1080}
            className={styles['audit-page-img']}
            src={content['design-promo-materials'].advantages.image.url}
            alt={content['design-promo-materials'].advantages.image.alt}
          />
       )}
        right={content['design-promo-materials'].advantages.items}
        specificClass={'promo-materials-page'}
      />
        <WorksList
          list={content['design-promo-materials'].type_site.items}
          title={content['design-promo-materials'].type_site.title}
          specificClass={'promo-materials-page'}
        />
      <Callback className={style.callback} specificClass={'promo-materials-page'}/>
      <NewWorksList
        works={content['design-promo-materials'].works}
        specificClass={'promo-materials-page'}
        writeBtn
        moreBtn
      />
      <NewFooterFeedback />
    </>
  )
}

export default DesignPromoMaterials;
