import {
  CSSProperties,
  FC,
  useRef,
} from 'react';
import styles from './team.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';
import cn from 'classnames';
import {
  motion, MotionValue,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { TeamItem } from '@/components/ui/TeamItem/TeamItem';

interface ITeam {
  title?: string;
  list: string[];
}
function useOpacity(
  value: MotionValue<number>,
  // distance: number,
  // index: number,
  // length: number
) {
  // const distVal: number = ((length - 1) / 2 - index) * -distance;

  return useTransform(value, [.99, 1], [0, 1]);
}

export const Team: FC<ITeam> = ({ title, list }) => {
  const length = list.length;
  const ref = useRef<HTMLElement>(null);

  // const itemAnimation = {
  //   hidden: {
  //     x: 0
  //   },
  //   visible: (custom: number) => ({
  //     x: `${((length - 1) / 2 - custom) * 100}%`,
  //     transition: {
  //       ease: 'linear',
  //       duration: 2.5,
  //       delay: 4.2
  //     }
  //   })
  // };
  // const opacityAnimation = {
  //   hidden: {
  //     opacity: 1
  //   },
  //   visible: {
  //     opacity: 0,
  //     transition: {
  //       delay: 6
  //     }
  //   }
  // };
  // const oldTitleAnimation = {
  //   hidden: {},
  //   visible: {
  //     color: 'rgba(0,0,0,0)',
  //     transition: {
  //       duration: 0.2,
  //       delay: 6.3
  //     }
  //   }
  // };
  // const newTitleAnimation = {
  //   hidden: {
  //     opacity: 0,
  //     width: '0',
  //     color: 'rgba(0,0,0,0)'
  //   },
  //   visible: {
  //     opacity: [0, 1, 1],
  //     width: ['0', 'fit-content', 'fit-content'],
  //     color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  //     transition: {
  //       duration: 0.5,
  //       delay: 6.3,
  //       times: [0, 0.6, 1]
  //     }
  //   }
  // };
  // const orangeAnimation = {
  //   hidden: (custom: number) => ({
  //     rotate: `${(360 / length) * custom + 90}deg`
  //   }),
  //   visible: (custom: number) => ({
  //     rotate: [
  //       `${(360 / length) * custom + 90}deg`,
  //       `${(360 / length) * custom + 450}deg`
  //     ],
  //     transition: {
  //       ease: 'linear',
  //       duration: 2.5,
  //       repeat: 2
  //     }
  //   })
  // };

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end end']
  });

  const opacity = useOpacity(scrollYProgress)
  const spring = {
    mass: 0.3,
    stiffness: 190,
    damping: 28,
    restDelta: 0.001,
    restSpeed: 20
  };
  const scrollY = useSpring(scrollYProgress, spring);
  const sectionPosition = useTransform(
    scrollY,
    [0, 0.5, 1],
    ['0%', '0%', '100%']
  );
  // const itemPosition = useTransform(scrollY, [0, 0.5, 1], ['0%', '0%', '100%']);

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true
      }}
    >
      <motion.div className={styles.inner} style={{ y: sectionPosition }}>
        {title && <NewTypography text={title} variant={'h2'} tag={'h2'} />}
        <div
          className={cn(styles.container)}
          style={{ '--length': length } as CSSProperties}
        >
          {list.length > 0 &&
            list.map((title, index) => {
              return (
                <TeamItem
                  title={title}
                  index={index}
                  length={list.length}
                  key={index}
                  scrollProgress={scrollYProgress}
                />
              );
            })}
        </div>
        <motion.div className={styles['card-last']} style={{opacity}}>
          <motion.div
            className={styles['label-last']}
            style={{
              opacity,
              transition: `opacity .5s ${.25}s`,
            }}
          >Команда вашего продукта</motion.div>
          <motion.svg
            viewBox="0 0 444 444"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['orange-last']}
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
          <div className={styles['finish-labels-container']}>
            {list.length > 0 &&
              list.map((label, index) => (
                <motion.div
                  className={styles['finish-labels']}
                  key={index}
                  style={{
                    opacity,
                    transition: `opacity .5s ${.25 * index + 1}s`,

                }}
                >{label}</motion.div>
              ))
            }
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
