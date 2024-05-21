import { FC, useRef, useEffect } from 'react';
import { WorksProps } from '.';
import Head from 'next/head';
import { Hero } from './Hero';
import { HorisontalScrollFilter } from '@/components/ui/HorisontalScrollFilter';
import { useSearchParams } from 'next/navigation';
import { IWork } from '@/types/IWork';
import { scroll } from 'framer-motion';
import { useFilterStore } from '@/store/useFilterStore';
import { Feedback } from '@/components/oldComponents/Feedback';
import { WorksList } from '@/components/oldComponents/WorksList';
import style from './Works.module.scss'

export const Works: FC<WorksProps> = (props) => {
  const filterRef = useRef<any>(null);
  const searchParam = useSearchParams();
  const [openFilter, closeFilter, setFilterPosition] = useFilterStore(
    (state) => [state.openFilter, state.closeFilter, state.setFilterPosition]
  );

  let works: IWork[] = [];

  if(searchParam.get('tag')) {
    props.works.filter((el) => {
      el?.tags?.filter((tag) => {
        if (searchParam.get('tag') === tag.name) {
          works.push(el);
        }
        return false;
      });
    });
  } else {
    works = [...props.works]
  }

  useEffect(() => {
    scroll(
      (info) => {
        const targetOffset = info.y.targetOffset;
        setFilterPosition(targetOffset);
        info.y.current > targetOffset
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
      {/*<NewWorksList*/}
      {/*  works={works}*/}
      {/*  specificClass={'works-page'}*/}
      {/*/>*/}
      <WorksList
        works={searchParam.get('tag') === null ? props.works : works}
        wrapClass={style.works}
        itemClass={style.worksItem}
      />
      <Feedback />
    </>
  );
};
