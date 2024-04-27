import { FC, useRef } from 'react';
import styles from './our-target.module.scss';
import Image from 'next/image';
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
import { NewTypography } from '@/components/ui/NewTypography';
import { motion, useMotionValue } from 'framer-motion';
import { isMobile } from 'react-device-detect';

interface IOurTarget {
  title: string;
}

const imgAnimation = {
  hidden: {
    scale: .8,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: (custom - 1) * .2,
      ease: 'easeInOut',
    }
  })
}

export const OurTarget:FC<IOurTarget> = ({title}) => {
  const ref= useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const parallax = useTransform([x, y], ([x, y]) => ({
  //   x: x * 50,
  //   y: y * 50,
  // }));
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end start']
  // })

  // const translateY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])


  const handleClick = () => {
    // console.log(parallax.current)
  }
  return (
    <motion.section
      className={styles.section}
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: isMobile ? .5 : .8, once: true }}
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >

      <motion.div onClick={handleClick} className={styles.parallax} style={{
        // ...parallax,
      }}>
        <div className={styles.left}>
          <motion.div variants={imgAnimation} custom={3}>
            <Image
              width={1288}
              height={1988}
              className={styles.img}
              src={img1}
              alt={''}
            />
          </motion.div>
          <motion.div variants={imgAnimation} custom={1}>
          <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img3}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={4}>
          <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img2}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={2}>
          <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img4}
            alt={''}
          />
          </motion.div>
          <div></div>
          <motion.div variants={imgAnimation} custom={2}>
          <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img5}
            alt={''}
          />
          </motion.div>
        </div>
        <div className={styles.center}>
          <div className={styles['center-container']}>
            <motion.div variants={imgAnimation} custom={1}>
            <Image
              width={1656}
              height={1028}
              className={styles.img}
              src={img6}
              alt={''}
            />
            </motion.div>
            <motion.div variants={imgAnimation} custom={1}>
            <Image
              width={1656}
              height={1028}
              className={styles.img}
              src={img8}
              alt={''}
            />
            </motion.div>
          </div>
          <div className={styles['mobile-container']} >
            <motion.div variants={imgAnimation} custom={2}>
            <Image
              width={1656}
              height={1028}
              className={styles.img}
              src={img6}
              alt={''}
            />
            </motion.div>
            <motion.div variants={imgAnimation} custom={2}>
            <Image
              width={1288}
              height={1988}
              className={styles.img}
              src={img4}
              alt={''}
            />
            </motion.div>
            <motion.div variants={imgAnimation} custom={1}>
            <Image
              width={1288}
              height={1988}
              className={styles.img}
              src={img11}
              alt={''}
            />
            </motion.div>
          </div>
          <NewTypography text={title} variant={'h2'} tag={'h2'} />
          <div className={styles['mobile-container']} >
            <motion.div variants={imgAnimation} custom={1}>
              <Image
              width={1656}
              height={1028}
              className={styles.img}
              src={img8}
              alt={''}
            />
            </motion.div>
            <motion.div variants={imgAnimation} custom={2}>
              <Image
              width={1288}
              height={1988}
              className={styles.img}
              src={img5}
              alt={''}
            />
            </motion.div>
            <motion.div variants={imgAnimation} custom={1}>
              <Image
              width={1288}
              height={1988}
              className={styles.img}
              src={img12}
              alt={''}
            />
            </motion.div>
          </div>
          <div className={styles['center-container']}>
            <motion.div variants={imgAnimation} custom={2}>
              <Image
                width={1656}
                height={1028}
                className={styles.img}
                src={img7}
                alt={''}
              />
            </motion.div>
            <motion.div variants={imgAnimation} custom={2}>
              <Image
                width={1656}
                height={1028}
                className={styles.img}
                src={img9}
                alt={''}
              />
            </motion.div>
            </div>
        </div>
        <div className={styles.right}>
          <motion.div variants={imgAnimation} custom={2}>
            <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img10}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={4}>
            <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img11}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={1}>
            <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img12}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={3}>
            <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img13}
            alt={''}
          />
          </motion.div>
          <motion.div variants={imgAnimation} custom={1}>
            <Image
            width={1288}
            height={1988}
            className={styles.img}
            src={img14}
            alt={''}
          />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}