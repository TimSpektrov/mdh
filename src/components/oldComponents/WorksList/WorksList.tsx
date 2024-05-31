import { FC } from 'react';
import { WorksListProps } from '.';
import cn from 'classnames';
import { MotionWork } from '@/components/oldComponents/Work';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';

import style from './WorksList.module.scss';
import { useRouter } from 'next/router';
import { IWork } from '@/types/IWork';
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
  wrapClass,
  dark
}) => {
  const toggleModal = useModalStore((state) => state.toggleModal);
  const pathName = usePathname();
  const route = useRouter()

  const sortWorks = works.sort((a: IWork, b: IWork) => +b.published - +a.published)
  const bigItem = bigItemWork(sortWorks.length)
  return (
    <section className={cn(style.works, dark && style.dark, wrapClass)}>
      <div className={cn(style.list, 'grid')}>
        {sortWorks && sortWorks.length > 0 ? (
          sortWorks.map(({ id, image, light, className, ...data }, index) => (
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
      <motion.div
        className={style.btnGroup}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ amount: 1, once: true }}
      >
        <>
          <Button className={style.btn} onClick={toggleModal}>
            Написать нам
          </Button>
          {pathName !== '/works' && (
            <Button className={style.btn} onClick={() => route.push('/works')}>
              Смотреть все
            </Button>
          )}
        </>

      </motion.div>
    </section>
  );
};
