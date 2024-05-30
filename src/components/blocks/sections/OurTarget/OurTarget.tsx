import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './our-target.module.scss';
import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.jpg'
import img3 from './assets/images/3.jpg'
import img4 from './assets/images/4.jpg'
import img5 from './assets/images/5.jpg'
import img6 from './assets/images/6.jpg'
import img8 from './assets/images/8.jpg'
import img7 from './assets/images/7.jpg'
import img9 from './assets/images/9.jpg'
import img10 from './assets/images/10.jpg'
import img11 from './assets/images/11.jpg'
import img12 from './assets/images/12.jpg'
import img13 from './assets/images/13.jpg'
import img14 from './assets/images/14.jpg'
import img15 from './assets/images/15.jpg'
import img16 from './assets/images/16.jpg'
import img17 from './assets/images/17.jpg'
import img18 from './assets/images/18.jpg'
import { NewTypography } from '@/components/ui/NewTypography';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { OurTargetAnimImage } from '@/components/blocks/sections/OurTarget/OurTargetAmimImage/OurTargetAnimImage';
import { springOurTarget } from '@/helpers/animation';
import { useParallax } from '@/hooks/useParalax';

interface IOurTarget {
  title: string;
}

export const OurTarget:FC<IOurTarget> = ({title}) => {
  const initWidth = window.innerWidth <1200;
  const [isMobile, setIsMobile] = useState(initWidth)
  const ref = useRef<HTMLDivElement>(null);
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    primaryMobY,
    onMouseMoveHandler,
    onMouseLeaveHandler
  } = useParallax(ref);

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end start']
  });
  const scrollY = useSpring(scrollYProgress, springOurTarget);
  const yPosition = useTransform(scrollY, [1, 0], ['-20%', '20%']);

  useEffect(() => {
    const getWindow = () => {
      setIsMobile(window.innerWidth < 1200)
      console.log(window.innerWidth, window.innerWidth < 1200);
    }
    window.addEventListener('resize', getWindow)

    return () => window.removeEventListener('resize', getWindow)
  }, []);

  return (
    <motion.section
      className={styles.section}
      ref={ref}
    >
      <motion.div
        className={styles.parallax}
        style={{
          x: secondaryX,
          y: isMobile ? primaryMobY : secondaryY,
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{
          amount: isMobile ? .13 : 0.25,
          once: true,
        }}
        // animate={imgAnimation}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div
          className={styles.left}
          // style={{translate: `${x}px ${y}px`}}
        >
          <OurTargetAnimImage imageSrc={img1} custom={2} width={img1.width} height={img1.height} />
          <OurTargetAnimImage imageSrc={img3} custom={1} width={img3.width} height={img3.height}/>
          <OurTargetAnimImage imageSrc={img2} custom={1} width={img2.width} height={img2.height}/>
          <OurTargetAnimImage imageSrc={img4} custom={2} width={img4.width} height={img4.height}/>
          <div></div>
          <OurTargetAnimImage imageSrc={img5} custom={2} width={img5.width} height={img5.height}/>
        </div>
        <div className={styles.center}>
          <motion.div
            className={styles['center-container']}
          >
            <OurTargetAnimImage imageSrc={img15} custom={1} width={img15.width} height={img15.height}/>
            <OurTargetAnimImage imageSrc={img16} custom={1} width={img16.width} height={img16.height}/>
            <OurTargetAnimImage imageSrc={img17} custom={1} width={img17.width} height={img17.height}/>
            <OurTargetAnimImage imageSrc={img18} custom={1} width={img18.width} height={img18.height}/>
            <OurTargetAnimImage imageSrc={img6} custom={1} width={img6.width} height={img6.height}/>
            <OurTargetAnimImage imageSrc={img8} custom={1} width={img8.width} height={img8.height}/>
          </motion.div>
          <motion.div className={styles['mobile-container']} >
            <OurTargetAnimImage imageSrc={img8} custom={2} width={img8.width} height={img8.height}/>
            <OurTargetAnimImage imageSrc={img1} custom={2} width={img1.width} height={img1.height}/>
            <OurTargetAnimImage imageSrc={img2} custom={1} width={img2.width} height={img2.height}/>
            <OurTargetAnimImage imageSrc={img6} custom={1} width={img6.width} height={img6.height}/>
            <OurTargetAnimImage imageSrc={img4} custom={2} width={img4.width} height={img4.height}/>
            <OurTargetAnimImage imageSrc={img11} custom={1} width={img11.width} height={img11.height}/>
          </motion.div>
          <motion.div
            className={styles['text-container']}
            style={{
              x: isMobile? 0 : primaryX,
              y: isMobile? 0 : primaryY,
            }}
          >
            <NewTypography text={title} variant={'h2'} tag={'h2'} />
          </motion.div>
          <motion.div className={styles['mobile-container']} >
            <OurTargetAnimImage imageSrc={img7} custom={1} width={img7.width} height={img7.height}/>
            <OurTargetAnimImage imageSrc={img5} custom={2} width={img5.width} height={img5.height}/>
            <OurTargetAnimImage imageSrc={img12} custom={1} width={img12.width} height={img12.height}/>
            <OurTargetAnimImage imageSrc={img9} custom={1} width={img9.width} height={img9.height}/>
            <OurTargetAnimImage imageSrc={img13} custom={2} width={img13.width} height={img13.height}/>
            <OurTargetAnimImage imageSrc={img14} custom={1} width={img14.width} height={img14.height}/>
          </motion.div>
          <motion.div
            className={styles['center-container']}
          >
            <OurTargetAnimImage imageSrc={img7} custom={2} width={img7.width} height={img7.height}/>
            <OurTargetAnimImage imageSrc={img9} custom={2} width={img9.width} height={img9.height}/>
            <OurTargetAnimImage imageSrc={img15} custom={1} width={img15.width} height={img15.height}/>
            <OurTargetAnimImage imageSrc={img16} custom={1} width={img16.width} height={img16.height}/>
            <OurTargetAnimImage imageSrc={img17} custom={1} width={img17.width} height={img17.height}/>
            <OurTargetAnimImage imageSrc={img18} custom={1} width={img18.width} height={img18.height}/>
          </motion.div>
        </div>
        <motion.div
          className={styles.right}
        >
          <OurTargetAnimImage imageSrc={img10} custom={2} width={img10.width} height={img10.height}/>
          <OurTargetAnimImage imageSrc={img11} custom={1} width={img11.width} height={img11.height}/>
          <OurTargetAnimImage imageSrc={img12} custom={1} width={img12.width} height={img12.height}/>
          <OurTargetAnimImage imageSrc={img13} custom={2} width={img13.width} height={img13.height}/>
          <OurTargetAnimImage imageSrc={img14} custom={1} width={img14.width} height={img14.height}/>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}