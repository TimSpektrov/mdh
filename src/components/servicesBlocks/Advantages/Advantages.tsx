import styles from './advantages.module.scss'
import cn from 'classnames'
import { AdvantagesList, TAdvantagesItem } from 'src/components/servicesBlocks/Advantages/AdvantagesList';
import { FC } from 'react';
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect';
import { AdvantageLeft, IAdvantagesLeft } from '@/components/servicesBlocks/Advantages/AdvantageLeft';

interface IAdvantages {
  left: IAdvantagesLeft;
  right: TAdvantagesItem[];
  specificClass?: string;
}

const fadeInVariant = {
  hidden: {
    opacity: 0,
    y: '30%'
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: '0%',
    transition: {
      easy: 'easyIn',
      duration: 1,
      delay: custom * .4,
      opacity: {
        duration: 0.4
      }
    }
  })
};

export const Advantages: FC<IAdvantages> = ({ specificClass = 'page', left, right }) => {
  let custom= 0;
  if (isMobile) {
   switch (specificClass) {
     case 'audit-page':
     case 'redesign-page':
       custom = 4;
       break;
     case 'promo-materials-page':
       custom = 5;
       break;
     default:
       custom = 0;
   }
  }

  return (
    <motion.section
      className={cn(styles.advantages, styles[specificClass])}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.div
        variants={fadeInVariant}
        custom={custom}
        className={cn(styles.advantages__container, 'container')}
      >
        <AdvantageLeft type={left.type} text={left.text} alt={left.alt} />
        <AdvantagesList list={right} specificClass={specificClass} />
      </motion.div>
    </motion.section>
  )
}