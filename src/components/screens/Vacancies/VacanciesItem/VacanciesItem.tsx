import { FC } from 'react';
import { VacanciesItemProps } from '.';
import cn from 'classnames';
import { Text, Title } from '@/components/ui/Typography';
import style from './VacanciesItem.module.scss';
import Link from 'next/link';

export const VacanciesItem: FC<VacanciesItemProps> = ({
  title,
  desc,
  slug,
  short_desc,
  className
}) => {
  const classes = cn(style.item, className);

  return (
    <div className={classes}>
      <Title className={style.title} variant="h3">
        <span>{title}</span>
        <span className={cn(style.line, slug && style.lineArrow)}></span>
      </Title>
      {short_desc ? (
        <Text className={style.desc}>{short_desc}</Text>
      ) : (
        <Text className={style.desc}>{desc}</Text>
      )}
      {slug && (
        <Link href={`/vacancies/${slug}`} className={style.link}>
          Подробнее
        </Link>
      )}
    </div>
  );
};
