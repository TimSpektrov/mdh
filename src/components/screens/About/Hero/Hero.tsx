import { FC } from 'react';
import { Title, Text } from '@/components/ui/Typography';
import cn from 'classnames';
import { motion } from 'framer-motion';
import style from './Hero.module.scss';
import { addNbspParse } from '@/helpers';

interface IHeroItem{
  id: number;
  title: string;
  description: string;
}
interface IHero {
  specificClass?: string;
  title: string;
  description: string;
  list?: IHeroItem[];
}

const groupVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: .7
    }
  }
};

const titleVariant = {
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: .9,
      ease: 'easeOut'
    }
  },
  hidden: {
    y: '100%',
    opacity: 0
  }
}

const subtitleVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .9,
      ease: 'easeInOut'
    }
  },
  hidden: {
    y: 20,
    opacity: 0
  }
}

const itemVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      ease: 'easeOut'
    }
  },
  hidden: {
    opacity: 0
  }
};

export const Hero: FC<IHero> = ({title, description, list = [], specificClass = 'page' }) => {
  return (
    <motion.section
      className={cn(style.wrapper, style[specificClass])}
      variants={groupVariants}
      initial='hidden'
      animate='visible'
    >
      <h1 className='invisible'>О нас</h1>
      <div className={style.heading}>
        <motion.h1 className={style.title} variants={titleVariant}>{addNbspParse(title)}</motion.h1>
        <motion.p className={style.subtitle} variants={subtitleVariant}>{addNbspParse(description)}</motion.p>
      </div>
      {list.length > 0 && (
        <div className={style.list + ' grid'}>
          {list.map(({title, description, id}) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className={cn(
                style.item,
                "column column--xl-4"
              )}
            >
              <Title variant='h3' color='light' className={style.name}>
                <div>{title}</div>
              </Title>
              <Text className={style.desc} tag='div'>
                <div>{description}</div>
              </Text>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};
