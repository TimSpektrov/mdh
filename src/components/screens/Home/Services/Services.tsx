import { FC } from 'react';
import { ServicesProps } from '.';
import cn from 'classnames'
import { Title, Text } from '@/components/ui/Typography'
import Link from 'next/link';
import { motion } from 'framer-motion';

import style from './Services.module.scss';
import { addNbspParse } from '@/helpers';

const containerVariant = {
  hidden: {
    y: '15%',
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: .7,
      delay: custom * 0.5,
      y: { duration: .3 },
    }
  })
}

const textVariant = {
  hidden: {
    opacity: 0
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: .3
    }
  })
}

const titleVariant = {
  hidden: {
    y: '100%'
  },
  visible: (custom: number) => ({
    y: '0%',
    transition: {
      delay: custom * 0.5,
      duration: .7
    }
  })
}

const lineVariant = {
  hidden: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
  },
  visible: (custom: number) => ({
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      delay: custom * 0.5,
      duration: .7,
    }
  })
}

export const Services: FC<ServicesProps> = ({ services }) => {
  const sortServices  = services.sort((a,b) => a.id - b.id)
  return (
    <section className={style.wrapper}>
      <div className={style.list}>
        {services && services.length > 0 && services.map(({ id, title, description, slug, isPublic }) => (
          <motion.div
            className={style.service}
            key={id}
            initial='hidden'
            animate='animate'
            whileInView='visible'
            variants={containerVariant}
            custom={1}
            viewport={{ amount: .2, once: true, margin: '20%' }}
          >
            <Title variant='h3' className={style.title}>
              <motion.span
                variants={titleVariant}
                custom={1}
              >{title}</motion.span>
              {isPublic &&
                <motion.span
                  variants={lineVariant}
                  className={cn(style.line, style.lineArrow)}
                  draggable
                  custom={2.4}
                />
              }
            </Title>
            <Text className={style.desc}>
              <motion.span
                variants={textVariant}
                custom={1.7}
              >{addNbspParse(description)}</motion.span>
            </Text>
            {isPublic &&
              <Link href={`/services/${slug}`} legacyBehavior passHref>
                <motion.a
                  className={cn(style.link, 'link')}
                  variants={textVariant}
                  custom={2.2}
                >Подробнее</motion.a>
              </Link>
            }
          </motion.div>
        ))}
      </div>
    </section>
  );
};
