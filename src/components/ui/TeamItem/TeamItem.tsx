import { FC } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '@/components/servicesBlocks/Team/team.module.scss';

interface ITeamItem {
  index: number;
  length: number;
  title: string;
  scrollProgress?: any;
  dataOffset?: any;
}

function useParallax(
  value: MotionValue<number>,
  distance: number,
  index: number,
  length: number
) {
  const distVal: number = ((length - 1) / 2 - index) * -distance;

  return useTransform(value, [0.5, 1], [`${distVal}%`, '0%']);
}

// const useRotate = (value: MotionValue<number>, index: number, length: number) => {
//
// // формула
//   return useTransform(value, [0.5, 1], [0, 1]);
// }

export const TeamItem: FC<ITeamItem> = ({
                                      index,
                                      length,
                                      title,
                                      scrollProgress
                                    }) => {
  const x = useParallax(scrollProgress, 63, index, length);

  // const rotate = useRotate(scrollProgress, index, length);
  // const opacity = useOpacity(scrollProgress, 63, index, length);

  return (
    <motion.div key={index} className={styles.card} style={{ x }}>
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


