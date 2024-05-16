import { NextPage } from 'next';
import { Hero } from 'src/components/blocks/sections/Hero';
import { WorksList as WorksListSection } from '@/components/blocks/sections/WorksList/WorksList';
import { NewCallback } from '@/components/ui/NewCallback';
import { Advantages } from '@/components/blocks/sections/Advantages';
import Image from 'next/image';
import styles from '@/components/blocks/sections/Advantages/advantages.module.scss';
import Head from 'next/head';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { DESIGN_PROMO_MATERIALS_URL } from '@/helpers/apiRequests';
import { Feedback } from '@/components/newDesign/Feedback';
import { WorksList } from '@/components/newDesign/WorksList';

const DesignPromoMaterials: NextPage<any> = () => {
  // const content = data.services_pages.designPromo
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(DESIGN_PROMO_MATERIALS_URL, 'designPromo')
  }, []);

  if(!content?.designPromo) return  null
  return (
    <>
      <Head>
        <title>{content.designPromo.meta.title}</title>
        <meta name="description" content={content.designPromo.meta.description} />
      </Head>
      <Hero title={content.designPromo.hero.title} description={content.designPromo.hero.description} specificClass={'promo-materials-page'} />
      <Advantages
        left={(
          <Image
            width={1920}
            height={1080}
            className={styles['audit-page-img']}
            src={content.designPromo.advantages.image.url}
            alt={content.designPromo.advantages.image.alt}
          />
       )}
        right={content.designPromo.advantages.items}
        specificClass={'promo-materials-page'}
      />
        <WorksListSection
          list={content.designPromo.type_site.items}
          title={content.designPromo.type_site.title}
          specificClass={'promo-materials-page'}
        />
      <NewCallback specificClass={'promo-materials-page'}/>
      {/*<NewWorksList*/}
      {/*  works={content.designPromo.works}*/}
      {/*  specificClass={'promo-materials-page'}*/}
      {/*  writeBtn*/}
      {/*  moreBtn*/}
      {/*/>*/}
      <WorksList works={content.audit.works} dark moreBtn writeBtn />
      <Feedback />
    </>
  )
}

export default DesignPromoMaterials;
