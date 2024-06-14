import { FC, useEffect, useRef, useState } from 'react';
import styles from './new-team.module.scss'
import { NewTypography } from '@/components/ui/NewTypography';
import { Circle } from '@/components/servicesBlocks/NewTeam/Circle';
import {
  motion,
  useScroll,
  useTransform,
  Variants
} from 'framer-motion';
import { Label } from '@/components/servicesBlocks/NewTeam/Label';
import cn from 'classnames';
import { useYPosition } from '@/helpers/TeamHook';
interface INewTeam {
  list: string[];
  title?: string;
}

const itemVariants: Variants = {
  show: (custom: number) => ({
    opacity: 1,
    translate: '0 0',
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

export const NewTeam: FC<INewTeam> = ({list, title}) => {
  const [isMobile, setIsMobile] = useState(true)
  const [isAnimEnd, setIsAnimEnd] = useState(false)
  const length = list.length
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end end']
  });
  const y = useYPosition(scrollYProgress)
  const lastOpacity = useTransform(scrollYProgress, [0, 0.89, 0.9], [0, 0, 1]);
  useEffect(() => {
    const isMobileWindow = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
    }

    isMobileWindow()
    window.addEventListener('resize', isMobileWindow)
    return () => window.removeEventListener('resize', isMobileWindow)
  }, []);

  useEffect(() => {
    const scrollPos = () => {
      setIsAnimEnd(lastOpacity.get() >= 1);
    };
    window.addEventListener('scroll', scrollPos);

    return () => window.removeEventListener('scroll', scrollPos);
  }, []);
  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      whileInView="visible"
    >
     <motion.div
       className={styles['sticky-container']}
       style={{ y, scrollBehavior: "smooth" }}
     >
       {title && <NewTypography text={title} variant={'h2'} tag={'h2'} />}
       <div className={styles.container}>
         <div className={styles['label-container']}>
           {length > 0 && list.map((title, index) => (
             <Label isAnimEnd={isAnimEnd} title={title} index={index} length={length} key={`label-${index}`} scrollProgress={scrollYProgress} isMobile={isMobile}/>
           ))}
         </div>
         <motion.div className={styles['circles-container']} animate={isAnimEnd ? 'show' : 'hide'} >
           {length > 0 && list.map((_, index) => (
             <Circle isMobile={isMobile} key={`white-${index}`} type={'white'} index={index} length={length} scrollProgress={scrollYProgress} />
           ))}
           {length > 0 && list.map((_, index) => (
             <Circle isMobile={isMobile} key={`orange-${index}`} type={'orange'} parts={length} length={length} index={index} scrollProgress={scrollYProgress} />
           ))}
           <div className={styles['finish-labels-container']}>
             {list.length > 0 &&
               list.map((title, index) => (
                 <motion.div
                   className={cn(styles['finish-labels'])}
                   key={index}
                   variants={itemVariants}
                   custom={length - index - 1}
                 >
                   <Label
                     isAnimEnd={false}
                     title={title}
                     index={0}
                     length={0}
                     key={`last-label-${index}`}
                     scrollProgress={scrollYProgress} isMobile={false}/>
                 </motion.div>
               ))}
           </div>
         </motion.div>

       </div>
     </motion.div>
    </motion.section>



  )
}