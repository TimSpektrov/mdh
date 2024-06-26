import { FC } from 'react';
import styles from './work-items.module.scss'
import Image from 'next/image';
import cn from 'classnames';
import { addNbspParse } from '@/helpers';
import { NewTypography } from '@/components/ui/NewTypography';
export interface IWorkItem {
  id: number;
  title: string;
  description: string;
  image1?: string;
  image2?: string;
}
interface IWorkItems {
  list: IWorkItem[];
  specificClass?: string;
}
export const WorkItems: FC<IWorkItems> = ({list, specificClass = 'page'}) => {
  return (
    <div className={cn(styles.list, styles[specificClass])}>
      {list.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles['item-num']}>{index + 1}</div>
          <div className={styles['item-text']}>
            {item.title && <NewTypography text={item.title} variant={'h3'} tag={'h3'} />}
            {item.description && <NewTypography text={item.description} variant={'p'} tag={'p'} />}

            {/*{addNbspParse(item.title)}*/}
            {/*{addNbspParse(item.description)}*/}
          </div>
          {item.image1 && (
            <Image
              className={styles['img-1']}
              src={item.image1}
              width={900}
              height={1360}
              alt={''}
            />)}
          {item.image2 && (
            <Image
              className={styles['img-2']}
              src={item.image2}
              width={1920}
              height={1080}
              alt={''}
            />)}
        </div>
      ))}
    </div>
  )
}