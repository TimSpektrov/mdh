import { FC } from 'react';
import { WorksListProps } from './WorksList.props';
import cn from 'classnames';
import { MotionWork } from '@/components/newDesign/Work';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';
import { useModalStore } from '@/store/useModalStore';

import style from './WorksList.module.scss';
import Link from 'next/link';
import { bigItemWork } from '@/helpers';

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

export const WorksList: FC<WorksListProps> = ({
  works,
  dark,
  moreBtn,
  writeBtn
}) => {
  const toggleModal = useModalStore((state) => state.toggleModal);
  const bigItem = bigItemWork(works.length)
  return (
    <section className={cn(style.section, dark && style.dark)}>
      <div className={cn(style.list)}>
        {works && works.length > 0 ? (
          works.map(({ id, image, light, className, ...data }, index) => (
            <MotionWork
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariant}
              viewport={{ amount: 0.15, once: true }}
              key={id}
              className={cn(
                style.item,
                { [style['big']]: index === bigItem },
                { [style['after-big']]: index > bigItem}

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
        className={style.btnGroup}
        initial='hidden'
        whileInView='visible'
        variants={fadeInVariant}
        viewport={{ amount: 1, once: true }}
      >
        {writeBtn && (<Button className={style.btn} onClick={toggleModal}>
          Написать нам
        </Button>)}
        {moreBtn && (<Link href={'/works'}>
          <Button className={style.btn}>
            Смотреть все
          </Button>
        </Link>)}
      </motion.div>)}
    </section>
  );
};
