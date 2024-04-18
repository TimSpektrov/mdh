import { FC, useRef, useState, useEffect } from 'react'
import { GalleryBlockProps } from '.';
import Image from "next/image";
import cn from 'classnames';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

import style from './GalleryBlock.module.scss'


const GalleryBlock: FC<GalleryBlockProps> = ({ variant, direction, images }) => {

  const [smallViewport, setSmallViewport] = useState<boolean>(true)
  const refVertical = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({layoutEffect: false, target: refVertical, offset: ["start 80%", "end end"] });
  const spring = { mass: 0.4, stiffness: 200, damping: 40, restDelta: .001, restSpeed: 20 }
  const scrollY = useSpring(scrollYProgress, spring);

  const y1 = useTransform(scrollY, [1, 0], ['-30%', '30%']);
  const y2 = useTransform(scrollY, [1, 0], ['100%', '0%']);
  const y3 = useTransform(scrollY, [1, 0], ['-20%', '30%']);
  const y4 = useTransform(scrollY, [1, 0], ['-10%', '10%']);
  const y5 = useTransform(scrollY, [1, 0], ['-50%', '50%']);

  const getIndex = (i: number) => {
    switch ((i + 1) % 6) {
      case 1:
        return smallViewport ? { y: y1 } : { y: y3 }
      case 2:
        return smallViewport ? { y: y2 } : { y: y4 }
      case 3:
        return smallViewport ? { y: y1 } : { y: y5 }
      case 4:
        return smallViewport ? { y: y2 } : { y: y3 }
      case 5:
        return smallViewport ? { y: y1 } : { y: y4 }
      case 0:
        return smallViewport ? { y: y2 } : { y: y5 }
      default:
        break;
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 575) {
        setSmallViewport(false)
      } else {
        setSmallViewport(true)
      }
    };

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [smallViewport]);

  const classes = cn(
    style.wrap,
    variant ? style[variant] : style.dark,
    direction ? style[direction] : style.vertical
  )

  if (direction === 'vertical') {
    return (
      <section className={classes} ref={refVertical}>
        {images && images.map((item, index) => {
          return (
            <motion.div className={style.image} style={getIndex(index)} key={item.image + index}>
              <Image src={item.image} alt={item.alt ?? ''} width={441} height={908} quality={100} />
            </motion.div>
          )
        })}
      </section>
    )
  } else {

    return (
      <ScrollContainer className={classes} component={'section'} mouseScroll={{ overscroll: true }}>
        <div className={style.track} style={{ gridTemplateColumns: `repeat(${images.length}, auto)` }}>
          {images && images.map((item, index) => (
            <div className={style.image} key={item.image + index}>
              <Image src={item.image} alt={item.alt ?? ''} width={441} height={908} quality={100} />
            </div>
          ))}
        </div>
      </ScrollContainer>
    )
  }
}

export default GalleryBlock;
