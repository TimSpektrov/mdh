import { FC, useEffect, useState } from 'react';
import { SliderBlockProps } from '.';
import cn from 'classnames';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

import style from './SliderBlock.module.scss';

export const SliderBlock: FC<SliderBlockProps> = ({ variant, images }) => {
  const [slideWidth, setSlideWidth] = useState<string>('');

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setSlideWidth('85vw');
      } else if (window.innerWidth >= 768 && window.innerWidth < 960) {
        setSlideWidth('72vw');
      } else if (window.innerWidth >= 960 && window.innerWidth < 1199) {
        setSlideWidth('767px');
      } else if (window.innerWidth >= 1200 && window.innerWidth < 1399) {
        setSlideWidth('57.5vw');
      } else if (window.innerWidth >= 1400) {
        setSlideWidth('1227px');
      } else {
        setSlideWidth('90vw');
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <ScrollContainer
      className={style.wrap}
      component={'section'}
      mouseScroll={{ overscroll: true }}
    >
      <div
        className={cn(style.sliderTrack, style[variant])}
        style={{
          gridTemplateColumns: `repeat(${images?.length}, ${slideWidth})`
        }}
      >
        {images &&
          images.map((image, index) => {
            return (
              <div className={style.sliderItem} key={index}>
                <Image
                  src={`${image.image}`}
                  alt={`${image.alt}`}
                  width={1227}
                  height={600}
                  quality={100}
                />
              </div>
            );
          })}
      </div>
    </ScrollContainer>
  );
};
