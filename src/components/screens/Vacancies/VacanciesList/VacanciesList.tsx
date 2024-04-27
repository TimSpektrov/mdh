import { FC } from 'react';
import { VacanciesListProps } from '.';
import style from './VacanciesList.module.scss';
import { VacanciesItem } from '../VacanciesItem';
import { Logo } from '@/components/ui';

export const VacanciesList: FC<VacanciesListProps> = ({ data }) => {
  console.log(data);
  return (
    <section className={style.wrapper}>
      <div className={style.list}>
        {(data || []).map((vacancy) => (
          <VacanciesItem
            key={vacancy.id}
            title={vacancy.title}
            desc={vacancy.desc}
            short_desc={vacancy.short_desc}
            slug={vacancy.slug}
          />
        ))}
      </div>
    </section>
  );
};
