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
import data from '@json/data.json'

const DesignPromoMaterials: NextPage<any> = () => {
  const content = data.services_pages['design-promo-materials']
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <Hero title={content.hero.title} description={content.hero.description} specificClass={'promo-materials-page'} />
      <Advantages
        left={(
          <Image
            width={1920}
            height={1080}
            className={styles['audit-page-img']}
            src={content.advantages.image.url}
            alt={content.advantages.image.alt}
          />
       )}
        right={content.advantages.items}
        specificClass={'promo-materials-page'}
      />
      <WorksList
        list={content.workList.items}
        title={content.workList.title}
        specificClass={'promo-materials-page'}
      />
      <Callback className={style.callback} specificClass={'promo-materials-page'}/>
      <NewWorksList
        works={content.work.items}
        specificClass={'promo-materials-page'}
        writeBtn
        moreBtn
      />
      <NewFooterFeedback />
    </>
  )
}

export default DesignPromoMaterials;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       content: data.services_pages['design-promo-materials']
//     },
//   }
// }