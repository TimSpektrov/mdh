import { FC } from 'react';
import styles from './new-team.module.scss';
import { MotionValue, useSpring, useTransform, motion} from 'framer-motion';
import cn from 'classnames';
import { useTransformX, useTransformY } from '@/helpers/TeamHook';

interface ICircle {
  type: 'orange' | 'white';
  parts?: number;
  length: number;
  index: number;
  scrollProgress: MotionValue;
  isMobile: boolean;
}

export const Circle: FC<ICircle> = ({type, parts, length, index, scrollProgress, isMobile}) => {
  const x = useTransformX(scrollProgress, 63, index, length, isMobile);
  const y = useTransformY(scrollProgress, 63, index, isMobile);

  switch (type) {
    case 'white':
      return (
        <motion.svg
          className={styles.circle}
          style={{x,y, position: 'absolute'}}
          viewBox="0 0 444 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="222"
            cy="222"
            r="219"
            stroke="#E4E3DD"
            strokeWidth="5"
            strokeMiterlimit="3.8637"
            strokeLinecap="round"
            strokeDasharray="1 19.54"
            fill="none"
          />
        </motion.svg>
      )
    case 'orange':
      return (
        <motion.svg
          className={cn(styles.circle, styles['orange-circle'])}
          style={{x, y, position: index === 0 ? 'relative' : 'absolute'}}
          viewBox="0 0 444 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="222"
            cy="222"
            r="219"
            stroke="#E2591C"
            strokeWidth="6"
            strokeMiterlimit="3.8637"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${parts ? (3.14 * 100 / parts) : '100%'}% ${(3.5 * 100)}%`}
            style={{animationDelay: `${-2.5 / length * index}s`}}
          />
        </motion.svg>
      )
    default:
      return (<div></div>)
  }

}