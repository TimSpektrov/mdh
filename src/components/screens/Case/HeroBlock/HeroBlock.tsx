import { FC } from 'react'
import { HeroCskaBlockProps, HeroFitServiceBlockProps } from "./HeroBlock.props"
import Image from 'next/image';
import cn from "classnames"
import { motion } from "framer-motion"

import style from "./HeroBlock.module.scss"


export const HeroCskaBlock: FC<HeroCskaBlockProps> = ({ variant, background, imageBack, imageFront }) => {

  const classes = cn(
    style.wrap,
    variant && style[variant]
  )

  return (
    <section className={classes}>
      <div className={style.inner}>
        {background && <Image alt='' src={background} width={1920} height={1080} className={style.image} priority quality={100} />}
        <div className={style.flipContainer}>
          <div className={style.flipper}>
            {imageFront && <Image alt='' src={imageFront} width={1920} height={1080} className={style.flipFront} priority quality={100} />}
            {imageBack && <Image alt='' src={imageBack} width={1920} height={1080} className={style.flipBack} priority quality={100} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export const HeroFitServiceBlock: FC<HeroFitServiceBlockProps> = ({ autoImage, images }) => {
  return (
    <section className={style.fs_hero}>
      <motion.div className={style.fs_heroInner}>
        <motion.div
          className={style.fs_auto}
          animate={{ left: ["-100%", "5%", "5%", "100%"] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        >
          {autoImage && <Image src={autoImage} alt='' width={968} height={289} priority quality={100} />}
        </motion.div>


        <div className={style.fs_imageWrap}>
          {images?.[0].image && <Image src={images?.[0].image} alt='' fill priority quality={100} /> }
        </div>

        <motion.div
          className={style.fs_imageWrap}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2, delay: 2 }}
        >
          {images?.[1].image && <Image src={images?.[1].image} alt='' fill priority quality={100} />}
        </motion.div>

        <motion.div
          className={style.fs_imageWrap}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2, delay: 4 }}
        >
          {images?.[2].image && <Image src={images?.[2].image} alt='' priority fill quality={100} />}
        </motion.div>
      </motion.div>
    </section>
  )
}
