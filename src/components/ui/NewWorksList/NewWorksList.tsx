'use client'
import { FC } from 'react';
import cn from 'classnames';
import { MotionWork } from '@/components/ui/NewWork';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';
import { useModalStore } from '@/store/useModalStore';
import styles from './NewWorksList.module.scss';
import { IWork } from '@/types/IWork';
import Link from 'next/link';
interface INewWorksList {
  works: IWork[];
  specificClass: string;
  writeBtn?: boolean;
  moreBtn?: boolean
}

const slideUpVariant = {
  hidden: {
    y: '15%',
    scale: 0.95,
    opacity: 0
  },
  visible: {
    y: '0%',
    opacity: 1,
    scale: 1,
    transition: {
      easy: 'easyOut',
      duration: 0.7,
      scale: { duration: 0.5 },
      opacity: { duration: 0.35 }
    }
  }
};

const fadeInVariant = {
  hidden: {
    opacity: 0,
    y: '100%'
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      easy: 'easyIn',
      duration: 1.4,
      opacity: {
        duration: 0.7
      }
    }
  }
};

export const NewWorksList: FC<INewWorksList> = ({ works, specificClass, writeBtn, moreBtn = 'page'
}) => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <section className={cn(styles.section, styles[specificClass])}>
      <div className={cn(styles.list)}>
        {works && works.length > 0 ? (
          works.map(({ id, image, light, className, ...data }) => (
            <MotionWork
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariant}
              viewport={{ amount: 0.15, once: true }}
              key={id}
              className={cn(
                styles.item,
                { [styles['wide']]: works.length % 2 === 1 && works.length > 1 },
                { [styles['one']]: works.length === 1}

              )}
              light={light}
              image={image}
              {...data}
            />
          ))
        ) : (
          <div className="column">Ничего не найдено</div>
        )}
      </div>
      {(writeBtn || moreBtn) && (<motion.div
        className={styles.btnGroup}
        initial='hidden'
        whileInView='visible'
        variants={fadeInVariant}
        viewport={{ amount: 1, once: true }}
      >
        {writeBtn && (<Button className={styles.btn} onClick={toggleModal}>
          Написать нам
        </Button>)}
        {moreBtn && (<Link href={'/works'}>
          <Button className={styles.btn}>
            Смотреть все
          </Button>
        </Link>)}
      </motion.div>)}
    </section>
  );
};
