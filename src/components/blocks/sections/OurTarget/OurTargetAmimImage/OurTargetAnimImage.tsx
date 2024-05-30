import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import styles from '@/components/blocks/sections/OurTarget/our-target.module.scss';
import { FC } from 'react';

const imgAnimation = {
  hidden: {
    scale: .8,
  },
  visible: (custom: number) => ({
    scale: 1,
    transition: {
      delay: (custom - 1) * .2,
      ease: 'easeInOut',
      duration: .8,
    }
  })
}

const curtainAnimation = {
  hidden: {
    translate: `0% 0%`,
  },
  visible: (custom: number) => ({
    translate: `0% 101%`,
    transition: {
      delay: (custom - 1) * .3,
      ease: 'easeInOut',
    }
  })
}
interface IOurTargetAnimImage {
  width: number;
  height: number;
  imageSrc: StaticImageData;
  custom: number;
}
export const OurTargetAnimImage: FC<IOurTargetAnimImage> = ({width, height, imageSrc, custom}) => {

  return (
    <motion.div
      className={styles.item}
      variants={imgAnimation}
      custom={custom}
    >
      <Image
        width={width}
        height={height}
        className={styles.img}
        src={imageSrc}
        alt={''}
      />
      <motion.div className={styles.curtain} variants={curtainAnimation} custom={custom}></motion.div>
    </motion.div>
  )

}