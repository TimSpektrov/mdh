import { FC } from 'react';
import { HorisontalScrollFilterProps } from '.';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import cn from 'classnames';
import { useSearchParams, useRouter } from 'next/navigation';
import { useFilterStore } from '@/store/useFilterStore';
import style from './HorisontalScrollFilter.module.scss';

import data from '@json/data.json';

export const HorisontalScrollFilter: FC<HorisontalScrollFilterProps> = ({
  variant,
  className
}) => {
  const [filterPosition] = useFilterStore((state) => [state.filterPosition]);
  const searchParam = useSearchParams();
  const route = useRouter();
  const tagsList: string[] = [];
  data.works.forEach(({ tags }) =>
    tags?.map(({ name }) => tagsList.push(name))
  );
  const tags = tagsList.filter((el, ind) => ind === tagsList.indexOf(el));
  return (
    <ScrollContainer
      component={'section'}
      mouseScroll={{ overscroll: false }}
      className={cn(
        style.wrap,
        variant ? style[variant] : style.light,
        className
      )}
    >
      <div className={style.track}>
        <div
          className={cn(
            style.item,
            searchParam.get('tag') === null && style.active
          )}
          onClick={() => {
            route.push('', { scroll: false });
            window.scrollTo({ top: filterPosition - 62, behavior: 'smooth' });
          }}
        >
          Все работы
        </div>
        {tags?.map((item) => (
          <div
            key={item}
            className={cn(
              style.item,
              searchParam.get('tag') === item && style.active
            )}
            onClick={() => {
              route.push(`?tag=${item}`, { scroll: false });
              window.scrollTo({ top: filterPosition - 62, behavior: 'smooth' });
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </ScrollContainer>
  );
};
