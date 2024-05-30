import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styles from './team.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';
import cn from 'classnames';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  Variants
} from 'framer-motion';
import { TeamItem } from '@/components/ui/TeamItem/TeamItem';
import { isMobile } from 'react-device-detect';

interface ITeam {
  title?: string;
  list: string[];
}

const itemVariants: Variants = {
  show: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: 0.7 + custom * 0.35,
      duration: 0.7
    }
  }),
  hide: {
    opacity: 0
    // transition: {
    //   duration: 0.7,
    //   delayChildren: 0.3,
    //   staggerChildren: 0.1
    // }
  }
};

export const Team: FC<ITeam> = ({ title, list }) => {
  const length = list.length;
  const ref = useRef<HTMLDivElement>(null);
  const [yPos, setYPos] = useState<MotionValue<string>>();
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end end']
  });
  const spring = {
    mass: 0.3,
    stiffness: 190,
    damping: 28,
    restDelta: 0.001,
    restSpeed: 20
  };
  const scrollY = useSpring(scrollYProgress, spring);

  const sectionDesktopPosition = useTransform(
    scrollY,
    [0, 0.33, 1],
    ['0', '0', '200%']
  );
  const lastOpacity = useTransform(scrollYProgress, [0, 0.89, 0.9], [0, 0, 1]);
  const [isDown, setIsDown] = useState(false);
  useEffect(() => {
    const scrollPos = () => {
      console.log(isMobile);
      setIsDown(lastOpacity.get() >= 1);
    };
    window.addEventListener('scroll', scrollPos);

    return () => window.removeEventListener('scroll', scrollPos);
  }, [lastOpacity]);

  useEffect(() => {
    setYPos(sectionDesktopPosition);
  }, [sectionDesktopPosition]);
  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className={styles.inner} style={{ y: yPos }}>
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
          <motion.div
            className={styles['card-last']}
            animate={isDown ? 'show' : 'hide'}
          >
            <motion.div
              className={styles['label-last']}
              style={{ opacity: lastOpacity }}
            >
              Команда вашего продукта
            </motion.div>
            <motion.svg
              style={{ opacity: lastOpacity }}
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
            <motion.div className={styles['finish-labels-container']}>
              {list.length > 0 &&
                list.map((label, index) => (
                  <motion.div
                    className={cn(styles['finish-labels'])}
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    // style={{
                    //   opacity: lastOpacity,
                    // }}
                  >
                    {label}
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
