import { FC } from 'react';
import { VacanciesListProps } from '.';
import style from './VacanciesList.module.scss';
import { VacanciesItem } from '../VacanciesItem';
import { Logo } from '@/components/ui';

export const VacanciesList: FC<VacanciesListProps> = ({ data }) => {
  return (
    <section className={style.wrapper}>
      <div className={style.list}>
        {data.map(({ desc, id,  short_desc, slug, title}) => (
          <VacanciesItem
            key={id}
            title={title}
            desc={desc}
            short_desc={short_desc}
            slug={slug}
          />
        ))}
      </div>
    </section>
  );
};
