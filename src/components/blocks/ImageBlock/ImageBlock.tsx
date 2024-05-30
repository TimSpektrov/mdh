import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';

import style from './ImageBlock.module.scss';
import { IImageCase } from '@/components/screens/Case';

const ImageBlock: FC<IImageCase> = ({
  variant,
  reverse,
  image_url,
  image_alt,
  full
}) => {
  const [yPos, setYPos] = useState<MotionValue<string>>();

  const [ratio, setRatio] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end start']
  });
  const spring = {
    mass: 0.4,
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
    restSpeed: 20
  };
  const scrollY = useSpring(scrollYProgress, spring);
  const options = reverse ? ['-10%', '10%'] : ['10%', '-10%'];
  const yPosition = useTransform(scrollY, [1, 0], options);

  useEffect(() => {
    setYPos(yPosition);
    setRatio(window.devicePixelRatio);
  }, [yPosition]);

  const classes = cn(style.wrap, full && style.full, variant && style[variant]);

  return (
    <>
      {full ? (
        <div className={classes}>
            <Image
              src={image_url}
              alt={image_alt}
              width={1920 * ratio}
              height={1080 * ratio}
              quality={100}
            />
        </div>
      ) : (
        <section className={classes} ref={ref}>
          <motion.div className={style.image} style={{ y: yPos }}>
              <Image
                src={image_url}
                alt={image_alt}
                width={1258 * ratio}
                height={699 * ratio}
                quality={100}
              />
          </motion.div>
        </section>
      )}
    </>
  );
};

export default ImageBlock;
