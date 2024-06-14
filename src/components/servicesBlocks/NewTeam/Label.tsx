import { FC } from 'react';
import cn from 'classnames';
import styles from '@/components/servicesBlocks/NewTeam/new-team.module.scss';
import { useTransformX, useTransformY } from '@/helpers/TeamHook';
import {
  motion,
  MotionValue,
  AnimatePresence
} from 'framer-motion';

interface ILabel {
  title: string;
  index: number;
  length: number;
  scrollProgress: MotionValue;
  isMobile: boolean;
  isAnimEnd: boolean;
}
export const Label: FC<ILabel> = ({title, index, scrollProgress, isMobile, length, isAnimEnd}) => {
  const x = useTransformX(scrollProgress, 63, index, length, isMobile);
  const y = useTransformY(scrollProgress, 63, index, isMobile);
  return (
    <motion.div
      className={cn(styles.item, styles['item-label'])}
      style={{x,y, position: index === 0 ? 'relative' : 'absolute'}}
    >
      <AnimatePresence>
        <motion.div
          className={styles.label}
          initial={{ color: 'rgba(0,0,0,0)'}}
          animate={{ color: 'rgba(0,0,0,1)'}}
          exit={{ color: 'rgba(0,0,0,0)', display: 'none'}}
          transition={{ duration: 0.7 }}
          key={(index === length -1) && isAnimEnd ? 'Команда вашего продукта' : title}
        >
          {(index === length -1) && isAnimEnd ? 'Команда вашего продукта' : title}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}