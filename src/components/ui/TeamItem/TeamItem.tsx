import { FC } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '@/components/servicesBlocks/Team/team.module.scss';
import { isMobile } from 'react-device-detect';

interface ITeamItem {
  index: number;
  length: number;
  title: string;
  scrollProgress: MotionValue;
  dataOffset?: any;
}

function useTransformX(
  value: MotionValue<number>,
  distance: number,
  index: number,
  length: number
) {
  const distVal: number = ((length - 1) / 2 - index) * -distance;
  return useTransform(value, [.5, .9], [`${distVal}%`, '0%']);
}
function useTransformY(
  value: MotionValue<number>,
  distance: number,
  index: number,
) {
  const distVal: number = (index) * distance;
  return useTransform(value, [.5, .9], [`${distVal}%`, '0%']);
}

export const TeamItem: FC<ITeamItem> = ({
  index,
  length,
  title,
  scrollProgress,
}) => {
  const x = useTransformX(scrollProgress, 63, index, length);
  const y = useTransformY(scrollProgress, 63, index);
  const opacity = useTransform(scrollProgress, [.899, .9], [1, 0])

  return (
    <motion.div key={index} className={styles.card} style={{ x: isMobile ? '0%' : x, opacity, y: isMobile ? y : '0%' }}>
      <motion.div className={styles.label}>{title}</motion.div>
      <div className={styles.img}>
        <motion.svg
          viewBox="0 0 444 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.circle}
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
        <motion.svg
          viewBox="0 0 444 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.orange}
          style={{animationDelay: `${-2.5 / length * index}s`}}
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
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};


