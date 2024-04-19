import { FC, useRef, useEffect } from 'react';
import { WorksProps } from '.';
import Head from 'next/head';
import { Hero } from './Hero';
import { WorksList } from '@/components/ui/WorksList';

import style from './Works.module.scss';
import { Feedback } from '@/components/ui/Feedback';
import { HorisontalScrollFilter } from '@/components/ui/HorisontalScrollFilter';
import { useSearchParams } from 'next/navigation';
import { IWork } from '@/types/IWork';
import { scroll } from 'framer-motion';
import { useFilterStore } from '@/store/useFilterStore';

interface IAxisScrollInfo {
  current: number;
  offset: number[];
  progress: number;
  scrollLength: number;
  velocity: number;
  targetOffset: number;
  targetLength: number;
  containerLength: number;
  interpolatorOffsets?: number[];
  interpolate?: (v: number) => number;
}

interface IScrollInfo {
  time: number;
  x: IAxisScrollInfo;
  y: IAxisScrollInfo;
}

interface IScrollOptions {
  container?: HTMLElement;
  target?: Element;
  axis?: "x" | "y";
  smooth?: number;
}

export const Works: FC<WorksProps> = (props) => {
  const filterRef = useRef<any>(null);
  const searchParam = useSearchParams();
  const [openFilter, closeFilter, setFilterPosition] = useFilterStore(
    (state) => [state.openFilter, state.closeFilter, state.setFilterPosition]
  );

  const works: IWork[] = [];
  props.works.filter((el, ind) => {
    el?.tags?.filter((tag) => {
      if (searchParam.get('tag') === tag.name) {
        works.push(el);
      }
      return false;
    });
  });

  useEffect(() => {
    scroll(
      (progress) => {
        const targetOffset:number = progress.y.targetOffset;
        setFilterPosition(targetOffset);
        progress.y.current > targetOffset
          ? openFilter()
          : closeFilter();
      },
      { target: filterRef.current }
    );
  }, [closeFilter, openFilter, setFilterPosition]);

  return (
    <>
      <Head>
        <title>Наши работы</title>
        <meta name="description" content="Описание страницы «Наши работы»" />
      </Head>
      <Hero />
      <div ref={filterRef}>
        <HorisontalScrollFilter variant="light" />
      </div>
      <WorksList
        works={searchParam.get('tag') === null ? props.works : works}
        wrapClass={style.works}
        itemClass={style.worksItem}
      />
      <Feedback />
    </>
  );
};
