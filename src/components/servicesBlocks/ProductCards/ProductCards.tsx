import { FC } from 'react';
import cn from 'classnames';
import styles from './product-cards.module.scss'
import { NewTypography } from '@/components/ui/NewTypography';
import { addNbspParse } from '@/helpers';
import Image from 'next/image';
interface IProductCards {
  title?: string;
  list: { // на макете list состоит 4 элементов, на практике хз сколько может быть
    title: string;
    description: string;
    img_desktop: string;
    img_mob?: string; // по заданию разные фото используются для мобилки и десктопа, в случае когда потребуется использовать одно и то же изображение в мобилку можно не грузить
    alt: string;
  }[]
  specificClass?: string;
}

export const ProductCards: FC<IProductCards> = ({title, list, specificClass = 'page'}) => {
  // console.log(list);
  return (
    <section className={cn(styles.section, styles[specificClass])}>
      {title && <NewTypography text={title} variant={'h2'} tag={'h2'}/>}
      <div className={cn(styles.container)}>
        {list.map(({title, description, img_mob,img_desktop, alt}, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.text} >
              <NewTypography text={title} variant={'h2'} tag={'h3'}/>
              <NewTypography text={description} variant={'big-p'} tag={'p'}/>
            </div>

            <Image src={img_desktop} alt={alt} className={styles['img-desktop']} height={500} width={1000}  />
            <Image src={img_mob || img_desktop} alt={'alt'} className={styles['img-mobile']} height={400} width={500} />
          </div>
        ))}
      </div>
    </section>
  )
}